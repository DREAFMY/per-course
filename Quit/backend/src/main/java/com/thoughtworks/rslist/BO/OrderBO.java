package com.thoughtworks.rslist.BO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderBO {
    private int id;
    private int price;
    private String name;
    private String unit;
    private String url;
    private int num;
}
