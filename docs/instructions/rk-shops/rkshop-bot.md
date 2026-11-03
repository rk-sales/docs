---
title: Продажи через Telegram с помощью Robokassa
toc_depth: 2
---

<div class="wd-page wd-tg-shop-page" markdown="1">
<div class="wd-pl-shell" markdown="1">

<header class="wd-tg-hero">
<div class="wd-tg-hero__content">
<h1 class="wd-tg-hero__title">Продажи через Telegram</h1>
<p class="wd-tg-hero__desc">Для продаж в Telegram мы создали два удобных бота. Настройте <strong>@RobokassaShopBot</strong>, чтобы управлять магазином и выставлять счета, а ссылку на <strong>@RoboClientBot</strong> отправляйте покупателям.</p>
</div>
</header>

## Два бота для разных задач

<div class="wd-tg-features">
<div class="wd-tg-feature">
<div class="wd-tg-feature__icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div class="wd-tg-feature__title">@RobokassaShopBot</div>
<p class="wd-tg-feature__desc">Бот для тебя. Здесь ты подключаешь магазин, создаешь товары и формируешь счета.</p>
</div>
<div class="wd-tg-feature">
<div class="wd-tg-feature__icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<div class="wd-tg-feature__title">@RoboClientBot</div>
<p class="wd-tg-feature__desc">Бот для покупателей. В нём клиенты видят каталог, собирают корзину и оплачивают.</p>
</div>
</div>

## Настройка магазина в @RobokassaShopBot

<div class="wd-pl-visual-steps">

<div class="wd-pl-vstep">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Авторизация</div>
<p class="wd-pl-vstep__desc">Откройте бота <strong>@RobokassaShopBot</strong> и нажмите Start. Бот спросит, зарегистрированы ли вы в Robokassa. Выберите «Да».</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RobokassaShopBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--bot">
Привет! Я - RobokassaShopBot, конструктор интернет-магазина в Telegram!<br><br>
Давайте активируем прием платежей. Вы уже подключены к Robokassa?
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">Да</button>
<button class="tg-btn">Нет</button>
</div>
</div>
</div>
<div class="tg-msg tg-msg--user">Да</div>
<div class="tg-msg tg-msg--bot">
Отлично! Введите идентификатор магазина из Личного кабинета.
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

<div class="wd-pl-vstep wd-pl-vstep--reverse">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Подтверждение и меню</div>
<p class="wd-pl-vstep__desc">Введите ShopID. Бот попросит код из СМС (для РФ) или Email (для КЗ). После ввода кода магазин подключён! Появится меню управления.</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RobokassaShopBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--user">storytaller</div>
<div class="tg-msg tg-msg--bot">Я отправил код в СМС на номер *2656</div>
<div class="tg-msg tg-msg--user">177003</div>
<div class="tg-msg tg-msg--bot">
Супер! Магазин подключен. Выберите магазин для настройки:
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">TEST_storytaller</button>
</div>
<div class="tg-keyboard-row">
<button class="tg-btn">Добавить новый магазин</button>
</div>
</div>
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

## Добавление товаров

<div class="wd-pl-visual-steps">

<div class="wd-pl-vstep">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Создание карточки</div>
<p class="wd-pl-vstep__desc">В меню выберите «Товары» и нажмите «Новый товар». Бот попросит ввести краткое название (до 20 символов), полное наименование и цену.</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RobokassaShopBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--user">
Товары 
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
</div>
<div class="tg-msg tg-msg--bot">
Список товаров пуст.
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">Новый товар +</button>
</div>
</div>
</div>
<div class="tg-msg tg-msg--user">Новый товар +</div>
<div class="tg-msg tg-msg--bot">Введите краткое название (до 20 символов):</div>
<div class="tg-msg tg-msg--user">Круассаны</div>
<div class="tg-msg tg-msg--bot">Введите наименование товара:</div>
<div class="tg-msg tg-msg--user">Ассорти круассанов 16 шт.</div>
<div class="tg-msg tg-msg--bot">Введите цену товара:</div>
<div class="tg-msg tg-msg--user">1655</div>
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
<div class="wd-pl-vstep__title">Завершение</div>
<p class="wd-pl-vstep__desc">Бот спросит про НДС, фото (ссылку или прочерк «-») и попросит сохранить. Готово, товар в каталоге!</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RobokassaShopBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--bot">Указать НДС?</div>
<div class="tg-msg tg-msg--user">Нет</div>
<div class="tg-msg tg-msg--bot">Добавьте фото. Если не хотите, поставьте "-".</div>
<div class="tg-msg tg-msg--user">-</div>
<div class="tg-msg tg-msg--bot">
Супер! Сохраняю товар?
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">Да</button>
<button class="tg-btn">Нет</button>
</div>
</div>
</div>
<div class="tg-msg tg-msg--user">Да</div>
<div class="tg-msg tg-msg--bot">
Момент... Добавляю в список.<br><br>
<div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px; font-weight: 600;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
Список товаров:
</div>
Круассаны (1655,00) ✏️
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

## Создание счета на оплату

<div class="wd-pl-visual-steps">

