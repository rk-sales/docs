<div class="ofd-page" markdown="1">

<div class="ofd-container">
<header class="ofd-hero">
<div class="ofd-hero__badge">Фискализация</div>
<h1 class="ofd-hero__title">Как подключить внешнюю интеграцию через Первый ОФД</h1>
<p class="ofd-hero__desc">Если вы используете облачные кассы «ОКасса» от Первого ОФД, вы можете подключить к ним интернет-эквайринг Robokassa для автоматической фискализации онлайн-платежей. Это решение подходит для тех, у кого нет физической кассы, но есть арендованная облачная ККТ.</p>
</header>
</div>

## Как это работает {: #how-it-works }

<div class="ofd-section-subtitle">Схема взаимодействия</div>

<div class="ofd-process-line">
<div class="ofd-process-card" data-step="1">
<div class="ofd-process-title"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>Оплата на сайте</div>
<p class="ofd-process-text">Клиент оплачивает заказ на вашем сайте через интернет-эквайринг Robokassa.</p>
</div>
<div class="ofd-process-card" data-step="2">
<div class="ofd-process-title"><svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Передача данных</div>
<p class="ofd-process-text">Robokassa передает данные о платеже в облачную кассу Первого ОФД через API.</p>
</div>
<div class="ofd-process-card" data-step="3">
<div class="ofd-process-title"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>Фискализация</div>
<p class="ofd-process-text">Облачная касса формирует чек и отправляет его в ФНС и покупателю.</p>
</div>
</div>

<div class="ofd-info-box">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
<p><b>Важно:</b> это решение предназначено <b>только для облачных касс «ОКасса»</b>, которые предоставляет Первый ОФД. Если у вас уже есть арендованная облачная ККТ, вы можете подключить к ней наш эквайринг.</p>
</div>

## 1. Переход в раздел «Фискализация» {: #step-1 }

<div class="ofd-section-subtitle">Открываем список всех решений</div>

<div class="ofd-steps-guide">
<div class="ofd-guide-step">
<div class="ofd-guide-text">
<div class="ofd-step-heading">Открываем меню</div>
<p>Войдите в личный кабинет <b>login.robokassa.ru</b>. В левом меню в блоке <b>«Управление»</b> выберите раздел <b>«Фискализация»</b>.</p>
<p>На открывшейся странице нажмите кнопку <b>«Показать все решения»</b> в правом верхнем углу.</p>
</div>
<div class="ofd-guide-visual">
<div class="ofd-mockup ofd-mockup-sidebar">
<aside class="ofd-ui-sidebar">
<div class="ofd-ui-menu">
<details open>
<summary class="ofd-ui-menu-title" style="color: #111827 !important;">Управление <span class="ofd-ui-chevron" style="transform: rotate(-135deg); margin-bottom: -4px;"></span></summary>
<div class="ofd-ui-menu-item">Сотрудники и доступ</div>
<div class="ofd-ui-menu-item">Документы и шаблоны</div>
<div class="ofd-ui-menu-item active ofd-highlight" style="background: #eff6ff !important; color: #2563eb !important;">Фискализация</div>
<div class="ofd-ui-menu-item">Операции и возвраты</div>
</details>
</div>
</aside>
<main class="ofd-ui-main" style="background: #f8f9fa; padding: 20px;">
<div class="ofd-topbar">
<div class="ofd-topbar-left">Текущее решение — <span>Самостоятельное</span></div>
<div class="ofd-highlight" style="border-radius: 6px; padding: 2px;">
<button class="ofd-btn-outline">Показать все решения</button>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

## 2. Выбор решения {: #step-2 }

<div class="ofd-section-subtitle">В списке решений выберите «Внешняя интеграция»</div>

<div class="ofd-steps-guide">
<div class="ofd-guide-step ofd-guide-step--full">
<div class="ofd-guide-visual" style="width: 100%;">
<div class="ofd-mockup" style="padding: 20px;">
<div class="ofd-rc-cards">
<div class="ofd-rc-card">
<div class="ofd-rc-card-header">
<div class="ofd-rc-card-title">Robokassa Online</div>
<div class="ofd-rc-badge ofd-rc-badge--green">Для любых систем налогообложения (СНО)</div>
<div style="margin-top:8px;">
<span class="ofd-rc-badge ofd-rc-badge--yellow">Маркировка</span>
<span class="ofd-rc-badge ofd-rc-badge--blue">Кабинет ОФД</span>
</div>
</div>
<div class="ofd-rc-card-body">Персональная облачная касса по 54-ФЗ с поддержкой любых систем налогообложения, бесплатным ОФД и простым подключением.</div>
<div class="ofd-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="ofd-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="ofd-rc-card">
<div class="ofd-rc-card-header">
<div class="ofd-rc-card-title">Робочеки</div>
<div class="ofd-rc-badge ofd-rc-badge--green" style="background: #3b82f6;">Для малого и сезонного бизнеса</div>
<div style="margin-top:8px;"><span class="ofd-rc-badge ofd-rc-badge--yellow">Ограничения по СНО и видам деятельности</span></div>
</div>
<div class="ofd-rc-card-body">Сервис для быстрого запуска или небольшого количества чеков, выдаваемых через облачную кассу Robokassa, где вы будете указаны поставщиком товаров или услуг.</div>
<div class="ofd-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="ofd-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="ofd-rc-card ofd-rc-card--active ofd-highlight">
<div class="ofd-rc-card-header">
<div class="ofd-rc-card-title">Внешняя интеграция</div>
<div class="ofd-rc-badge ofd-rc-badge--green">Кассы от партнеров</div>
</div>
<div class="ofd-rc-card-body">Подключение облачных касс от партнеров Robokassa. Вы самостоятельно заключаете договор с одним из партнеров и настраиваете интеграцию.</div>
<div class="ofd-rc-card-links"><a href="#">Оферта</a></div>
<div class="ofd-rc-card-footer"><button style="background: var(--ofd-green); color: #fff;">Перейти с текущего</button></div>
</div>
</div>
</div>
</div>
</div>
</div>

