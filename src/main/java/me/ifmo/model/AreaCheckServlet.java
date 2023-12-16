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
        LinkedList<String> hits = (LinkedList<String>) session.getAttribute("hits");

        String xRaw = (String) session.getAttribute("x-input");
        String yRaw = (String) session.getAttribute("y-input");
        String rRaw = (String) session.getAttribute("r-input");

        String result;
        if(isValidX(xRaw) && isValidY(yRaw) && isValidR(rRaw)){
            result = check(Float.parseFloat(xRaw), Float.parseFloat(yRaw), Float.parseFloat(rRaw));
            hits.add("<tr><td>" + xRaw + "</td><td>" + yRaw + "</td><td>" + rRaw + "</td><td>" + result + "</td><td>" + (System.nanoTime() - startTime) + "</td></tr>");
        } else {
            result = "Not Valid!";
            hits.add("<tr><td>0</td><td>0</td><td>0</td><td>" + result + "</td><td>0</td></tr>");
        }
        session.setAttribute("hits", hits);

        response.setContentType("text/html; charset=UTF-8");
        try(PrintWriter writer = response.getWriter()){
            writer.println("<!DOCTYPE html>");
            writer.println("<html lang=\"en\">");
            writer.println("<head>");
            writer.println("    <meta name=\"viewport\" content=\"initial-scale=1.0\" />");
            writer.println("    <meta http-equiv=\"Content-Type\" content=\"text/html\" charset=\"UTF-8\" />");
            writer.println("    <link rel=\"icon\" type=\"image/x-icon\" href=\"public/favicon.ico\">");
            writer.println("    <link href=\"styles/result.css\" rel=\"stylesheet\"/>");
            writer.println("    <script src=\"js/scripts/changeGIF.js\" type=\"text/javascript\"></script>");
            writer.println("    <title>Result</title>");
            writer.println("</head>");
            writer.println("<body>");
            writer.println("<main class=\"main-result\" id=\"main-result-id\">");
            writer.println("    <div class=\"hit-table-block\" id=\"hit-table-block-id\">");
            writer.println("        <table class=\"hit-table\" id=\"hit-table-id\">");
            writer.println("            <thead class=\"hit-thead\" id=\"hit-thead-id\">");
            writer.println("            <tr>");
            writer.println("                <th>Y</th>");
            writer.println("                <th>R</th>");
            writer.println("                <th>Результат</th>");
            writer.println("                <th>Время выполнения скрипта</th>");
            writer.println("            </tr>");
            writer.println("            </thead>");
            writer.println("            <tbody class=\"hit-tbody\" id=\"hit-tbody-id\">");
            writer.println(hits.getLast());
            writer.println("            </tbody>");
            writer.println("        </table>");
            writer.println("    </div>");
            writer.println("    <div class=\"gif-block\" id=\"gif-block-id\"></div>");
            writer.println("    <div class=\"href-block\" id=\"href-block-id\">");
            writer.println("        <a href=\"index.jsp\" class=\"href\" id=\"href-id\"><span>Вернуться на стартовую страницу!</span></a>");
            writer.println("    </div>");
            writer.println("</main>");
            writer.println("</body>");
            writer.println("</html>");
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
