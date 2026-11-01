<div class="brru-page" markdown="1">

<div class="brru-container">
<header class="brru-hero">
<div class="brru-hero__badge">Фискализация</div>
<h1 class="brru-hero__title">Как подключить внешнюю интеграцию через Бизнес.Ру Онлайн-Чеки</h1>
<p class="brru-hero__desc">Сервис <b>«Бизнес.Ру Онлайн-Чеки»</b> — это универсальное решение для фискализации онлайн-платежей. Оно подходит как для облачных касс, так и для уже имеющихся у вас физических ККТ (смарт-терминалов Эвотор, фискальных регистраторов АТОЛ, Штрих-М и других). Вы можете подключить к нему интернет-эквайринг Robokassa и принимать платежи онлайн.</p>
</header>
</div>

## Как это работает {: #how-it-works }

<div class="brru-section-subtitle">Схема взаимодействия</div>

<div class="brru-process-line">
<div class="brru-process-card" data-step="1">
<div class="brru-process-title"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>Оплата на сайте</div>
<p class="brru-process-text">Клиент оплачивает заказ на вашем сайте через интернет-эквайринг Robokassa.</p>
</div>
<div class="brru-process-card" data-step="2">
<div class="brru-process-title"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Передача данных</div>
<p class="brru-process-text">Robokassa передает данные о платеже в сервис «Бизнес.Ру Онлайн-Чеки» через API.</p>
</div>
<div class="brru-process-card" data-step="3">
<div class="brru-process-title"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>Фискализация</div>
<p class="brru-process-text">Сервис формирует чек на вашей кассе (облачной или физической) и отправляет его в ФНС и покупателю.</p>
</div>
</div>

<div class="brru-info-box">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
<p><b>Важно:</b> это решение подходит как для <b>облачных касс</b>, так и для <b>физических ККТ</b> (АТОЛ, Штрих-М, Эвотор и др.). Если у вас уже есть касса и вы хотите подключить к ней наш эквайринг, этот сервис поможет настроить интеграцию.</p>
</div>

## 1. Переход в раздел «Фискализация» {: #step-1 }

<div class="brru-section-subtitle">Открываем список всех решений</div>

<div class="brru-steps-guide">
<div class="brru-guide-step">
<div class="brru-guide-text">
<div class="brru-step-heading">Открываем меню</div>
<p>Войдите в личный кабинет <b>login.robokassa.ru</b>. В левом меню в блоке <b>«Управление»</b> выберите раздел <b>«Фискализация»</b>.</p>
<p>На открывшейся странице нажмите кнопку <b>«Показать все решения»</b> в правом верхнем углу.</p>
</div>
<div class="brru-guide-visual">
<div class="brru-mockup brru-mockup-sidebar">
<aside class="brru-ui-sidebar">
<div class="brru-ui-menu">
<details open>
<summary class="brru-ui-menu-title" style="color: #111827 !important;">Управление <span class="brru-ui-chevron" style="transform: rotate(-135deg); margin-bottom: -4px;"></span></summary>
<div class="brru-ui-menu-item">Сотрудники и доступ</div>
<div class="brru-ui-menu-item">Документы и шаблоны</div>
<div class="brru-ui-menu-item active brru-highlight" style="background: #eff6ff !important; color: #2563eb !important;">Фискализация</div>
<div class="brru-ui-menu-item">Операции и возвраты</div>
</details>
</div>
</aside>
<main class="brru-ui-main" style="background: #f8f9fa; padding: 20px;">
<div class="brru-topbar">
<div class="brru-topbar-left">Текущее решение — <span>Самостоятельное</span></div>
<div class="brru-highlight" style="border-radius: 6px; padding: 2px;">
<button class="brru-btn-outline">Показать все решения</button>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

## 2. Выбор решения {: #step-2 }

<div class="brru-section-subtitle">В списке решений выберите «Внешняя интеграция»</div>

<div class="brru-steps-guide">
<div class="brru-guide-step brru-guide-step--full">
<div class="brru-guide-visual" style="width: 100%;">
<div class="brru-mockup" style="padding: 20px;">
<div class="brru-rc-cards">
<div class="brru-rc-card">
<div class="brru-rc-card-header">
<div class="brru-rc-card-title">Robokassa Online</div>
<div class="brru-rc-badge brru-rc-badge--green">Для любых систем налогообложения (СНО)</div>
<div style="margin-top:8px;">
<span class="brru-rc-badge brru-rc-badge--yellow">Маркировка</span>
<span class="brru-rc-badge brru-rc-badge--blue">Кабинет ОФД</span>
</div>
</div>
<div class="brru-rc-card-body">Персональная облачная касса по 54-ФЗ с поддержкой любых систем налогообложения, бесплатным ОФД и простым подключением.</div>
<div class="brru-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="brru-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="brru-rc-card">
<div class="brru-rc-card-header">
<div class="brru-rc-card-title">Робочеки</div>
<div class="brru-rc-badge brru-rc-badge--green" style="background: #3b82f6;">Для малого и сезонного бизнеса</div>
<div style="margin-top:8px;"><span class="brru-rc-badge brru-rc-badge--yellow">Ограничения по СНО и видам деятельности</span></div>
</div>
<div class="brru-rc-card-body">Сервис для быстрого запуска или небольшого количества чеков, выдаваемых через облачную кассу Robokassa, где вы будете указаны поставщиком товаров или услуг.</div>
<div class="brru-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="brru-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="brru-rc-card brru-rc-card--active brru-highlight">
<div class="brru-rc-card-header">
<div class="brru-rc-card-title">Внешняя интеграция</div>
<div class="brru-rc-badge brru-rc-badge--green">Кассы от партнеров</div>
</div>
<div class="brru-rc-card-body">Подключение облачных касс от партнеров Robokassa. Вы самостоятельно заключаете договор с одним из партнеров и настраиваете интеграцию.</div>
<div class="brru-rc-card-links"><a href="#">Оферта</a></div>
<div class="brru-rc-card-footer"><button style="background: var(--brru-green); color: #fff;">Перейти с текущего</button></div>
</div>
</div>
</div>
</div>
</div>
</div>

