<div class="initpro-page" markdown="1">

<div class="initpro-container">
<header class="initpro-hero">
<div class="initpro-hero__badge">Фискализация</div>
<h1 class="initpro-hero__title">Как подключить внешнюю интеграцию через Инитпро</h1>
<p class="initpro-hero__desc">Сервис <b>«Инитпро»</b> позволяет фискализировать онлайн-платежи как на <b>арендованных облачных кассах</b>, так и на <b>физических кассах</b> (например, фирменная модель НКР-01-Ф и другие совместимые ККТ). Вы можете подключить к нему интернет-эквайринг Robokassa и принимать платежи онлайн.</p>
</header>
</div>

## Как это работает {: #how-it-works }

<div class="initpro-section-subtitle">Схема взаимодействия</div>

<div class="initpro-process-line">
<div class="initpro-process-card" data-step="1">
<div class="initpro-process-title"><svg width="24" height="24" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>Оплата на сайте</div>
<p class="initpro-process-text">Клиент оплачивает заказ на вашем сайте через интернет-эквайринг Robokassa.</p>
</div>
<div class="initpro-process-card" data-step="2">
<div class="initpro-process-title"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Передача данных</div>
<p class="initpro-process-text">Robokassa передает данные о платеже в сервис Инитпро через API.</p>
</div>
<div class="initpro-process-card" data-step="3">
<div class="initpro-process-title"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>Фискализация</div>
<p class="initpro-process-text">Инитпро отправляет команду на вашу кассу (облачную или физическую) для пробития чека.</p>
</div>
</div>

<div class="initpro-info-box">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
<p><b>Важно:</b> сервис «Инитпро» работает как с <b>арендованными облачными кассами</b> (в дата-центре), так и с <b>физическими кассами</b> (например, НКР-01-Ф и другие совместимые модели). Если у вас уже есть подходящая касса, вы можете подключить к ней наш эквайринг.</p>
</div>

## 1. Переход в раздел «Фискализация» {: #step-1 }

<div class="initpro-section-subtitle">Открываем список всех решений</div>

<div class="initpro-steps-guide">
<div class="initpro-guide-step">
<div class="initpro-guide-text">
<div class="initpro-step-heading">Открываем меню</div>
<p>Войдите в личный кабинет <b>login.robokassa.ru</b>. В левом меню в блоке <b>«Управление»</b> выберите раздел <b>«Фискализация»</b>.</p>
<p>На открывшейся странице нажмите кнопку <b>«Показать все решения»</b> в правом верхнем углу.</p>
</div>
<div class="initpro-guide-visual">
<div class="initpro-mockup initpro-mockup-sidebar">
<aside class="initpro-ui-sidebar">
<div class="initpro-ui-menu">
<details open>
<summary class="initpro-ui-menu-title" style="color: #111827 !important;">Управление <span class="initpro-ui-chevron" style="transform: rotate(-135deg); margin-bottom: -4px;"></span></summary>
<div class="initpro-ui-menu-item">Сотрудники и доступ</div>
<div class="initpro-ui-menu-item">Документы и шаблоны</div>
<div class="initpro-ui-menu-item active initpro-highlight" style="background: #eff6ff !important; color: #2563eb !important; border: 1px solid #bfdbfe !important;">Фискализация</div>
<div class="initpro-ui-menu-item">Операции и возвраты</div>
</details>
</div>
</aside>
<main class="initpro-ui-main" style="background: #f8f9fa; padding: 20px;">
<div class="initpro-topbar">
<div class="initpro-topbar-left">Текущее решение — <span>Самостоятельное</span></div>
<div class="initpro-highlight" style="border-radius: 6px; padding: 2px;">
<button class="initpro-btn-outline">Показать все решения</button>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

## 2. Выбор решения {: #step-2 }

<div class="initpro-section-subtitle">В списке решений выберите «Внешняя интеграция»</div>

