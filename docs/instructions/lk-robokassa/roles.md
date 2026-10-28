<div class="wd-page" markdown="1">

<div class="wd-container">
<header class="wd-hero">
<div class="wd-hero__badge">Управление</div>
<h1 class="wd-hero__title">Как выдать персональный доступ для сотрудников к ЛК</h1>
<p class="wd-hero__desc">В личном кабинете Robokassa вы можете создавать отдельных сотрудников с разными уровнями доступа — от полного доступа до ограниченного просмотра операций. Это позволяет безопасно делегировать задачи команде без передачи основного пароля владельца аккаунта.</p>
</header>
</div>

## 1. Подготовка и роли {: #roles }

<div class="wd-section-subtitle">Перед добавлением сотрудников убедитесь, что вы понимаете уровни доступа</div>

<div class="wd-features">
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Администратор</div>
<div class="wd-card-text">Полный доступ ко всему функционалу ЛК. <b>Только эта роль</b> может выводить деньги и настраивать баланс.</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> Экономист</div>
<div class="wd-card-text">Доступ к финансовой информации, настройка и просмотр отчетов.</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> Программист</div>
<div class="wd-card-text">Технические настройки магазинов (API, интеграции, Result URL).</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> Поддержка</div>
<div class="wd-card-text">Только просмотр операций и возвратов.</div>
</div>
<div class="wd-feature">
<div class="wd-card-title"><svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Продавец</div>
<div class="wd-card-text">Операции, возвраты, выставление счетов и работа с заказами.</div>
</div>
</div>
<p style="text-align:center; margin-top: 1rem; color: var(--wd-muted); font-size: 0.9rem;"><i>Сотруднику можно назначить несколько ролей — функционал суммируется.</i></p>

## 2. Где управлять доступом {: #manage-access }

<div class="wd-section-subtitle">Раздел «Сотрудники и доступ» в левом меню</div>

<div class="wd-steps-guide">
<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Переход в раздел</div>
<p>Войдите в личный кабинет <b>login.robokassa.ru</b> под учетной записью <b>Администратора</b>.</p>
<p>В левом меню в блоке <b>«Управление»</b> выберите пункт <b>«Сотрудники и доступ»</b>.</p>
</div>
<div class="wd-guide-visual">
<div class="lk-mockup lk-mockup-sidebar">
<aside class="lk-ui-sidebar">
<div class="lk-ui-menu">
<details open>
<summary class="lk-ui-menu-title" style="color: #111827 !important;">Управление <span class="lk-ui-chevron" style="transform: rotate(-135deg); margin-bottom: -4px;"></span></summary>
<div class="lk-ui-menu-item active lk-highlight" style="background: #eff6ff !important; color: #2563eb !important;">Сотрудники и доступ</div>
<div class="lk-ui-menu-item">Документы и шаблоны</div>
<div class="lk-ui-menu-item">Фискализация</div>
<div class="lk-ui-menu-item">Операции и возвраты</div>
</details>
</div>
</aside>
<main class="lk-ui-main" style="background: #f8f9fa;"></main>
</div>
</div>
</div>
</div>

## 3. Добавление нового сотрудника {: #add-employee }

<div class="wd-section-subtitle">Создание учетной записи и выдача прав</div>

<div class="wd-steps-guide">

<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Список сотрудников</div>
<p>В открывшемся разделе вы увидите список всех сотрудников, их номера телефонов (логины) и назначенные роли.</p>
<p>Нажмите зеленую кнопку <b>«+ Добавить»</b>. Чекбокс <b>«Показать неактивных»</b> поможет отфильтровать уволенных или заблокированных сотрудников.</p>
</div>
<div class="wd-guide-visual">
<div class="lk-mockup">
<div class="wd-employees-header">
<div class="wd-employees-title">Сотрудники и доступ</div>
<div class="wd-btn-group lk-highlight">
<button class="wd-btn wd-btn--green">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
Добавить
</button>
<label class="wd-btn wd-btn--outline" style="cursor: pointer; padding-left: 12px;">
<input type="checkbox" style="margin-right: 8px;"> Показать неактивных
</label>
</div>
</div>
<div class="wd-table-wrapper">
<table class="wd-table">
<thead><tr><th>Сотрудник</th><th>Роли</th></tr></thead>
<tbody>
<tr><td><a href="#">79954******</a></td><td>Экономист, Продавец</td></tr>
<tr><td><a href="#">79220******</a></td><td>Программист</td></tr>
<tr><td><a href="#">79627******</a></td><td>Поддержка</td></tr>
<tr><td><a href="#">79999******</a></td><td>Администратор</td></tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Заполнение формы</div>
<p>В открывшемся окне заполните обязательные поля (отмечены красной звездочкой):</p>
<ul style="margin-top: 10px; padding-left: 20px; font-size: 1.05rem; color: var(--wd-text);">
<li><b>Телефон для авторизации</b> (по нему сотрудник будет входить в ЛК).</li>
<li><b>ФИО</b>, <b>E-mail</b> и <b>Должность</b>.</li>
<li>Отметьте нужные <b>Роли сотрудника</b>.</li>
<li>Выберите <b>Доступ к магазинам</b> (какие магазины он будет видеть).</li>
</ul>
<p style="margin-top: 15px;">Нажмите кнопку <b>«+ Создать»</b>. Статус сотрудника автоматически станет «Активен».</p>
</div>
<div class="wd-guide-visual">
<div class="wd-modal">
<div class="wd-modal-header">Создание нового сотрудника</div>
<div class="wd-modal-body">
<div class="wd-form-group">
<label>Телефон для авторизации <span class="req">*</span></label>
<div class="wd-form-control"><input type="text" placeholder=""></div>
</div>
<div class="wd-form-group">
<label>Полное имя, ФИО <span class="req">*</span></label>
<div class="wd-form-control"><input type="text" placeholder=""></div>
</div>
<div class="wd-form-group">
<label>Основной e-mail <span class="req">*</span></label>
<div class="wd-form-control"><input type="text" placeholder=""></div>
</div>
<div class="wd-form-group">
<label>Должность <span class="req">*</span></label>
<div class="wd-form-control"><input type="text" placeholder="Генеральный директор"></div>
</div>
<div class="wd-form-group">
<label>Роли сотрудника</label>
<div class="wd-form-control">
<div class="wd-checkbox-group">
<label class="wd-checkbox-label"><input type="checkbox"> Администратор</label>
<label class="wd-checkbox-label"><input type="checkbox"> Экономист</label>
<label class="wd-checkbox-label"><input type="checkbox"> Продавец</label>
<label class="wd-checkbox-label"><input type="checkbox"> Программист</label>
<label class="wd-checkbox-label"><input type="checkbox"> Поддержка</label>
<a href="#roles" class="wd-link-roles">Подробнее о ролях</a>
</div>
</div>
</div>
<div class="wd-form-group">
<label>Доступ к магазинам</label>
<div class="wd-form-control">
<select class="wd-select"><option></option></select>
</div>
</div>
<div class="wd-form-group">
<label>Сотрудник может</label>
<div class="wd-form-control" style="padding-top: 10px;">
<label class="wd-checkbox-label"><input type="checkbox" checked> Получать уведомления о заказах в магазинах, к которым ему предоставлен доступ</label>
</div>
</div>
<div class="wd-modal-footer">
<a href="#">Вернуться</a>
<button class="wd-btn wd-btn--green">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
Создать
</button>
</div>
</div>
</div>
</div>
</div>

