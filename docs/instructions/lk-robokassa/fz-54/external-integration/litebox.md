<div class="lb-page" markdown="1">

<div class="wd-container">
<header class="wd-hero">
<div class="wd-hero__badge">Фискализация</div>
<h1 class="wd-hero__title">Как подключить внешнюю интеграцию через LiteBox</h1>
<p class="wd-hero__desc">Сервис <b>«LiteBox»</b> — это универсальное решение для фискализации онлайн-платежей. Оно подходит как для облачных касс, так и для уже имеющихся у вас физических ККТ (смарт-терминалов, фискальных регистраторов). Вы можете подключить к нему интернет-эквайринг Robokassa и принимать платежи онлайн.</p>
</header>
</div>

## Как это работает {: #how-it-works }

<div class="wd-section-subtitle">Схема взаимодействия</div>

<div class="wd-process-line">
<div class="wd-process-card" data-step="1">
<div class="wd-process-title"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>Оплата на сайте</div>
<p class="wd-process-text">Клиент оплачивает заказ на вашем сайте через интернет-эквайринг Robokassa.</p>
</div>
<div class="wd-process-card" data-step="2">
<div class="wd-process-title"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Передача данных</div>
<p class="wd-process-text">Robokassa передает данные о платеже в сервис «LiteBox» через API.</p>
</div>
<div class="wd-process-card" data-step="3">
<div class="wd-process-title"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>Фискализация</div>
<p class="wd-process-text">Сервис формирует чек на вашей кассе (облачной или физической) и отправляет его в ФНС и покупателю.</p>
</div>
</div>

<div class="wd-lb-info-box">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
<p><b>Важно:</b> это решение подходит как для <b>облачных касс</b>, так и для <b>физических ККТ</b> (смарт-терминалов, фискальных регистраторов АТОЛ, Штрих-М и др.). Если у вас уже есть касса и вы хотите подключить к ней наш эквайринг, этот сервис поможет настроить интеграцию.</p>
</div>

## 1. Переход в раздел «Фискализация» {: #step-1 }

<div class="wd-section-subtitle">Открываем список всех решений</div>

<div class="wd-steps-guide">
<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Открываем меню</div>
<p>Войдите в личный кабинет <b>login.robokassa.ru</b>. В левом меню в блоке <b>«Управление»</b> выберите раздел <b>«Фискализация»</b>.</p>
<p>На открывшейся странице нажмите кнопку <b>«Показать все решения»</b> в правом верхнем углу.</p>
</div>
<div class="wd-guide-visual">
<div class="lk-mockup lk-mockup-sidebar">
<aside class="lk-ui-sidebar">
<div class="lk-ui-menu">
<details open>
<summary class="lk-ui-menu-title" style="color: #111827 !important;">Управление <span class="lk-ui-chevron" style="transform: rotate(-135deg); margin-bottom: -4px;"></span></summary>
<div class="lk-ui-menu-item">Сотрудники и доступ</div>
<div class="lk-ui-menu-item">Документы и шаблоны</div>
<div class="lk-ui-menu-item active lk-highlight" style="background: #eff6ff !important; color: #2563eb !important; border: 1px solid #bfdbfe !important;">Фискализация</div>
<div class="lk-ui-menu-item">Операции и возвраты</div>
</details>
</div>
</aside>
<main class="lk-ui-main" style="background: #f8f9fa; padding: 20px;">
<div class="wd-lb-topbar">
<div class="wd-lb-topbar-left">Текущее решение — <span>Самостоятельное</span></div>
<div class="lk-highlight" style="border-radius: 6px; padding: 2px;">
<button class="wd-lb-btn-outline">Показать все решения</button>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

## 2. Выбор решения {: #step-2 }

<div class="wd-section-subtitle">В списке решений выберите «Внешняя интеграция»</div>

