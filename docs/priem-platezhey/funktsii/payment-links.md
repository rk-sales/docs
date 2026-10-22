<div class="pl-page">

<header class="pl-hero">
  <div class="pl-hero__content">
    <div class="pl-hero__title">Формирование ссылок на оплату</div>
    <p class="pl-hero__desc">
      Создавайте разовые и многоразовые ссылки прямо в личном кабинете Robokassa. Отправляйте их клиентам в мессенджеры, соцсети или размещайте на сайте.
    </p>
    <div class="pl-hero__toggle" role="tablist" aria-label="Тип ссылки">
      <input type="radio" name="pl-mode" id="pl-mode-once" checked>
      <label for="pl-mode-once">Разовая</label>
      <input type="radio" name="pl-mode" id="pl-mode-multi">
      <label for="pl-mode-multi">Многоразовая</label>
    </div>
  </div>

  <div class="pl-hero__visual">
    <div class="pl-pass-card">
      
      <!-- Состояние 1: Разовая -->
      <div class="pl-pass-card__state pl-pass-card__once">
        <div class="pl-pass-header">
          <span class="pl-pass-label">Сгенерированная ссылка</span>
          <span class="pl-pass-status">Активна · 1 оплата</span>
        </div>
        <div class="pl-pass-url">
          <span>https://auth.robokassa.ru/pay/7842-A1</span>
          <button class="pl-pass-btn" type="button">Копировать</button>
        </div>
        <div class="pl-pass-meta">
          <span>Сумма: <b>5 000 ₽</b></span>
          <span>Срок: <b>7 дней</b></span>
          <span>Success: <b>SuccessUrl2</b></span>
        </div>
      </div>

      <!-- Состояние 2: Многоразовая -->
      <div class="pl-pass-card__state pl-pass-card__multi">
        <div class="pl-pass-header">
          <span class="pl-pass-label">Постоянная ссылка</span>
          <span class="pl-pass-status pl-pass-status--multi">Активна · ∞ оплат</span>
        </div>
        <div class="pl-pass-url">
          <span>https://auth.robokassa.ru/merchant/…</span>
          <button class="pl-pass-btn" type="button">Копировать</button>
        </div>
        <div class="pl-pass-meta">
          <span>Режим: <b>Кнопка на сайте</b></span>
          <span>Охват: <b>Все клиенты</b></span>
          <span>Язык: <b>auto</b></span>
        </div>
      </div>

    </div>
  </div>
</header>

<h2 id="types">Виды ссылок на оплату</h2>

<div class="pl-types-bento">
  <article class="pl-bento pl-bento--dynamic">
    <header class="pl-bento__head">
      <span class="pl-bento__badge">1×</span>
      <span class="pl-bento__tag">Разовая</span>
    </header>
    <h3 class="pl-bento__title">Динамическая ссылка</h3>
    <p class="pl-bento__desc">
      Создаётся под конкретного клиента или заказ. После успешной оплаты перестаёт работать — это гарантирует, что по ней нельзя оплатить дважды.
    </p>
    <ol class="pl-bento__steps">
      <li><b>Создайте</b> ссылку в личном кабинете и укажите сумму</li>
      <li><b>Отправьте</b> клиенту — в чат, на e-mail или в SMS</li>
      <li><b>Готово</b> — после оплаты ссылка деактивируется</li>
    </ol>
  </article>

  <article class="pl-bento pl-bento--static">
    <header class="pl-bento__head">
      <span class="pl-bento__badge">∞</span>
      <span class="pl-bento__tag">Многоразовая</span>
    </header>
    <h3 class="pl-bento__title">Статическая ссылка</h3>
    <p class="pl-bento__desc">
      Работает как «кнопка оплаты» на сайте. Каждый переход — новый платёж, а ссылку можно вставлять в соцсети, письма и рекламные материалы.
    </p>
    <ul class="pl-bento__list">
      <li>Каждый переход — отдельный платёж</li>
      <li>Настраиваются способы оплаты и язык интерфейса</li>
      <li>Подходит для лендингов, рассылок и соцсетей</li>
    </ul>
  </article>
