<div class="wd-page" markdown="1">

<div class="wd-container">
<header class="wd-hero">
<div class="wd-hero__badge">Платёжный виджет</div>
<h1 class="wd-hero__title">Как создать многоразовую платёжную ссылку</h1>
<p class="wd-hero__desc">Многоразовая (статическая) платёжная ссылка — это постоянная ссылка на оплату фиксированного товара или услуги. Её можно разместить на сайте, в соцсетях, в описании профиля или использовать как QR-код.</p>
</header>
</div>

## Как создать ссылку {: #kak-sozdat-ssylku }

<div class="wd-section-subtitle">Пошаговая инструкция в личном кабинете (login.robokassa.ru)</div>

<div class="wd-steps-guide">
<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Шаг 1. Авторизация</div>
<p>Войдите в личный кабинет Robokassa по адресу <b>login.robokassa.ru</b>. После входа вы окажетесь на главной странице.</p>
</div>
<div class="wd-guide-visual">
<div class="lk-mockup" style="min-height: 200px;">
<header class="lk-ui-header">
<div class="lk-ui-logo">
<img src="/docs/img/logo_robokassa_black.png" alt="Robokassa">
</div>
<nav class="lk-ui-nav">
<span class="lk-ui-nav__item">Главная</span>
<span class="lk-ui-nav__item">Центр продаж</span>
</nav>
<div class="lk-ui-profile">
<div class="lk-ui-profile__avatar">A</div>
</div>
</header>
<div style="padding: 40px; text-align: center; color: #94a3b8; font-size: 14px; font-weight: 500;">(Главный экран после входа)</div>
</div>
</div>
</div>

<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Шаг 2. Раздел «Платёжный виджет»</div>
<p>В левом боковом меню раскройте раздел <b>«Сервисы»</b> и выберите пункт <b>«Платёжный виджет»</b>.</p>
</div>
<div class="wd-guide-visual">
<div class="lk-mockup" style="min-height: 320px; display: grid; grid-template-columns: 230px 1fr;">
<aside class="lk-ui-sidebar">
<div class="lk-ui-menu">
<details>
<summary class="lk-ui-menu-title">Управление <span class="lk-ui-chevron"></span></summary>
</details>
<details open>
<summary class="lk-ui-menu-title" style="color: #2563eb !important;">Сервисы <span class="lk-ui-chevron" style="border-color: #2563eb; transform: rotate(-135deg); margin-bottom: -4px;"></span></summary>
<div class="lk-ui-menu-item">Выставление счетов</div>
<div class="lk-ui-menu-item active lk-highlight" style="background: #eff6ff !important; color: #2563eb !important;">Платёжный виджет</div>
<div class="lk-ui-menu-item">Подписки</div>
<div class="lk-ui-menu-item">Дополнительные сервисы</div>
</details>
</div>
</aside>
<main class="lk-ui-main" style="background: #f8f9fa;"></main>
</div>
</div>
</div>

