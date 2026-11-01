<div class="mtskassa-page" markdown="1">

<div class="mtskassa-container">
<header class="mtskassa-hero">
<div class="mtskassa-hero__badge">Фискализация</div>
<h1 class="mtskassa-hero__title">Как подключить внешнюю интеграцию через МТС Касса</h1>
<p class="mtskassa-hero__desc">Сервис <b>«МТС Касса»</b> — это облачное решение для автоматизации торговли и фискализации платежей. Оно подходит для <b>облачных касс</b> (на платформе LiteBox) и <b>физических смарт-терминалов MSPOS</b> от МТС. Вы можете подключить к нему интернет-эквайринг Robokassa и принимать платежи онлайн.</p>
</header>
</div>

## Как это работает {: #how-it-works }

<div class="mtskassa-section-subtitle">Схема взаимодействия</div>

<div class="mtskassa-process-line">
<div class="mtskassa-process-card" data-step="1">
<div class="mtskassa-process-title"><svg width="24" height="24" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>Оплата на сайте</div>
<p class="mtskassa-process-text">Клиент оплачивает заказ на вашем сайте через интернет-эквайринг Robokassa.</p>
</div>
<div class="mtskassa-process-card" data-step="2">
<div class="mtskassa-process-title"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Передача данных</div>
<p class="mtskassa-process-text">Robokassa передает данные о платеже в сервис «МТС Касса» через API.</p>
</div>
<div class="mtskassa-process-card" data-step="3">
<div class="mtskassa-process-title"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>Фискализация</div>
<p class="mtskassa-process-text">Сервис формирует чек на вашей облачной кассе или терминале MSPOS и отправляет его в ФНС и покупателю.</p>
</div>
</div>

<div class="mtskassa-info-box">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
<p><b>Важно:</b> «МТС Касса» работает с <b>облачными кассами</b> (на платформе LiteBox) и <b>физическими смарт-терминалами MSPOS</b> (модели K, 5, 10, 12 и др.). Если у вас уже есть терминал MSPOS или вы арендуете облачную кассу у МТС, этот сервис поможет настроить интеграцию с эквайрингом Robokassa.</p>
</div>

## 1. Переход в раздел «Фискализация» {: #step-1 }

<div class="mtskassa-section-subtitle">Открываем список всех решений</div>

<div class="mtskassa-steps-guide">
<div class="mtskassa-guide-step">
<div class="mtskassa-guide-text">
<div class="mtskassa-step-heading">Открываем меню</div>
<p>Войдите в личный кабинет <b>login.robokassa.ru</b>. В левом меню в блоке <b>«Управление»</b> выберите раздел <b>«Фискализация»</b>.</p>
<p>На открывшейся странице нажмите кнопку <b>«Показать все решения»</b> в правом верхнем углу.</p>
</div>
<div class="mtskassa-guide-visual">
<div class="mtskassa-mockup mtskassa-mockup-sidebar">
<aside class="mtskassa-ui-sidebar">
<div class="mtskassa-ui-menu">
<details open>
<summary class="mtskassa-ui-menu-title" style="color: #111827 !important;">Управление <span class="mtskassa-ui-chevron" style="transform: rotate(-135deg); margin-bottom: -4px;"></span></summary>
<div class="mtskassa-ui-menu-item">Сотрудники и доступ</div>
<div class="mtskassa-ui-menu-item">Документы и шаблоны</div>
<div class="mtskassa-ui-menu-item active mtskassa-highlight" style="background: #eff6ff !important; color: #2563eb !important; border: 1px solid #bfdbfe !important;">Фискализация</div>
<div class="mtskassa-ui-menu-item">Операции и возвраты</div>
</details>
</div>
</aside>
<main class="mtskassa-ui-main" style="background: #f8f9fa; padding: 20px;">
<div class="mtskassa-topbar">
<div class="mtskassa-topbar-left">Текущее решение — <span>Самостоятельное</span></div>
<div class="mtskassa-highlight" style="border-radius: 6px; padding: 2px;">
<button class="mtskassa-btn-outline">Показать все решения</button>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

## 2. Выбор решения {: #step-2 }

<div class="mtskassa-section-subtitle">В списке решений выберите «Внешняя интеграция»</div>

