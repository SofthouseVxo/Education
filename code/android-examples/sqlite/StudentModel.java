package com.example.ecapp;

public class StudentModel {

    private int id;
    private String name;
    private String course;
    private boolean done;

    public StudentModel(int id, String name, String course, boolean done) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.done = done;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCourse() {
        return course;
    }

    public boolean isDone() {
        return done;
    }

    @Override
    public String toString() {
        return
                "id= " + id +
                " name= " + name +
                " course= " + course +
                " done= " + done;
    }

}
