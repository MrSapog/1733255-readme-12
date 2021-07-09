<?php
require_once ('helpers.php');

$postCards = [
    [
        'title' => 'Цитата',
        'type' => 'post-quote',
        'content' => 'Мы в жизни любим только раз, а после ищем лишь похожих',
        'userName' => 'Лариса',
        'avatar' => 'userpic-larisa-small.jpg'
    ],
    [
        'title' => 'Игра престолов',
        'type' => 'post-text',
        'content' => 'Товарищи! Начало повседневной работы по формированию позиции требуют определения и уточнения модели развития. С другой стороны рамки и место обучения кадров способствует подготовки и реализации соответствующий условий активизации. Значимость этих проблем настолько очевидна, что рамки и место обучения кадров в значительной степени обуславливает создание существенных финансовых и административных условий. Таким образом начало повседневной работы по формированию позиции способствует подготовки и реализации систем массового участия. Задача организации, в особенности же реализация намеченных плановых заданий представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Таким образом постоянный количественный рост и сфера нашей активности позволяет оценить значение соответствующий условий активизации.',
        'userName' => 'Владик',
        'avatar' => 'userpic.jpg'
    ],
    [
        'title' => 'Наконец, обработал фотки!',
        'type' => 'post-photo',
        'content' => 'rock-medium.jpg',
        'userName' => 'Виктор',
        'avatar' => 'userpic-mark.jpg'
    ],
    [
        'title' => 'Моя мечта',
        'type' => 'post-photo',
        'content' => 'coast-medium.jpg',
        'userName' => 'Лариса',
        'avatar' => 'userpic-larisa-small.jpg'
    ],
    [
        'title' => 'Лучшие курсы',
        'type' => 'post-link',
        'content' => 'www.htmlacademy.ru',
        'userName' => 'Владик',
        'avatar' => 'userpic.jpg'
    ]
];
$userName = 'Игорь';

$mainContent = include_template('main.php', ['postCards' => $postCards]);

$layoutContent = include_template('layout.php', ['pageContent' => $mainContent, 'userName' => $userName,'pageTitle' => 'Главная']);

print($layoutContent);