<div class="mtskassa-steps-guide">
<div class="mtskassa-guide-step mtskassa-guide-step--full">
<div class="mtskassa-guide-visual" style="width: 100%;">
<div class="mtskassa-mockup" style="padding: 20px;">
<div class="mtskassa-rc-cards">
<div class="mtskassa-rc-card">
<div class="mtskassa-rc-card-header">
<div class="mtskassa-rc-card-title">Robokassa Online</div>
<div class="mtskassa-rc-badge mtskassa-rc-badge--green">Для любых систем налогообложения (СНО)</div>
<div style="margin-top:8px;">
<span class="mtskassa-rc-badge mtskassa-rc-badge--yellow">Маркировка</span>
<span class="mtskassa-rc-badge mtskassa-rc-badge--blue">Кабинет ОФД</span>
</div>
</div>
<div class="mtskassa-rc-card-body">Персональная облачная касса по 54-ФЗ с поддержкой любых систем налогообложения, бесплатным ОФД и простым подключением.</div>
<div class="mtskassa-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="mtskassa-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="mtskassa-rc-card">
<div class="mtskassa-rc-card-header">
<div class="mtskassa-rc-card-title">Робочеки</div>
<div class="mtskassa-rc-badge mtskassa-rc-badge--green" style="background: #3b82f6;">Для малого и сезонного бизнеса</div>
<div style="margin-top:8px;"><span class="mtskassa-rc-badge mtskassa-rc-badge--yellow">Ограничения по СНО и видам деятельности</span></div>
</div>
<div class="mtskassa-rc-card-body">Сервис для быстрого запуска или небольшого количества чеков, выдаваемых через облачную кассу Robokassa, где вы будете указаны поставщиком товаров или услуг.</div>
<div class="mtskassa-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="mtskassa-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="mtskassa-rc-card mtskassa-rc-card--active mtskassa-highlight">
<div class="mtskassa-rc-card-header">
<div class="mtskassa-rc-card-title">Внешняя интеграция</div>
<div class="mtskassa-rc-badge mtskassa-rc-badge--green">Кассы от партнеров</div>
</div>
<div class="mtskassa-rc-card-body">Подключение облачных касс от партнеров Robokassa. Вы самостоятельно заключаете договор с одним из партнеров и настраиваете интеграцию.</div>
<div class="mtskassa-rc-card-links"><a href="#">Оферта</a></div>
<div class="mtskassa-rc-card-footer"><button style="background: var(--mtskassa-green); color: #fff;">Перейти с текущего</button></div>
</div>
</div>
</div>
</div>
</div>
</div>

## 3. Выбор партнера МТС Касса {: #step-3 }

<div class="mtskassa-section-subtitle">В блоке «Внешняя интеграция» выберите МТС Касса</div>

<div class="mtskassa-steps-guide">
<div class="mtskassa-guide-step mtskassa-guide-step--full">
<div class="mtskassa-guide-visual" style="width: 100%;">
<div class="mtskassa-mockup" style="padding: 20px;">
<div class="mtskassa-partners">
<div class="mtskassa-partner-card"><div class="mtskassa-partner-logo">Первый ОФД</div><div class="mtskassa-partner-name">Первый ОФД</div></div>
<div class="mtskassa-partner-card"><div class="mtskassa-partner-logo">МодульКасса</div><div class="mtskassa-partner-name">МодульКасса</div></div>
<div class="mtskassa-partner-card"><div class="mtskassa-partner-logo">LiteBox</div><div class="mtskassa-partner-name">LiteBox</div></div>
<div class="mtskassa-partner-card"><div class="mtskassa-partner-logo">ЭВОТОР</div><div class="mtskassa-partner-name">ЭВОТОР</div></div>
<div class="mtskassa-partner-card"><div class="mtskassa-partner-logo">Бизнес.Ру</div><div class="mtskassa-partner-name">Бизнес.Ру</div></div>
<div class="mtskassa-partner-card"><div class="mtskassa-partner-logo">АТОЛ</div><div class="mtskassa-partner-name">АТОЛ</div></div>
<div class="mtskassa-partner-card"><div class="mtskassa-partner-logo">Инитпро</div><div class="mtskassa-partner-name">Инитпро | касса</div></div>
<div class="mtskassa-partner-card"><div class="mtskassa-partner-logo">КОМТЕТ Касса</div><div class="mtskassa-partner-name">КОМТЕТ Касса</div></div>
<div class="mtskassa-partner-card active mtskassa-highlight"><div class="mtskassa-partner-logo" style="color: #2563eb;">МТС Касса</div><div class="mtskassa-partner-name">МТС Касса</div></div>
</div>
</div>
</div>
</div>
</div>

