<div class="notify-page" markdown="1">

<div class="notify-container">
<header class="notify-hero">
<div class="notify-hero__badge">Уведомления</div>
<h1 class="notify-hero__title">Как настроить уведомления по успешным платежам</h1>
<p class="notify-hero__desc">Вы можете настроить уведомления об оплатах на e-mail, в Telegram, VK и браузере, а также технические уведомления на свой сервер или CRM (через ResultURL).</p>
</header>
</div>

## 1. Уведомления на e-mail {: #email }

<div class="notify-section-subtitle">Настройка получения писем о каждой успешной оплате</div>

<div class="notify-steps-guide">

<div class="notify-guide-step">
<div class="notify-guide-text">
<div class="notify-step-heading">Переход в настройки магазина</div>
<p>Войдите в ЛК Robokassa. В левом меню найдите блок <b>«Магазины»</b>. Вам не нужно кликать на сам магазин — просто нажмите на три вертикальные точки (<b>⋮</b>) рядом с нужным магазином и выберите <b>«Настройки»</b>.</p>
</div>
<div class="notify-guide-visual">
<div class="notify-lk-mockup notify-mockup-store-list" style="min-height: 380px; display: grid; grid-template-columns: 280px 1fr;">
<aside class="notify-lk-ui-sidebar" style="padding: 0;">
<div class="notify-store-list">
<div class="notify-store-card">
<div class="notify-store-title">testshop13232</div>
<div class="notify-store-sub">ООО "Робокасса"</div>
<div class="notify-store-currency">20,07 ₽</div>
</div>
<div class="notify-store-items">
<div class="notify-store-item">
<div class="notify-store-item-info">
<div class="notify-store-item-icon" style="background: #5b68df;">1</div>
<div>
<div class="notify-store-item-name">TestShop</div>
<div class="notify-store-item-status">20,07 ₽</div>
</div>
</div>
<div class="notify-dots-wrapper">
<div class="notify-store-item-dots">⋮</div>
<div class="notify-context-menu">
<div class="notify-context-menu-item">
<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
Настройки
</div>
</div>
</div>
</div>
<div class="notify-store-item">
<div class="notify-store-item-info">
<div class="notify-store-item-icon" style="background: #f97316;">В</div>
<div>
<div class="notify-store-item-name">Второй магазин</div>
<div class="notify-store-item-status">Не активирован</div>
</div>
</div>
<div class="notify-dots-wrapper">
<div class="notify-store-item-dots">⋮</div>
</div>
</div>
</div>
</div>
</aside>
<main class="notify-lk-ui-main" style="background: #f8f9fa;"></main>
</div>
</div>
</div>

<div class="notify-guide-step">
<div class="notify-guide-text">
<div class="notify-step-heading">Технические настройки</div>
<p>В открывшемся окне перейдите на вкладку <b>«Технические настройки»</b>. Найдите блок <b>Result URL</b>.</p>
<p style="margin-top: 10px;">Выберите тип <b>Email</b> и укажите адрес электронной почты, на который хотите получать уведомления. Нажмите <b>«Сохранить»</b>.</p>
</div>
<div class="notify-guide-visual">
<div class="notify-lk-mockup" style="background: #fff;">
<div class="notify-tech-form">
<div class="notify-tabs">
<div class="notify-tab">Карточка магазина</div>
<div class="notify-tab active">Технические настройки</div>
</div>
<div class="notify-form-group">
<label>Идентификатор магазина</label>
<div class="notify-form-control"><input type="text" value="5testfine" readonly style="background: #f1f5f9; color: #94a3b8;"></div>
</div>
<div class="notify-form-group">
<label>Result URL</label>
<div class="notify-form-control notify-lk-highlight"><input type="text" value="info@mail.ru"></div>
</div>
<div class="notify-form-group">
<label>Метод отсылки данных по Result URL</label>
<div class="notify-form-control">
<div class="notify-radio-group">
<label><input type="radio" name="method"> GET</label>
<label><input type="radio" name="method"> POST</label>
<label><input type="radio" name="method" checked> Email</label>
</div>
</div>
</div>
<div style="text-align: right; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
<a href="#" style="color: #2563eb; text-decoration: none; font-size: 13px; margin-right: 20px;">Вернуться</a>
<button class="notify-btn notify-btn--green">Сохранить</button>
</div>
</div>
</div>
</div>
</div>

</div>

## 2. Уведомления в мессенджерах {: #messengers }

<div class="notify-section-subtitle">Получайте бесплатные оповещения о новых заказах</div>

<div class="notify-steps-guide">