<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Шаг 3. Создание виджета</div>
<p>Выберите нужный магазин и нажмите <b>«Добавить»</b>. Задайте название (по иконке ✏️), выберите способ перехода к оплате, укажите состав заказа и цену.</p>
</div>
<div class="wd-guide-visual">
<div class="lk-mockup" style="min-height: 380px; display: grid; grid-template-columns: 180px 1fr;">
<aside class="lk-ui-sidebar">
<div class="lk-ui-menu">
<details open>
<summary class="lk-ui-menu-title" style="color: #2563eb !important;">Сервисы <span class="lk-ui-chevron" style="border-color: #2563eb; transform: rotate(-135deg); margin-bottom: -4px;"></span></summary>
<div class="lk-ui-menu-item active" style="background: #eff6ff !important; color: #2563eb !important;">Платёжный виджет</div>
</details>
</div>
</aside>
<main class="lk-ui-main" style="padding: 0;">
<div class="wd-dash-header">
<div class="wd-dash-title">Платёжный виджет</div>
<div class="wd-dash-store lk-highlight">Robokassa.com "Test 2" ▼</div>
</div>
<div class="wd-dash-content">
<div class="wd-info-panel" style="flex-direction: column; align-items: stretch; padding: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
<div style="font-weight: 700; font-size: 14px; color: #111827;">Новый виджет ✏️ 🗑</div>
</div>
<div class="wd-form-row">
<div class="wd-form-label">Способ перехода к оплате</div>
<div class="wd-radio-group">
<label class="wd-radio-label"><input type="radio" name="link-type"> Кнопка «Оплатить»</label>
<label class="wd-radio-label"><input type="radio" name="link-type"> Форма с вводом суммы</label>
<label class="wd-radio-label"><input type="radio" name="link-type" checked> Ссылка</label>
<label class="wd-radio-label"><input type="radio" name="link-type"> QR-код</label>
<label class="wd-radio-label"><input type="radio" name="link-type"> Страница с вводом суммы</label>
<label class="wd-radio-label"><input type="radio" name="link-type"> Страница с товарами на выбор</label>
</div>
</div>
<div class="wd-form-row">
<div class="wd-form-label">Наименование товара/услуги</div>
<div class="wd-form-input">Курс "Финансовая Грамотность с нуля"</div>
</div>
<div class="wd-form-row">
<div class="wd-form-label">Цена</div>
<div class="wd-form-input">9900 ₽</div>
</div>
<div class="lk-highlight" style="text-align: right; padding: 4px; border-radius: 6px; width: fit-content; margin-left: auto;">
<button class="wd-btn wd-btn--green">Создать</button>
</div>
</div>
</div>
</main>
</div>
</div>
</div>
</div>

## Способы перехода к оплате {: #sposoby-perehoda }

<div class="wd-section-subtitle">В настройках виджета доступно 6 вариантов того, как клиент попадёт на оплату</div>

<div class="wd-features">
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="4"/><path d="M12 8v8"/></svg> Кнопка «Оплатить»</div>
<div class="wd-card-text">Готовая кнопка с дизайном Robokassa, которую можно вставить на свой сайт с помощью HTML-кода (iframe/скрипт). Клиент нажимает на неё и сразу переходит на платёжную страницу.<br><span class="wd-badge-note">* Требуется наличие сайта</span></div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/></svg> Форма с вводом суммы</div>
<div class="wd-card-text">Клиент сам вводит сумму прямо на вашем сайте. Идеально для донатов, пополнения баланса или частичной оплаты. Генерируется кодом, который нужно разместить на сайте.<br><span class="wd-badge-note">* Требуется наличие сайта</span></div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Ссылка</div>
<div class="wd-card-text">Обычный URL-адрес. Вы можете отправить его в чат, разместить в соцсетях или на лендинге. Работает бессрочно и подходит для неограниченного числа оплат.<br><span class="wd-badge-note">* Сумма фиксирована</span></div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> QR-код</div>
<div class="wd-card-text">Сгенерированный QR-код для сканирования телефоном. Удобно для офлайн-точек, листовок или визиток. Ведёт на платёжную страницу с фиксированной суммой.<br><span class="wd-badge-note">* Сумма фиксирована</span></div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg> Страница с вводом суммы</div>
<div class="wd-card-text">Ссылка ведёт на отдельную страницу Robokassa, где клиент сначала вводит сумму, а затем оплачивает. Удобно, когда не нужен свой сайт или код.</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Страница с товарами на выбор</div>
<div class="wd-card-text">Мини-магазин. Клиент видит витрину с вашими товарами/услугами, выбирает нужные позиции (и количество) и оплачивает. Отлично подходит для офлайн-продаж на ярмарках или выставках.</div>
</div>
</div>

## Дополнительные параметры {: #dopolnitelnye-parametry }

<div class="wd-section-subtitle">При создании виджета можно заполнить необязательные поля</div>

<div class="wd-features">
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg> Описание заказа</div>
<div class="wd-card-text">Что именно оплачивает клиент (товар, услуга, период, номер договора и т.п.). Видно на платёжной странице.</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> SuccessUrl2</div>
<div class="wd-card-text">Дополнительный адрес, на который клиент будет перенаправлен после успешной оплаты (например, на личный кабинет или страницу с материалами).</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> FailUrl2</div>
<div class="wd-card-text">Дополнительный адрес для перенаправления при неуспешной оплате (например, страницу с инструкцией по повторной оплате).</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><path d="M5 8l6 6"/><path d="M4 14h6"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg> Язык формы</div>
<div class="wd-card-text">Можно задать, на каком языке будет отображаться платёжная форма (русский или английский).</div>
</div>
</div>

