package com.jibby.backend.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
public class DefinitionController {

    @PostMapping("/new-word")
    public String newWord(@RequestParam String word) {
        return word;
    }

    @GetMapping("/words/{id}")
    public String getWordById(@PathVariable String id) {
        return id;
    }

    @GetMapping("/words")
    public String getAllWords() {
        return "";
    }

    @DeleteMapping("words/{id}")
    public String deleteWord(@PathVariable String id) {
        return id;
    }
}
