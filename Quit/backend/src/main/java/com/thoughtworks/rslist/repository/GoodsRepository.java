package com.thoughtworks.rslist.repository;

import com.thoughtworks.rslist.po.GoodsPO;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GoodsRepository extends CrudRepository<GoodsPO, Integer> {
    @Override
    List<GoodsPO> findAll();
}