## 4. Настройка интеграции {: #step-4 }

<div class="mtskassa-section-subtitle">Введите данные из личного кабинета МТС Касса</div>

<div class="mtskassa-steps-guide">
<div class="mtskassa-guide-step mtskassa-guide-step--full">
<p style="margin: 0 0 15px 0; font-size: 1rem; color: var(--mtskassa-text); font-weight: 600; text-align: left;">Заполните обязательные поля и обязательно нажмите кнопку <b>«Перейти»</b> внизу, чтобы сохранить настройки.</p>
<div class="mtskassa-guide-visual" style="width: 100%;">
<div class="mtskassa-mockup" style="padding: 20px;">
<div class="mtskassa-setup-form">

  <p><b>1.</b> Зарегистрируйтесь в системе «МТС Касса» (если не делали этого ранее) на официальном сайте или в приложении.</p>
  <p><b>2.</b> Для приёма платежей и передачи данных в «МТС Касса» предоставьте данные из личного кабинета.</p>

  <div class="mtskassa-input-row">
    <label>Логин<span class="req">*</span></label>
    <input type="text" placeholder="7...@litebox.ru">
  </div>
  <div class="mtskassa-input-row">
    <label>Пароль<span class="req">*</span></label>
    <input type="text" placeholder="Пароль от ЛК">
  </div>
  <div class="mtskassa-input-row">
    <label>ID магазина<span class="req">*</span></label>
    <input type="text" placeholder="ID из ЛК МТС Касса">
  </div>

  <p style="margin-top: 30px;"><b>3.</b> Уточните систему налогообложения (СНО) и ставку НДС, которые будут использоваться при формировании чека по умолчанию.</p>

  <div class="mtskassa-warning-grid">
    <div class="mtskassa-warning-text">
      <h4>Внимание! Номенклатура</h4>
      <p>С 1 февраля 2021 года по <a href="https://www.nalog.gov.ru/rn77/taxation/taxes/5570107/" target="_blank">закону</a> необходимо передавать номенклатуру в налоговую инспекцию. Для этого в кассовом чеке должны быть отражены наименования товаров и услуг, а также их количество.</p>
      <p><b>Это касается всех ИП (в том числе, на УСН, ПСН и ЕСХН).</b> Исключение составляют самозанятые, применяющие специальный налоговый режим «Налог на профессиональный доход».</p>
    </div>
    <div class="mtskassa-warning-fines">
      <h4>Штрафы</h4>
      <p>За отсутствие в чеке номенклатуры предусмотрен штраф:</p>
      <ul>
        <li>Для должностного лица — <b>3 000 ₽</b></li>
        <li>Для ИП или организации — <b>10 000 ₽</b> за каждый случай нарушения требований закона</li>
      </ul>
    </div>
  </div>

  <div class="mtskassa-table-wrapper">
    <table class="mtskassa-table">
      <thead>
        <tr>
          <th>Название магазина</th>
          <th>Метод платежа</th>
          <th>Предмет расчёта</th>
          <th>ID магазина <span style="color:#ef4444;">*</span></th>
          <th>СНО <span style="color:#ef4444;">*</span></th>
          <th>НДС</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Тестовый магазин 1</td>
          <td><select class="mtskassa-select"><option>Полный расчёт</option></select></td>
          <td><select class="mtskassa-select"><option>Услуга</option></select></td>
          <td><input type="text" class="mtskassa-input" placeholder="ID магазина"></td>
          <td><select class="mtskassa-select"><option>УСН (доходы)</option></select></td>
          <td><select class="mtskassa-select"><option>Без НДС</option></select></td>
        </tr>
        <tr>
          <td>Интернет-магазин "Ромашка"</td>
          <td><select class="mtskassa-select"><option>Полный расчёт</option></select></td>
          <td><select class="mtskassa-select"><option>Товар</option></select></td>
          <td><input type="text" class="mtskassa-input" placeholder="ID магазина"></td>
          <td><select class="mtskassa-select"><option>ОСН</option></select></td>
          <td><select class="mtskassa-select"><option>Не выбрано</option></select></td>
        </tr>
        <tr>
          <td>Сезонный проект</td>
          <td><select class="mtskassa-select"><option>Полный расчёт</option></select></td>
          <td><select class="mtskassa-select"><option>Платёж</option></select></td>
          <td><input type="text" class="mtskassa-input" placeholder="ID магазина"></td>
          <td><select class="mtskassa-select"><option>УСН (доходы)</option></select></td>
          <td><select class="mtskassa-select"><option>Без НДС</option></select></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="margin-top: 20px;">
    <button class="mtskassa-btn-block">Перейти</button>
    <button class="mtskassa-btn-block mtskassa-btn-block--grey">Отменить</button>
  </div>

