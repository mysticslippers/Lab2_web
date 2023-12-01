package me.ifmo.model;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedList;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@WebServlet(name = "AreaCheckServlet", value = "/areaCheck")
public class AreaCheckServlet extends HttpServlet{

    private final Pattern pattern = Pattern.compile("^([-+]?\\d+[.]?\\d{0,15})$");

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        long startTime = System.nanoTime();
        LinkedList<String> hits = (LinkedList<String>) session.getAttribute("result");

        String xRaw = (String) session.getAttribute("x-input");
        String yRaw = (String) session.getAttribute("y-input");
        String rRaw = (String) session.getAttribute("r-input");

        String result;
        if(isValidX(xRaw) && isValidY(yRaw) && isValidR(rRaw)){
            result = check(Float.parseFloat(xRaw), Float.parseFloat(yRaw), Float.parseFloat(rRaw));
            hits.add(xRaw + " " + yRaw + " " + rRaw + " " + result + " " + (System.nanoTime() - startTime));
        } else {
            result = "Not Valid!";
            hits.add("0 0 0 " + result + " 0");
        }
        session.setAttribute("result", hits);

        response.setContentType("text/plain;charset=UTF-8");
        try(PrintWriter printWriter = response.getWriter()){
            printWriter.println(hits);
        }
    }

    private String check(float x, float y, float r){
        return (checkLeftTop(x, y, r) || checkRightTop(x, y, r) || checkRightBottom(x, y, r)) ? "Попал!" : "Промах!";
    }

    private boolean checkRightBottom(float x, float y, float r){
        return (x >= 0 && y <= 0) && (Math.abs(x) + Math.abs(y) <= r);
    }

    private boolean checkRightTop(float x, float y, float r){
        return (x >= 0 && y >= 0) && (x <= r / 2 && y <= r);
    }

    private boolean checkLeftTop(float x, float y, float r){
        return (x <= 0 && y >= 0) && (Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(r, 2));
    }

    private boolean isValidX(String input){
        Matcher matcher = pattern.matcher(input);
        if(matcher.matches()){
            float x = Float.parseFloat(input);
            return x >= -5 && x <= 5;
        }
        return false;
    }

    private boolean isValidY(String input){
        Matcher matcher = pattern.matcher(input);
        if(matcher.matches()){
            float y = Float.parseFloat(input);
            return y >= -3 && y <= 5;
        }
        return false;
    }

    private boolean isValidR(String input){
        Matcher matcher = pattern.matcher(input);
        if(matcher.matches()){
            float r = Float.parseFloat(input);
            return r >= 2 && r <= 5;
        }
        return false;
    }
}
