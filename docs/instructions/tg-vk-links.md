---
title: Как выставлять платёжные ссылки через ботов Robokassa в Telegram и VK
toc_depth: 2
---

<div class="wd-page wd-tg-vk-page" markdown="1">
<div class="wd-pl-shell" markdown="1">

<header class="wd-tg-hero">
<div class="wd-tg-hero__content">
<h1 class="wd-tg-hero__title">Платёжные ссылки через ботов</h1>
<p class="wd-tg-hero__desc">Выставляйте счета и получайте платёжные ссылки прямо в мессенджерах. Отправляйте эти ссылки клиентам сразу из Telegram или VK.</p>
</div>
</header>

## Общие требования

Перед началом убедитесь, что у вас есть:

<div class="wd-tg-features">
<div class="wd-tg-feature">
<div class="wd-tg-feature__icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
</div>
<div class="wd-tg-feature__title">ID магазина</div>
<p class="wd-tg-feature__desc">Находится в ЛК в разделе «Мои магазины».</p>
</div>
<div class="wd-tg-feature">
<div class="wd-tg-feature__icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div class="wd-tg-feature__title">ID клиента</div>
<p class="wd-tg-feature__desc">Справа сверху рядом с ФИО пользователя в ЛК.</p>
</div>
<div class="wd-tg-feature" style="grid-column: 1 / -1;">
<div class="wd-tg-feature__icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div class="wd-tg-feature__title">Актуальные контакты</div>
<p class="wd-tg-feature__desc">Номер телефона и e-mail должны быть актуальны — на них придут коды подтверждения подключения бота.</p>
</div>
</div>

## Выставление счетов в Telegram (@Robomerchant_bot)

<div class="wd-pl-visual-steps">

<div class="wd-pl-vstep">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Подключите магазин к боту</div>
<p class="wd-pl-vstep__desc">Найдите бота <strong>@Robomerchant_bot</strong> и нажмите Start. Введите ID магазина из личного кабинета. Бот отправит код подтверждения по SMS или e-mail (на контакты из ЛК) — введите его в чат.</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">Robomerchant_bot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--bot">Добро пожаловать! Введите ID вашего магазина из Личного кабинета.</div>
<div class="tg-msg tg-msg--user">12345</div>
<div class="tg-msg tg-msg--bot">Отправляю код подтверждения на ваш номер.</div>
<div class="tg-msg tg-msg--user">4321</div>
<div class="tg-msg tg-msg--bot">Магазин успешно подключен!</div>
</div>
<div class="tg-input-area">
<div class="tg-input">Сообщение <span>😊</span></div>
<div class="tg-send">➤</div>
</div>
</div>
</div>
</div>
</div>

<div class="wd-pl-vstep wd-pl-vstep--reverse">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Выставьте счёт</div>
<p class="wd-pl-vstep__desc">В меню бота выберите <strong>«Выставить счёт»</strong>. Укажите наименование товара, сумму, и при необходимости добавьте НДС, тип товара и вид оплаты. Нажмите «Получить ссылку на оплату».</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">Robomerchant_bot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--user">Выставить счёт</div>
<div class="tg-msg tg-msg--bot">
Укажите наименование товара/услуги:
</div>
<div class="tg-msg tg-msg--user">Подписка на месяц</div>
<div class="tg-msg tg-msg--bot">
Укажите сумму:
</div>
<div class="tg-msg tg-msg--user">990</div>
<div class="tg-msg tg-msg--bot">
Счёт сформирован! Ссылка на оплату:<br><br>
<span style="color: var(--tg-btn-text); word-break: break-all;">https://auth.robokassa.ru/Merchant/Index/...</span>
</div>
</div>
<div class="tg-input-area">
<div class="tg-input">Сообщение <span>😊</span></div>
<div class="tg-send">➤</div>
</div>
</div>
</div>
</div>
</div>

</div>

## Выставление счетов в VK

<div class="wd-pl-visual-steps">

