<div class="rsplit-page">

<header class="rsplit-hero">
  <div class="rsplit-hero__header">
    <span class="rsplit-hero__badge"><span class="rsplit-label-dot"></span> Маршрутизация средств</span>
    <div class="rsplit-hero__title">Один платёж.<br><em>Много получателей.</em></div>
    <p class="rsplit-hero__desc">
      Сплитование автоматически делит оплату клиента между продавцами, партнёрами и платформой. Без ручных переводов и сверок.
    </p>
  </div>
  
  <!-- Схема на всю ширину -->
  <div class="rsplit-diagram">
    <div class="rsplit-diagram__source">
      <div class="rsplit-coin">
        <span class="rsplit-coin__value">5 000 ₽</span>
        <span class="rsplit-coin__label">Оплата клиента</span>
      </div>
    </div>
    
    <svg class="rsplit-diagram__wires" viewBox="0 0 1200 200" preserveAspectRatio="none">
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

    <div class="rsplit-diagram__targets">
      <div class="rsplit-target">
        <div class="rsplit-target__head"><span class="rsplit-target__dot" style="background:#3b82f6"></span> Продавец 1</div>
        <div class="rsplit-target__value">3 500 ₽ <span>70%</span></div>
      </div>
      <div class="rsplit-target rsplit-target--center">
        <div class="rsplit-target__head"><span class="rsplit-target__dot" style="background:#10b981"></span> Платформа</div>
        <div class="rsplit-target__value">500 ₽ <span>10%</span></div>
      </div>
      <div class="rsplit-target">
        <div class="rsplit-target__head"><span class="rsplit-target__dot" style="background:#8b5cf6"></span> Продавец 2</div>
        <div class="rsplit-target__value">1 000 ₽ <span>20%</span></div>
      </div>
    </div>
  </div>
</header>

<h2 id="use-cases">Сценарии использования</h2>

<div class="rsplit-grid">
  <div class="rsplit-card">
    <div class="rsplit-card__header">
      <span class="rsplit-card__num">01</span>
      <span class="rsplit-card__icon">🛒</span>
    </div>
    <h3>Маркетплейсы</h3>
    <p>Клиент платит один раз, а система автоматически делит сумму между продавцами и комиссией платформы.</p>
  </div>
  <div class="rsplit-card">
    <div class="rsplit-card__header">
      <span class="rsplit-card__num">02</span>
      <span class="rsplit-card__icon">🤝</span>
    </div>
    <h3>Партнёрские сети</h3>
    <p>Часть оплаты уходит партнёру (например, за лид или продажу), а часть остаётся вам как комиссия.</p>
  </div>
  <div class="rsplit-card">
    <div class="rsplit-card__header">
      <span class="rsplit-card__num">03</span>
      <span class="rsplit-card__icon">🏢</span>
    </div>
    <h3>Холдинги</h3>
    <p>Единый фронт (сайт), но разные юрлица. Robokassa сама разложит деньги по нужным счетам.</p>
  </div>
</div>

<h2 id="schemes">Схемы распределения</h2>

<div class="rsplit-terminal">
  <div class="rsplit-terminal__header">
    <span class="rsplit-terminal__title">Распределение суммы</span>
    <span class="rsplit-terminal__amount">Входящий платёж: 5 000 ₽</span>
  </div>
  
  <div class="rsplit-terminal__bar">
    <div class="rsplit-terminal__segment rsplit-terminal__segment--blue" style="width: 70%;">
      <span class="rsplit-terminal__val">3 500 ₽</span>
    </div>
    <div class="rsplit-terminal__segment rsplit-terminal__segment--emerald" style="width: 10%;">
      <span class="rsplit-terminal__val">500 ₽</span>
    </div>
    <div class="rsplit-terminal__segment rsplit-terminal__segment--violet" style="width: 20%;">
      <span class="rsplit-terminal__val">1 000 ₽</span>
    </div>
  </div>

  <div class="rsplit-terminal__grid">
    <div class="rsplit-terminal__row">
      <div class="rsplit-terminal__cell rsplit-terminal__cell--name"><span class="rsplit-dot rsplit-dot--blue"></span> Продавец 1</div>
      <div class="rsplit-terminal__cell">Доля: <b>70%</b></div>
      <div class="rsplit-terminal__cell">Сумма: <b>3 500 ₽</b></div>
    </div>
    <div class="rsplit-terminal__row">
      <div class="rsplit-terminal__cell rsplit-terminal__cell--name"><span class="rsplit-dot rsplit-dot--emerald"></span> Платформа</div>
      <div class="rsplit-terminal__cell">Комиссия: <b>10%</b></div>
      <div class="rsplit-terminal__cell">Сумма: <b>500 ₽</b></div>
    </div>
    <div class="rsplit-terminal__row">
      <div class="rsplit-terminal__cell rsplit-terminal__cell--name"><span class="rsplit-dot rsplit-dot--violet"></span> Продавец 2</div>
      <div class="rsplit-terminal__cell">Доля: <b>20%</b></div>
      <div class="rsplit-terminal__cell">Сумма: <b>1 000 ₽</b></div>
    </div>
  </div>
</div>

<h2 id="api">Как передаётся распределение</h2>

<div class="rsplit-api">
  <div class="rsplit-api__window">
    <div class="rsplit-api__header">
      <span class="rsplit-api__dot" style="background:#ff5f56"></span>
      <span class="rsplit-api__dot" style="background:#ffbd2e"></span>
      <span class="rsplit-api__dot" style="background:#27c93f"></span>
      <span class="rsplit-api__tab">POST /payment/request</span>
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

  <div class="rsplit-api__window">
    <div class="rsplit-api__header">
      <span class="rsplit-api__dot" style="background:#ff5f56"></span>
      <span class="rsplit-api__dot" style="background:#ffbd2e"></span>
      <span class="rsplit-api__dot" style="background:#27c93f"></span>
      <span class="rsplit-api__tab">200 OK — Response</span>
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

<div class="rsplit-progress-steps">
  <div class="rsplit-progress-step">
    <div class="rsplit-progress-step__circle">1</div>
    <div class="rsplit-progress-step__content">
      <h4>Согласование</h4>
      <p>Заявка через менеджера. Обсуждаем юридическую схему.</p>
    </div>
  </div>
  <div class="rsplit-progress-step">
    <div class="rsplit-progress-step__circle">2</div>
    <div class="rsplit-progress-step__content">
      <h4>Доработка API</h4>
      <p>Внедряете передачу JSON-массива Split в запрос.</p>
    </div>
  </div>
  <div class="rsplit-progress-step">
    <div class="rsplit-progress-step__circle">3</div>
    <div class="rsplit-progress-step__content">
      <h4>Обработка статусов</h4>
      <p>Настраиваете вебхуки по каждому участнику сплита.</p>
    </div>
  </div>
</div>

</div>