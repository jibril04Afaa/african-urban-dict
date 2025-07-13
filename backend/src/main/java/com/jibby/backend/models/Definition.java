package com.jibby.backend.models;

public class Definition {

    public Definition() {}
    public Definition(String word, String region, String username, String wordDefinition, String exampleUsage, String language) {
        this.word = word;
        this.region = region;
        this.language = language;
        this.username = username;
        this.wordDefinition = wordDefinition;
        this.exampleUsage = exampleUsage;
    }

    private String word;
    private String region;
    private String language;
    private String username;
    private String wordDefinition;
    private String exampleUsage;

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getWordDefinition() {
        return wordDefinition;
    }

    public void setWordDefinition(String wordDefinition) {
        this.wordDefinition = wordDefinition;
    }

    public String getExampleUsage() {
        return exampleUsage;
    }

    public void setExampleUsage(String exampleUsage) {
        this.exampleUsage = exampleUsage;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getLanguage() {
        return language;
    }
}
