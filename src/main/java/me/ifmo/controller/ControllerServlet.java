package me.ifmo.controller;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.LinkedList;

@WebServlet(name = "ControllerServlet", value = "/controller")
public class ControllerServlet extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String path = getServletContext().getContextPath();
        HttpSession session = request.getSession();

        String xRaw = request.getParameter("x-input");
        String yRaw = request.getParameter("y-input");
        String rRaw = request.getParameter("r-input");
        String mode = request.getParameter("mode");


        if(mode == null){
            if(session.getAttribute("result") == null) session.setAttribute("result", new LinkedList<String>());
            if(xRaw != null && yRaw != null && rRaw != null){
                session.setAttribute("x-input", xRaw);
                session.setAttribute("y-input", yRaw);
                session.setAttribute("r-input", rRaw);

                path += "/areaCheck";
            }
        } else {
            session.invalidate();
        }

        response.sendRedirect(path);
    }
}