## Параметры в чеке {: #parametry-cheka }

<div class="wd-section-subtitle">Справочная информация для заполнения фискальных данных</div>

<details class="question"><summary>Оплата — признак способа расчёта (тег 1214)</summary><div class="question__content"><ol><li><b>Предоплата 100% (код 3)</b> — полная оплата заранее за будущую поставку/услугу.</li><li><b>Предоплата (код 2)</b> — частичная оплата за конкретный товар/услугу до передачи.</li><li><b>Аванс (код 1)</b> — деньги внесены заранее без указания конкретных товаров/услуг.</li><li><b>Полный расчёт (код 4)</b> — <b>самый популярный вид оплаты.</b> Оплата в момент передачи товара/услуги.</li><li><b>Частичный расчёт (код 6)</b> — часть оплачена сразу, остаток в кредит.</li><li><b>Передача в кредит (код 5)</b> — товар/услуга переданы без оплаты.</li><li><b>Кредит (код 7)</b> — последующие платежи по ранее выданному кредиту.</li></ol></div></details>

<details class="question"><summary>Тип — предмет расчёта для каждой позиции в чеке (тег 1212)</summary><div class="question__content"><ol><li><b>Товар</b> — физический товар, реализуемый продавцом.</li><li><b>Подакцизный товар</b> — товары с акцизами (алкоголь, табак и т.п.).</li><li><b>Работа</b> — выполненные работы (ремонт, строительство и т.п.).</li><li><b>Услуга</b> — оказанные услуги (консультации, транспорт и т.п.).</li><li><b>Ставка азартной игры</b> — приём ставок в казино, букмекерских конторах.</li><li><b>Выигрыш азартной игры</b> — выплата выигрыша по азартным играм.</li><li><b>Лотерейный билет</b> — продажа лотерейного билета.</li><li><b>Выигрыш лотереи</b> — выплата лотерейного выигрыша.</li><li><b>Предоставление результатов интеллектуальной деятельности</b> — лицензии, патенты, ПО.</li><li><b>Платёж</b> — денежные платежи (погашение кредитов, займов).</li><li><b>Агентское вознаграждение</b> — комиссия агента за посредничество.</li><li><b>Составной предмет расчёта</b> — комбинация нескольких типов (товар + услуга).</li><li><b>Иной предмет расчёта</b> — всё, что не вошло в другие категории.</li><li><b>Имущественное право</b> — передача прав на имущество.</li><li><b>Внереализационный доход</b> — прочие доходы (штрафы, бонусы).</li><li><b>Страховые взносы</b> — взносы в страховые фонды.</li><li><b>Торговый сбор</b> — сбор за торговую деятельность.</li><li><b>Туристический налог</b> — курортный/туристический сбор.</li><li><b>Финансовый инструмент</b> — ценные бумаги, вклады и др.</li></ol></div></details>

<details class="question"><summary>Налог — ставка НДС для позиции в чеке (тег 1191)</summary><div class="question__content"><ol><li><b>Без НДС</b> — операции, не облагаемые НДС.</li><li><b>НДС 0%</b> — нулевая ставка НДС.</li><li><b>НДС +10%</b> — расчётная ставка: сумма НДС входит в цену (цена * 10/110).</li><li><b>НДС 10/110</b> — сумма НДС выделена отдельно.</li><li><b>НДС +20%</b> — расчётная ставка: сумма НДС входит в цену (цена * 20/120).</li><li><b>НДС 20/120</b> — сумма НДС выделена отдельно.</li><li><b>НДС +5%</b> — расчётная ставка: сумма НДС входит в цену (цена * 5/105).</li><li><b>НДС 5/105</b> — сумма НДС выделена отдельно.</li><li><b>НДС +7%</b> — расчётная ставка: сумма НДС входит в цену (цена * 7/107).</li><li><b>НДС 7/107</b> — сумма НДС выделена отдельно.</li><li><b>НДС +22%</b> — расчётная ставка (с 2026 года): сумма НДС входит в цену (цена * 22/122).</li><li><b>НДС 22/122</b> — сумма НДС выделена отдельно (нововведение 2026 года).</li></ol></div></details>

