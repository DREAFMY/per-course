package com.thoughtworks.rslist.api;

import com.thoughtworks.rslist.domain.Goods;
import com.thoughtworks.rslist.po.GoodsPO;
import com.thoughtworks.rslist.repository.GoodsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
public class GoodsController {
    @Autowired
    GoodsRepository goodsRepository;

    @GetMapping("/goods")
    public ResponseEntity getGoodsList() {
        List<GoodsPO> all = goodsRepository.findAll();
        return ResponseEntity.ok(all);
    }

    @PostMapping("/goods")
    public ResponseEntity addGoods(@RequestBody @Valid Goods goods) {
        GoodsPO goodsPO = GoodsPO.builder()
                .name(goods.getName())
                .price(goods.getPrice())
                .num(goods.getNum())
                .unit(goods.getUnit())
                .url(goods.getUrl())
                .build();
        goodsRepository.save(goodsPO);
        return ResponseEntity.created(null).build();
    }
}