<div class="wd-pl-vstep">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Выбор товаров</div>
<p class="wd-pl-vstep__desc">Нажмите «Оплата» в меню. Введите краткое и подробное описание. Затем выберите, как добавить товар: «Указать сейчас» (создать новый) или «Выбрать из списка».</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RobokassaShopBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--user">
Оплата
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div class="tg-msg tg-msg--bot">Введите краткое описание покупки:</div>
<div class="tg-msg tg-msg--user">Заказ №15</div>
<div class="tg-msg tg-msg--bot">Опишите покупку подробнее:</div>
<div class="tg-msg tg-msg--user">Набор круассанов</div>
<div class="tg-msg tg-msg--bot">
Указать сейчас или выбрать из списка товаров?
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">Указать сейчас</button>
<button class="tg-btn">Выбрать из списка</button>
</div>
</div>
</div>
<div class="tg-msg tg-msg--user">Выбрать из списка</div>
<div class="tg-msg tg-msg--bot">
Корзина товаров пуста! Выберите товар:
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">Круассаны (1655,00)</button>
</div>
</div>
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

<div class="wd-pl-vstep wd-pl-vstep--reverse">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Настройки счета</div>
<p class="wd-pl-vstep__desc">Укажите количество, добавьте фото, номер заказа (опционально) и текст для кнопки оплаты. Можно установить срок действия счета и запросить у клиента e-mail, телефон или адрес доставки.</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RobokassaShopBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--bot">Укажите количество:</div>
<div class="tg-msg tg-msg--user">1</div>
<div class="tg-msg tg-msg--bot">Напишите номер заказа (или "-"):</div>
<div class="tg-msg tg-msg--user">15</div>
<div class="tg-msg tg-msg--bot">Напишите сообщение для платежной кнопки:</div>
<div class="tg-msg tg-msg--user">Порадовать себя</div>
<div class="tg-msg tg-msg--bot">Вам потребуется e-mail клиента?</div>
<div class="tg-msg tg-msg--user">Да</div>
<div class="tg-msg tg-msg--bot">Выставляем счёт...</div>
<div class="tg-msg tg-msg--bot">
Заказ №15<br>
Набор круассанов<br>
1655,00 RUB<br><br>
Порадовать себя
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

## Ссылка для клиента (переход в @RoboClientBot)

<div class="wd-pl-visual-steps">

<div class="wd-pl-vstep">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Получение ссылки</div>
<p class="wd-pl-vstep__desc">В главном меню выберите «Настройки» → «Ссылка». Бот пришлёт уникальную ссылку на <strong>@RoboClientBot</strong>. Именно её нужно отправлять клиентам, чтобы они могли зайти в ваш магазин.</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RobokassaShopBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--user">
Настройки
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
</div>
<div class="tg-msg tg-msg--bot">
Выберите действие:
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; padding: 8px 2px; line-height: 1; white-space: nowrap !important; font-size: 11px;">
<span style="display: block; white-space: nowrap;">Ссылка</span>
<svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</button>
<button class="tg-btn" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; padding: 8px 2px; line-height: 1; white-space: nowrap !important; font-size: 11px;">
<span style="display: block; white-space: nowrap;">Меню</span>
<svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
</button>
<button class="tg-btn" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; padding: 8px 2px; line-height: 1; white-space: nowrap !important; font-size: 11px;">
<span style="display: block; white-space: nowrap;">Статус</span>
<svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</button>
</div>
</div>
</div>
<div class="tg-msg tg-msg--user">
Ссылка
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<div class="tg-msg tg-msg--bot">
По этой ссылке покупатели смогут зайти в ваш магазин в Telegram:<br><br>
<span style="color: var(--tg-btn-text); word-break: break-all;">https://t.me/RoboClientBot?start=637838...</span>
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

<div class="wd-pl-vstep wd-pl-vstep--reverse">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Сообщение после оплаты</div>
<p class="wd-pl-vstep__desc">Там же в «Настройках» можно задать «Сообщение после оплаты». Оно может быть универсальным для всех или привязанным к конкретному товару (например, если вы продаёте файлы, бот сам пришлёт их после оплаты).</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RobokassaShopBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--user">
Сообщение после оплаты
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
</div>
<div class="tg-msg tg-msg--bot">
Выберите тип сообщения после оплаты:
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">Универсальное</button>
</div>
<div class="tg-keyboard-row">
<button class="tg-btn">К конкретному товару</button>
</div>
</div>
</div>
<div class="tg-msg tg-msg--user">К конкретному товару</div>
<div class="tg-msg tg-msg--bot">Выберите товар:</div>
<div class="tg-msg tg-msg--user">Книга рецептов</div>
<div class="tg-msg tg-msg--bot">Прикрепите файл (до 5 файлов, до 2 МБ):</div>
<div class="tg-msg tg-msg--user">Книга_рецептов.pdf</div>
<div class="tg-msg tg-msg--bot">
Все верно? Нажмите «Да», чтобы сохранить.
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

## Что видит покупатель в @RoboClientBot

<div class="wd-pl-visual-steps">

