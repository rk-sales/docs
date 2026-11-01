<div class="mkassa-page" markdown="1">

<div class="mkassa-container">
<header class="mkassa-hero">
<div class="mkassa-hero__badge">Фискализация</div>
<h1 class="mkassa-hero__title">Как подключить внешнюю интеграцию через МодульКасса</h1>
<p class="mkassa-hero__desc">Сервис <b>«МодульКасса»</b> — это универсальное решение для фискализации онлайн-платежей. Оно подходит как для облачных касс, так и для уже имеющихся у вас физических ККТ (смарт-терминалов, фискальных регистраторов). Вы можете подключить к нему интернет-эквайринг Robokassa и принимать платежи онлайн.</p>
</header>
</div>

## Как это работает {: #how-it-works }

<div class="mkassa-section-subtitle">Схема взаимодействия</div>

<div class="mkassa-process-line">
<div class="mkassa-process-card" data-step="1">
<div class="mkassa-process-title"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>Оплата на сайте</div>
<p class="mkassa-process-text">Клиент оплачивает заказ на вашем сайте через интернет-эквайринг Robokassa.</p>
</div>
<div class="mkassa-process-card" data-step="2">
<div class="mkassa-process-title"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Передача данных</div>
<p class="mkassa-process-text">Robokassa передает данные о платеже в сервис «МодульКасса» через API.</p>
</div>
<div class="mkassa-process-card" data-step="3">
<div class="mkassa-process-title"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>Фискализация</div>
<p class="mkassa-process-text">Сервис формирует чек на вашей кассе (облачной или физической) и отправляет его в ФНС и покупателю.</p>
</div>
</div>

<div class="mkassa-info-box">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
<p><b>Важно:</b> это решение подходит как для <b>облачных касс</b>, так и для <b>физических ККТ</b> (АТОЛ, Штрих-М, Эвотор и др.). Если у вас уже есть касса и вы хотите подключить к ней наш эквайринг, этот сервис поможет настроить интеграцию.</p>
</div>

## 1. Переход в раздел «Фискализация» {: #step-1 }

<div class="mkassa-section-subtitle">Открываем список всех решений</div>

<div class="mkassa-steps-guide">
<div class="mkassa-guide-step">
<div class="mkassa-guide-text">
<div class="mkassa-step-heading">Открываем меню</div>
<p>Войдите в личный кабинет <b>login.robokassa.ru</b>. В левом меню в блоке <b>«Управление»</b> выберите раздел <b>«Фискализация»</b>.</p>
<p>На открывшейся странице нажмите кнопку <b>«Показать все решения»</b> в правом верхнем углу.</p>
</div>
<div class="mkassa-guide-visual">
<div class="mkassa-mockup mkassa-mockup-sidebar">
<aside class="mkassa-ui-sidebar">
<div class="mkassa-ui-menu">
<details open>
<summary class="mkassa-ui-menu-title" style="color: #111827 !important;">Управление <span class="mkassa-ui-chevron" style="transform: rotate(-135deg); margin-bottom: -4px;"></span></summary>
<div class="mkassa-ui-menu-item">Сотрудники и доступ</div>
<div class="mkassa-ui-menu-item">Документы и шаблоны</div>
<div class="mkassa-ui-menu-item active mkassa-highlight" style="background: #eff6ff !important; color: #2563eb !important; border: 1px solid #bfdbfe !important;">Фискализация</div>
<div class="mkassa-ui-menu-item">Операции и возвраты</div>
</details>
</div>
</aside>
<main class="mkassa-ui-main" style="background: #f8f9fa; padding: 20px;">
<div class="mkassa-topbar">
<div class="mkassa-topbar-left">Текущее решение — <span>Самостоятельное</span></div>
<div class="mkassa-highlight" style="border-radius: 6px; padding: 2px;">
<button class="mkassa-btn-outline">Показать все решения</button>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

## 2. Выбор решения {: #step-2 }

<div class="mkassa-section-subtitle">В списке решений выберите «Внешняя интеграция»</div>

