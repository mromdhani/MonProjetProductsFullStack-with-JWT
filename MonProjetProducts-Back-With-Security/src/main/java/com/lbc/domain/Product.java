package com.lbc.domain;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
	@Id
	private String id;
	private String nom;
	private BigDecimal prixUnitaire;

}