<div class="wd-pl-vstep">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Витрина (Каталог)</div>
<p class="wd-pl-vstep__desc">Клиент переходит по вашей ссылке и попадает в <strong>@RoboClientBot</strong>. Там он видит список товаров, может открыть карточку с фото и описанием, и добавить в корзину.</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RoboClientBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--user">
Каталог
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
</div>
<div class="tg-msg tg-msg--bot">
Список товаров:
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">Круассаны — 1655 ₽</button>
</div>
<div class="tg-keyboard-row">
<button class="tg-btn">Брауни — 2275 ₽</button>
</div>
<div class="tg-keyboard-row">
<button class="tg-btn">Пирожные — 1945 ₽</button>
</div>
</div>
</div>
<div class="tg-msg tg-msg--user">Круассаны — 1655 ₽</div>
<div class="tg-msg tg-msg--bot">
Ассорти круассанов 16 шт.<br>1655,00 ₽
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">Добавить в корзину</button>
</div>
<div class="tg-keyboard-row">
<button class="tg-btn">Купить сейчас</button>
</div>
</div>
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

<div class="wd-pl-vstep wd-pl-vstep--reverse">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Корзина и оплата</div>
<p class="wd-pl-vstep__desc">В разделе «Корзина» клиент видит выбранные товары, может изменить количество или очистить корзину. По кнопке «Оплатить» открывается платежная форма Robokassa.</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RoboClientBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--user">
Корзина
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
</div>
<div class="tg-msg tg-msg--bot">
Ваша корзина:<br>
Круассаны - 1655,00 ₽<br>
Брауни - 2275,00 ₽<br><br>
<strong>Итого: 3930,00 ₽</strong>
<div class="tg-keyboard">
<div class="tg-keyboard-row">
<button class="tg-btn">Редактировать</button>
<button class="tg-btn">Очистить корзину</button>
</div>
<div class="tg-keyboard-row">
<button class="tg-btn" style="background: var(--tg-btn-text); color: #fff; font-weight: 600; font-size: 13px;">Оплатить</button>
</div>
</div>
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

<div class="wd-pl-vstep">
<div class="wd-pl-vstep__content">
<div class="wd-pl-vstep__title">Успешная оплата</div>
<p class="wd-pl-vstep__desc">После оплаты клиент видит подтверждение от бота, а также сообщение, которое вы настроили в админке (например, «Спасибо за покупку!» с картинкой или файлом).</p>
</div>
<div class="wd-pl-vstep__visual">
<div class="tg-phone">
<div class="tg-phone__notch"></div>
<div class="tg-screen">
<div class="tg-header">
<div class="tg-header__back">←</div>
<div class="tg-header__avatar">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<div class="tg-header__info">
<div class="tg-header__name">RoboClientBot</div>
<div class="tg-header__status">бот</div>
</div>
<div class="tg-header__menu">⋮</div>
</div>
<div class="tg-chat">
<div class="tg-msg tg-msg--bot" style="background: #d1f4d9;">
Вы успешно перевели 3930,00 RUB для RoboClientBot за robo-demo-PSB.
</div>
<div class="tg-msg tg-msg--bot">
Сообщение от продавца:<br><br>
Благодарим за покупку! Ваш заказ принят в работу.
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

## Вопросы и ответы

??? question "Как узнать, что клиент оплатил заказ через бота?"

    Есть три способа отслеживать оплаты:
    <ul>
    <li><b>В самом боте:</b> в разделе «Счета» (в админ-боте) статус оплаченного счета изменится, а в чате появится уведомление.</li>
    <li><b>В Личном кабинете:</b> оплата появится в разделе «Финансы» → «Операции и возвраты», как обычный платеж.</li>
    <li><b>С помощью @Robomerchant_bot:</b> это специальный бот для уведомлений. Вы можете подключить его в Личном кабинете Robokassa, чтобы мгновенно получать пуш-уведомления о каждом успешном платеже.</li>
    </ul>

??? question "Можно ли отредактировать или удалить уже выставленный счет?"

    Удалить счет нельзя. Однако, если вы ошиблись в сумме или товаре, вы можете <b>заблокировать</b> счет. Для этого в разделе «Счета» нажмите на иконку щита (✅). При попытке оплаты такого счета клиент получит ошибку. При необходимости счет можно разблокировать обратно.

??? question "Можно ли отправить один счет сразу нескольким клиентам?"

    Да. По умолчанию один выставленный счет (ссылку на него) можно оплатить несколько раз. Это удобно, если вы продаете одинаковые товары (например, консультацию) и хотите просто переслать одну ссылку в общий чат или несколько клиентам. Если оплата должна быть строго однократной, просто заблокируйте счет после первой оплаты.

??? question "Как найти платежи от Telegram-бота в общем списке операций в ЛК?"

    Специальных меток у таких платежей нет. Чтобы быстро находить их в Личном кабинете, при создании счета в боте в поле «Номер заказа» указывайте уникальные номера (например, <code>TG-001</code>, <code>TG-002</code>). Тогда вы сможете легко фильтровать их в разделе «Операции и возвраты».

</div>
</div>