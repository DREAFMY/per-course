package com.thoughtworks.rslist.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.thoughtworks.rslist.domain.Goods;
import com.thoughtworks.rslist.po.GoodsPO;
import com.thoughtworks.rslist.repository.GoodsRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class GoodControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    GoodsRepository goodsRepository;
    ObjectMapper objectMapper;
    Goods goods;

    @BeforeEach
    void setUp() {
        objectMapper = new ObjectMapper();
        goods = new Goods(1, "coffe", "ting", "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2693181789,3140146792&fm=26&gp=0.jpg");
    }

//    @AfterEach
//    void cleanPlat() {
//        goodsRepository.deleteAll();
//    }

    @Test
    public void should_get_goods_list() throws Exception {
        GoodsPO goodsPO = GoodsPO.builder().name("coffe").unit("ting").url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2693181789,3140146792&fm=26&gp=0.jpg").price(1).build();
        goodsRepository.save(goodsPO);
        mockMvc.perform(get("/goods"))
                .andExpect(jsonPath("$[0].name",is("coffe")))
                .andExpect(jsonPath("$[0].unit",is("ting")))
                .andExpect(jsonPath("$[0].price",is(1)))
                .andExpect(jsonPath("$[0].url",is("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2693181789,3140146792&fm=26&gp=0.jpg")))
                .andExpect(status().isOk());
    }

    @Test
    public void should_add_goods() throws Exception {
        String jsonString = objectMapper.writeValueAsString(goods);
        mockMvc.perform(post("/goods").content(jsonString).contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated());
        mockMvc.perform(get("/goods"))
                .andExpect(jsonPath("$[0].name",is("coffe")))
                .andExpect(jsonPath("$[0].unit",is("ting")))
                .andExpect(jsonPath("$[0].price",is(1)))
                .andExpect(jsonPath("$[0].url",is("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2693181789,3140146792&fm=26&gp=0.jpg")))
                .andExpect(status().isOk());
    }
}
