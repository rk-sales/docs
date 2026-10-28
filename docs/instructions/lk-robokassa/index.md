<div class="lk-page">

<div class="lk-container">
  <header class="lk-hero">
    <div class="lk-hero__content">
      <div class="lk-hero__badge">Личный кабинет</div>
      <h1 class="lk-hero__title">Управление бизнесом<br>в Robokassa.</h1>
      <p class="lk-hero__desc">
        Основной рабочий инструмент для подключения и управления приёмом онлайн-платежей. Настраивайте магазины, способы оплаты, фискализацию и сотрудников в одном окне.
      </p>
      <a href="https://login.robokassa.ru" target="_blank" rel="noopener noreferrer" class="lk-hero__btn">
        Перейти в Личный кабинет →
      </a>
    </div>
    
    <div class="lk-hero__stats">
      <div class="lk-stat-card">
        <div class="lk-stat-card__val">20,07 ₽</div>
        <div class="lk-stat-card__label">Баланс</div>
      </div>
      <div class="lk-stat-card">
        <div class="lk-stat-card__val">2</div>
        <div class="lk-stat-card__label">Магазина</div>
      </div>
      <div class="lk-stat-card">
        <div class="lk-stat-card__val">289</div>
        <div class="lk-stat-card__label">Операций</div>
      </div>
    </div>
  </header>
</div>

