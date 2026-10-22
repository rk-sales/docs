<div class="otp-page" markdown="1">
<!-- ================= HERO ================= -->
<header class="otp-hero">
<div>
<h1 class="otp-hero__title">
Рассрочка или кредит <span>ОТП Банк</span>
</h1>
<p class="otp-hero__lead">
Классический банковский продукт, встроенный в платёжную страницу Robokassa.
</p>
<p class="otp-hero__desc">
Клиент платит частями по удобному графику, а магазин — сразу получает полную стоимость заказа. Настройте режим и условия под свой бизнес.
</p>
<div class="otp-hero__actions">
<a class="otp-hero__btn otp-hero__btn--primary" href="#calc">Открыть калькулятор</a>
<a class="otp-hero__btn otp-hero__btn--ghost" href="#connect">Подключить</a>
</div>
</div>

<div class="otp-hero__widget">
<div class="otp-hero__widget-label">Текущий режим</div>
<div class="otp-hero__widget-value" data-hero-mode>Рассрочка</div>
<div class="otp-hero__widget-sub">0% переплаты для клиента</div>
<div class="otp-hero__widget-row">
<span>Сумма заказа</span>
<span data-hero-amount>12 000 ₽</span>
</div>
<div class="otp-hero__widget-row">
<span>Срок</span>
<span data-hero-term>6 месяцев</span>
</div>
<div class="otp-hero__widget-row otp-hero__widget-row--accent">
<span>Платёж в месяц</span>
<span data-hero-payment>2 000 ₽</span>
</div>
</div>
</header>

<!-- ================= КАЛЬКУЛЯТОР ================= -->
## Кредитный калькулятор {: #calc }

<div class="otp-calc">
<div class="otp-calc__head">
<div class="otp-calc__title">Параметры заказа</div>
<div class="otp-calc__mode" data-mode-switch>
<button class="otp-calc__mode-btn otp-calc__mode-btn--active" type="button" data-mode="installment">Рассрочка</button>
<button class="otp-calc__mode-btn" type="button" data-mode="credit">Кредит</button>
</div>
</div>

<div class="otp-calc__body">
<div class="otp-calc__controls">
<div class="otp-control">
<div class="otp-control__head">
<span class="otp-control__label">Сумма заказа</span>
<span class="otp-control__value" data-amount-out>12 000 ₽</span>
</div>
<input class="otp-range" type="range" min="5000" max="199999" step="1000" value="12000" data-amount-range>
<div class="otp-control__limits"><span>5 000 ₽</span><span>199 999 ₽</span></div>
</div>

<div class="otp-control">
<div class="otp-control__head">
<span class="otp-control__label">Срок</span>
<span class="otp-control__value" data-term-out>6 месяцев</span>
</div>
<input class="otp-range" type="range" min="3" max="36" step="1" value="6" data-term-range>
<div class="otp-control__limits"><span>3 мес.</span><span>36 мес.</span></div>
</div>
</div>

<div class="otp-calc__result">
<div class="otp-result-item otp-result-item--main">
<span class="otp-result-item__label">Ежемесячный платёж</span>
<span class="otp-result-item__value" data-payment-out>2 000 ₽</span>
</div>
<div class="otp-result-item">
<span class="otp-result-item__label">Переплата клиента</span>
<span class="otp-result-item__value" data-overpay-out>0 ₽</span>
</div>
<div class="otp-result-item">
<span class="otp-result-item__label">Комиссия магазина</span>
<span class="otp-result-item__value" data-commission-out>10.8% (1 296 ₽)</span>
</div>
<span class="otp-result-badge" data-mode-badge>Рассрочка · 0%</span>
</div>
</div>

<div class="otp-calc__disclaimer">
* Все суммы ориентировочные. Итоговая переплата клиента и комиссия магазина рассчитываются индивидуально в момент оформления заявки банком.
</div>
</div>

<!-- ================= ГРАФИК ================= -->
## График платежей {: #schedule }

<div class="otp-chart">
<div class="otp-chart__head">
<div class="otp-chart__title">Структура выплат</div>
<div class="otp-chart__legend">
<span><i></i> Платёж</span>
<span><i></i> Последний</span>
</div>
</div>
<div class="otp-chart__bars" data-chart></div>
</div>

<!-- ================= УСЛОВИЯ ================= -->
## Основные условия {: #terms }

<div class="otp-terms">
<div class="otp-terms__head">
<div class="otp-terms__title" data-terms-summary>Заказ 12 000 ₽ · 6 мес.</div>
<span class="otp-terms__badge" data-terms-badge>Рассрочка</span>
</div>

