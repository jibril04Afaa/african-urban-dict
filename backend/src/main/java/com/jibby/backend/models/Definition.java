package com.jibby.backend.models;

public class Definition {
    public Def
    public Definition(String word, String region, String username, String wordDefinition, String exampleUsage) {
        this.word = word;
        this.region = region;
        this.username = username;
        this.wordDefinition = wordDefinition;
        this.exampleUsage = exampleUsage;
    }

    private String word;
    private String region;
    private String username;
    private String wordDefinition;
    private String exampleUsage;
}
