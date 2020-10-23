package com.thoughtworks.rslist.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thoughtworks.rslist.domain.Order;
import com.thoughtworks.rslist.po.GoodsPO;
import com.thoughtworks.rslist.po.OrderPO;
import com.thoughtworks.rslist.repository.GoodsRepository;
import com.thoughtworks.rslist.repository.OrderRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class OrderControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    GoodsRepository goodsRepository;
    ObjectMapper objectMapper;
    Order order;
    GoodsPO goodsPO;
    GoodsPO save;

    @BeforeEach
    void setUp() {
        objectMapper = new ObjectMapper();
        goodsPO = GoodsPO.builder()
                .name("coco")
                .price(2)
                .unit("ping")
                .url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2693181789,3140146792&fm=26&gp=0.jpg")
                .build();
        save = goodsRepository.save(goodsPO);
        order = new Order(1,save.getId());
    }

    @AfterEach
    void cleanPlat() {
        orderRepository.deleteAll();
    }

    @Test
    public void should_get_order_list() throws Exception {
        OrderPO orderPO = OrderPO.builder().num(1).goodsId(save.getId()).build();
        orderRepository.save(orderPO);
        mockMvc.perform(get("/order"))
                .andExpect(jsonPath("$[0].num",is(1)))
                .andExpect(jsonPath("$[0].goodsId",is(save.getId())))
                .andExpect(status().isOk());
    }

    @Test
    public void should_add_order_num_when_order_not_exist() throws Exception {
        int goodsId = save.getId();
        mockMvc.perform(get("/order/{goodsId}",goodsId))
                .andExpect(status().isOk());
        mockMvc.perform(get("/order"))
                .andExpect(jsonPath("$[0].num",is(1)))
                .andExpect(jsonPath("$[0].goodsId",is(save.getId())))
                .andExpect(status().isOk());
    }

    @Test
    public void should_add_order_num_when_order_exist() throws Exception {
        OrderPO orderPO = OrderPO.builder().num(2).goodsId(save.getId()).build();
        orderRepository.save(orderPO);
        int goodsId = save.getId();
        mockMvc.perform(get("/order/{goodsId}",goodsId))
                .andExpect(status().isOk());
        mockMvc.perform(get("/order"))
                .andExpect(jsonPath("$[0].num",is(3)))
                .andExpect(jsonPath("$[0].goodsId",is(save.getId())))
                .andExpect(status().isOk());
    }

    @Test
    public void should_delete_order() throws Exception {
        OrderPO orderPO = OrderPO.builder().num(2).goodsId(save.getId()).build();
        OrderPO saveOrder = orderRepository.save(orderPO);
        mockMvc.perform(delete("/order/{orderId}",saveOrder.getId()))
                .andExpect(status().isOk());
    }
}