<div class="mkassa-steps-guide">
<div class="mkassa-guide-step mkassa-guide-step--full">
<div class="mkassa-guide-visual" style="width: 100%;">
<div class="mkassa-mockup" style="padding: 20px;">
<div class="mkassa-rc-cards">
<div class="mkassa-rc-card">
<div class="mkassa-rc-card-header">
<div class="mkassa-rc-card-title">Robokassa Online</div>
<div class="mkassa-rc-badge mkassa-rc-badge--green">Для любых систем налогообложения (СНО)</div>
<div style="margin-top:8px;">
<span class="mkassa-rc-badge mkassa-rc-badge--yellow">Маркировка</span>
<span class="mkassa-rc-badge mkassa-rc-badge--blue">Кабинет ОФД</span>
</div>
</div>
<div class="mkassa-rc-card-body">Персональная облачная касса по 54-ФЗ с поддержкой любых систем налогообложения, бесплатным ОФД и простым подключением.</div>
<div class="mkassa-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="mkassa-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="mkassa-rc-card">
<div class="mkassa-rc-card-header">
<div class="mkassa-rc-card-title">Робочеки</div>
<div class="mkassa-rc-badge mkassa-rc-badge--green" style="background: #3b82f6;">Для малого и сезонного бизнеса</div>
<div style="margin-top:8px;"><span class="mkassa-rc-badge mkassa-rc-badge--yellow">Ограничения по СНО и видам деятельности</span></div>
</div>
<div class="mkassa-rc-card-body">Сервис для быстрого запуска или небольшого количества чеков, выдаваемых через облачную кассу Robokassa, где вы будете указаны поставщиком товаров или услуг.</div>
<div class="mkassa-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="mkassa-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="mkassa-rc-card mkassa-rc-card--active mkassa-highlight">
<div class="mkassa-rc-card-header">
<div class="mkassa-rc-card-title">Внешняя интеграция</div>
<div class="mkassa-rc-badge mkassa-rc-badge--green">Кассы от партнеров</div>
</div>
<div class="mkassa-rc-card-body">Подключение облачных касс от партнеров Robokassa. Вы самостоятельно заключаете договор с одним из партнеров и настраиваете интеграцию.</div>
<div class="mkassa-rc-card-links"><a href="#">Оферта</a></div>
<div class="mkassa-rc-card-footer"><button style="background: var(--mkassa-green); color: #fff;">Перейти с текущего</button></div>
</div>
</div>
</div>
</div>
</div>
</div>

## 3. Выбор партнера МодульКасса {: #step-3 }

<div class="mkassa-section-subtitle">В блоке «Внешняя интеграция» выберите МодульКасса</div>

<div class="mkassa-steps-guide">
<div class="mkassa-guide-step mkassa-guide-step--full">
<div class="mkassa-guide-visual" style="width: 100%;">
<div class="mkassa-mockup" style="padding: 20px;">
<div class="mkassa-partners">
<div class="mkassa-partner-card"><div class="mkassa-partner-logo">МТС</div><div class="mkassa-partner-name">МТС</div></div>
<div class="mkassa-partner-card"><div class="mkassa-partner-logo">LiteBox</div><div class="mkassa-partner-name">LiteBox</div></div>
<div class="mkassa-partner-card"><div class="mkassa-partner-logo">ЭВОТОР</div><div class="mkassa-partner-name">ЭВОТОР</div></div>
<div class="mkassa-partner-card"><div class="mkassa-partner-logo">АТОЛ</div><div class="mkassa-partner-name">АТОЛ</div></div>
<div class="mkassa-partner-card"><div class="mkassa-partner-logo">Инитпро</div><div class="mkassa-partner-name">Инитпро | касса</div></div>
<div class="mkassa-partner-card"><div class="mkassa-partner-logo">КОМТЕТ Касса</div><div class="mkassa-partner-name">КОМТЕТ Касса</div></div>
<div class="mkassa-partner-card"><div class="mkassa-partner-logo">Первый ОФД</div><div class="mkassa-partner-name">Первый ОФД</div></div>
<div class="mkassa-partner-card"><div class="mkassa-partner-logo">Бизнес.Ру</div><div class="mkassa-partner-name">Бизнес.Ру Онлайн-Чеки</div></div>
<div class="mkassa-partner-card active mkassa-highlight"><div class="mkassa-partner-logo" style="color: #2563eb;">МодульКасса</div><div class="mkassa-partner-name">МодульКасса</div></div>
</div>
</div>
</div>
</div>
</div>

## 4. Настройка интеграции {: #step-4 }

<div class="mkassa-section-subtitle">Введите данные из личного кабинета МодульКасса</div>