<div class="wd-steps-guide">
<div class="wd-guide-step wd-guide-step--full">
<div class="wd-guide-visual" style="width: 100%;">
<div class="lk-mockup" style="padding: 20px;">
<div class="wd-rc-cards">
<div class="wd-rc-card">
<div class="wd-rc-card-header">
<div class="wd-rc-card-title">Robokassa Online</div>
<div class="wd-rc-badge wd-rc-badge--green">Для любых систем налогообложения (СНО)</div>
<div style="margin-top:8px;">
<span class="wd-rc-badge wd-rc-badge--yellow">Маркировка</span>
<span class="wd-rc-badge wd-rc-badge--blue">Кабинет ОФД</span>
</div>
</div>
<div class="wd-rc-card-body">Персональная облачная касса по 54-ФЗ с поддержкой любых систем налогообложения, бесплатным ОФД и простым подключением.</div>
<div class="wd-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="wd-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="wd-rc-card">
<div class="wd-rc-card-header">
<div class="wd-rc-card-title">Робочеки</div>
<div class="wd-rc-badge wd-rc-badge--green" style="background: #3b82f6;">Для малого и сезонного бизнеса</div>
<div style="margin-top:8px;"><span class="wd-rc-badge wd-rc-badge--yellow">Ограничения по СНО и видам деятельности</span></div>
</div>
<div class="wd-rc-card-body">Сервис для быстрого запуска или небольшого количества чеков, выдаваемых через облачную кассу Robokassa, где вы будете указаны поставщиком товаров или услуг.</div>
<div class="wd-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="wd-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="wd-rc-card wd-rc-card--active lk-highlight">
<div class="wd-rc-card-header">
<div class="wd-rc-card-title">Внешняя интеграция</div>
<div class="wd-rc-badge wd-rc-badge--green">Кассы от партнеров</div>
</div>
<div class="wd-rc-card-body">Подключение облачных касс от партнеров Robokassa. Вы самостоятельно заключаете договор с одним из партнеров и настраиваете интеграцию.</div>
<div class="wd-rc-card-links"><a href="#">Оферта</a></div>
<div class="wd-rc-card-footer"><button style="background: var(--lb-green); color: #fff;">Перейти с текущего</button></div>
</div>
</div>
</div>
</div>
</div>
</div>

## 3. Выбор партнера LiteBox {: #step-3 }

<div class="wd-section-subtitle">В блоке «Внешняя интеграция» выберите LiteBox</div>

<div class="wd-steps-guide">
<div class="wd-guide-step wd-guide-step--full">
<div class="wd-guide-visual" style="width: 100%;">
<div class="lk-mockup" style="padding: 20px;">
<div class="wd-lb-partners">
<div class="wd-lb-partner-card"><div class="wd-lb-partner-logo">МодульКасса</div><div class="wd-lb-partner-name">МодульКасса</div></div>
<div class="wd-lb-partner-card"><div class="wd-lb-partner-logo">МТС</div><div class="wd-lb-partner-name">МТС</div></div>
<div class="wd-lb-partner-card"><div class="wd-lb-partner-logo">ЭВОТОР</div><div class="wd-lb-partner-name">ЭВОТОР</div></div>
<div class="wd-lb-partner-card"><div class="wd-lb-partner-logo">АТОЛ</div><div class="wd-lb-partner-name">АТОЛ</div></div>
<div class="wd-lb-partner-card"><div class="wd-lb-partner-logo">Инитпро</div><div class="wd-lb-partner-name">Инитпро | касса</div></div>
<div class="wd-lb-partner-card"><div class="wd-lb-partner-logo">КОМТЕТ Касса</div><div class="wd-lb-partner-name">КОМТЕТ Касса</div></div>
<div class="wd-lb-partner-card"><div class="wd-lb-partner-logo">Первый ОФД</div><div class="wd-lb-partner-name">Первый ОФД</div></div>
<div class="wd-lb-partner-card"><div class="wd-lb-partner-logo">Бизнес.Ру</div><div class="wd-lb-partner-name">Бизнес.Ру Онлайн-Чеки</div></div>
<div class="wd-lb-partner-card active lk-highlight"><div class="wd-lb-partner-logo" style="color: #2563eb;">LiteBox</div><div class="wd-lb-partner-name">LiteBox</div></div>
</div>
</div>
</div>
</div>
</div>