</div>

## 4. Управление сотрудниками {: #manage }

<div class="wd-section-subtitle">Как изменить права или заблокировать доступ</div>

<div class="wd-steps-guide">
<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Редактирование и блокировка</div>
<p>В списке сотрудников нажмите на номер телефона нужного человека, чтобы открыть его карточку.</p>
<p>Во вкладке <b>«Доступ сотрудника»</b> вы можете:</p>
<ul style="margin-top: 10px; padding-left: 20px; font-size: 1.05rem; color: var(--wd-text);">
<li>Изменить логин или пароль.</li>
<li>Выдать или отозвать роли.</li>
<li>Поставить галочку <b>«Заблокирован»</b>, чтобы мгновенно запретить вход (например, при увольнении).</li>
</ul>
</div>
<div class="wd-guide-visual" style="display: flex; align-items: center; justify-content: center;">
<div class="wd-feature" style="max-width: 400px; text-align: center;">
<div class="wd-card-title" style="justify-content: center;">
<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
Мгновенная блокировка
</div>
<div class="wd-card-text">Лог действий сохраняется, а изменения вступают в силу мгновенно. Заблокированный сотрудник сразу потеряет доступ к системе.</div>
</div>
</div>
</div>
</div>

## 5. Проверка доступов {: #check }

<div class="wd-section-subtitle">Убедитесь, что сотрудник видит только то, что нужно</div>

<div class="wd-steps-guide">
<div class="wd-guide-step">
<div class="wd-guide-text">
<div class="wd-step-heading">Тестирование прав</div>
<p>Попросите сотрудника войти в ЛК по своему <b>номеру телефона</b>.</p>
<p>Проверьте, что он видит только разрешенные разделы. Например, если выдали роль «Программист», сотрудник не должен видеть финансы, но должен иметь доступ к техническим настройкам магазина.</p>
<p>Если доступ не работает — проверьте, не стоит ли галочка «Заблокирован», или обратитесь в поддержку Robokassa.</p>
</div>
<div class="wd-guide-visual" style="display: flex; align-items: center; justify-content: center;">
<div class="wd-feature" style="max-width: 400px; text-align: center;">
<div class="wd-card-title" style="justify-content: center;">
<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
Все работает корректно
</div>
<div class="wd-card-text">Убедитесь, что сотрудник может открыть магазин и нужные ему операции, но не имеет доступа к выводу денег.</div>
</div>
</div>
</div>

</div>

## Вопросы и ответы {: #faq }

<div class="wd-section-subtitle">Ответы на частые вопросы</div>

<details class="question"><summary>Сколько сотрудников можно добавить в ЛК Robokassa?</summary><div class="question__content"><p>Количество сотрудников <b>не ограничено</b> — добавляйте сколько нужно. Все роли и доступы бесплатны, без лимитов по тарифам.</p></div></details>

<details class="question"><summary>Можно ли назначить несколько ролей одному сотруднику?</summary><div class="question__content"><p>Да. Назначьте <b>несколько уровней доступа</b> — функционал каждой роли суммируется. Например, Экономист + Продавец получит доступ к финансам и счетам.</p></div></details>

<details class="question"><summary>Что делать, если сотрудник уволился или пароль скомпрометирован?</summary><div class="question__content"><p>Откройте карточку сотрудника → поставьте галочку <b>«Заблокирован»</b> в форме доступа. Сотрудник мгновенно теряет вход.</p></div></details>

<details class="question"><summary>Получит ли сотрудник доступ к выводу денег или настройкам баланса?</summary><div class="question__content"><p><b>Нет</b>. Деньги на балансе и вывод средств доступны <b>только роли «Администратор»</b>.</p></div></details>

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