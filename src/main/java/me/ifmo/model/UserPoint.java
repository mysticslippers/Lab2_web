package me.ifmo.model;

import java.util.Objects;

public class UserPoint {
    private float x, y, r;
    private String hit;
    private long executeTime;

    public UserPoint(float x, float y, float r, String hit, long executeTime){
        this.x = x;
        this.y = y;
        this.r = r;
        this.hit = hit;
        this.executeTime = executeTime;
    }

    public void setX(float x){
        this.x = x;
    }

    public void setY(float y) {
        this.y = y;
    }

    public void setR(int r) {
        this.r = r;
    }

    public void setHit(String hit) {
        this.hit = hit;
    }

    public void setExecuteTime(long executeTime) {
        this.executeTime = executeTime;
    }

    public float getX() {
        return this.x;
    }

    public float getY() {
        return this.y;
    }

    public float getR() {
        return this.r;
    }

    public String getHit() {
        return this.hit;
    }

    public long getExecuteTime() {
        return executeTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserPoint point = (UserPoint) o;
        return this.x == point.x && this.y == point.y && this.r == point.r && Objects.equals(this.hit, point.hit) && this.executeTime == point.executeTime;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.x, this.y, this.r, this.hit, this.executeTime);
    }

    @Override
    public String toString(){
        return "x-input=" + this.x + " || y-input=" + this.y + " || r-input=" + this.r + " || result=" + this.hit + " || executeTime=" + this.executeTime;
    }
}
