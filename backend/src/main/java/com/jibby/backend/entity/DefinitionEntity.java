package com.jibby.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class DefinitionEntity {
    @Id
    private Long id;
    private String word;
    private String region;
    private String language;
    private String username;
    private String wordDefinition;
    private String exampleUsage;

    // Constructors
    public DefinitionEntity() {}

    public DefinitionEntity(String exampleUsage, String wordDefinition, String username, String word, String region, String language) {
        this.exampleUsage = exampleUsage;
        this.wordDefinition = wordDefinition;
        this.username = username;
        this.word = word;
        this.region = region;
        this.language = language;
    }

    public String getExampleUsage() {
        return exampleUsage;
    }

    public void setExampleUsage(String exampleUsage) {
        this.exampleUsage = exampleUsage;
    }

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

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getLanguage() {
        return language;
    }
}
