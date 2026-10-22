<div class="hd-page">

<header class="hd-hero">
  <div class="hd-hero__content">
    <div class="hd-hero__badge">
      <span class="hd-dot"></span> Безопасные платежи
    </div>
    <div class="hd-hero__title">Холдирование платежей</div>
    <p class="hd-hero__desc">
      Двухэтапный платёж по карте. Деньги сначала <b>блокируются</b> на счёте клиента, а вы решаете, когда их <b>списать</b> или <b>освободить</b>.
    </p>
  </div>
  
  <div class="hd-hero__visual">
    <div class="hd-card-mockup">
      <div class="hd-card__top">
        <span class="hd-card__brand">ROBOKASSA</span>
        <span class="hd-card__chip"></span>
      </div>
      <div class="hd-card__number">•••• •••• •••• 7842</div>
      <div class="hd-card__bottom">
        <div class="hd-card__balance">
          <span>Заблокировано</span>
          <strong>5 000 ₽</strong>
        </div>
        <div class="hd-card__status hd-card__status--hold">
          <span class="hd-dot"></span> Hold
        </div>
      </div>
      <div class="hd-card__timer">
        <div class="hd-timer-bar"></div>
      </div>
    </div>
  </div>
</header>

<h2 id="why">Зачем нужно холдирование</h2>

<div class="hd-bento">
  <div class="hd-bento-card hd-bento-card--large hd-bento-card--blue">
    <div class="hd-bento-card__bg-icon">📦</div>
    <div class="hd-bento-card__content">
      <h3 class="hd-bento-card__title">Проверка товара</h3>
      <p class="hd-bento-card__desc">Убедитесь, что товар есть на складе и готов к отправке, прежде чем списывать деньги. Идеально для интернет-магазинов с ручной сборкой заказов.</p>
    </div>
  </div>

  <div class="hd-bento-card hd-bento-card--amber">
    <div class="hd-bento-card__bg-icon">🏨</div>
    <div class="hd-bento-card__content">
      <h3 class="hd-bento-card__title">Бронирование</h3>
      <p class="hd-bento-card__desc">Заморозьте сумму как гарантию. Отели, аренда авто, прокат оборудования.</p>
    </div>
  </div>

  <div class="hd-bento-card hd-bento-card--violet">
    <div class="hd-bento-card__bg-icon">⚖️</div>
    <div class="hd-bento-card__content">
      <h3 class="hd-bento-card__title">Гибкая сумма</h3>
      <p class="hd-bento-card__desc">Спишите точную сумму после учёта доставки, веса или доп. услуг.</p>
    </div>
  </div>

  <div class="hd-bento-card hd-bento-card--green">
    <div class="hd-bento-card__bg-icon">🛡️</div>
    <div class="hd-bento-card__content">
      <h3 class="hd-bento-card__title">Меньше возвратов</h3>
      <p class="hd-bento-card__desc">Сначала проверяете заказ, потом проводите оплату. Без лишних возвратов и разбирательств.</p>
    </div>
  </div>
</div>

<h2 id="how-it-works">Как это работает</h2>

<div class="hd-pipeline">
  <div class="hd-step hd-step--blue">
    <div class="hd-step__num">1</div>
    <div class="hd-step__content">
      <h3>Предавторизация</h3>
      <p>Клиент оплачивает. Вы добавляете <code>StepByStep=true</code>. Деньги замораживаются.</p>
    </div>
  </div>
  
  <div class="hd-step hd-step--amber">
    <div class="hd-step__num">2</div>
    <div class="hd-step__content">
      <h3>Холд (до 7 дней)</h3>
      <p>Средства на карте клиента заблокированы. Заказ обрабатывается вами.</p>
    </div>
  </div>

  <div class="hd-step hd-step--green">
    <div class="hd-step__num">3</div>
    <div class="hd-step__content">
      <h3>Списание или Отмена</h3>
      <p>Отправляете API-запрос. Деньги либо списываются, либо возвращаются клиенту.</p>
    </div>
  </div>
</div>

<h2 id="integration">Подключение и API</h2>

<div class="hd-integration">
  <div class="hd-api-text">
    <ul class="hd-check-list">
      <li>Функция включается <b>по запросу</b> через менеджера Robokassa.</li>
      <li>В запрос создания платежа добавляется параметр <code>StepByStep=true</code>.</li>
      <li>Уведомления приходят на ваш <code>ResultURL</code>.</li>
      <li>Реализуются методы подтверждения (Capture) и отмены (Cancel).</li>
    </ul>
  </div>
  
  <div class="hd-code-window">
    <div class="hd-code-header">
      <span class="hd-code-dot" style="background:#ff5f56"></span>
      <span class="hd-code-dot" style="background:#ffbd2e"></span>
      <span class="hd-code-dot" style="background:#27c93f"></span>
      <span class="hd-code-title">Payment Request</span>
    </div>
    <pre><code><span class="c-code-comment">// Активация холдирования</span>
{
  <span class="c-code-key">"MerchantLogin"</span>: <span class="c-code-str">"demo"</span>,
  <span class="c-code-key">"OutSum"</span>: <span class="c-code-str">"5000.00"</span>,
  <span class="c-code-key">"StepByStep"</span>: <span class="c-code-bool">true</span>,
  <span class="c-code-key">"SignatureValue"</span>: <span class="c-code-str">"..."</span>
}</code></pre>
  </div>
</div>

<h2 id="scenario">Типичный сценарий</h2>

<div class="hd-timeline">
  <div class="hd-timeline__item">
    <div class="hd-timeline__marker"></div>
    <div class="hd-timeline__content">
      <h4>1. Клиент оформляет заказ</h4>
      <p>Оплачивает картой, средства блокируются.</p>
    </div>
  </div>
  <div class="hd-timeline__item">
    <div class="hd-timeline__marker"></div>
    <div class="hd-timeline__content">
      <h4>2. Вы проверяете заказ</h4>
      <p>Смотрите на наличие товара, корректность цены и фрод-риски.</p>
    </div>
  </div>
  <div class="hd-timeline__item hd-timeline__item--success">
    <div class="hd-timeline__marker"></div>
    <div class="hd-timeline__content">
      <h4>3. Списание (если всё ок)</h4>
      <p>Вызываете метод подтверждения — деньги зачисляются на ваш счёт.</p>
    </div>
  </div>
  <div class="hd-timeline__item hd-timeline__item--danger">
    <div class="hd-timeline__marker"></div>
    <div class="hd-timeline__content">
      <h4>4. Или Отмена (если заказ отменён)</h4>
      <p>Вызываете метод отмены — блокировка снимается, клиент может тратить деньги.</p>
    </div>
  </div>
</div>

</div>