<div class="wd-pl-vstep">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Подключите магазин</div>
<p class="wd-pl-vstep__desc">Зайдите в официальное сообщество <strong>Robokassa</strong> во ВКонтакте и нажмите «Сообщение». Выберите кнопку «Подключить магазин», укажите ID и подтвердите подключение по SMS или e-mail.</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar tg-header__avatar--vk">
<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.78 17.72c-6.08 0-9.55-4.17-9.69-11.11h3.05c.09 5.09 2.34 7.24 4.12 7.68V6.61h2.86v4.39c1.77-.19 3.62-2.21 4.25-4.39h2.86c-.48 2.73-2.4 4.75-3.78 5.58 1.38.67 3.57 2.42 4.41 5.53h-3.15c-.65-2.03-2.27-3.61-4.42-3.83v3.83h-.51z"/></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">Robokassa</div>
<div class="tg-header__status">сообщество</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--bot">
Здравствуйте! Выберите действие:
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn tg-btn--vk">Подключить магазин</button>
</div>
</div>
</div>
<div class="tg-msg tg-msg--user tg-msg--vk">Подключить магазин</div>
<div class="tg-msg tg-msg--bot">У вас уже есть аккаунт Robokassa?</div>
<div class="tg-msg tg-msg--user tg-msg--vk">Да</div>
<div class="tg-msg tg-msg--bot">Введите ID магазина:</div>
<div class="tg-msg tg-msg--user tg-msg--vk">12345</div>
<div class="tg-msg tg-msg--bot">Магазин привязан к вашему VK-аккаунту!</div>
</div>
<div class="tg-input-area">
<div class="tg-input">Сообщение <span>😊</span></div>
<div class="tg-send">➤</div>
</div>
</div>
</div>
</div>
</div>

<div class="wd-pl-vstep wd-pl-vstep--reverse">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Создайте счёт</div>
<p class="wd-pl-vstep__desc">В диалоге с ботом выберите <strong>«Выставление счета»</strong>. Введите наименование товара и стоимость. Бот пришлёт ссылку на оплату, которую можно сразу переслать клиенту прямо в VK или скопировать.</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar tg-header__avatar--vk">
<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12.78 17.72c-6.08 0-9.55-4.17-9.69-11.11h3.05c.09 5.09 2.34 7.24 4.12 7.68V6.61h2.86v4.39c1.77-.19 3.62-2.21 4.25-4.39h2.86c-.48 2.73-2.4 4.75-3.78 5.58 1.38.67 3.57 2.42 4.41 5.53h-3.15c-.65-2.03-2.27-3.61-4.42-3.83v3.83h-.51z"/></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">Robokassa</div>
<div class="tg-header__status">сообщество</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--user tg-msg--vk">Выставление счета</div>
<div class="tg-msg tg-msg--bot">Введите наименование:</div>
<div class="tg-msg tg-msg--user tg-msg--vk">Консультация</div>
<div class="tg-msg tg-msg--bot">Введите стоимость:</div>
<div class="tg-msg tg-msg--user tg-msg--vk">3000</div>
<div class="tg-msg tg-msg--bot">
Счёт создан. Ссылка для оплаты:<br><br>
<span style="color: #0077FF; word-break: break-all;">https://auth.robokassa.ru/Merchant/Index/...</span>
</div>
</div>
<div class="tg-input-area">
<div class="tg-input">Сообщение <span>😊</span></div>
<div class="tg-send">➤</div>
</div>
</div>
</div>
</div>
</div>

</div>

## Параметры платежа в чеке {#payment-params}

При необходимости в боте можно настроить дополнительные параметры фискализации.

<details class="question" markdown="1">
<summary><b>Оплата</b> — признак способа расчёта (тег 1214)</summary>
<ol>
<li><b>Предоплата 100% (код 3)</b> — полная оплата заранее за будущую поставку/услугу. Позже пробивается чек полного расчёта с зачётом.</li>
<li><b>Предоплата (код 2)</b> — частичная оплата за конкретный товар/услугу до передачи. Указывается предмет расчёта с деталями.</li>
<li><b>Аванс (код 1)</b> — деньги внесены заранее без указания конкретных товаров/услуг (депозит, залог).</li>
<li><b>Полный расчёт (код 4)</b> — <b>самый популярный вид оплаты.</b> Оплата в момент передачи товара/услуги. Детализация позиций.</li>
<li><b>Частичный расчёт (код 6)</b> — часть оплачена сразу, остаток в кредит. Распределяются способы оплаты.</li>
<li><b>Передача в кредит (код 5)</b> — товар/услуга переданы без оплаты. Позже пробиваются чеки оплаты кредита.</li>
<li><b>Кредит (код 7)</b> — последующие платежи по ранее выданному кредиту. Предмет — «платёж», сумма чека равна полной стоимости.</li>
</ol>
</details>

