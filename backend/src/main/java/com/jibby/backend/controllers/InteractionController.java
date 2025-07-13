package com.jibby.backend.controllers;

public class InteractionController {
    private int likes;
    private int dislikes;

    public InteractionController() {}

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getDislikes() {
        return dislikes;
    }

    public void setDislikes(int dislikes) {
        this.dislikes = dislikes;
    }
}