<div class="otp-terms__row">
<span class="otp-terms__label">Максимальная сумма</span>
<span class="otp-terms__value">199 999 ₽</span>
</div>
<div class="otp-terms__row">
<span class="otp-terms__label">Срок выплат</span>
<span class="otp-terms__value">3 — 36 месяцев</span>
</div>
<div class="otp-terms__row">
<span class="otp-terms__label">Переплата клиента</span>
<span class="otp-terms__value otp-terms__value--accent" data-term-client>0%</span>
</div>
<div class="otp-terms__row">
<span class="otp-terms__label">Комиссия магазина</span>
<span class="otp-terms__value" data-term-merchant>10.8%</span>
</div>
<div class="otp-terms__row">
<span class="otp-terms__label">Первоначальный взнос</span>
<span class="otp-terms__value">Обычно не требуется</span>
</div>
<div class="otp-terms__row">
<span class="otp-terms__label">Госуслуги</span>
<span class="otp-terms__value">Поддерживается</span>
</div>
</div>

<!-- ================= ПРЕИМУЩЕСТВА ================= -->
## Преимущества для магазина {: #why-otp }

<div class="otp-benefits">
<div class="otp-benefit">
<div class="otp-benefit__icon">₽</div>
<div class="otp-benefit__title">Полная оплата сразу</div>
<p class="otp-benefit__text">После одобрения заявки ОТП Банк перечисляет магазину всю сумму заказа.</p>
</div>
<div class="otp-benefit">
<div class="otp-benefit__icon">↗</div>
<div class="otp-benefit__title">Рост конверсии и среднего чека</div>
<p class="otp-benefit__text">Покупателю легче согласиться на дорогой товар, когда платёж разбит на месячные взносы.</p>
</div>
<div class="otp-benefit">
<div class="otp-benefit__icon">🛡</div>
<div class="otp-benefit__title">Без кредитных рисков</div>
<p class="otp-benefit__text">Все вопросы по выплатам и просрочкам банк решает напрямую с клиентом.</p>
</div>
</div>

<!-- ================= ПОДКЛЮЧЕНИЕ ================= -->
## Подключение через Robokassa {: #connect }

<div class="otp-connect">
<div>
<div class="otp-connect__title">Подключается автоматически</div>
<p class="otp-connect__text">Способ «Рассрочка / кредит ОТП Банк» активируется после активации магазина в ЛК Robokassa. В настройках можно выбрать только рассрочку, только кредит или оба варианта, а также ограничить количество месяцев по рассрочке — это помогает экономить на комиссии.</p>
</div>
<a href="https://login.robokassa.ru" target="_blank" rel="noopener" class="otp-connect__btn">В личный кабинет →</a>
</div>

<!-- ================= FAQ ================= -->
## Частые вопросы {: #faq }

<div class="otp-faq">
<details class="otp-faq__item" open>
<summary>Чем рассрочка отличается от кредита?</summary>
<div class="otp-faq__answer">
<p>При рассрочке для покупателя переплата 0% при своевременных платежах — стоимость несёт магазин. При кредите клиент платит проценты по ставке банка, а магазин вносит только минимальную комиссию 2.3%.</p>
</div>
</details>
<details class="otp-faq__item">
<summary>Можно ли включить только рассрочку или только кредит?</summary>
<div class="otp-faq__answer">
<p>Да, в настройках Robokassa доступны оба варианта. Также можно выбрать количество месяцев по рассрочке, чтобы контролировать комиссию.</p>
</div>
</details>
<details class="otp-faq__item">
<summary>Сколько времени занимает оформление?</summary>
<div class="otp-faq__answer">
<p>ОТП Банк принимает решение за несколько минут. Анкету можно заполнить вручную или через Госуслуги.</p>
</div>
</details>
<details class="otp-faq__item">
<summary>Какую сумму и срок можно оформить?</summary>
<div class="otp-faq__answer">
<p>Максимальная сумма — 199 999 ₽, срок — от 3 до 36 месяцев. Точные лимиты зависят от категории товаров и настроек продавца.</p>
</div>
</details>
<details class="otp-faq__item">
<summary>Когда магазин получает деньги?</summary>
<div class="otp-faq__answer">
<p>После одобрения заявки ОТП Банк перечисляет магазину всю сумму заказа сразу. Дальнейшие отношения — между банком и клиентом.</p>
</div>
</details>
</div>
</div>

