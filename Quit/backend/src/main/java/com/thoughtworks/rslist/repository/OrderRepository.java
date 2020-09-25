package com.thoughtworks.rslist.repository;

import com.thoughtworks.rslist.po.OrderPO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends CrudRepository<OrderPO, Integer> {
    @Override
    List<OrderPO> findAll();
    OrderPO findByGoodsId(int goodsId);
}
