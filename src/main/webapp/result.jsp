<%@ page import="me.ifmo.model.UserPoint" %>
<%@ page import="java.util.LinkedList" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
    <link rel="icon" type="image/x-icon" href="public/favicon.ico">
    <link href="styles/result.css" rel="stylesheet"/>
    <title>Result</title>
</head>
<body>
<main class="main-result" id="main-result-id">
    <div class="hit-table-block" id="hit-table-block-id">
        <table class="hit-table" id="hit-table-id">
            <thead class="hit-thead" id="hit-thead-id">
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Результат</th>
                <th>Время выполнения скрипта</th>
            </tr>
            </thead>
            <%
                LinkedList<UserPoint> results = (LinkedList<UserPoint>) request.getSession().getAttribute("results");
                if(results != null){
                    UserPoint userPoint = results.getLast();
            %>
            <tr>
                <td>
                    <%= userPoint.getX()%>
                </td>
                <td>
                    <%= userPoint.getY()%>
                </td>
                <td>
                    <%= userPoint.getR()%>
                </td>
                <td id="td-result-id">
                    <%= userPoint.getHit()%>
                </td>
                <td>
                    <%= userPoint.getExecuteTime()%>
                </td>
            </tr>
            <%
                }
            %>
        </table>
    </div>
    <div class="href-block" id="href-block-id">
        <a href="index.jsp" class="href" id="href-id"><span>Вернуться на стартовую страницу!</span></a>
    </div>
</main>
</body>
</html>