<script>
(function () {
  const page = document.querySelector('.otp-page');
  if (!page) return;

  const amountRange = page.querySelector('[data-amount-range]');
  const termRange = page.querySelector('[data-term-range]');
  const amountOut = page.querySelector('[data-amount-out]');
  const termOut = page.querySelector('[data-term-out]');
  const paymentOut = page.querySelector('[data-payment-out]');
  const overpayOut = page.querySelector('[data-overpay-out]');
  const commissionOut = page.querySelector('[data-commission-out]');
  const modeBadge = page.querySelector('[data-mode-badge]');
  const termsBadge = page.querySelector('[data-terms-badge]');
  const termClient = page.querySelector('[data-term-client]');
  const termMerchant = page.querySelector('[data-term-merchant]');
  const termsSummary = page.querySelector('[data-terms-summary]');
  
  const heroMode = page.querySelector('[data-hero-mode]');
  const heroAmount = page.querySelector('[data-hero-amount]');
  const heroTerm = page.querySelector('[data-hero-term]');
  const heroPayment = page.querySelector('[data-hero-payment]');
  
  const chart = page.querySelector('[data-chart]');
  const modeSwitch = page.querySelector('[data-mode-switch]');
  const modeBtns = modeSwitch ? modeSwitch.querySelectorAll('[data-mode]') : [];

  let mode = 'installment'; 

  function formatRub(n) {
    return Math.round(n).toLocaleString('ru-RU') + ' ₽';
  }
  function formatRubShort(n) {
    return Math.round(n).toLocaleString('ru-RU');
  }

  // Получаем ставку комиссии для рассрочки по сроку
  function getInstallmentRate(term) {
    const rates = { 
      3: 7.7, 4: 8.5, 6: 10.8, 8: 13.1, 10: 14.9, 12: 17.0, 18: 22.53, 24: 28.4 
    };
    if (rates[term]) return rates[term];
    
    // Если срока нет в таблице, берем ближайший меньший
    const keys = Object.keys(rates).map(Number).sort((a,b)=>a-b);
    let closest = keys[0];
    for (let k of keys) {
      if (term >= k) closest = k;
    }
    // Если срок больше 24 мес, оставляем 28.4% как максимальный известный
    return rates[closest];
  }

  function calcPayment(amount, term, isCredit) {
    if (isCredit) {
      const annualRate = 0.22; // 22% годовых для кредита (пример)
      const monthlyRate = annualRate / 12;
      return amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -term));
    }
    return amount / term; // Рассрочка 0%
  }

  function renderChart(amount, term, payment, isCredit) {
    if (!chart) return;
    chart.innerHTML = '';
    
    // Чтобы график не был перегружен, группируем месяцы (макс 12 столбцов)
    const maxBars = 12;
    const step = Math.max(1, Math.ceil(term / maxBars));
    
    for (let i = 0; i < term; i += step) {
      const bar = document.createElement('div');
      bar.className = 'otp-chart__bar-wrap';
      
      const currentPayment = payment; 
      
      const value = document.createElement('span');
      value.className = 'otp-chart__bar-value';
      value.textContent = formatRubShort(currentPayment) + ' ₽';
      
      const fill = document.createElement('div');
      fill.className = 'otp-chart__bar' + (i + step >= term ? ' otp-chart__bar--last' : '');
      fill.style.height = '100%'; // Все платежи равны
      
      const label = document.createElement('span');
      label.className = 'otp-chart__bar-label';
      label.textContent = (i + 1) + ' мес.';
      
      bar.appendChild(value);
      bar.appendChild(fill);
      bar.appendChild(label);
      chart.appendChild(bar);
    }
  }

  function update() {
    const amount = parseInt(amountRange.value, 10);
    const term = parseInt(termRange.value, 10);
    const isCredit = mode === 'credit';
    
    const payment = calcPayment(amount, term, isCredit);
    const total = payment * term;
    const overpay = isCredit ? (total - amount) : 0;
    
    // Расчет комиссии
    let commissionPercent = 0;
    if (isCredit) {
      commissionPercent = 2.3;
    } else {
      commissionPercent = getInstallmentRate(term);
    }
    const commissionRub = amount * (commissionPercent / 100);

    // Обновляем UI
    amountOut.textContent = formatRub(amount);
    termOut.textContent = term + ' месяцев';
    paymentOut.textContent = formatRub(payment);
    overpayOut.textContent = isCredit ? formatRub(overpay) : '0 ₽';
    commissionOut.textContent = commissionPercent.toFixed(1) + '% (' + formatRub(commissionRub) + ')';
    
    modeBadge.textContent = isCredit ? 'Кредит · ставка банка' : 'Рассрочка · 0%';
    termsBadge.textContent = isCredit ? 'Кредит' : 'Рассрочка';
    termClient.textContent = isCredit ? 'По ставке банка' : '0%';
    termMerchant.textContent = commissionPercent.toFixed(1) + '%';
    
    termsSummary.textContent = 'Заказ ' + formatRub(amount) + ' · ' + term + ' мес.';

    heroMode.textContent = isCredit ? 'Кредит' : 'Рассрочка';
    heroAmount.textContent = formatRub(amount);
    heroTerm.textContent = term + ' месяцев';
    heroPayment.textContent = formatRub(payment);

    page.classList.toggle('is-credit', isCredit);
    modeBtns.forEach(b => b.classList.toggle('otp-calc__mode-btn--active', b.dataset.mode === mode));

    renderChart(amount, term, payment, isCredit);
  }

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      mode = btn.dataset.mode;
      update();
    });
  });

  amountRange.addEventListener('input', update);
  termRange.addEventListener('input', update);

  update();
})();
</script>