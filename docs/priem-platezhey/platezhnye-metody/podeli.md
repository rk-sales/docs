<div class="pd-page" markdown="1">
<!-- Главный блок -->
<section class="pd-hero">
<div class="pd-hero__content">
<div class="pd-eyebrow">
<span class="pd-eyebrow__dot"></span>
BNPL · Оплата частями
</div>

<h2 class="pd-hero__title">
Подели —<br>
<span>плати частями, получай сразу</span>
</h2>

<p class="pd-hero__lead">
BNPL-сервис, который позволяет клиенту оплатить покупку по частям — без переплат и оформления кредита.
</p>

<p class="pd-hero__description">
Покупатель получает товар сразу, а магазин — всю сумму заказа, при этом чек и оплата проходят как обычный онлайн-платёж.
</p>

<div class="pd-hero__tags">
<span class="pd-tag">0% переплат</span>
<span class="pd-tag pd-tag--red">4 платежа по 25%</span>
<span class="pd-tag">Без кредита</span>
</div>
</div>

<div class="pd-hero__visual">
<div class="pd-phone">
<div class="pd-phone__frame">
<div class="pd-phone__notch"></div>
<div class="pd-phone__screen">
<div class="pd-screen__status">
<span>9:41</span>
<span class="pd-screen__status-icons">
<span></span><span></span><span></span>
</span>
</div>
<div class="pd-screen__header">
<button class="pd-screen__back" type="button" aria-label="Назад" data-back>←</button>
<div class="pd-screen__logo">П</div>
<div>
<div class="pd-screen__title">Подели</div>
<div class="pd-screen__subtitle">Оплата частями</div>
</div>
</div>

<!-- Экран 1: Выбор способа -->
<div class="pd-screen__body" data-screen="1">
<div class="pd-screen__hero-card">
<div class="pd-screen__amount">4 960 ₽</div>
<div class="pd-screen__caption">Заказ № 15243</div>
<div class="pd-screen__options">
<div class="pd-screen__option">
<span class="pd-screen__option-icon">💳</span>
Картой
</div>
<div class="pd-screen__option pd-screen__option--active">
<span class="pd-screen__option-icon">⚡</span>
Подели — 4 платежа по 1 240 ₽
</div>
</div>
</div>
<button class="pd-screen__cta" type="button" data-go="2">Продолжить →</button>
</div>

<!-- Экран 2: Анкета -->
<div class="pd-screen__body" data-screen="2" style="display:none;">
<div class="pd-form-field pd-form-field--filled">Иванов Иван Иванович</div>
<div class="pd-form-field pd-form-field--filled">+7 999 123-45-67</div>
<div class="pd-form-row">
<div class="pd-form-field pd-form-field--filled">•••• 4276</div>
<div class="pd-form-field pd-form-field--filled">09/28</div>
</div>
<button class="pd-screen__cta" type="button" data-go="3">Оплатить 1 240 ₽ →</button>
</div>

<!-- Экран 3: График -->
<div class="pd-screen__body" data-screen="3" style="display:none;">
<div class="pd-schedule">
<div class="pd-schedule__head">
<span>Платёж</span>
<span>Сумма</span>
</div>
<div class="pd-schedule__row pd-schedule__row--first">
<span class="pd-schedule__label">Сегодня</span>
<span class="pd-schedule__value pd-schedule__value--red">1 240 ₽</span>
</div>
<div class="pd-schedule__row">
<span class="pd-schedule__label">Через 2 недели</span>
<span class="pd-schedule__value">1 240 ₽</span>
</div>
<div class="pd-schedule__row">
<span class="pd-schedule__label">Через 4 недели</span>
<span class="pd-schedule__value">1 240 ₽</span>
</div>
<div class="pd-schedule__row">
<span class="pd-schedule__label">Через 6 недель</span>
<span class="pd-schedule__value">1 240 ₽</span>
</div>
</div>
<button class="pd-screen__cta" type="button" data-go="1">Готово ✓</button>
</div>

</div>
</div>
<div class="pd-phone__dots">
<span class="pd-phone__dot pd-phone__dot--active" data-screen="1"></span>
<span class="pd-phone__dot" data-screen="2"></span>
<span class="pd-phone__dot" data-screen="3"></span>
</div>
<div class="pd-phone__caption">Нажимайте <strong>кнопки в телефоне</strong> или точки, чтобы переключать экраны</div>
</div>
</div>
</section>

