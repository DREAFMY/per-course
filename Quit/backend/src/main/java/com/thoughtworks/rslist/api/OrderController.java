package com.thoughtworks.rslist.api;

import com.thoughtworks.rslist.BO.OrderBO;
import com.thoughtworks.rslist.domain.Order;
import com.thoughtworks.rslist.po.GoodsPO;
import com.thoughtworks.rslist.po.OrderPO;
import com.thoughtworks.rslist.repository.GoodsRepository;
import com.thoughtworks.rslist.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class OrderController {
    @Autowired
    OrderRepository orderRepository;
    GoodsRepository goodsRepository;
    OrderPO orderPO;

    @GetMapping("/order")
    @CrossOrigin
    public ResponseEntity getOrderList() {
        List<OrderPO> all = orderRepository.findAll();
        return ResponseEntity.ok(all);
    }

    @DeleteMapping("/order/{orderId}")
    @CrossOrigin
    public ResponseEntity deleteOrder(@PathVariable int orderId) {
        orderRepository.deleteById(orderId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/order/{goodsId}")
    @CrossOrigin
    public ResponseEntity addOrder(@PathVariable int goodsId) {
        OrderPO orderPO1 = orderRepository.findByGoodsId(goodsId);
        Optional<GoodsPO> goodsPO1 = goodsRepository.findById(goodsId);
        if ( orderPO1 == null) {
            orderPO = OrderPO.builder()
                    .num(1)
                    .goodsId(goodsId)
                    .name(goodsPO1.get(0).getName())
                    .build();
            orderRepository.save(orderPO);
        } else {
            int i = orderPO1.getNum();
            orderPO1.setNum(i + 1);
            orderRepository.save(orderPO1);
        }
        return ResponseEntity.ok().build();
    }
}