## 3. Выбор партнера Бизнес.Ру {: #step-3 }

<div class="brru-section-subtitle">В блоке «Внешняя интеграция» выберите Бизнес.Ру</div>

<div class="brru-steps-guide">
<div class="brru-guide-step brru-guide-step--full">
<div class="brru-guide-visual" style="width: 100%;">
<div class="brru-mockup" style="padding: 20px;">
<div class="brru-partners">
<div class="brru-partner-card"><div class="brru-partner-logo">МодульКасса</div><div class="brru-partner-name">МодульКасса</div></div>
<div class="brru-partner-card"><div class="brru-partner-logo">МТС</div><div class="brru-partner-name">МТС</div></div>
<div class="brru-partner-card"><div class="brru-partner-logo">LiteBox</div><div class="brru-partner-name">LiteBox</div></div>
<div class="brru-partner-card"><div class="brru-partner-logo">ЭВОТОР</div><div class="brru-partner-name">ЭВОТОР</div></div>
<div class="brru-partner-card"><div class="brru-partner-logo">АТОЛ</div><div class="brru-partner-name">АТОЛ</div></div>
<div class="brru-partner-card"><div class="brru-partner-logo">Инитпро</div><div class="brru-partner-name">Инитпро | касса</div></div>
<div class="brru-partner-card"><div class="brru-partner-logo">КОМТЕТ Касса</div><div class="brru-partner-name">КОМТЕТ Касса</div></div>
<div class="brru-partner-card"><div class="brru-partner-logo">Первый ОФД</div><div class="brru-partner-name">Первый ОФД</div></div>
<div class="brru-partner-card active brru-highlight"><div class="brru-partner-logo" style="color: #2563eb;">Бизнес.Ру</div><div class="brru-partner-name">Бизнес.Ру Онлайн-Чеки</div></div>
</div>
</div>
</div>
</div>
</div>

## 4. Настройка интеграции {: #step-4 }

<div class="brru-section-subtitle">Введите данные из личного кабинета Бизнес.Ру</div>

<div class="brru-steps-guide">
<div class="brru-guide-step brru-guide-step--full">
<p style="margin: 0 0 15px 0; font-size: 1rem; color: var(--brru-text); font-weight: 600; text-align: left;">Заполните обязательные поля и обязательно нажмите кнопку <b>«Перейти»</b> внизу, чтобы сохранить настройки.</p>
<div class="brru-guide-visual" style="width: 100%;">
<div class="brru-mockup" style="padding: 20px;">
<div class="brru-setup-form">

  <p>Для приёма платежей и передачи данных в Бизнес.ру, предоставьте логин и пароль из настроек сервиса «Бизнес.ру».</p>

  <div class="brru-input-row">
    <label>Логин<span class="req">*</span></label>
    <input type="text" placeholder="От «Бизнес.ру»">
  </div>
  <div class="brru-input-row">
    <label>Пароль<span class="req">*</span></label>
    <input type="text" placeholder="От «Бизнес.ру»">
  </div>

  <p style="margin-top: 30px;">Выберите ставку налогообложения (СНО) и ставку НДС по умолчанию, которые будут использоваться при формировании чека.</p>

  <div class="brru-warning-grid">
    <div class="brru-warning-text">
      <h4>Внимание! Номенклатура</h4>
      <p>С 1 февраля 2021 года по <a href="https://www.nalog.gov.ru/rn77/taxation/taxes/5570107/" target="_blank">закону</a> необходимо передавать номенклатуру в налоговую инспекцию. Для этого в кассовом чеке должны быть отражены наименования товаров и услуг, а также их количество.</p>
      <p><b>Это касается всех ИП (в том числе, на УСН, ПСН и ЕСХН).</b> Исключение составляют самозанятые, применяющие специальный налоговый режим «Налог на профессиональный доход».</p>
    </div>
    <div class="brru-warning-fines">
      <h4>Штрафы</h4>
      <p>За отсутствие в чеке номенклатуры предусмотрен штраф:</p>
      <ul>
        <li>Для должностного лица — <b>3 000 ₽</b></li>
        <li>Для ИП или организации — <b>10 000 ₽</b> за каждый случай нарушения требований закона</li>
      </ul>
    </div>
  </div>

  <button class="brru-expand-btn">Развернуть &gt;&gt;</button>

  <div class="brru-table-wrapper" style="border: none; border-radius: 0;">
    <table class="brru-table">
      <thead>
        <tr>
          <th>Название магазина</th>
          <th>Метод платежа</th>
          <th>Предмет расчёта</th>
          <th>СНО <span style="color:#ef4444;">*</span></th>
          <th>НДС</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Тестовый магазин 1</td>
          <td><select class="brru-select"><option>Полный расчёт</option></select></td>
          <td><select class="brru-select"><option>Платёж</option></select></td>
          <td><select class="brru-select"><option>УСН (доходы)</option></select></td>
          <td><select class="brru-select"><option>Без НДС</option></select></td>
        </tr>
        <tr>
          <td>Интернет-магазин "Ромашка"</td>
          <td><select class="brru-select"><option>Полный расчёт</option></select></td>
          <td><select class="brru-select"><option>Товар</option></select></td>
          <td><select class="brru-select"><option>ОСН</option></select></td>
          <td><select class="brru-select"><option>Не выбрано</option></select></td>
        </tr>
        <tr>
          <td>Сезонный проект</td>
          <td><select class="brru-select"><option>Полный расчёт</option></select></td>
          <td><select class="brru-select"><option>Платёж</option></select></td>
          <td><select class="brru-select"><option>УСН (доходы)</option></select></td>
          <td><select class="brru-select"><option>Без НДС</option></select></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div style="margin-top: 20px;">
    <button class="brru-btn-block" style="margin-top: 0;">Перейти</button>
    <button class="brru-btn-block brru-btn-block--grey">Отменить</button>
  </div>