## 4. Настройка интеграции {: #step-4 }

<div class="wd-section-subtitle">Введите данные из личного кабинета LiteBox</div>

<div class="wd-steps-guide">
<div class="wd-guide-step wd-guide-step--full">
<p style="margin: 0 0 15px 0; font-size: 1rem; color: var(--lb-text); font-weight: 600; text-align: left;">Заполните обязательные поля и обязательно нажмите кнопку <b>«Перейти»</b> внизу, чтобы сохранить настройки.</p>
<div class="wd-guide-visual" style="width: 100%;">
<div class="lk-mockup" style="padding: 20px;">
<div class="wd-lb-setup-form">

  <p><b>1.</b> Зарегистрируйтесь в системе «LiteBox» (если не делали этого ранее) по ссылке <a href="https://in.litebox.ru/accounts/signup/" target="_blank">in.litebox.ru/accounts/signup</a>.</p>
  <p><b>2.</b> Для приёма платежей и передачи данных в LiteBox предоставьте логин и пароль из настроек сервиса «LiteBox».</p>

  <div class="wd-lb-input-row">
    <label>Логин<span class="req">*</span></label>
    <input type="text" placeholder="От «LiteBox»">
  </div>
  <div class="wd-lb-input-row">
    <label>Пароль<span class="req">*</span></label>
    <input type="text" placeholder="От «LiteBox»">
  </div>

  <p style="margin-top: 30px;"><b>3.</b> Выберите ставку налогообложения (СНО) и ставку НДС по умолчанию, которые будут использоваться при формировании чека.</p>

  <div class="wd-lb-warning-grid">
    <div class="wd-lb-warning-text">
      <h4>Внимание! Номенклатура</h4>
      <p>С 1 февраля 2021 года по <a href="https://www.nalog.gov.ru/rn77/taxation/taxes/5570107/" target="_blank">закону</a> необходимо передавать номенклатуру в налоговую инспекцию. Для этого в кассовом чеке должны быть отражены наименования товаров и услуг, а также их количество.</p>
      <p><b>Это касается всех ИП (в том числе, на УСН, ПСН и ЕСХН).</b> Исключение составляют самозанятые, применяющие специальный налоговый режим «Налог на профессиональный доход».</p>
    </div>
    <div class="wd-lb-warning-fines">
      <h4>Штрафы</h4>
      <p>За отсутствие в чеке номенклатуры предусмотрен штраф:</p>
      <ul>
        <li>Для должностного лица — <b>3 000 ₽</b></li>
        <li>Для ИП или организации — <b>10 000 ₽</b> за каждый случай нарушения требований закона</li>
      </ul>
    </div>
  </div>

  <button class="wd-lb-expand-btn">Развернуть &gt;&gt;</button>

  <div class="wd-lb-table-wrapper" style="border: none; border-radius: 0;">
    <table class="wd-lb-table">
      <thead>
        <tr>
          <th>Название магазина</th>
          <th>ID точки продаж <span style="color:#ef4444;">*</span></th>
          <th>СНО <span style="color:#ef4444;">*</span></th>
          <th>НДС</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Тестовый магазин 1</td>
          <td><input type="text" class="wd-lb-input" placeholder="Id"></td>
          <td><select class="wd-lb-select"><option>УСН (доходы)</option></select></td>
          <td><select class="wd-lb-select"><option>Без НДС</option></select></td>
          <td class="wd-lb-check">!</td>
        </tr>
        <tr>
          <td>Интернет-магазин "Ромашка"</td>
          <td><input type="text" class="wd-lb-input" placeholder="Id"></td>
          <td><select class="wd-lb-select"><option>ОСН</option></select></td>
          <td><select class="wd-lb-select"><option>Не выбрано</option></select></td>
          <td class="wd-lb-check">!</td>
        </tr>
        <tr>
          <td>Сезонный проект</td>
          <td><input type="text" class="wd-lb-input" placeholder="Id"></td>
          <td><select class="wd-lb-select"><option>УСН (доходы)</option></select></td>
          <td><select class="wd-lb-select"><option>Без НДС</option></select></td>
          <td class="wd-lb-check">!</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="margin-top: 20px;">
    <button class="wd-lb-btn-block" style="margin-top: 0;">Перейти</button>
    <button class="wd-lb-btn-block wd-lb-btn-block--grey">Отменить</button>
  </div>