## Когда стоит использовать {: #when-to-use }

<div class="wd-section-subtitle">Статическая ссылка через виджет идеально подходит, если:</div>

<div class="wd-features">
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> Фиксированная цена</div>
<div class="wd-card-text">Услуга или продукт продаются по одной и той же цене (консультация, подписка, пакет услуг).</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Одна ссылка для всех</div>
<div class="wd-card-text">Вам нужна постоянная ссылка, которую можно разместить в шапке профиля, на лендинге, в рассылке.</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg> Быстрый запуск</div>
<div class="wd-card-text">Часто используется, если нужно быстро запустить акцию на определённый товар/услугу в соцсетях.</div>
</div>
</div>

## Отличия от разовой ссылки {: #differences }

<div class="wd-compare">
<div class="wd-compare-card wd-compare-card--bad">
<div class="wd-card-title" style="color: #ef4444 !important;"><svg viewBox="0 0 24 24" style="stroke: #ef4444;"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Разовая ссылка</div>
<p>Привязана к конкретному счёту и перестаёт работать после первой оплаты.</p>
</div>
<div class="wd-compare-card wd-compare-card--good">
<div class="wd-card-title" style="color: #10b981 !important;"><svg viewBox="0 0 24 24" style="stroke: #10b981;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Многоразовая (виджет)</div>
<p>Остаётся активной бессрочно и подходит для неопределённого количества оплат одним и тем же способом.</p>
</div>
</div>

## Вопросы и ответы {: #faq }

<div class="wd-section-subtitle">Ответы на частые вопросы по многоразовым ссылкам</div>

<details class="question"><summary>Как узнать, кто оплатил по многоразовой ссылке, если у всех одна и та же URL?</summary><div class="question__content"><p>В разделе «Операции и возвраты» вы можете отслеживать все успешные транзакции и идентифицировать покупателей по e-mail, которые они оставляют при совершении платежа.</p><p>Если нужно собирать более подробную персональную информацию, вы можете реализовать это через Google или Яндекс Формы, а также через форму сбора данных через Telegram или VK бота.</p><p>Не забудьте обязательно ознакомиться с законом о защите персональных данных (152-ФЗ), а также разместить политику сбора и обработки персональных данных.</p></div></details>

<details class="question"><summary>Можно ли поменять цену по многоразовой ссылке?</summary><div class="question__content"><p>Да. Цена берётся из настроек платёжного виджета.</p><p>Если вы измените сумму в настройках виджета, все последующие оплаты по этой ссылке будут проходить уже по новой цене.</p></div></details>

<details class="question"><summary>Что делать, если нужно временно остановить приём оплат по многоразовой ссылке?</summary><div class="question__content"><p>Откройте настройки платёжного виджета в личном кабинете и обновите виджет, добавив любую новую позицию в счёт (или удалив текущую).</p></div></details>

<details class="question"><summary>Можно ли использовать одну и ту же многоразовую ссылку на разных площадках?</summary><div class="question__content"><p>Да. Одну и ту же ссылку можно разместить одновременно на сайте, в соцсетях, мессенджерах, в e-mail-рассылке и т.д.</p><p>Все оплаты будут попадать в один и тот же магазин/виджет, а вы будете видеть их в общей истории платежей.</p></div></details>

<details class="question"><summary>Можно ли сделать многоразовую ссылку с произвольной суммой (чтобы клиент сам вводил сумму)?</summary><div class="question__content"><p>Да, в настройках платёжного виджета можно выбрать режим с вводом произвольной суммы. Этот вариант удобно использовать для пожертвований, донатов или частичной доплаты.</p><p>При создании подобного виджета необходимо наличие любого веб-сайта, так как форма с произвольной суммой создаётся через скрипт.</p></div></details>

<button id="scrollToTopBtn" class="wd-scroll-top" aria-label="Вернуться наверх">
<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<line x1="12" y1="19" x2="12" y2="5"></line>
<polyline points="5 12 12 5 19 12"></polyline>
</svg>
</button>

</div>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var scrollBtn = document.getElementById('scrollToTopBtn');
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