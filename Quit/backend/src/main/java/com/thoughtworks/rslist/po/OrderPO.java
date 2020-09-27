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
@Table(name = "orderList")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderPO {
    @Id
    @GeneratedValue
    private int id;
    private int num;
    private int goodsId;
}
