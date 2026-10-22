<div class="sp-page">

<header class="sp-hero">
  <div class="sp-hero__header">
    <span class="sp-hero__badge"><span class="sp-label-dot"></span> Маршрутизация средств</span>
    <div class="sp-hero__title">Один платёж.<br><em>Много получателей.</em></div>
    <p class="sp-hero__desc">
      Сплитование автоматически делит оплату клиента между продавцами, партнёрами и платформой. Без ручных переводов и сверок.
    </p>
  </div>
  
  <!-- Схема на всю ширину -->
  <div class="sp-diagram">
    <div class="sp-diagram__source">
      <div class="sp-coin">
        <span class="sp-coin__value">5 000 ₽</span>
        <span class="sp-coin__label">Оплата клиента</span>
      </div>
    </div>
    
    <svg class="sp-diagram__wires" viewBox="0 0 1200 200" preserveAspectRatio="none">
      <defs>
        <linearGradient id="flow1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3b82f6"/>
          <stop offset="100%" stop-color="rgba(59,130,246,0.2)"/>
        </linearGradient>
        <linearGradient id="flow2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="rgba(16,185,129,0.2)"/>
        </linearGradient>
        <linearGradient id="flow3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8b5cf6"/>
          <stop offset="100%" stop-color="rgba(139,92,246,0.2)"/>
        </linearGradient>
      </defs>
      <path d="M 600,0 L 600,60 Q 600,80 580,80 L 250,80 Q 200,80 200,120 L 200,200" stroke="url(#flow1)" stroke-width="2.5" fill="none"/>
      <path d="M 600,0 L 600,200" stroke="url(#flow2)" stroke-width="2.5" fill="none"/>
      <path d="M 600,0 L 600,60 Q 600,80 620,80 L 950,80 Q 1000,80 1000,120 L 1000,200" stroke="url(#flow3)" stroke-width="2.5" fill="none"/>
    </svg>

    <div class="sp-diagram__targets">
      <div class="sp-target">
        <div class="sp-target__head"><span class="sp-target__dot" style="background:#3b82f6"></span> Продавец 1</div>
        <div class="sp-target__value">3 500 ₽ <span>70%</span></div>
      </div>
      <div class="sp-target sp-target--center">
        <div class="sp-target__head"><span class="sp-target__dot" style="background:#10b981"></span> Платформа</div>
        <div class="sp-target__value">500 ₽ <span>10%</span></div>
      </div>
      <div class="sp-target">
        <div class="sp-target__head"><span class="sp-target__dot" style="background:#8b5cf6"></span> Продавец 2</div>
        <div class="sp-target__value">1 000 ₽ <span>20%</span></div>
      </div>
    </div>
  </div>
</header>

<h2 id="use-cases">Сценарии использования</h2>

<div class="sp-grid">
  <div class="sp-card">
    <div class="sp-card__header">
      <span class="sp-card__num">01</span>
      <span class="sp-card__icon">🛒</span>
    </div>
    <h3>Маркетплейсы</h3>
    <p>Клиент платит один раз, а система автоматически делит сумму между продавцами и комиссией платформы.</p>
  </div>
  <div class="sp-card">
    <div class="sp-card__header">
      <span class="sp-card__num">02</span>
      <span class="sp-card__icon">🤝</span>
    </div>
    <h3>Партнёрские сети</h3>
    <p>Часть оплаты уходит партнёру (например, за лид или продажу), а часть остаётся вам как комиссия.</p>
  </div>
  <div class="sp-card">
    <div class="sp-card__header">
      <span class="sp-card__num">03</span>
      <span class="sp-card__icon">🏢</span>
    </div>
    <h3>Холдинги</h3>
    <p>Единый фронт (сайт), но разные юрлица. Robokassa сама разложит деньги по нужным счетам.</p>
  </div>
</div>

<h2 id="schemes">Схемы распределения</h2>

