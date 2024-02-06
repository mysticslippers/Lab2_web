package me.ifmo.filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebFilter(filterName = "AreaCheckFilter", urlPatterns = "/areaCheck")
public class AreaCheckFilter implements Filter {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpSession session = ((HttpServletRequest) servletRequest).getSession(true);
        var filter = session.getAttribute("filter");
        if (filter != null && (boolean) filter) {
            session.setAttribute("filter", false);
            filterChain.doFilter(servletRequest, servletResponse);
        } else{
            servletRequest.getServletContext().getRequestDispatcher("/result.jsp").forward(servletRequest, servletResponse);
        }
    }
}