<div class="initpro-steps-guide">
<div class="initpro-guide-step initpro-guide-step--full">
<div class="initpro-guide-visual" style="width: 100%;">
<div class="initpro-mockup" style="padding: 20px;">
<div class="initpro-rc-cards">
<div class="initpro-rc-card">
<div class="initpro-rc-card-header">
<div class="initpro-rc-card-title">Robokassa Online</div>
<div class="initpro-rc-badge initpro-rc-badge--green">Для любых систем налогообложения (СНО)</div>
<div style="margin-top:8px;">
<span class="initpro-rc-badge initpro-rc-badge--yellow">Маркировка</span>
<span class="initpro-rc-badge initpro-rc-badge--blue">Кабинет ОФД</span>
</div>
</div>
<div class="initpro-rc-card-body">Персональная облачная касса по 54-ФЗ с поддержкой любых систем налогообложения, бесплатным ОФД и простым подключением.</div>
<div class="initpro-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="initpro-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="initpro-rc-card">
<div class="initpro-rc-card-header">
<div class="initpro-rc-card-title">Робочеки</div>
<div class="initpro-rc-badge initpro-rc-badge--green" style="background: #3b82f6;">Для малого и сезонного бизнеса</div>
<div style="margin-top:8px;"><span class="initpro-rc-badge initpro-rc-badge--yellow">Ограничения по СНО и видам деятельности</span></div>
</div>
<div class="initpro-rc-card-body">Сервис для быстрого запуска или небольшого количества чеков, выдаваемых через облачную кассу Robokassa, где вы будете указаны поставщиком товаров или услуг.</div>
<div class="initpro-rc-card-links"><a href="#">Узнать больше</a><a href="#">Оферта</a></div>
<div class="initpro-rc-card-footer"><button>Перейти с текущего</button></div>
</div>
<div class="initpro-rc-card initpro-rc-card--active initpro-highlight">
<div class="initpro-rc-card-header">
<div class="initpro-rc-card-title">Внешняя интеграция</div>
<div class="initpro-rc-badge initpro-rc-badge--green">Кассы от партнеров</div>
</div>
<div class="initpro-rc-card-body">Подключение облачных касс от партнеров Robokassa. Вы самостоятельно заключаете договор с одним из партнеров и настраиваете интеграцию.</div>
<div class="initpro-rc-card-links"><a href="#">Оферта</a></div>
<div class="initpro-rc-card-footer"><button style="background: var(--initpro-green); color: #fff;">Перейти с текущего</button></div>
</div>
</div>
</div>
</div>
</div>
</div>

## 3. Выбор партнера Инитпро {: #step-3 }

<div class="initpro-section-subtitle">В блоке «Внешняя интеграция» выберите Инитпро</div>

<div class="initpro-steps-guide">
<div class="initpro-guide-step initpro-guide-step--full">
<div class="initpro-guide-visual" style="width: 100%;">
<div class="initpro-mockup" style="padding: 20px;">
<div class="initpro-partners">
<div class="initpro-partner-card"><div class="initpro-partner-logo">Первый ОФД</div><div class="initpro-partner-name">Первый ОФД</div></div>
<div class="initpro-partner-card"><div class="initpro-partner-logo">МодульКасса</div><div class="initpro-partner-name">МодульКасса</div></div>
<div class="initpro-partner-card"><div class="initpro-partner-logo">МТС</div><div class="initpro-partner-name">МТС</div></div>
<div class="initpro-partner-card"><div class="initpro-partner-logo">LiteBox</div><div class="initpro-partner-name">LiteBox</div></div>
<div class="initpro-partner-card"><div class="initpro-partner-logo">ЭВОТОР</div><div class="initpro-partner-name">ЭВОТОР</div></div>
<div class="initpro-partner-card"><div class="initpro-partner-logo">Бизнес.Ру</div><div class="initpro-partner-name">Бизнес.Ру</div></div>
<div class="initpro-partner-card"><div class="initpro-partner-logo">АТОЛ</div><div class="initpro-partner-name">АТОЛ</div></div>
<div class="initpro-partner-card"><div class="initpro-partner-logo">КОМТЕТ Касса</div><div class="initpro-partner-name">КОМТЕТ Касса</div></div>
<div class="initpro-partner-card active initpro-highlight"><div class="initpro-partner-logo" style="color: #2563eb;">Инитпро</div><div class="initpro-partner-name">Инитпро | касса</div></div>
</div>
</div>
</div>
</div>
</div>