</div>
</div>
</div>
</div>
</div>

## 5. Проверка работоспособности {: #check }

<div class="wd-section-subtitle">Сделайте тестовый платёж</div>

<div class="wd-steps-guide">
<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Проверка чека</div>
<p>Проведите тестовый платёж на небольшую сумму через магазин, для которого настроена интеграция.</p>
<p>Убедитесь, что:</p>
<ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px; font-size: 1.05rem; color: var(--lb-text);">
<li>ваша касса (облачная или физическая) сформировала чек;</li>
<li>в разделе операций в ЛК Robokassa у платежа есть <b>фискальный чек</b> (или ссылка на него);</li>
<li>покупателю пришёл чек на e‑mail/SMS.</li>
</ul>
<p>Если чек не сформировался, проверьте настройки в ЛК LiteBox и корректность введённых логина, пароля и ID точки продаж.</p>
</div>
<div class="wd-guide-visual" style="display: flex; align-items: center; justify-content: center;">
<div class="wd-feature" style="max-width: 400px; text-align: center;">
<div class="wd-card-title" style="justify-content: center;">
<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
Всё работает!
</div>
<div class="wd-card-text">Чеки формируются на вашей кассе, а данные передаются в ФНС и покупателю.</div>
</div>
</div>
</div>
</div>

## Вопросы и ответы {: #faq }

<div class="wd-section-subtitle">Ответы на частые вопросы</div>

<details class="question"><summary>Подходит ли это решение для физической кассы?</summary><div class="question__content"><p>Да. «LiteBox» — это в первую очередь производитель собственных смарт-терминалов (LiteBox 5, 7, 8, AQSI 5-Ф и др.) и фискальных регистраторов (например, PAYONLINE-01-ФА). Вы можете подключить к сервису как их фирменное оборудование, так и некоторые сторонние фискальные регистраторы (ПТК Viki Print, Штрих-М, АТОЛ, Меркурий), которые есть в списке совместимости.</p></div></details>

<details class="question"><summary>Где взять Логин и Пароль для интеграции?</summary><div class="question__content"><p>Эти данные находятся в личном кабинете «LiteBox» в разделе <b>«Настройки системы»</b> (или «Интеграции»). Обычно логин и пароль совпадают с данными для входа в личный кабинет LiteBox.</p></div></details>

<details class="question"><summary>Где взять ID точки продаж?</summary><div class="question__content"><p>Этот идентификатор находится в личном кабинете «LiteBox» в разделе <b>«Управление магазином»</b> или в карточке вашей торговой точки. Скопируйте его и вставьте в соответствующее поле.</p></div></details>

<details class="question"><summary>Нужно ли покупать кассу?</summary><div class="question__content"><p>Нет, если у вас уже есть физическая касса (особенно фирменная LiteBox) или вы арендуете облачную. «LiteBox» помогает настроить интеграцию с уже имеющимся оборудованием. Если кассы нет, сервис может предложить аренду облачной кассы.</p></div></details>

<button id="lbScrollToTopBtn" class="lb-scroll-top" aria-label="Вернуться наверх">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<line x1="12" y1="19" x2="12" y2="5"></line>
<polyline points="5 12 12 5 19 12"></polyline>
</svg>
</button>

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var scrollBtn = document.getElementById('lbScrollToTopBtn');
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