<div class="mkassa-steps-guide">
<div class="mkassa-guide-step mkassa-guide-step--full">
<p style="margin: 0 0 15px 0; font-size: 1rem; color: var(--mkassa-text); font-weight: 600; text-align: left;">Заполните обязательные поля и обязательно нажмите кнопку <b>«Перейти»</b> внизу, чтобы сохранить настройки.</p>
<div class="mkassa-guide-visual" style="width: 100%;">
<div class="mkassa-mockup" style="padding: 20px;">
<div class="mkassa-setup-form">

  <p><b>1.</b> Зарегистрируйтесь в системе «МодульКасса» если не делали этого ранее. <br><a href="https://my.modulkassa.ru/registration" target="_blank">🔗 Зарегистрироваться в «МодульКасса»</a></p>
  <p><b>2.</b> Для приёма платежей и передачи данных в «МодульКасса» предоставьте данные из личного кабинета.</p>

  <div class="mkassa-input-row">
    <label>Логин<span class="req">*</span></label>
    <input type="text" placeholder="От «МодульКасса»">
  </div>
  <div class="mkassa-input-row">
    <label>Пароль<span class="req">*</span></label>
    <input type="text" placeholder="От «МодульКасса»">
  </div>
  <div class="mkassa-input-row">
    <label>ID точки продаж</label>
    <label class="mkassa-checkbox-row">
      <input type="checkbox"> Использовать один
    </label>
  </div>

  <p style="margin-top: 30px;"><b>3.</b> Уточните систему налогообложения (СНО) и ставку НДС, которые будут использоваться при формировании чека по умолчанию.</p>

  <div class="mkassa-warning-grid">
    <div class="mkassa-warning-text">
      <h4>Внимание! Номенклатура</h4>
      <p>С 1 февраля 2021 года по <a href="https://www.nalog.gov.ru/rn77/taxation/taxes/5570107/" target="_blank">закону</a> необходимо передавать номенклатуру в налоговую инспекцию. Для этого в кассовом чеке должны быть отражены наименования товаров и услуг, а также их количество.</p>
      <p><b>Это касается всех ИП (в том числе, на УСН, ПСН и ЕСХН).</b> Исключение составляют самозанятые, применяющие специальный налоговый режим «Налог на профессиональный доход».</p>
    </div>
    <div class="mkassa-warning-fines">
      <h4>Штрафы</h4>
      <p>За отсутствие в чеке номенклатуры предусмотрен штраф:</p>
      <ul>
        <li>Для должностного лица — <b>3 000 ₽</b></li>
        <li>Для ИП или организации — <b>10 000 ₽</b> за каждый случай нарушения требований закона</li>
      </ul>
    </div>
  </div>

  <div class="mkassa-table-wrapper">
    <table class="mkassa-table">
      <thead>
        <tr>
          <th>Название магазина</th>
          <th>Метод платежа</th>
          <th>Предмет расчета</th>
          <th>ID точки продаж <span style="color:#ef4444;">*</span> <span class="mkassa-tooltip-icon">?</span></th>
          <th>Callback URL <span class="mkassa-tooltip-icon">?</span></th>
          <th>СНО <span style="color:#ef4444;">*</span> <span class="mkassa-tooltip-icon">?</span></th>
          <th>НДС</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>враовоо</td>
          <td><select class="mkassa-select"><option>Полный рас...</option></select></td>
          <td><select class="mkassa-select"><option>Платёж</option></select></td>
          <td><input type="text" class="mkassa-input" placeholder="group_code"></td>
          <td><input type="text" class="mkassa-input" placeholder="Не задан"></td>
          <td><select class="mkassa-select"><option></option></select></td>
          <td><select class="mkassa-select"><option>Без НДС</option></select></td>
        </tr>
        <tr>
          <td>1Сбухобслуживани...</td>
          <td><select class="mkassa-select"><option>Полный рас...</option></select></td>
          <td><select class="mkassa-select"><option>Товар</option></select></td>
          <td><input type="text" class="mkassa-input" placeholder="group_code"></td>
          <td><input type="text" class="mkassa-input" placeholder="Не задан"></td>
          <td><select class="mkassa-select"><option></option></select></td>
          <td><select class="mkassa-select"><option>Не выбрано</option></select></td>
        </tr>
        <tr>
          <td>Тестовый магазин...</td>
          <td><select class="mkassa-select"><option>Полный рас...</option></select></td>
          <td><select class="mkassa-select"><option>Платёж</option></select></td>
          <td><input type="text" class="mkassa-input" placeholder="group_code"></td>
          <td><input type="text" class="mkassa-input" placeholder="Не задан"></td>
          <td><select class="mkassa-select"><option></option></select></td>
          <td><select class="mkassa-select"><option>Не выбрано</option></select></td>
        </tr>
        <tr>
          <td>провалав</td>
          <td><select class="mkassa-select"><option>Полный рас...</option></select></td>
          <td><select class="mkassa-select"><option>Платёж</option></select></td>
          <td><input type="text" class="mkassa-input" placeholder="group_code"></td>
          <td><input type="text" class="mkassa-input" placeholder="Не задан"></td>
          <td><select class="mkassa-select"><option></option></select></td>
          <td><select class="mkassa-select"><option>Без НДС</option></select></td>
        </tr>
        <tr>
          <td>кукусики1</td>
          <td><select class="mkassa-select"><option>Полный рас...</option></select></td>
          <td><select class="mkassa-select"><option>Платёж</option></select></td>
          <td><input type="text" class="mkassa-input" placeholder="group_code"></td>
          <td><input type="text" class="mkassa-input" placeholder="Не задан"></td>
          <td><select class="mkassa-select"><option></option></select></td>
          <td><select class="mkassa-select"><option>Не выбрано</option></select></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="margin-top: 20px;">
    <button class="mkassa-btn-block">Перейти</button>
    <button class="mkassa-btn-block mkassa-btn-block--grey">Отменить</button>
  </div>