<div class="sp-terminal">
  <div class="sp-terminal__header">
    <span class="sp-terminal__title">Распределение суммы</span>
    <span class="sp-terminal__amount">Входящий платёж: 5 000 ₽</span>
  </div>
  
  <div class="sp-terminal__bar">
    <div class="sp-terminal__segment sp-terminal__segment--blue" style="width: 70%;">
      <span class="sp-terminal__val">3 500 ₽</span>
    </div>
    <div class="sp-terminal__segment sp-terminal__segment--emerald" style="width: 10%;">
      <span class="sp-terminal__val">500 ₽</span>
    </div>
    <div class="sp-terminal__segment sp-terminal__segment--violet" style="width: 20%;">
      <span class="sp-terminal__val">1 000 ₽</span>
    </div>
  </div>

  <div class="sp-terminal__grid">
    <div class="sp-terminal__row">
      <div class="sp-terminal__cell sp-terminal__cell--name"><span class="sp-dot sp-dot--blue"></span> Продавец 1</div>
      <div class="sp-terminal__cell">Доля: <b>70%</b></div>
      <div class="sp-terminal__cell">Сумма: <b>3 500 ₽</b></div>
    </div>
    <div class="sp-terminal__row">
      <div class="sp-terminal__cell sp-terminal__cell--name"><span class="sp-dot sp-dot--emerald"></span> Платформа</div>
      <div class="sp-terminal__cell">Комиссия: <b>10%</b></div>
      <div class="sp-terminal__cell">Сумма: <b>500 ₽</b></div>
    </div>
    <div class="sp-terminal__row">
      <div class="sp-terminal__cell sp-terminal__cell--name"><span class="sp-dot sp-dot--violet"></span> Продавец 2</div>
      <div class="sp-terminal__cell">Доля: <b>20%</b></div>
      <div class="sp-terminal__cell">Сумма: <b>1 000 ₽</b></div>
    </div>
  </div>
</div>

<h2 id="api">Как передаётся распределение</h2>

<div class="sp-api">
  <div class="sp-api__window">
    <div class="sp-api__header">
      <span class="sp-api__dot" style="background:#ff5f56"></span>
      <span class="sp-api__dot" style="background:#ffbd2e"></span>
      <span class="sp-api__dot" style="background:#27c93f"></span>
      <span class="sp-api__tab">POST /payment/request</span>
    </div>
    <pre><code>{
  <span class="c-key">"InvoiceId"</span>: <span class="c-str">"order_987"</span>,
  <span class="c-key">"OutSum"</span>: <span class="c-str">"5000.00"</span>,
  <span class="c-key">"Split"</span>: [
    { <span class="c-key">"Merchant"</span>: <span class="c-str">"seller_1"</span>, <span class="c-key">"Percent"</span>: <span class="c-num">70</span> },
    { <span class="c-key">"Merchant"</span>: <span class="c-str">"platform"</span>, <span class="c-key">"Sum"</span>: <span class="c-str">"500.00"</span> },
    { <span class="c-key">"Merchant"</span>: <span class="c-str">"seller_2"</span>, <span class="c-key">"Percent"</span>: <span class="c-num">20</span> }
  ]
}</code></pre>
  </div>

  <div class="sp-api__window">
    <div class="sp-api__header">
      <span class="sp-api__dot" style="background:#ff5f56"></span>
      <span class="sp-api__dot" style="background:#ffbd2e"></span>
      <span class="sp-api__dot" style="background:#27c93f"></span>
      <span class="sp-api__tab">200 OK — Response</span>
    </div>
    <pre><code>{
  <span class="c-key">"ResultCode"</span>: <span class="c-num">0</span>,
  <span class="c-key">"Status"</span>: <span class="c-str">"success"</span>,
  <span class="c-key">"Split"</span>: {
    <span class="c-key">"seller_1"</span>: { <span class="c-key">"status"</span>: <span class="c-str">"paid"</span>, <span class="c-key">"sum"</span>: <span class="c-num">3500</span> },
    <span class="c-key">"platform"</span>: { <span class="c-key">"status"</span>: <span class="c-str">"paid"</span>, <span class="c-key">"sum"</span>: <span class="c-num">500</span> },
    <span class="c-key">"seller_2"</span>: { <span class="c-key">"status"</span>: <span class="c-str">"paid"</span>, <span class="c-key">"sum"</span>: <span class="c-num">1000</span> }
  }
}</code></pre>
  </div>
</div>

<h2 id="connect">Подключение</h2>

<div class="sp-progress-steps">
  <div class="sp-progress-step">
    <div class="sp-progress-step__circle">1</div>
    <div class="sp-progress-step__content">
      <h4>Согласование</h4>
      <p>Заявка через менеджера. Обсуждаем юридическую схему.</p>
    </div>
  </div>
  <div class="sp-progress-step">
    <div class="sp-progress-step__circle">2</div>
    <div class="sp-progress-step__content">
      <h4>Доработка API</h4>
      <p>Внедряете передачу JSON-массива Split в запрос.</p>
    </div>
  </div>
  <div class="sp-progress-step">
    <div class="sp-progress-step__circle">3</div>
    <div class="sp-progress-step__content">
      <h4>Обработка статусов</h4>
      <p>Настраиваете вебхуки по каждому участнику сплита.</p>
    </div>
  </div>
</div>

</div>