</div>

<h2 id="settings">Дополнительные настройки</h2>

<div class="pl-inspector">
  <section class="pl-inspector__group">
    <header class="pl-inspector__head">
      <span class="pl-inspector__icon">#</span>
      <h3 class="pl-inspector__name">Идентификация</h3>
    </header>
    <dl class="pl-inspector__list">
      <div class="pl-inspector__row">
        <dt>Номер заказа</dt>
        <dd>Связывает оплату с вашим внутренним заказом или CRM</dd>
      </div>
    </dl>
  </section>

  <section class="pl-inspector__group">
    <header class="pl-inspector__head">
      <span class="pl-inspector__icon">→</span>
      <h3 class="pl-inspector__name">После оплаты</h3>
    </header>
    <dl class="pl-inspector__list">
      <div class="pl-inspector__row">
        <dt><code>SuccessUrl2</code></dt>
        <dd>Куда перенаправить клиента после успешной оплаты</dd>
      </div>
      <div class="pl-inspector__row">
        <dt><code>FailUrl2</code></dt>
        <dd>Куда перенаправить клиента, если оплата не прошла</dd>
      </div>
    </dl>
  </section>

  <section class="pl-inspector__group">
    <header class="pl-inspector__head">
      <span class="pl-inspector__icon">⏱</span>
      <h3 class="pl-inspector__name">Ограничения</h3>
    </header>
    <dl class="pl-inspector__list">
      <div class="pl-inspector__row">
        <dt>Дней на оплату</dt>
        <dd>Сколько дней ссылка остаётся активной</dd>
      </div>
      <div class="pl-inspector__row">
        <dt>Интерфейс оплаты</dt>
        <dd>Выбор языка платёжной страницы</dd>
      </div>
    </dl>
  </section>

  <section class="pl-inspector__group">
    <header class="pl-inspector__head">
      <span class="pl-inspector__icon">💬</span>
      <h3 class="pl-inspector__name">Для клиента</h3>
    </header>
    <dl class="pl-inspector__list">
      <div class="pl-inspector__row">
        <dt>Описание</dt>
        <dd>Текст для клиента на странице оплаты</dd>
      </div>
      <div class="pl-inspector__row">
        <dt>Комментарий</dt>
        <dd>Внутренняя заметка для сотрудников</dd>
      </div>
    </dl>
  </section>
</div>

<h2 id="usecases">Как использовать ссылки</h2>

<div class="pl-channels">
  <div class="pl-channel" data-hint="Вставьте ссылку в чат — клиент сразу перейдёт на оплату">
    <span class="pl-channel__icon">✈️</span>
    <span class="pl-channel__name">Telegram</span>
  </div>
  <div class="pl-channel" data-hint="Отправьте ссылку в переписке — подойдёт и для поддержки, и для продаж">
    <span class="pl-channel__icon">💬</span>
    <span class="pl-channel__name">WhatsApp</span>
  </div>
  <div class="pl-channel" data-hint="Вставьте в письмо — ссылка сохранит все параметры">
    <span class="pl-channel__icon">✉️</span>
    <span class="pl-channel__name">E-mail</span>
  </div>
  <div class="pl-channel" data-hint="Разместите как кнопку «Оплатить» на сайте">
    <span class="pl-channel__icon">🖥</span>
    <span class="pl-channel__name">Сайт</span>
  </div>
  <div class="pl-channel" data-hint="Короткая ссылка поместится даже в SMS">
    <span class="pl-channel__icon">📱</span>
    <span class="pl-channel__name">SMS</span>
  </div>
  <div class="pl-channel" data-hint="Опубликуйте как пост или в сообществе">
    <span class="pl-channel__icon">👥</span>
    <span class="pl-channel__name">ВКонтакте</span>
  </div>
</div>

</div>