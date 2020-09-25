package com.thoughtworks.rslist.po;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "goods")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GoodsPO {
    @Id
    @GeneratedValue
    private int id;
    private int price;
    private int num;
    private String name;
    private String unit;
    private String url;
}