## 4. Настройка интеграции {: #step-4 }

<div class="initpro-section-subtitle">Введите данные кассы и параметры фискализации</div>

<div class="initpro-steps-guide">
<div class="initpro-guide-step initpro-guide-step--full">
<div class="initpro-guide-text" style="max-width: 800px; margin: 0 auto 20px; text-align: left;">
<p><b>Шаг 1.</b> Зарегистрируйтесь в системе «Инитпро» (если не делали этого ранее) на официальном сайте.</p>
<p><b>Шаг 2.</b> В настройках личного кабинета «Инитпро» получите <b>ID кассы</b> и <b>токен (ключ) интеграции</b>.</p>
<p><b>Шаг 3.</b> В таблице ниже для каждого магазина заполните поля:</p>
<ul style="margin-bottom: 20px;">
<li><b>ID кассы</b> и <b>Токен</b> — данные из ЛК Инитпро.</li>
<li><b>Callback URL</b> — адрес для уведомлений (можно оставить пустым).</li>
<li><b>СНО</b> (систему налогообложения) и <b>НДС</b>.</li>
</ul>
</div>
<div class="initpro-guide-visual" style="width: 100%;">
<p style="margin: 0 0 15px 0; font-size: 1rem; color: var(--initpro-text); font-weight: 600; text-align: left;">Заполните обязательные поля и обязательно нажмите кнопку <b>«Перейти»</b> внизу, чтобы сохранить настройки.</p>
<div class="initpro-mockup" style="padding: 20px;">
<div class="initpro-table-wrapper">
<table class="initpro-table">
<thead>
<tr>
<th>Название магазина</th>
<th>Метод платежа</th>
<th>Предмет расчёта</th>
<th>ID кассы <span style="color:#ef4444;">*</span></th>
<th>Токен (ключ) <span style="color:#ef4444;">*</span></th>
<th>Callback URL</th>
<th>СНО <span style="color:#ef4444;">*</span></th>
<th>НДС</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Тестовый магазин 1</td>
<td><select class="initpro-select"><option>Полный расчёт</option></select></td>
<td><select class="initpro-select"><option>Услуга</option></select></td>
<td><input type="text" class="initpro-input" placeholder="ID Инитпро"></td>
<td><input type="text" class="initpro-input" placeholder="Токен"></td>
<td><input type="text" class="initpro-input" placeholder=""></td>
<td><select class="initpro-select"><option>УСН...</option></select></td>
<td><select class="initpro-select"><option>Без НДС</option></select></td>
<td class="initpro-check">✓</td>
</tr>
<tr>
<td>Интернет-магазин "Ромашка"</td>
<td><select class="initpro-select"><option>Полный расчёт</option></select></td>
<td><select class="initpro-select"><option>Товар</option></select></td>
<td><input type="text" class="initpro-input" placeholder="ID Инитпро"></td>
<td><input type="text" class="initpro-input" placeholder="Токен"></td>
<td><input type="text" class="initpro-input" placeholder=""></td>
<td><select class="initpro-select"><option>ОСН</option></select></td>
<td><select class="initpro-select"><option>Не выбрано</option></select></td>
<td class="initpro-check">✓</td>
</tr>
<tr>
<td>Сезонный проект</td>
<td><select class="initpro-select"><option>Полный расчёт</option></select></td>
<td><select class="initpro-select"><option>Платёж</option></select></td>
<td><input type="text" class="initpro-input" placeholder="ID Инитпро"></td>
<td><input type="text" class="initpro-input" placeholder="Токен"></td>
<td><input type="text" class="initpro-input" placeholder=""></td>
<td><select class="initpro-select"><option>УСН...</option></select></td>
<td><select class="initpro-select"><option>Без НДС</option></select></td>
<td class="initpro-check">✓</td>
</tr>
</tbody>
</table>
</div>
<button class="initpro-btn-block">Перейти</button>
<button class="initpro-btn-block initpro-btn-block--grey">Отменить</button>
</div>
</div>
</div>
</div>

