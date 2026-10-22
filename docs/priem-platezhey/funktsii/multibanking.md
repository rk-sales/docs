<div class="mb-page" markdown="1">
<!-- ================= HERO ================= -->
<header class="mb-hero">
<div>
<h1 class="mb-hero__title">
Мультибанкинг <br>
для <em>стабильных</em> продаж
</h1>
<p class="mb-hero__desc">
Технология, которая обеспечивает работу сразу с несколькими банками. Покупатель видит одну страницу, а наша система берёт на себя маршрутизацию и переключение при сбоях.
</p>
</div>

<div class="mb-hero__visual">
<div class="mb-panel-header">
<span></span><span></span><span></span>
<div class="mb-panel-title">routing-engine.log</div>
</div>
<div class="mb-scheme">
<!-- Провода с вложенными пакетами (для идеальной траектории) -->
<div class="mb-wire mb-wire--1">
<div class="mb-packet mb-packet--1"></div>
</div>
<div class="mb-wire mb-wire--2">
<div class="mb-packet mb-packet--2"></div>
</div>
<div class="mb-wire mb-wire--3">
<div class="mb-packet mb-packet--3"></div>
</div>

<!-- Узлы -->
<div class="mb-node mb-node--hub">
<div class="mb-node__icon">R</div>
<div class="mb-node__label">ROBOKASSA</div>
</div>

<div class="mb-node mb-node--bank1">
<div class="mb-node__icon">B1</div>
<div class="mb-node__label">БАНК 1</div>
</div>

<div class="mb-node mb-node--bank2">
<div class="mb-node__icon">B2</div>
<div class="mb-node__label">БАНК 2</div>
</div>

<div class="mb-node mb-node--bank3">
<div class="mb-node__icon">B3</div>
<div class="mb-node__label">БАНК 3</div>
</div>
</div>
</div>
</header>

<!-- ================= КАК РАБОТАЕТ ================= -->
## Маршрутизация платежей {: #process }

<div class="mb-editorial-list">
<div class="mb-ed-row">
<div class="mb-ed-num">01</div>
<div>
<div class="mb-ed-title">Клиент инициирует платёж</div>
<div class="mb-ed-desc">Покупатель выбирает способ оплаты на вашем сайте. На этом этапе он ещё не знает, через какой банк пройдёт транзакция.</div>
</div>
</div>

<div class="mb-ed-row">
<div class="mb-ed-num">02</div>
<div>
<div class="mb-ed-title">Попытка основного маршрута</div>
<div class="mb-ed-desc">Система направляет запрос в основной эквайринговый шлюз, который закреплён за этим методом оплаты.</div>
</div>
</div>

<div class="mb-ed-row">
<div class="mb-ed-num">03</div>
<div>
<div class="mb-ed-title">Мгновенный фейловер (переключение)</div>
<div class="mb-ed-desc">Если банк вернул ошибку или недоступен, Robokassa за доли секунды перенаправляет платёж в резервный шлюз. Клиент не видит этого переключения.</div>
</div>
</div>

<div class="mb-ed-row">
<div class="mb-ed-num">04</div>
<div>
<div class="mb-ed-title">Успешная оплата</div>
<div class="mb-ed-desc">Клиент получает чек, а вы — деньги на расчётный счёт. Всё выглядит как один непрерывный процесс.</div>
</div>
</div>
</div>

<!-- ================= ПРЕИМУЩЕСТВА ================= -->
## Архитектура надежности {: #advantages }

<div class="mb-bento">
<div class="mb-card mb-card--hero">
<div class="mb-card__val">99,9<span>%</span></div>
<div class="mb-card__title">Гарантия конверсии</div>
<div class="mb-card__desc">Локальные сбои банка, отключение метода или перегрузка канала не «роняют» продажи. Резервный маршрут всегда готов принять платёж.</div>
</div>

<div class="mb-mini-grid">
<div class="mb-mini-card">
<div class="mb-mini-val">0</div>
<div class="mb-mini-title">Ручной работы</div>
<div class="mb-mini-desc">Вам не нужно мониторить статус банков.</div>
</div>
<div class="mb-mini-card">
<div class="mb-mini-val">∞</div>
<div class="mb-mini-title">Готовность к пикам</div>
<div class="mb-mini-desc">Нагрузка равномерно распределяется по шлюзам.</div>
</div>
<div class="mb-mini-card">
<div class="mb-mini-val">API</div>
<div class="mb-mini-title">Гибкость</div>
<div class="mb-mini-desc">Подключайте новые методы без изменения кода.</div>
</div>
<div class="mb-mini-card">
<div class="mb-mini-val">24/7</div>
<div class="mb-mini-title">Мониторинг</div>
<div class="mb-mini-desc">Система следит за доступностью банков.</div>
</div>
</div>
</div>

<!-- ================= CTA ================= -->
<div class="mb-cta">
<div>
<h3 class="mb-cta__title">Как это выглядит для вас?</h3>
<p class="mb-cta__text">Вы подключаете магазин в ЛК Robokassa. Всё агрегируется в едином кабинете, а переключения происходят на нашей стороне — без изменений в вашем коде.</p>
</div>
<a href="https://login.robokassa.ru" target="_blank" rel="noopener" class="mb-cta__btn">Подключить →</a>
</div>
</div>