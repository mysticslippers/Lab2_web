<%@ page contentType="text/html; charset=UTF-8" pageEncoding="utf-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html lang="en">
<head>
    <meta name="viewport" content="initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
    <title>Lab2_web</title>
    <link rel="icon" type="image/x-icon" href="public/favicon.ico">
    <link href="styles/style.css" rel="stylesheet"/>
    <script src="js/scripts/draw.js" type="application/javascript"></script>
    <script src="js/scripts/handleRequest.js" type="text/javascript"></script>
    <script src="js/scripts/clean.js" type="text/javascript"></script>
    <script src="js/scripts/changeGIF.js" type="text/javascript"></script>
    <script defer src="js/scripts/validate.js"></script>
</head>

<body onload="draw()">
<!--Заголовок-->
<header class="header" id="header-id">
    <div class="presentation" id="presentation-id">
            <span class="presentation-text" id="presentation-text-id">
                <p>Михайлов Дмитрий Андреевич</p>
                <p>Группа P3218</p>
                <p>Вариант №34433</p>
            </span>
    </div>
</header>

<!--Тело-->
<main class="main" id="main-id">
    <!--Координатная плоскость-->
    <div class="coordinate-plane" id="coordinate-plane-id">
        <canvas id="canvas" height="400px" width="400px"></canvas>
    </div>
    <!--Форма-->
    <div class="data" id="data-id">
        <form class="data-form" id="data-form-id" name="data-input-form" onsubmit="validate(this)">
            <div class="x-input-form" id="x-input-form-id">
                <p>Введите координату X:</p>
                <label class="x-input-label" for="x-input-choice">
                    <input type="text" id="x-input-choice" name="x-input" placeholder="Введите значение из диапозона (-5...5)"/>
                </label>
            </div>

            <div class="y-input-form" id="y-input-form-id">
                <p>Введите координату Y:</p>
                <label class="y-input-label" for="y-input-choice">
                    <input type="text" id="y-input-choice" name="y-input" placeholder="Введите значение из диапозона (-3...5)"/>
                </label>
            </div>

            <div class="r-input-form" id="r-input-form-id">
                <p>Введите R:</p>
                <label class="r-input-label" for="r-input-choice">
                    <input type="text" id="r-input-choice" name="r-input" placeholder="Введите значение из диапозона (2...5)"/>
                </label>
            </div>
            <br/>

            <div class="submit-data-form" id="submit-data-form-id">
                <button class="button-submit" id="button-submit-id" type="submit">
                    <span>Отправить данные!</span>
                </button>
            </div>
        </form>
        <br/>

        <div class="clear-data-table" id="clear-data-table-id">
            <button class="button-clear-data" id="button-clear-data-id">
                <span class="text-button-clear-data" id="text-button-clear-data-id">
                    Очистить таблицу!
                </span>
            </button>
        </div>
    </div>

    <!--Блок с гифками-->
    <div class="gif-block" id="gif-block-id"></div>

    <!--Таблица с результатами-->
    <div class="result-table" id="result-table-id">
        <table class="table" id="table-id">
            <thead class="thead" id="thead-id">
            <tr>
                <th>X</th>
                <th>Y</th>
                <th>R</th>
                <th>Результат</th>
                <th>Время выполнения скрипта</th>
            </tr>
            </thead>
            <tbody class="tbody" id="tbody-id"></tbody>
        </table>
    </div>
    <script src="js/scripts/addResultToTable.js"></script>
</main>

<footer class="footer" id="footer-id"></footer>
</body>
</html>
