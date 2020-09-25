package com.thoughtworks.rslist.api;

import com.thoughtworks.rslist.domain.Order;
import com.thoughtworks.rslist.po.OrderPO;
import com.thoughtworks.rslist.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class OrderController {
    @Autowired
    OrderRepository orderRepository;
    OrderPO orderPO;

    @GetMapping("/order")
    public ResponseEntity getOrderList() {
        List<OrderPO> all = orderRepository.findAll();
        return ResponseEntity.ok(all);
    }

    @GetMapping("/order/{goodsId}")
    public ResponseEntity addOrder(@PathVariable int goodsId) {
        OrderPO orderPO1 = orderRepository.findByGoodsId(goodsId);
        if ( orderPO1 == null) {
            orderPO = OrderPO.builder().num(1).goodsId(goodsId).build();
            orderRepository.save(orderPO);
        } else {
            int i = orderPO1.getNum();
            orderPO1.setNum(i + 1);
            orderRepository.save(orderPO1);
        }
        return ResponseEntity.ok().build();
    }
}