<div class="lk-container">
  <div class="lk-section-title">
    <h2>Интерактивный интерфейс</h2>
    <p>Кликайте по вкладкам, чтобы переключать страницы и разделы</p>
  </div>

  <!-- ИНТЕРАКТИВНЫЙ МАКЕТ ЛК -->
  <div class="lk-mockup">
    <!-- Шапка -->
    <header class="lk-ui-header">
      <div class="lk-ui-logo">
        <img src="https://partner.robokassa.ru/Content/images/robokassa/new/black.png" alt="Robokassa">
      </div>
      <nav class="lk-ui-nav">
        <a href="#" class="lk-ui-nav__item" data-target="view-home">Главная</a>
        <a href="#" class="lk-ui-nav__item lk-ui-nav__item--active" data-target="view-sales">Центр продаж</a>
        <a href="#" class="lk-ui-nav__item" data-target="view-operations">Операции</a>
        <a href="#" class="lk-ui-nav__item" data-target="view-invoice">Выставить счет</a>
      </nav>
      <div class="lk-ui-profile">
        <div class="lk-ui-profile__bell">
          <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
          <span>2</span>
        </div>
        <div class="lk-ui-profile__avatar">A</div>
        <div class="lk-ui-profile__logout">
          <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
        </div>
      </div>
    </header>

    <div class="lk-ui-body">
      <!-- Сайдбар -->
      <aside class="lk-ui-sidebar">
        <!-- Активный магазин -->
        <div class="lk-ui-store-active">
          <div class="lk-ui-store-active__name">demonstation_lk <span>▼</span></div>
          <div class="lk-ui-store-active__company">ИП Иванов Иван Иванович</div>
          <div class="lk-ui-store-active__balance">
            <span>Баланс<br><b>20,07 ₽</b></span>
            <div class="lk-ui-store-active__refresh">↻</div>
          </div>
        </div>

        <!-- Список магазинов -->
        <div class="lk-ui-store-list">
          <div class="lk-ui-store-item">
            <div class="lk-ui-avatar" style="background: #10b981;">М</div>
            <div class="lk-ui-store-info">
              <div class="lk-ui-store-name">Магазин «МебельЛэнд»</div>
              <div class="lk-ui-store-balance">20,07 ₽</div>
            </div>
            <div class="lk-ui-dots">⋮</div>
          </div>
          <div class="lk-ui-store-item">
            <div class="lk-ui-avatar" style="background: #f59e0b;">Ю</div>
            <div class="lk-ui-store-info">
              <div class="lk-ui-store-name">Магазин «ЮристПро»</div>
              <div class="lk-ui-store-balance lk-ui-store-balance--muted">Не активирован</div>
            </div>
            <div class="lk-ui-dots">⋮</div>
          </div>
          <div class="lk-ui-store-add">
            <span>+</span> Создать магазин
          </div>
        </div>

        <!-- Меню навигации -->
        <div class="lk-ui-menu">
          <details open>
            <summary class="lk-ui-menu-title">
              Управление <span class="lk-ui-chevron"></span>
            </summary>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              Сотрудники и доступ
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Документы и шаблоны
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2V2l-2 2-2-2-2 2-2-2-2 2-2-2-2 2Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
              Фискализация
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              Операции и возвраты
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              Мои магазины
            </div>
          </details>

          <details open>
            <summary class="lk-ui-menu-title">
              Сервисы <span class="lk-ui-chevron"></span>
            </summary>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Выставление счетов
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
              Платежный виджет
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Подписки
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              Доп. сервисы
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
              Бонусы и акции
            </div>
            <div class="lk-ui-menu-item active">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              Центр продаж
            </div>
          </details>

          <details open>
            <summary class="lk-ui-menu-title">
              Финансы <span class="lk-ui-chevron"></span>
            </summary>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
              Баланс и вывод
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              Тарифы
            </div>
          </details>

          <details open>
            <summary class="lk-ui-menu-title">
              Отчеты <span class="lk-ui-chevron"></span>
            </summary>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Отчет об оказании услуг
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Реестры операций
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path></svg>
              Реестры возвратов
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
              Реестры SMS-сервиса
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Отчет «Подели»
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>
              Отчет «Яндекс»
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
              Отчеты Мокка
            </div>
          </details>

          <details open>
            <summary class="lk-ui-menu-title">
              Настройки <span class="lk-ui-chevron"></span>
            </summary>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
              Сводная информация
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              Анкета
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Способы вывода
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              Настройка отчетов
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              Способы оплат
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
              Мой доступ
            </div>
            <div class="lk-ui-menu-item">
              <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8"></path><path d="M15 18h-5"></path><path d="M10 6h8v4h-8V6Z"></path></svg>
              Новости
            </div>
          </details>
        </div>
      </aside>

      <!-- Основной контент -->
      <main class="lk-ui-main">
        
        <!-- ВЬЮ 1: ЦЕНТР ПРОДАЖ -->
        <div id="view-sales" class="lk-ui-view active">
          <h2 class="lk-ui-title">Центр продаж</h2>
          <h3 class="lk-ui-subtitle">Решения для бизнеса</h3>
          <p class="lk-ui-desc">Готовые решения для продаж на сайте, в соцсетях, мессенджерах или офлайн.</p>

          <!-- Вкладки внутри Центра продаж -->
          <div class="lk-ui-tabs">
            <a href="#" class="lk-ui-tab active" data-tab="tab-all">Все решения</a>
            <a href="#" class="lk-ui-tab" data-tab="tab-online">Онлайн-продажи</a>
            <a href="#" class="lk-ui-tab" data-tab="tab-messengers">Продажи в MAX/Telegram/Вконтакте</a>
            <a href="#" class="lk-ui-tab" data-tab="tab-offline">Офлайн-продажи</a>
          </div>

          <!-- Контент: Все решения -->
          <div id="tab-all" class="lk-tab-content active">
            <div class="lk-ui-cards">
              <div class="lk-ui-card">
                <div class="lk-ui-card__icons">
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                </div>
                <div class="lk-ui-card__title">Разовая ссылка для оплаты</div>
                <div class="lk-ui-card__desc">Соберите заказ и отправьте ссылку на оплату покупателю по электронной почте, в социальной сети, в мессенджер.</div>
              </div>
              <div class="lk-ui-card">
                <div class="lk-ui-card__icons">
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </div>
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </div>
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>
                  </div>
                </div>
                <div class="lk-ui-card__title">Кнопка для оплаты и многоразовая ссылка</div>
                <div class="lk-ui-card__desc">Создайте кнопку «Оплатить», форму с вводом суммы, многоразовую ссылку или QR-код.</div>
              </div>
            </div>
          </div>

          <!-- Контент: Онлайн-продажи -->
          <div id="tab-online" class="lk-tab-content">
            <div class="lk-ui-cards">
              <div class="lk-ui-card">
                <div class="lk-ui-card__icons">
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                </div>
                <div class="lk-ui-card__title">Разовая ссылка для оплаты</div>
                <div class="lk-ui-card__desc">Соберите заказ и отправьте ссылку на оплату покупателю по электронной почте, в социальной сети, в мессенджер.</div>
              </div>
              <div class="lk-ui-card">
                <div class="lk-ui-card__icons">
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </div>
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </div>
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line></svg>
                  </div>
                </div>
                <div class="lk-ui-card__title">Кнопка для оплаты и многоразовая ссылка</div>
                <div class="lk-ui-card__desc">Создайте кнопку «Оплатить», форму с вводом суммы, многоразовую ссылку или QR-код.</div>
              </div>
            </div>
          </div>

          <!-- Контент: Мессенджеры -->
          <div id="tab-messengers" class="lk-tab-content">
            <div class="lk-ui-cards">
              <div class="lk-ui-card">
                <div class="lk-ui-card__icons" style="justify-content: space-between; width: 100%;">
                  <div style="display:flex; gap:8px;">
                    <div class="lk-ui-icon-circle" style="background:#5b68df; color:#fff;">M</div>
                    <div class="lk-ui-icon-circle">
                      <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </div>
                  </div>
                  <div class="lk-badge-new">Новое</div>
                </div>
                <div class="lk-ui-card__title">Магазин в MAX</div>
                <div class="lk-ui-card__desc">Выставляйте счета, получайте информацию об оплатах и управляйте вашим магазином в национальном мессенджере MAX.</div>
              </div>
              <div class="lk-ui-card">
                <div class="lk-ui-card__icons">
                  <div class="lk-ui-icon-circle" style="background:#2AABEE; color:#fff;">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </div>
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  </div>
                </div>
                <div class="lk-ui-card__title">Магазин в Telegram</div>
                <div class="lk-ui-card__desc">За 5 минут, без программирования — с витриной, товарами и корзиной. Оплата происходит на защищённой внешней странице оплаты в браузере — платёжные данные не передаются через Telegram.</div>
              </div>
            </div>
          </div>

          <!-- Контент: Офлайн-продажи -->
          <div id="tab-offline" class="lk-tab-content">
            <div class="lk-ui-cards" style="grid-template-columns: 1fr;">
              <div class="lk-ui-card">
                <div class="lk-ui-card__icons">
                  <div class="lk-ui-icon-circle">
                    <svg class="lk-svg" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                  </div>
                </div>
                <div class="lk-ui-card__title">QR-код для оплаты</div>
                <div class="lk-ui-card__desc">Создайте QR-код. Распечатайте или показывайте покупателям на экране смартфона/планшета.</div>
                <div style="margin-top: 24px;">
                  <button class="lk-ui-btn-black">Создать QR-код</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ВЬЮ 2: ГЛАВНАЯ -->
        <div id="view-home" class="lk-ui-view">
          <h2 class="lk-ui-title" style="margin-bottom: 24px;">Магазины</h2>
          
          <div class="lk-ui-store-card">
            <div class="lk-ui-store-card__header">
              <div class="lk-ui-store-card__title">Магазин «МебельЛэнд»</div>
              <div class="lk-ui-store-card__actions">
                <a href="javascript:void(0)" class="lk-ui-store-card__action-link">
                  <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> Операции
                </a>
                <a href="javascript:void(0)" class="lk-ui-store-card__action-link">
                  <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg> Вывод средств
                </a>
                <a href="javascript:void(0)" class="lk-ui-store-card__action-link">
                  <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Настройки
                </a>
              </div>
            </div>
            <div class="lk-ui-store-card__body">
              <div class="lk-ui-store-card__col">
                <div class="lk-ui-label">Баланс магазина:</div>
                <div class="lk-ui-value">20,07 ₽</div>
              </div>
              <div class="lk-ui-store-card__col">
                <div class="lk-ui-status lk-ui-status--success">Активный магазин</div>
                <div class="lk-ui-desc" style="font-size: 13px; margin-top: 4px;">Вы можете принимать и выводить деньги</div>
              </div>
            </div>
          </div>

          <div class="lk-ui-store-card">
            <div class="lk-ui-store-card__header">
              <div class="lk-ui-store-card__title">Магазин «ЮристПро»</div>
              <div class="lk-ui-store-card__actions">
                <a href="javascript:void(0)" class="lk-ui-store-card__action-link disabled">
                  <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> Операции
                </a>
                <a href="javascript:void(0)" class="lk-ui-store-card__action-link disabled">
                  <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg> Вывод средств
                </a>
                <a href="javascript:void(0)" class="lk-ui-store-card__action-link">
                  <svg class="lk-svg" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Настройки
                </a>
              </div>
            </div>
            <div class="lk-ui-store-card__body">
              <div class="lk-ui-store-card__col">
                <div class="lk-ui-label">Баланс магазина:</div>
                <div class="lk-ui-value">... ₽</div>
              </div>
              <div class="lk-ui-store-card__col">
                <div class="lk-ui-status lk-ui-status--warning">Не активирован</div>
                <div class="lk-ui-desc" style="font-size: 13px; margin-top: 4px;">Изучите документацию, протестируйте магазин и подайте заявку</div>
                <div style="margin-top: 12px; display: flex; gap: 8px;">
                  <button class="lk-ui-btn lk-ui-btn--green">Активация</button>
                  <button class="lk-ui-btn lk-ui-btn--outline">К документации</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ВЬЮ 3: ОПЕРАЦИИ -->
        <div id="view-operations" class="lk-ui-view">
          <div class="lk-ui-ops-header">
            <div class="lk-ui-ops-title">Поиск операций в магазине</div>
            <div class="lk-ui-ops-store">Магазин «МебельЛэнд»</div>
          </div>
          
          <div class="lk-ui-ops-form">
            <div class="lk-ui-form-row">
              <div class="lk-ui-form-group">
                <label>Детали операции:</label>
                <input type="text" placeholder="№ Заказа ИЛИ описание">
              </div>
              <div class="lk-ui-form-group">
                <label>Валюта операции</label>
                <select><option>Все валюты</option></select>
              </div>
              <div class="lk-ui-form-group lk-ui-checkboxes">
                <label><input type="checkbox"> с возвратами</label>
                <label><input type="checkbox"> с фискальными операциями</label>
              </div>
            </div>

            <div class="lk-ui-form-row">
              <div class="lk-ui-form-group">
                <label>E-mail покупателя</label>
                <input type="text" placeholder="pochta@gmail.com">
              </div>
              <div class="lk-ui-form-group lk-ui-sum-group">
                <label>Сумма операции</label>
                <div class="lk-ui-sum-inputs">
                  <input type="text" placeholder="от 0"> <span>—</span> <input type="text" placeholder="до 1 000 000">
                </div>
              </div>
            </div>

            <div class="lk-ui-form-row">
              <div class="lk-ui-form-group">
                <label>Номер карты:</label>
                <input type="text" placeholder="последние 4 цифры карты">
              </div>
              <div class="lk-ui-form-group">
                <label>Статус операции</label>
                <select><option>Все статусы</option></select>
              </div>
            </div>

            <div class="lk-ui-form-row">
              <div class="lk-ui-form-group">
                <label>Дата</label>
                <div class="lk-ui-date-input">
                  <button>◀</button>
                  <input type="text" value="01.01.20 - 16.04.26">
                  <button>▶</button>
                </div>
              </div>
            </div>

            <div class="lk-ui-form-actions">
              <button class="lk-ui-btn lk-ui-btn--green" style="padding: 10px 40px;">Найти</button>
              <button class="lk-ui-btn lk-ui-btn--outline" style="padding: 10px 30px;">Очистить</button>
            </div>
          </div>

          <div class="lk-ui-ops-footer">
            <div class="lk-ui-ops-count">Найдено 289 операций</div>
            <div class="lk-ui-btn lk-ui-btn--outline" style="font-size: 12px; padding: 6px 12px;">⬇ Экспорт результатов в CSV</div>
          </div>

          <div class="lk-ui-ops-table">
            <div class="lk-ui-table-header">
              <div>№ заказа</div>
              <div>Дата ↕</div>
              <div>Сумма</div>
              <div>Валюта</div>
              <div>Чек</div>
              <div>Статус</div>
            </div>
          </div>
        </div>

        <!-- ВЬЮ 4: ВЫСТАВИТЬ СЧЕТ -->
        <div id="view-invoice" class="lk-ui-view">
          <div class="lk-ui-invoice-header">
            <span class="lk-ui-invoice-title">Выставление счетов</span>
            <span class="lk-ui-invoice-store">Магазин «МебельЛэнд» ▼</span>
          </div>

          <div class="lk-ui-invoice-form">
            <div class="lk-ui-invoice-add-links">
              <span>Добавить:</span>
              <a href="javascript:void(0)">Номер заказа</a>
              <a href="javascript:void(0)">Описание заказа</a>
              <a href="javascript:void(0)">Комментарий для сотрудников</a>
              <a href="javascript:void(0)">Связать аванс или предоплату</a>
              <a href="javascript:void(0)">SuccessUrl2</a>
              <a href="javascript:void(0)">FailUrl2</a>
              <a href="javascript:void(0)">Опции оплаты ▼</a>
            </div>

            <div class="lk-ui-invoice-product-row">
              <div class="lk-ui-invoice-product-fields">
                <div class="lk-ui-invoice-input-group">
                  <span>1.</span> <input type="text" placeholder="Наименование товара / услуги">
                </div>
                <div class="lk-ui-invoice-qty-price">
                  <input type="text" value="₽ 0,00" style="width: 100px;">
                  <span>×</span>
                  <input type="number" value="1" style="width: 60px;">
                  <span>=</span>
                  <input type="text" value="₽ 0,00" style="width: 100px;">
                </div>
                <div class="lk-ui-invoice-marking">
                  Маркировка товаров "Честный знак" <span class="lk-ui-help-icon">?</span>
                </div>
              </div>
              <div class="lk-ui-invoice-dropdowns">
                <div class="lk-ui-invoice-select-row">
                  <span>Оплата</span>
                  <span class="lk-ui-invoice-select-val">Полный расчет ▼</span>
                </div>
                <div class="lk-ui-invoice-select-row">
                  <span>Тип</span>
                  <span class="lk-ui-invoice-select-val">Товар ▼</span>
                </div>
                <div class="lk-ui-invoice-select-row">
                  <span>Налог</span>
                  <span class="lk-ui-invoice-select-val">Без НДС ▼</span>
                </div>
              </div>
            </div>

            <div class="lk-ui-invoice-add-btn">+ Добавить позицию</div>

            <div class="lk-ui-invoice-bottom">
              <div class="lk-ui-invoice-total">
                <div class="lk-ui-invoice-total-row"><span>Итого к оплате:</span> <b>0,00 ₽</b></div>
                <div class="lk-ui-invoice-total-row lk-ui-invoice-total-row--muted"><span>В том числе налогов:</span> <b>0,00 ₽</b></div>
              </div>
              <div class="lk-ui-invoice-actions">
                <button class="lk-ui-btn lk-ui-btn--green" style="padding: 12px 40px; font-size: 15px;">Выставить счёт</button>
                <button class="lk-ui-btn lk-ui-btn--outline" style="padding: 12px 30px; font-size: 15px; background: #e5e7eb; border-color: #d1d5db; color: #6b7280;">Очистить</button>
              </div>
            </div>
          </div>

          <div class="lk-ui-invoice-search">
            <div class="lk-ui-form-group">
              <label>Поиск по описанию</label>
              <input type="text" placeholder="Поиск по описанию и сумме">
            </div>
            <div class="lk-ui-form-group">
              <label>За период</label>
              <div class="lk-ui-date-input">
                <button>◀</button>
                <input type="text" value="20.10.26 - 27.10.26">
                <button>▶</button>
              </div>
            </div>
            <div class="lk-ui-form-group">
              <label>Статус</label>
              <select><option>Все</option></select>
            </div>
            <div class="lk-ui-form-group" style="justify-content: flex-end; flex: 0;">
              <button class="lk-ui-btn" style="background: #2563eb; color: #fff; padding: 10px 30px; font-size: 14px;">Найти</button>
            </div>
          </div>
        </div>

      </main>
    </div>
  </div>