<!-- Скрипт для переключения экранов -->
<script>
(function() {
  const page = document.querySelector('.pd-page');
  if (!page) return;
  const dots = page.querySelectorAll('.pd-phone__dot');
  const bodies = page.querySelectorAll('.pd-screen__body');
  const backBtn = page.querySelector('.pd-screen__back');
  let current = '1';

  function setScreen(target) {
    current = target;
    dots.forEach(d => d.classList.toggle('pd-phone__dot--active', d.dataset.screen === target));
    bodies.forEach(b => {
      b.style.display = b.dataset.screen === target ? 'flex' : 'none';
    });
    if (backBtn) backBtn.style.display = target === '1' ? 'none' : 'flex';
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => setScreen(dot.dataset.screen));
  });

  page.querySelectorAll('[data-go]').forEach(btn => {
    btn.addEventListener('click', () => setScreen(btn.dataset.go));
  });

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      const prev = parseInt(current, 10) - 1;
      if (prev >= 1) setScreen(String(prev));
    });
  }

  setScreen('1');
})();
</script>

<!-- Как это работает -->
<div class="home-kicker" style="margin-top: 3rem;">КАК ЭТО РАБОТАЕТ</div>

## Для покупателя {: #process }

<div class="pd-process">
<div class="pd-step">
<div class="pd-step__num pd-step__num--first">01</div>
<div class="pd-title">Выбирает способ</div>
<p>На этапе оплаты клиент выбирает «Оплата частями с Подели».</p>
</div>

<div class="pd-step">
<div class="pd-step__num">02</div>
<div class="pd-title">Заполняет анкету</div>
<p>Быстро указывает ФИО, телефон и данные карты.</p>
</div>

<div class="pd-step">
<div class="pd-step__num">03</div>
<div class="pd-title">Платит 25%</div>
<p>Списывается только первый платёж — обычно четверть стоимости.</p>
</div>

<div class="pd-step pd-step--last">
<div class="pd-step__num">04</div>
<div class="pd-title">Остальное — потом</div>
<p>Раз в две недели карта автоматически списывает равные платежи.</p>
</div>
</div>


<!-- Преимущества -->
<div class="home-kicker" style="margin-top: 3rem;">ПРЕИМУЩЕСТВА ДЛЯ МАГАЗИНА</div>

## Почему это выгодно {: #why-podeli }

<div class="pd-advantages">
<div class="pd-advantage">
<div class="pd-advantage__head">
<div class="pd-title">Рост среднего чека</div>
<div class="pd-advantage__num">01</div>
</div>
<p>Клиент проще решается на более дорогие товары и доп. опции, когда платёж делится на несколько частей.</p>
<div class="pd-advantage__meter">
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg"></div>
</div>
<div class="pd-advantage__meta">
<span>Влияние</span>
<strong>Высокое</strong>
</div>
</div>

<div class="pd-advantage">
<div class="pd-advantage__head">
<div class="pd-title">Больше конверсии</div>
<div class="pd-advantage__num">02</div>
</div>
<p>Покупка «без переплат и процентов» воспринимается проще, чем кредит или рассрочка от банка.</p>
<div class="pd-advantage__meter">
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
</div>
<div class="pd-advantage__meta">
<span>Влияние</span>
<strong>Максимальное</strong>
</div>
</div>

<div class="pd-advantage">
<div class="pd-advantage__head">
<div class="pd-title">Без БКИ</div>
<div class="pd-advantage__num">03</div>
</div>
<p>Информация не фиксируется в Бюро Кредитных Историй — повышенная одобряемость в сравнении с банковскими рассрочками.</p>
<div class="pd-advantage__meter">
<div class="pd-advantage__seg pd-advantage__seg--on-soft"></div>
<div class="pd-advantage__seg pd-advantage__seg--on-soft"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
</div>
<div class="pd-advantage__meta">
<span>Влияние</span>
<strong>Среднее</strong>
</div>
</div>

<div class="pd-advantage">
<div class="pd-advantage__head">
<div class="pd-title">Оплата полной стоимости</div>
<div class="pd-advantage__num">04</div>
</div>
<p>Магазин получает оплату за заказ целиком. Риски и последующие списания берёт на себя сервис «Подели».</p>
<div class="pd-advantage__meter">
<div class="pd-advantage__seg pd-advantage__seg--on-soft"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
</div>
<div class="pd-advantage__meta">
<span>Влияние</span>
<strong>Высокое</strong>
</div>
</div>