## 3. Выбор партнера Первый ОФД {: #step-3 }

<div class="ofd-section-subtitle">В блоке «Внешняя интеграция» выберите Первый ОФД</div>

<div class="ofd-steps-guide">
<div class="ofd-guide-step ofd-guide-step--full">
<div class="ofd-guide-visual" style="width: 100%;">
<div class="ofd-mockup" style="padding: 20px;">
<div class="ofd-partners">
<div class="ofd-partner-card"><div class="ofd-partner-logo">МодульКасса</div><div class="ofd-partner-name">МодульКасса</div></div>
<div class="ofd-partner-card"><div class="ofd-partner-logo">МТС</div><div class="ofd-partner-name">МТС</div></div>
<div class="ofd-partner-card"><div class="ofd-partner-logo">LiteBox</div><div class="ofd-partner-name">LiteBox</div></div>
<div class="ofd-partner-card"><div class="ofd-partner-logo">ЭВОТОР</div><div class="ofd-partner-name">ЭВОТОР</div></div>
<div class="ofd-partner-card"><div class="ofd-partner-logo">Бизнес.Ру</div><div class="ofd-partner-name">Бизнес.Ру</div></div>
<div class="ofd-partner-card"><div class="ofd-partner-logo">АТОЛ</div><div class="ofd-partner-name">АТОЛ</div></div>
<div class="ofd-partner-card"><div class="ofd-partner-logo">Инитпро</div><div class="ofd-partner-name">Инитпро | касса</div></div>
<div class="ofd-partner-card"><div class="ofd-partner-logo">КОМТЕТ Касса</div><div class="ofd-partner-name">КОМТЕТ Касса</div></div>
<div class="ofd-partner-card active ofd-highlight"><div class="ofd-partner-logo" style="color: #2563eb;">Первый ОФД</div><div class="ofd-partner-name">Первый ОФД</div></div>
</div>
</div>
</div>
</div>
</div>

## 4. Настройка интеграции {: #step-4 }

<div class="ofd-section-subtitle">Введите данные облачной кассы и параметры фискализации</div>

