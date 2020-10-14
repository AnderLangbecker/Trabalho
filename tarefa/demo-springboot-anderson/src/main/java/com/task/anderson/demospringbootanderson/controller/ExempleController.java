package com.task.anderson.demospringbootanderson.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.task.anderson.demospringbootanderson.dto.ExempleDTO;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.web.bind.annotation.RequestMethod.GET;


@RestController
public class ExempleController {
    //http://localhost:8080/myendpoint/exemples
    @RequestMapping(value = "/myendpoint/exemples", method = GET)
    public List<ExempleDTO> listExemples() {
        List<ExempleDTO> list = new ArrayList<>();


        list.add(new ExempleDTO("Anderson", "+5555997269211", "anderlangbecker@gmail.com"));
        list.add(new ExempleDTO("Daniel", "+5555997269212", "daniel@gmail.com"));
        list.add(new ExempleDTO("Langbecker", "+5555997269213", "langbecker@gmail.com"));
        return list;

    }

    @RequestMapping(value = "/myendpoint/status", method = GET)
    public String status() {
        return "Rodando";

    }

    @RequestMapping(value = "/myendpoint/pessoa", method = GET)
    public ExempleDTO pessoa() {
        return new ExempleDTO("Anderson", "+5555997269211", "anderlangbecker@gmail.com");

    }

}