</div>
</div>
</div>
</div>
</div>

## 5. Проверка работоспособности {: #check }

<div class="brru-section-subtitle">Сделайте тестовый платёж</div>

<div class="brru-steps-guide">
<div class="brru-guide-step">
<div class="brru-guide-text">
<div class="brru-step-heading">Проверка чека</div>
<p>Проведите тестовый платёж на небольшую сумму через магазин, для которого настроена интеграция.</p>
<p>Убедитесь, что:</p>
<ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px; font-size: 1.05rem; color: var(--brru-text);">
<li>ваша касса (облачная или физическая) сформировала чек;</li>
<li>в разделе операций в ЛК Robokassa у платежа есть <b>фискальный чек</b> (или ссылка на него);</li>
<li>покупателю пришёл чек на e‑mail/SMS.</li>
</ul>
<p>Если чек не сформировался, проверьте настройки в ЛК Бизнес.Ру и корректность введённых логина и пароля.</p>
</div>
<div class="brru-guide-visual" style="display: flex; align-items: center; justify-content: center;">
<div class="brru-feature" style="max-width: 400px; text-align: center;">
<div class="brru-card-title" style="justify-content: center;">
<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
Всё работает!
</div>
<div class="brru-card-text">Чеки формируются на вашей кассе, а данные передаются в ФНС и покупателю.</div>
</div>
</div>
</div>
</div>

## Вопросы и ответы {: #faq }

<div class="brru-section-subtitle">Ответы на частые вопросы</div>

<details class="brru-question"><summary>Подходит ли это решение для физической кассы?</summary><div class="brru-question__content"><p>Да. «Бизнес.Ру Онлайн-Чеки» поддерживает не только облачные кассы, но и физические ККТ (смарт-терминалы Эвотор, фискальные регистраторы АТОЛ, Штрих-М и др.). Вы можете подключить к сервису уже имеющееся оборудование.</p></div></details>

<details class="brru-question"><summary>Где взять Логин и Пароль для интеграции?</summary><div class="brru-question__content"><p>Эти данные находятся в личном кабинете «Бизнес.Ру Онлайн-Чеки» в разделе <b>«Внешние сервисы»</b> (или «Интеграции»). Выберите профиль с поддержкой ATOL API, чтобы увидеть логин и пароль.</p></div></details>

<details class="brru-question"><summary>Что такое «Внешний идентификатор кассы»?</summary><div class="brru-question__content"><p>Это уникальный ключ, который присваивается вашей кассе в сервисе «Бизнес.Ру». Он может потребоваться при настройке интеграции. Обычно выдается менеджером сервиса или отображается в личном кабинете.</p></div></details>

<details class="brru-question"><summary>Нужно ли покупать кассу?</summary><div class="brru-question__content"><p>Нет, если у вас уже есть физическая касса или вы арендуете облачную. «Бизнес.Ру» помогает настроить интеграцию с уже имеющимся оборудованием. Если кассы нет, сервис может предложить аренду облачной кассы.</p></div></details>

<button id="brruScrollToTopBtn" class="brru-scroll-top" aria-label="Вернуться наверх">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<line x1="12" y1="19" x2="12" y2="5"></line>
<polyline points="5 12 12 5 19 12"></polyline>
</svg>
</button>

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var scrollBtn = document.getElementById('brruScrollToTopBtn');
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