<div class="rec-page">

<header class="rec-hero">
  <div class="rec-hero__content">
    <div class="rec-hero__badge">
      <span class="rec-dot"></span> Автоматический доход
    </div>
    <div class="rec-hero__title">Рекуррентные платежи</div>
    <p class="rec-hero__desc">
      Настройте автоматические списания с карт клиентов раз в месяц, неделю или год. Идеально для подписок, SaaS-сервисов и регулярных услуг.
    </p>
  </div>
  
  <div class="rec-hero__visual">
    <div class="rec-sub-card">
      <div class="rec-sub-card__glow"></div>
      <div class="rec-sub-card__header">
        <div class="rec-sub-card__icon">⚡</div>
        <div class="rec-sub-card__plan">
          <span class="rec-plan-name">Pro Plan</span>
          <span class="rec-plan-status">Active</span>
        </div>
      </div>
      <div class="rec-sub-card__price">
        <span class="rec-amount">2 490 ₽</span>
        <span class="rec-period">/ месяц</span>
      </div>
      <div class="rec-sub-card__progress">
        <div class="rec-progress-bar"></div>
      </div>
      <div class="rec-sub-card__footer">
        <span>Следующее списание</span>
        <strong>12 Ноя 2024</strong>
      </div>
    </div>
  </div>
</header>

<h2 id="ways">Два способа работы</h2>

<div class="rec-paths">
  <!-- Путь 1: API -->
  <div class="rec-path-card rec-path-card--dev">
    <div class="rec-path-card__header">
      <span class="rec-path-icon">⌨️</span>
      <h3>Через API (Для разработчиков)</h3>
    </div>
    <p class="rec-path-desc">Полный контроль над логикой. Вы храните данные подписки, формируете расписание и запускаете списания самостоятельно.</p>
    <ul class="rec-path-list">
      <li>Сложные тарифы и апгрейды</li>
      <li>Интеграция с вашей CRM</li>
      <li>Своя логика пауз и отмен</li>
    </ul>
    <div class="rec-code-snippet">
      <span class="c-key">POST</span> <span class="c-url">/api/recurring</span><br>
      <span class="c-key">"InvoiceId"</span>: <span class="c-str">"sub_789"</span>
    </div>
  </div>

  <!-- Путь 2: ЛК -->
  <div class="rec-path-card rec-path-card--biz">
    <div class="rec-path-card__header">
      <span class="rec-path-icon">📊</span>
      <h3>Сервис «Подписки» (Для бизнеса)</h3>
    </div>
    <p class="rec-path-desc">Готовое решение в личном кабинете. Robokassa сама хранит карты, следит за расписанием и отправляет чеки по 54-ФЗ.</p>
    <ul class="rec-path-list">
      <li>Создание тарифов в пару кликов</li>
      <li>Автоматические уведомления клиентам</li>
      <li>История списаний и ошибок</li>
    </ul>
    <div class="rec-ui-mockup">
      <div class="rec-ui-row">
        <div class="rec-ui-dot"></div> <span>Тариф "Базовый" — 990 ₽/мес</span>
      </div>
      <div class="rec-ui-row">
        <div class="rec-ui-dot"></div> <span>Тариф "Премиум" — 2490 ₽/мес</span>
      </div>
    </div>
  </div>
</div>

<h2 id="lifecycle">Жизненный цикл подписки</h2>

<div class="rec-lifecycle">
  <div class="rec-step">
    <div class="rec-step__num">1</div>
    <h4>Первый платеж</h4>
    <p>Клиент оплачивает и дает согласие на автосписания.</p>
  </div>
  <div class="rec-step">
    <div class="rec-step__num">2</div>
    <h4>Получение токена</h4>
    <p>Robokassa возвращает ID для будущих списаний.</p>
  </div>
  <div class="rec-step">
    <div class="rec-step__num">3</div>
    <h4>Автосписание</h4>
    <p>Списание происходит в назначенную дату без участия клиента.</p>
  </div>
  <div class="rec-step">
    <div class="rec-step__num">4</div>
    <h4>Отчет и чек</h4>
    <p>Вы получаете статус, клиент — фискальный чек на почту.</p>
  </div>
</div>

<h2 id="connect">Как подключить</h2>

<div class="rec-connect-box">
  <div class="rec-connect-content">
    <h3>Готовы запустить подписки?</h3>
    <p>Подайте заявку в личном кабинете. После одобрения вы сможете создавать тарифы или использовать API.</p>
    <a href="#" class="rec-btn">Перейти в Личный кабинет →</a>
  </div>
  <div class="rec-connect-visual">
    <div class="rec-check-item"><span>✓</span> Заявка одобрена</div>
    <div class="rec-check-item"><span>✓</span> Настройка тарифов</div>
    <div class="rec-check-item"><span>✓</span> Первый подписчик</div>
  </div>
</div>

</div>