</div>

<!-- ВОЗВРАЩАЕМ ПОЛЕЗНЫЙ ТЕКСТ ИЗ ИСХОДНОЙ СТАТЬИ -->
<div class="lk-container" style="margin-top: 5rem;">
  <div class="lk-section-title">
    <h2>Что можно делать в личном кабинете</h2>
  </div>
  
  <div class="lk-features">
    <div class="lk-feature">
      <h4><svg class="lk-svg" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-top;"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Магазины и проекты</h4>
      <p>Подключайте и настраивайте магазины и проекты (сайты, боты, CRM).</p>
    </div>
    <div class="lk-feature">
      <h4><svg class="lk-svg" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-top;"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Способы оплаты</h4>
      <p>Управляйте способами оплаты: карты, СБП, pay-сервисы и другие.</p>
    </div>
    <div class="lk-feature">
      <h4><svg class="lk-svg" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-top;"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> Операции и возвраты</h4>
      <p>Смотрите все операции и возвраты в реальном времени.</p>
    </div>
    <div class="lk-feature">
      <h4><svg class="lk-svg" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-top;"><path d="M4 2v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2V2l-2 2-2-2-2 2-2-2-2 2-2-2-2 2Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg> Фискализация</h4>
      <p>Настраивайте фискализацию по 54-ФЗ (Робочеки, облачная касса).</p>
    </div>
    <div class="lk-feature">
      <h4><svg class="lk-svg" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-top;"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Счета без сайта</h4>
      <p>Выставляйте счета и ссылки на оплату без наличия сайта.</p>
    </div>
    <div class="lk-feature">
      <h4><svg class="lk-svg" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-top;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Сотрудники и роли</h4>
      <p>Управляйте сотрудниками и ролями в личном кабинете.</p>
    </div>
    <div class="lk-feature">
      <h4><svg class="lk-svg" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px; vertical-align: text-top;"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg> Баланс и вывод</h4>
      <p>Контролируйте баланс и вывод средств на расчётный счёт.</p>
    </div>
  </div>