</div>
</div>
</div>
</div>
</div>

## 5. Проверка работоспособности {: #check }

<div class="mkassa-section-subtitle">Сделайте тестовый платёж</div>

<div class="mkassa-steps-guide">
<div class="mkassa-guide-step">
<div class="mkassa-guide-text">
<div class="mkassa-step-heading">Проверка чека</div>
<p>Проведите тестовый платёж на небольшую сумму через магазин, для которого настроена интеграция.</p>
<p>Убедитесь, что:</p>
<ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px; font-size: 1.05rem; color: var(--mkassa-text);">
<li>ваша касса (облачная или физическая) сформировала чек;</li>
<li>в разделе операций в ЛК Robokassa у платежа есть <b>фискальный чек</b> (или ссылка на него);</li>
<li>покупателю пришёл чек на e‑mail/SMS.</li>
</ul>
<p>Если чек не сформировался, проверьте настройки в ЛК МодульКасса и корректность введённых логина, пароля и ID точки продаж.</p>
</div>
<div class="mkassa-guide-visual" style="display: flex; align-items: center; justify-content: center;">
<div class="mkassa-feature" style="max-width: 400px; text-align: center;">
<div class="mkassa-card-title" style="justify-content: center;">
<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
Всё работает!
</div>
<div class="mkassa-card-text">Чеки формируются на вашей кассе, а данные передаются в ФНС и покупателю.</div>
</div>
</div>
</div>
</div>

## Вопросы и ответы {: #faq }

<div class="mkassa-section-subtitle">Ответы на частые вопросы</div>

<details class="mkassa-question"><summary>Подходит ли это решение для физической кассы?</summary><div class="mkassa-question__content"><p>Да. «МодульКасса» поддерживает работу с различными фискальными регистраторами и смарт-терминалами. Вы можете подключить к сервису уже имеющееся у вас оборудование.</p></div></details>

<details class="mkassa-question"><summary>Где взять Логин и Пароль для интеграции?</summary><div class="mkassa-question__content"><p>Эти данные находятся в личном кабинете «МодульКасса» (в разделе настроек или интеграций). Обычно логин и пароль совпадают с данными для входа в ваш личный кабинет.</p></div></details>

<details class="mkassa-question"><summary>Что делать, если нужно несколько ID точек продаж?</summary><div class="mkassa-question__content"><p>Если у вас несколько точек продаж, снимите галочку «Использовать один» и укажите индивидуальный ID для каждого магазина в появившейся таблице.</p></div></details>

<details class="mkassa-question"><summary>Нужно ли покупать кассу?</summary><div class="mkassa-question__content"><p>Нет, если у вас уже есть совместимая физическая касса или вы арендуете облачную. «МодульКасса» помогает настроить интеграцию с уже имеющимся оборудованием.</p></div></details>

<button id="mkassaScrollToTopBtn" class="mkassa-scroll-top" aria-label="Вернуться наверх">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<line x1="12" y1="19" x2="12" y2="5"></line>
<polyline points="5 12 12 5 19 12"></polyline>
</svg>
</button>

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var scrollBtn = document.getElementById('mkassaScrollToTopBtn');
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