</div>
</div>
</div>
</div>
</div>

## 5. Проверка работоспособности {: #check }

<div class="mtskassa-section-subtitle">Сделайте тестовый платёж</div>

<div class="mtskassa-steps-guide">
<div class="mtskassa-guide-step">
<div class="mtskassa-guide-text">
<div class="mtskassa-step-heading">Проверка чека</div>
<p>Проведите тестовый платёж на небольшую сумму через магазин, для которого настроена интеграция.</p>
<p>Убедитесь, что:</p>
<ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px; font-size: 1.05rem; color: var(--mtskassa-text);">
<li>ваша облачная касса или терминал MSPOS сформировал чек;</li>
<li>в разделе операций в ЛК Robokassa у платежа есть <b>фискальный чек</b> (или ссылка на него);</li>
<li>покупателю пришёл чек на e‑mail/SMS.</li>
</ul>
<p>Если чек не сформировался, проверьте настройки в ЛК МТС Касса и корректность введённых логина, пароля и ID магазина.</p>
</div>
<div class="mtskassa-guide-visual" style="display: flex; align-items: center; justify-content: center;">
<div class="mtskassa-feature" style="max-width: 400px; text-align: center;">
<div class="mtskassa-card-title" style="justify-content: center;">
<svg width="20" height="20" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
Всё работает!
</div>
<div class="mtskassa-card-text">Чеки формируются на вашей кассе, а данные передаются в ФНС и покупателю.</div>
</div>
</div>
</div>
</div>

## Вопросы и ответы {: #faq }

<div class="mtskassa-section-subtitle">Ответы на частые вопросы</div>

<details class="mtskassa-question"><summary>Какие кассы поддерживает «МТС Касса»?</summary><div class="mtskassa-question__content"><p>Сервис работает с <b>облачными кассами</b> (на платформе LiteBox) и <b>физическими смарт-терминалами MSPOS</b> (модели K, 5, 10, 12 и другие). Поддержки сторонних ККТ (АТОЛ, Штрих-М, Эвотор) через этот сервис нет.</p></div></details>

<details class="mtskassa-question"><summary>В каком формате указывать логин?</summary><div class="mtskassa-question__content"><p>Используйте логин администратора товароучетной системы «МТС Касса». Если вы регистрировались по номеру телефона, он будет в формате <b>7...@litebox.ru</b>. Например, если ваш номер 79123456789, логин будет <code>79123456789@litebox.ru</code>.</p></div></details>

<details class="mtskassa-question"><summary>Где взять ID магазина?</summary><div class="mtskassa-question__content"><p>ID магазина находится в личном кабинете «МТС Касса» в разделе <b>«Настройки системы»</b> или в карточке магазина. Скопируйте его и вставьте в соответствующее поле.</p></div></details>

<details class="mtskassa-question"><summary>Что делать, если интеграция не подключается?</summary><div class="mtskassa-question__content"><p>Убедитесь, что в ЛК «МТС Касса» включена настройка <b>«Касса для интернет-магазина»</b>, а система налогообложения (СНО) в Robokassa совпадает с той, что указана в МТС Кассе и на которой фискализирована касса. Также проведите тестовую оплату, чтобы статус интеграции обновился.</p></div></details>

<details class="mtskassa-question"><summary>Нужно ли покупать кассу?</summary><div class="mtskassa-question__content"><p>Нет, если вы арендуете облачную кассу у МТС или у вас уже есть смарт-терминал MSPOS. «МТС Касса» помогает настроить интеграцию с этим оборудованием. Если кассы нет, сервис может предложить аренду облачной кассы.</p></div></details>

<button id="mtskassaScrollToTopBtn" class="mtskassa-scroll-top" aria-label="Вернуться наверх">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<line x1="12" y1="19" x2="12" y2="5"></line>
<polyline points="5 12 12 5 19 12"></polyline>
</svg>
</button>

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var scrollBtn = document.getElementById('mtskassaScrollToTopBtn');
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