<div class="notify-guide-step">
<div class="notify-guide-text">
<div class="notify-step-heading">Центр продаж</div>
<p>В левом меню ЛК Robokassa откройте раздел <b>«Центр продаж»</b>. Пролистайте страницу вниз до блока <b>«Подключите уведомления»</b>.</p>
<p style="margin-top: 10px;">Нажмите на кнопку нужного мессенджера, авторизуйтесь и подтвердите подписку на бота Robokassa.</p>
</div>
<div class="notify-guide-visual">
<div class="notify-lk-mockup" style="background: #f8f9fa; padding: 24px;">
<div class="notify-msg-block">
<div class="notify-msg-icon">
<svg viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
</div>
<div>
<div class="notify-msg-title">Подключите уведомления</div>
<div class="notify-msg-text">Получайте бесплатные оповещения о новых заказах в MAX, VK и в Telegram.</div>
</div>
<div class="notify-messengers">
<button class="notify-messenger-btn">
<svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> MAX
</button>
<button class="notify-messenger-btn">
<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> ВКонтакте
</button>
<button class="notify-messenger-btn notify-lk-highlight">
<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Telegram
</button>
</div>
</div>
</div>
</div>
</div>

</div>

## 3. Технические уведомления (ResultURL) {: #server }

<div class="notify-section-subtitle">Интеграция с сайтом, CRM или другой системой</div>

<div class="notify-steps-guide">

<div class="notify-guide-step">
<div class="notify-guide-text">
<div class="notify-step-heading">Настройка URL обработчика</div>
<p>Если вам нужно, чтобы о платеже узнавал ваш сайт или CRM, в разделе <b>«Технические настройки»</b> укажите адрес вашего скрипта в поле <b>Result URL</b>. Выберите метод отсылки данных: <b>POST</b> или <b>GET</b>.</p>
<p style="margin-top: 10px;">На этом адресе вам нужно будет реализовать приём параметров (OutSum, InvId и др.) и проверку контрольной суммы по правилам Robokassa.</p>
</div>
<div class="notify-guide-visual">
<div class="notify-lk-mockup" style="background: #fff;">
<div class="notify-tech-form">
<div class="notify-tabs">
<div class="notify-tab">Карточка магазина</div>
<div class="notify-tab active">Технические настройки</div>
</div>
<div class="notify-form-group">
<label>Result URL</label>
<div class="notify-form-control notify-lk-highlight"><input type="text" value="https://mysite.ru/payment/handler.php"></div>
</div>
<div class="notify-form-group">
<label>Метод отсылки данных по Result URL</label>
<div class="notify-form-control">
<div class="notify-radio-group">
<label><input type="radio" name="method2" checked> GET</label>
<label><input type="radio" name="method2"> POST</label>
<label><input type="radio" name="method2"> Email</label>
</div>
</div>
</div>
<div style="text-align: right; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
<a href="#" style="color: #2563eb; text-decoration: none; font-size: 13px; margin-right: 20px;">Вернуться</a>
<button class="notify-btn notify-btn--green">Сохранить</button>
</div>
</div>
</div>
</div>
</div>

</div>

<div class="notify-features">
<div class="notify-feature">
<div class="notify-card-title"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> Для интеграции</div>
<div class="notify-card-text">Технические уведомления — это не для человека. Уведомление получает ваш сервер, а уже он может создавать заказы, менять статусы, отправлять свои e-mail/SMS и т.п.</div>
</div>
</div>

## Вопросы и ответы {: #faq }

<div class="notify-section-subtitle">Ответы на частые вопросы</div>

<details class="notify-question"><summary>Можно ли настроить и e-mail, и Telegram одновременно?</summary><div class="notify-question__content"><p>Да. E-mail-уведомление на Result URL (тип e-mail) и уведомления через раздел «Центр продаж» работают параллельно.</p></div></details>

<details class="notify-question"><summary>Я включил e-mail через Result URL, но письма не приходят. Что проверить?</summary><div class="notify-question__content"><p>Убедитесь, что:</p><ul><li>в поле Result URL указан <b>корректный e-mail</b> и выбран тип <b>Email</b>;</li><li>оплата была <b>не тестовой</b>, а реальной (часть уведомлений в тестовом режиме не отправляется);</li><li>письма не попали в папку «СПАМ» у почтового провайдера.</li></ul></div></details>

<button id="notifyScrollToTopBtn" class="notify-scroll-top" aria-label="Вернуться наверх">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<line x1="12" y1="19" x2="12" y2="5"></line>
<polyline points="5 12 12 5 19 12"></polyline>
</svg>
</button>

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var scrollBtn = document.getElementById('notifyScrollToTopBtn');
  if (!scrollBtn) return;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      scrollBtn.classList.add('is-visible');
    } else {
      scrollBtn.classList.remove('is-visible');
    }
  });
  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
</script>