<div class="ofd-steps-guide">
<div class="ofd-guide-step ofd-guide-step--full">
<div class="ofd-guide-text" style="max-width: 800px; margin: 0 auto; text-align: left;">
<p><b>Шаг 1.</b> Зарегистрируйтесь в личном кабинете «Первый ОФД» (ОКасса) по ссылке <a href="https://org.1-ofd.ru/registration/user-data" target="_blank">org.1-ofd.ru/registration/user-data</a>.</p>
<p><b>Шаг 2.</b> В личном кабинете ОКассы перейдите в раздел <b>«Продукты – Интеграции»</b> и нажмите кнопку <b>«Управлять доступом»</b>. Скопируйте оттуда <b>Логин</b> и <b>Мастер-ключ API</b> (ключ API указывается в поле «Пароль»).</p>
<p><b>Шаг 3.</b> В разделе <b>«Продукты – Кассы»</b> в карточке вашей кассы скопируйте <b>Идентификатор группы ККТ</b> (без скобок).</p>
<p><b>Шаг 4.</b> В таблице ниже для каждого магазина заполните поля:</p>
<ul style="margin-bottom: 0;">
<li><b>Логин</b> и <b>Мастер-ключ API</b> — данные из ЛК ОКассы.</li>
<li><b>ID группы ККТ</b> — идентификатор вашей облачной кассы.</li>
<li><b>Callback URL</b> — адрес для уведомлений (можно оставить пустым).</li>
<li><b>СНО</b> (систему налогообложения) и <b>НДС</b> (для УСН, плательщиков НДС 5% и 7% — укажите расчетную или итоговую ставку в зависимости от типа чека).</li>
</ul>
</div>
<div class="ofd-guide-visual" style="width: 100%;">
<p style="margin: 0 0 15px 0; font-size: 1rem; color: var(--ofd-text); font-weight: 600; text-align: left;">Заполните обязательные поля в таблице и обязательно нажмите кнопку <b>«Отправить заявку»</b> внизу, чтобы сохранить настройки.</p>
<div class="ofd-mockup" style="padding: 20px;">
<div class="ofd-table-wrapper">
<table class="ofd-table">
<thead>
<tr>
<th>Название магазина</th>
<th>Метод платежа</th>
<th>Предмет расчёта</th>
<th>Логин <span style="color:#ef4444;">*</span></th>
<th>Мастер-ключ API <span style="color:#ef4444;">*</span></th>
<th>ID группы ККТ <span style="color:#ef4444;">*</span></th>
<th>Callback URL</th>
<th>СНО <span style="color:#ef4444;">*</span></th>
<th>НДС</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Тестовый магазин 1</td>
<td><select class="ofd-select"><option>Полный расчёт</option></select></td>
<td><select class="ofd-select"><option>Услуга</option></select></td>
<td><input type="text" class="ofd-input" placeholder="login_okassa"></td>
<td><input type="text" class="ofd-input" placeholder="api_key"></td>
<td><input type="text" class="ofd-input" placeholder="group_code"></td>
<td><input type="text" class="ofd-input" placeholder=""></td>
<td><select class="ofd-select"><option>УСН...</option></select></td>
<td><select class="ofd-select"><option>Без НДС</option></select></td>
<td class="ofd-check">✓</td>
</tr>
<tr>
<td>Интернет-магазин "Ромашка"</td>
<td><select class="ofd-select"><option>Полный расчёт</option></select></td>
<td><select class="ofd-select"><option>Товар</option></select></td>
<td><input type="text" class="ofd-input" placeholder="login_okassa"></td>
<td><input type="text" class="ofd-input" placeholder="api_key"></td>
<td><input type="text" class="ofd-input" placeholder="group_code"></td>
<td><input type="text" class="ofd-input" placeholder=""></td>
<td><select class="ofd-select"><option>ОСН</option></select></td>
<td><select class="ofd-select"><option>Не выбрано</option></select></td>
<td class="ofd-check">✓</td>
</tr>
</tbody>
</table>
</div>
<button class="ofd-btn-block">Отправить заявку</button>
<button class="ofd-btn-block ofd-btn-block--grey">Отменить</button>
</div>
</div>
</div>
</div>

## 5. Проверка работоспособности {: #check }

<div class="ofd-section-subtitle">Сделайте тестовый платёж</div>

<div class="ofd-steps-guide">
<div class="ofd-guide-step">
<div class="ofd-guide-text">
<div class="ofd-step-heading">Проверка чека</div>
<p>Проведите тестовый платёж на небольшую сумму через магазин, для которого настроена интеграция.</p>
<p>Убедитесь, что:</p>
<ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px; font-size: 1.05rem; color: var(--ofd-text);">
<li>ваша облачная касса «ОКасса» сформировала чек;</li>
<li>в разделе операций в ЛК Robokassa у платежа есть <b>фискальный чек</b> (или ссылка на него);</li>
<li>покупателю пришёл чек на e‑mail/SMS.</li>
</ul>
<p>Если чек не сформировался, проверьте настройки в ЛК ОКассы и корректность введённых API-ключей.</p>
</div>
<div class="ofd-guide-visual" style="display: flex; align-items: center; justify-content: center;">
<div class="ofd-feature" style="max-width: 400px; text-align: center;">
<div class="ofd-card-title" style="justify-content: center;">
<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
Всё работает!
</div>
<div class="ofd-card-text">Чеки формируются на вашей облачной кассе «ОКасса», а данные передаются в ФНС и покупателю.</div>
</div>
</div>
</div>
</div>

## Вопросы и ответы {: #faq }

<div class="ofd-section-subtitle">Ответы на частые вопросы</div>

<details class="ofd-question"><summary>Где взять Логин и Мастер-ключ API?</summary><div class="ofd-question__content"><p>Эти данные находятся в личном кабинете «Первый ОФД» (ОКасса) в разделе <b>«Продукты – Интеграции»</b>. Нажмите кнопку «Управлять доступом», чтобы увидеть логин и мастер-ключ.</p></div></details>

<details class="ofd-question"><summary>Где взять ID группы ККТ?</summary><div class="ofd-question__content"><p>Идентификатор группы ККТ находится в разделе <b>«Продукты – Кассы»</b> в карточке вашей облачной кассы. Скопируйте его без скобок.</p></div></details>

<details class="ofd-question"><summary>Нужно ли покупать кассу?</summary><div class="ofd-question__content"><p>Нет. Первый ОФД предоставляет облачные кассы в аренду. Вам не нужно покупать физическое оборудование — достаточно арендовать облачную ККТ и подключить к ней эквайринг Robokassa.</p></div></details>

<button id="ofdScrollToTopBtn" class="ofd-scroll-top" aria-label="Вернуться наверх">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<line x1="12" y1="19" x2="12" y2="5"></line>
<polyline points="5 12 12 5 19 12"></polyline>
</svg>
</button>

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var scrollBtn = document.getElementById('ofdScrollToTopBtn');
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