## 5. Проверка работоспособности {: #check }

<div class="initpro-section-subtitle">Сделайте тестовый платёж</div>

<div class="initpro-steps-guide">
<div class="initpro-guide-step">
<div class="initpro-guide-text">
<div class="initpro-step-heading">Проверка чека</div>
<p>Проведите тестовый платёж на небольшую сумму через магазин, для которого настроена интеграция.</p>
<p>Убедитесь, что:</p>
<ul style="margin-top: 10px; margin-bottom: 10px; padding-left: 20px; font-size: 1.05rem; color: var(--initpro-text);">
<li>ваша касса (облачная или физическая) пробила чек;</li>
<li>в разделе операций в ЛК Robokassa у платежа есть <b>фискальный чек</b> (или ссылка на него);</li>
<li>покупателю пришёл чек на e‑mail/SMS.</li>
</ul>
<p>Если чек не сформировался, проверьте настройки в ЛК Инитпро и корректность введённых ID и токена.</p>
</div>
<div class="initpro-guide-visual" style="display: flex; align-items: center; justify-content: center;">
<div class="initpro-feature" style="max-width: 400px; text-align: center;">
<div class="initpro-card-title" style="justify-content: center;">
<svg width="20" height="20" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
Всё работает!
</div>
<div class="initpro-card-text">Чеки пробиваются на вашей кассе, а данные передаются в ФНС и покупателю.</div>
</div>
</div>
</div>
</div>

## Вопросы и ответы {: #faq }

<div class="initpro-section-subtitle">Ответы на частые вопросы</div>

<details class="initpro-question"><summary>Зачем нужна внешняя интеграция, если есть Робочеки или Robokassa Online?</summary><div class="initpro-question__content"><p>Внешняя интеграция нужна, если вы хотите использовать <b>уже имеющуюся у вас кассу</b> (физическую или арендованную облачную) для фискализации онлайн-платежей. Робочеки и Robokassa Online — это варианты, где касса предоставляется или арендуется у Robokassa.</p></div></details>

<details class="initpro-question"><summary>Какие кассы поддерживает «Инитпро»?</summary><div class="initpro-question__content"><p>Сервис работает как с <b>арендованными облачными кассами</b> (размещёнными в дата-центре), так и с <b>физическими кассами</b>. Например, поддерживается фирменная модель <b>НКР-01-Ф</b> и другие совместимые ККТ. Полный список уточняйте в документации Инитпро или у их поддержки.</p></div></details>

<details class="initpro-question"><summary>Нужно ли покупать фискальный накопитель?</summary><div class="initpro-question__content"><p>Если у вас уже есть физическая касса с действующим фискальным накопителем или вы арендуете облачную кассу, покупать ничего не нужно. Вы просто подключаете её к сервису Инитпро для приёма онлайн-платежей.</p></div></details>

<details class="initpro-question"><summary>Где взять ID кассы и токен?</summary><div class="initpro-question__content"><p>Эти данные находятся в личном кабинете сервиса «Инитпро» после регистрации и добавления вашей кассы. Обычно они находятся в разделе настроек кассы или интеграции.</p></div></details>

<button id="initproScrollToTopBtn" class="initpro-scroll-top" aria-label="Вернуться наверх">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<line x1="12" y1="19" x2="12" y2="5"></line>
<polyline points="5 12 12 5 19 12"></polyline>
</svg>
</button>

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var scrollBtn = document.getElementById('initproScrollToTopBtn');
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