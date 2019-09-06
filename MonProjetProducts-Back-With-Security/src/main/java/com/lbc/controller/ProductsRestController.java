package com.lbc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lbc.domain.Product;
import com.lbc.repository.IProductsRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/products")

public class ProductsRestController {
	private IProductsRepository repo;

	public ProductsRestController(IProductsRepository repo) { // @Autowired n'est pas nécessaire depuis v4.3
		this.repo = repo;
	}

	@GetMapping
	@PreAuthorize("hasRole('ADMIN')")
	public List<Product> getAllProducts() {
		return repo.findAll();
	}

	@GetMapping(path = "/{id}")
	 @PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
	public ResponseEntity<Product> getProductById(@PathVariable(value = "id") String myId) {

		Optional<Product> prod = repo.findById(myId);
		if (!prod.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok().body(prod.get());
	}

	@PostMapping
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Product> addProduct(@RequestBody Product c) {
		repo.save(c);
		return new ResponseEntity<Product>(c, HttpStatus.CREATED);
	}

	@PutMapping
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Product> updateProduct(@RequestBody Product c) {
		repo.save(c);
		return new ResponseEntity<Product>(c, HttpStatus.ACCEPTED);
	}

	@DeleteMapping(path = "/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Product> deleteProductById(@PathVariable(value = "id") String myId) {

		Optional<Product> prod = repo.findById(myId);
		if (!prod.isPresent()) {
			return ResponseEntity.notFound().build();
		} else {
			repo.deleteById(myId);
			return new ResponseEntity<Product>(HttpStatus.ACCEPTED);
		}

	}

}