<details class="question" markdown="1">
<summary><b>Тип</b> — предмет расчёта для каждой позиции в чеке (тег 1212)</summary>
<ol>
<li><b>Товар</b> — физический товар, реализуемый продавцом.</li>
<li><b>Подакцизный товар</b> — товары с акцизами (алкоголь, табак и т.п.).</li>
<li><b>Работа</b> — выполненные работы (ремонт, строительство и т.п.).</li>
<li><b>Услуга</b> — оказанные услуги (консультации, транспорт и т.п.).</li>
<li><b>Ставка азартной игры</b> — приём ставок в казино, букмекерских конторах и т.п.</li>
<li><b>Выигрыш азартной игры</b> — выплата выигрыша по азартным играм.</li>
<li><b>Лотерейный билет</b> — продажа лотерейного билета.</li>
<li><b>Выигрыш лотереи</b> — выплата лотерейного выигрыша.</li>
<li><b>Предоставление результатов интеллектуальной деятельности</b> — лицензии, патенты, программное обеспечение.</li>
<li><b>Платёж</b> — денежные платежи (погашение кредитов, займов и т.п.).</li>
<li><b>Агентское вознаграждение</b> — комиссия агента за посредничество.</li>
<li><b>Составной предмет расчёта</b> — комбинация нескольких типов (например, товар + услуга).</li>
<li><b>Иной предмет расчёта</b> — всё, что не вошло в другие категории.</li>
<li><b>Имущественное право</b> — передача прав на имущество.</li>
<li><b>Внереализационный доход</b> — прочие доходы (штрафы, бонусы и т.п.).</li>
<li><b>Страховые взносы</b> — взносы в страховые фонды.</li>
<li><b>Торговый сбор</b> — сбор за торговую деятельность.</li>
<li><b>Туристический налог</b> — курортный/туристический сбор.</li>
<li><b>Финансовый инструмент</b> — ценные бумаги, вклады и другие финансовые инструменты.</li>
</ol>
</details>

<details class="question" markdown="1">
<summary><b>Налог</b> — ставка НДС для позиции в чеке (тег 1191)</summary>
<ol>
<li><b>Без НДС</b> — операции, не облагаемые НДС (например, экспорт, льготные виды деятельности).</li>
<li><b>НДС 0%</b> — нулевая ставка НДС.</li>
<li><b>НДС +10%</b> — расчётная ставка: сумма НДС входит в цену, считается как <code>цена * 10/110</code>.</li>
<li><b>НДС 10/110</b> — сумма НДС выделена отдельно и соответствует 10% от налогооблагаемой базы.</li>
<li><b>НДС +20%</b> — расчётная ставка: сумма НДС входит в цену, считается как <code>цена * 20/120</code>.</li>
<li><b>НДС 20/120</b> — сумма НДС выделена отдельно и соответствует 20% от базы.</li>
<li><b>НДС +5%</b> — расчётная ставка: сумма НДС входит в цену, считается как <code>цена * 5/105</code>.</li>
<li><b>НДС 5/105</b> — сумма НДС выделена отдельно и соответствует 5% от базы.</li>
<li><b>НДС +7%</b> — расчётная ставка: сумма НДС входит в цену, считается как <code>цена * 7/107</code>.</li>
<li><b>НДС 7/107</b> — сумма НДС выделена отдельно и соответствует 7% от базы.</li>
<li><b>НДС +22%</b> — расчётная ставка (с 2026 года): сумма НДС входит в цену, считается как <code>цена * 22/122</code>.</li>
<li><b>НДС 22/122</b> — сумма НДС выделена отдельно и соответствует 22% от налогооблагаемой базы.</li>
</ol>
</details>

## Вопросы и ответы

??? question "Нужен ли отдельный магазин для Telegram и VK?"

    Нет, можно использовать тот же магазин, что и для сайта или других каналов.  
    Главное — корректно подключить его к боту (ID и подтверждение по SMS/e‑mail).

??? question "Могу ли я выставлять счета из нескольких устройств/аккаунтов?"

    Да, но важно, чтобы каждый Telegram/VK‑аккаунт был корректно привязан к нужному магазину.  
    Для безопасности не передавайте чужим людям доступ к своему боту или ЛК.

??? question "Где смотреть оплаты по счетам, выставленным через ботов?"

    Все оплаты видны в личном кабинете Robokassa в разделах с операциями и балансом. Дополнительно бот присылает вам уведомление об успешной оплате прямо в чате.

</div>
</div>