<div class="pd-advantage">
<div class="pd-advantage__head">
<div class="pd-title">Минимум изменений</div>
<div class="pd-advantage__num">05</div>
</div>
<p>Для клиента это выглядит почти как обычная онлайн-оплата — только с выбором способа «Оплатить частями».</p>
<div class="pd-advantage__meter">
<div class="pd-advantage__seg pd-advantage__seg--on-soft"></div>
<div class="pd-advantage__seg pd-advantage__seg--on"></div>
<div class="pd-advantage__seg"></div>
<div class="pd-advantage__seg"></div>
</div>
<div class="pd-advantage__meta">
<span>Влияние</span>
<strong>Низкое</strong>
</div>
</div>
</div>


<!-- Подключение -->
<div class="home-kicker" style="margin-top: 3rem;">ПОДКЛЮЧЕНИЕ</div>

## Подключение через Robokassa {: #connect }

<div class="pd-connect">
<div class="pd-connect__days">
<div class="pd-connect__days-num">7–14</div>
<div class="pd-connect__days-label">дней</div>
</div>
<div class="pd-connect__body">
<div class="pd-title pd-title--lg">Заявка уходит автоматически</div>
<p>После активации магазина в ЛК Robokassa в «Подели» автоматически отправляется заявка на подключение. Сотрудники сервиса рассматривают её в течение 7–14 дней, по итогам на e-mail продавца приходит уведомление со статусом подключения.</p>
</div>
</div>


<!-- FAQ -->
<div class="home-kicker" style="margin-top: 3rem;">FAQ</div>

## Частые вопросы {: #faq }

<div class="pd-faq">
<div class="pd-faq__intro">
<p>Ответы на популярные вопросы о сервисе «Подели».</p>
</div>

<div class="pd-faq__list">
<details class="pd-faq__item" open>
<summary>
<span>Что такое «Подели» и как это работает?</span>
</summary>
<div class="pd-faq__answer">
«Подели» — BNPL-сервис («купи сейчас, плати потом»). Клиент оплачивает покупку по частям без переплат и оформления кредита, а магазин получает всю сумму заказа сразу.
</div>
</details>

<details class="pd-faq__item">
<summary>
<span>Сколько платит клиент в первый раз?</span>
</summary>
<div class="pd-faq__answer">
Обычно первый платёж составляет 25% стоимости заказа. Оставшаяся сумма списывается автоматически равными платежами раз в две недели.
</div>
</details>

<details class="pd-faq__item">
<summary>
<span>Когда магазин получает деньги?</span>
</summary>
<div class="pd-faq__answer">
Магазин получает полную сумму заказа сразу после оплаты — за вычетом комиссии сервиса. Все последующие списания и связанные с ними риски берёт на себя «Подели».
</div>
</details>

<details class="pd-faq__item">
<summary>
<span>Влияет ли оплата частями на кредитную историю?</span>
</summary>
<div class="pd-faq__answer">
Нет. Информация по данному виду оплат не фиксируется в Бюро Кредитных Историй. Это создаёт повышенную одобряемость в сравнении с банковскими рассрочками и кредитами.
</div>
</details>

<details class="pd-faq__item">
<summary>
<span>Сколько ждать подключения?</span>
</summary>
<div class="pd-faq__answer">
Заявка на подключение отправляется в «Подели» автоматически после активации магазина в Robokassa. Рассмотрение занимает 7–14 дней, после чего на e-mail продавца приходит уведомление о статусе.
</div>
</details>

<details class="pd-faq__item">
<summary>
<span>Нужно ли менять что-то на сайте?</span>
</summary>
<div class="pd-faq__answer">
Нет. Для покупателя это выглядит почти как обычная онлайн-оплата, только с дополнительным способом «Оплатить частями». Никаких изменений в процессе не требуется.
</div>
</details>

<details class="pd-faq__item">
<summary>
<span>Есть ли переплата для клиента?</span>
</summary>
<div class="pd-faq__answer">
Нет, сервис работает по модели 0% переплат. Клиент платит ровно столько же, сколько заплатил бы за покупку сразу.
</div>
</details>
</div>
</div>
</div>