</div>

<div class="lk-container">
  <div class="lk-section-title" style="margin-top: 5rem;">
    <h2>Как войти в кабинет</h2>
  </div>

  <div class="lk-steps">
    <div class="lk-step">
      <div class="lk-step__num">1</div>
      <div class="lk-step__content">
        <h4>Перейдите на сайт</h4>
        <p>Откройте <a href="https://login.robokassa.ru" target="_blank">login.robokassa.ru</a></p>
      </div>
    </div>
    
    <div class="lk-step">
      <div class="lk-step__num">2</div>
      <div class="lk-step__content">
        <h4>Введите данные</h4>
        <p>Укажите номер телефона, e-mail или логин, привязанный к ЛК.</p>
      </div>
    </div>

    <div class="lk-step">
      <div class="lk-step__num">3</div>
      <div class="lk-step__content">
        <h4>Подтвердите вход</h4>
        <p>Введите код из SMS или используйте Госуслуги / VK ID / Яндекс.</p>
      </div>
    </div>

    <div class="lk-step">
      <div class="lk-step__num">4</div>
      <div class="lk-step__content">
        <h4>Готово</h4>
        <p>Вы на рабочем столе с основными показателями по платежам.</p>
      </div>
    </div>
  </div>
</div>

<div class="lk-container">
  <div class="lk-footer-note">
    <p>Если вы только начинаете работу, начните с регистрации, создания магазина и подключения способов оплаты — об этом подробнее в инструкциях:</p>
    <div class="lk-footer-links">
      <a href="/docs/podklyuchenie/ip/" target="_blank" rel="noopener noreferrer" class="lk-footer-btn">Подключение для ИП</a>
      <a href="/docs/podklyuchenie/ooo/" target="_blank" rel="noopener noreferrer" class="lk-footer-btn">Подключение для ООО</a>
      <a href="/docs/podklyuchenie/smz/" target="_blank" rel="noopener noreferrer" class="lk-footer-btn">Подключение для Самозанятых</a>
    </div>
  </div>
</div>

</div>

<!-- Скрипт для переключения вкладок в макете -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  // 1. Переключение главных вкладок (Главная, Центр продаж, Операции)
  const navItems = document.querySelectorAll('.lk-ui-nav__item[data-target]');
  const views = document.querySelectorAll('.lk-ui-view');

  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      navItems.forEach(nav => nav.classList.remove('lk-ui-nav__item--active'));
      this.classList.add('lk-ui-nav__item--active');
      views.forEach(view => view.classList.remove('active'));
      const targetId = this.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');
    });
  });

  // 2. Переключение внутренних вкладок (Все решения, Онлайн, Мессенджеры, Офлайн)
  const tabItems = document.querySelectorAll('.lk-ui-tab[data-tab]');
  const tabContents = document.querySelectorAll('.lk-tab-content');

  tabItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      tabItems.forEach(tab => tab.classList.remove('active'));
      this.classList.add('active');
      tabContents.forEach(content => content.classList.remove('active'));
      const targetId = this.getAttribute('data-tab');
      document.getElementById(targetId).classList.add('active');
    });
  });
});
</script>