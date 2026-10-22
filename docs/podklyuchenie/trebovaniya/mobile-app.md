<div class="audit-page">

<div class="audit-container">
  <header class="audit-hero">
    <div class="audit-hero__badge">Аудит приложения</div>
    <h1 class="audit-hero__title">Требования к мобильному приложению</h1>
    <p class="audit-hero__desc">
      Перед подключением Robokassa убедитесь, что в вашем мобильном приложении есть вся обязательная информация. Это ускорит модерацию и поможет избежать отказа в подключении.
    </p>
  </header>

  <div class="audit-alert">
    <div class="audit-alert__icon">!</div>
    <div class="audit-alert__content">
      <strong>Совет:</strong> пройдитесь по всем пунктам ниже, прежде чем подавать заявку. Это сэкономит вам несколько дней на доработках.
    </div>
  </div>
</div>

<div class="audit-container">
  <div class="audit-section-title">
    <h2>Три общих правила</h2>
    <p>В мобильном приложении должны быть расположены:</p>
  </div>

  <div class="audit-rules">
    <!-- Правило 1 -->
    <div class="audit-rule">
      <div class="audit-rule__num">01</div>
      <div class="audit-rule__body">
        <h3>Название и цены на товары/услуги</h3>
        <p>Цены должны быть указаны явно. Если у товаров/услуг нет фиксированных цен, их можно указать от и до.</p>
        
        <div class="audit-rule__example">
          <strong>Пример:</strong> «Юридические услуги от 10 000 до 50 000 рублей».
        </div>

        <p class="audit-rule__hint">Варианты размещения цен:</p>

        <details class="question">
          <summary>В описании приложения в сторе</summary>
          <div class="question__content">
            <p>В описании приложения в App Store, Google Play или RuStore укажите информацию о товарах/услугах и ценах. Это можно сделать в разделе «Описание» при заполнении карточки приложения.</p>
          </div>
        </details>

        <details class="question">
          <summary>На главном экране приложения</summary>
          <div class="question__content">
            <p>На главном экране или в каталоге приложения должны быть явно указаны названия товаров/услуг и их стоимость (например, карточки товаров с ценами или список услуг).</p>
          </div>
        </details>

        <details class="question">
          <summary>В отдельном разделе «Прайс-лист» или «Цены»</summary>
          <div class="question__content">
            <p>Создайте в приложении отдельный раздел с прайс-листом, где будут перечислены все товары/услуги и их стоимость.</p>
          </div>
        </details>

        <details class="question">
          <summary>В ссылке на облако с файлом</summary>
          <div class="question__content">
            <p>Разместите в приложении ссылку на файл с прайс-листом в облачном хранилище (Google Disk, Yandex Drive и т.п.). Ссылка должна быть активной и вести на общедоступный файл.</p>
          </div>
        </details>
      </div>
    </div>

    <!-- Правило 2 -->
    <div class="audit-rule">
      <div class="audit-rule__num">02</div>
      <div class="audit-rule__body">
        <h3>Оферта ИЛИ условия оплаты и возврата</h3>
        
        <div class="audit-rule__important">
          <b>ВАЖНО:</b> Вам не обязательно размещать оферту, если в приложении уже имеется понятное описание условий оплаты и возврата денежных средств.
        </div>

        <p class="audit-rule__hint">Примеры подходящих формулировок:</p>

        <details class="question">
          <summary>Пример 1. Продажа товаров онлайн</summary>
          <div class="question__content">
            <p><b>Условия оплаты и возврата</b></p>
            <ul>
              <li>В приложении доступна оплата картой или через СБП и другими платёжными методами через сервис Robokassa.</li>
              <li>Доставка товара происходит с помощью сервиса СДЭК после оплаты заказа. Срок доставки 3-5 рабочих дней.</li>
              <li>Возврат денежных средств возможен в течение 14 дней с момента покупки, если товар имеет заводские характеристики и не имеет дефектов.</li>
            </ul>
          </div>
        </details>

        <details class="question">
          <summary>Пример 2. Продажа онлайн-услуг</summary>
          <div class="question__content">
            <p><b>Условия оплаты и возврата</b></p>
            <ul>
              <li>Оплата производится в приложении картой или через СБП.</li>
              <li>Доступ к курсу/вебинару открывается автоматически в приложении или на e-mail после оплаты в течение 5 минут.</li>
              <li>Возврат денег возможен при запросе в течение 14 дней, если услуга не была оказана (доступ к материалам не открыт).</li>
            </ul>
          </div>
        </details>

        <details class="question">
          <summary>Пример 3. Продажа офлайн-услуг</summary>
          <div class="question__content">
            <p><b>Условия оплаты и возврата</b></p>
            <ul>
              <li>Бронь сеанса подтверждается 100% предоплатой в приложении картой или через СБП.</li>
              <li>Услуга оказывается в назначенное время по адресу [Адрес].</li>
              <li>Возврат предоплаты возможен при отмене записи не менее чем за 24 часа до начала услуги.</li>
            </ul>
          </div>
        </details>

        <details class="question">
          <summary>Пример 4. Продажа товаров офлайн</summary>
          <div class="question__content">
            <p><b>Условия оплаты и возврата</b></p>
            <ul>
              <li>Товары бронируются через приложение, оплата производится только при получении в магазине наличными или картой.</li>
              <li>Заказ хранится в магазине по адресу [Адрес] в течение 3 дней с момента поступления.</li>
              <li>Возврат товара надлежащего качества возможен в течение 14 дней в любом нашем магазине при наличии чека.</li>
            </ul>
          </div>
        </details>

        <!-- Генератор оферты -->
        <div class="audit-generator">
          <div class="audit-generator__badge">Бесплатно</div>
          <h4>Генератор оферты</h4>
          <p>Если вы решили разместить полноценную оферту, воспользуйтесь нашим бесплатным генератором в ЛК Robokassa:</p>
          <ol>
            <li>Зайдите в <b>ЛК Robokassa</b>;</li>
            <li>Слева в меню выберите <b>«Мои магазины»</b>;</li>
            <li>По вашему магазину нажмите на <b>«Настройки»</b>;</li>
            <li>Пролистайте вниз до раздела <b>«Об оферте»</b>, укажите вид деятельности и нажмите <b>«Скачать оферту»</b>.</li>
          </ol>
          <p class="audit-generator__note">Файл с офертой можно разместить в отдельном разделе приложения («Документы» или «Оферта») либо дать ссылку на скачивание из облака.</p>
        </div>
      </div>
    </div>

    <!-- Правило 3 -->
    <div class="audit-rule">
      <div class="audit-rule__num">03</div>
      <div class="audit-rule__body">
        <h3>Реквизиты компании и актуальные контакты</h3>
        <p>В приложении должны быть актуальные реквизиты и способы связи с вами.</p>
        
        <div class="audit-rule__example">
          <strong>Пример:</strong> <br>
          ИП Иванов Иван Иванович<br>
          ИНН: 12345784912<br>
          Горячая линия: 8 800 800 88 88<br>
          E-mail: ivanovaova@yandex.ru
        </div>

        <p class="audit-rule__hint">Варианты размещения:</p>

        <details class="question">
          <summary>В описании приложения в сторе</summary>
          <div class="question__content">
            <p>В описании приложения в App Store, Google Play или RuStore укажите реквизиты компании и контакты для связи. Это можно сделать в разделе «Информация о разработчике» или в тексте описания.</p>
          </div>
        </details>

        <details class="question">
          <summary>В отдельном разделе «Контакты» или «О компании»</summary>
          <div class="question__content">
            <p>Создайте в приложении раздел с контактной информацией, где будут указаны ИНН, ОГРН/ОГРНИП, юридический и фактический адрес, телефон, e-mail, ссылки на соцсети.</p>
          </div>
        </details>

        <details class="question">
          <summary>В настройках приложения</summary>
          <div class="question__content">
            <p>Разместите информацию о компании и контакты в разделе «Настройки» или «О приложении».</p>
          </div>
        </details>

        <details class="question">
          <summary>В ссылке на облако с файлом</summary>
          <div class="question__content">
            <p>Загрузите файл с реквизитами в облачное хранилище и дайте активную ссылку в приложении.</p>
          </div>
        </details>

        <details class="question">
          <summary>В закреплённом сообщении (чат поддержки)</summary>
          <div class="question__content">
            <p>Если в приложении есть встроенный чат или канал, закрепите сообщение с реквизитами и контактами.</p>
          </div>
        </details>
      </div>
    </div>
  </div>
</div>

<div class="audit-container">
  <div class="audit-section-title" style="margin-top: 5rem;">
    <h2>Пример правильного мобильного приложения</h2>
    <p>Так выглядит приложение, готовое к подключению (все обязательные элементы на экране):</p>
  </div>
  
  <!-- SVG-МАКЕТ МОБИЛЬНОГО ПРИЛОЖЕНИЯ -->
  <div class="audit-vk-mockup">
    <svg viewBox="0 0 1000 750" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 16px; border: 1px solid #333; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.3); background: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      
      <!-- Фон (градиент) -->
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="1000" height="750" fill="url(#bgGradient)" />

      <!-- Телефон (Корпус) -->
      <rect x="300" y="50" width="400" height="800" rx="40" fill="#000" stroke="#334155" stroke-width="4" />
      <!-- Экран -->
      <rect x="310" y="60" width="380" height="780" rx="30" fill="#f8fafc" />
      <!-- Челка (Dynamic Island) -->
      <rect x="440" y="70" width="120" height="30" rx="15" fill="#000" />

      <!-- Верхняя панель (Статус бар) -->
      <text x="330" y="88" fill="#0f172a" font-weight="bold" font-size="12">9:41</text>
      <rect x="630" y="78" width="20" height="10" rx="3" fill="#0f172a" />
      <rect x="655" y="78" width="15" height="10" rx="3" fill="#0f172a" />

      <!-- Шапка приложения -->
      <rect x="310" y="110" width="380" height="60" fill="#ffffff" />
      <text x="340" y="145" fill="#0f172a" font-weight="800" font-size="18">Онлайн-Магазин</text>
      <!-- Иконка профиля -->
      <circle cx="650" cy="140" r="15" fill="#e2e8f0" />

      <!-- Вкладки -->
      <rect x="310" y="170" width="380" height="40" fill="#ffffff" />
      <rect x="0" y="209" width="1000" height="1" fill="#e2e8f0" />
      
      <text x="340" y="195" fill="#2563eb" font-weight="bold" font-size="14">Каталог</text>
      <rect x="340" y="205" width="40" height="3" fill="#2563eb" />
      
      <text x="420" y="195" fill="#64748b" font-weight="600" font-size="14">Оферта</text>
      <text x="500" y="195" fill="#64748b" font-weight="600" font-size="14">Контакты</text>

      <!-- СЕКЦИЯ 1: Цены (Карточки товаров) -->
      <text x="330" y="240" fill="#0f172a" font-weight="800" font-size="16">Популярное</text>
      
      <!-- Карточка 1 -->
      <rect x="330" y="255" width="160" height="200" rx="12" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="340" y="265" width="140" height="100" rx="8" fill="#f1f5f9" />
      <text x="350" y="390" fill="#0f172a" font-weight="800" font-size="16">15 000 ₽</text>
      <text x="350" y="410" fill="#64748b" font-size="12">Светильник "Луна"</text>
      <rect x="350" y="425" width="120" height="20" rx="10" fill="#2563eb" />
      <text x="410" y="440" fill="#fff" font-weight="bold" font-size="10" text-anchor="middle">В корзину</text>

      <!-- Карточка 2 -->
      <rect x="510" y="255" width="160" height="200" rx="12" fill="#ffffff" stroke="#e2e8f0" />
      <rect x="520" y="265" width="140" height="100" rx="8" fill="#f1f5f9" />
      <text x="530" y="390" fill="#0f172a" font-weight="800" font-size="16">25 000 ₽</text>
      <text x="530" y="410" fill="#64748b" font-size="12">Стол "Прованс"</text>
      <rect x="530" y="425" width="120" height="20" rx="10" fill="#2563eb" />
      <text x="590" y="440" fill="#fff" font-weight="bold" font-size="10" text-anchor="middle">В корзину</text>

      <!-- СЕКЦИЯ 2: Оферта и Условия (Выделенный блок) -->
      <rect x="330" y="480" width="340" height="130" rx="12" fill="#eff6ff" stroke="#bfdbfe" />
      <text x="350" y="510" fill="#1e40af" font-weight="800" font-size="14">📍 Оферта / Условия оплаты</text>
      <text x="350" y="535" fill="#1e3a8a" font-size="12">• Оплата картой или через СБП (Robokassa).</text>
      <text x="350" y="555" fill="#1e3a8a" font-size="12">• Доставка СДЭК 3-5 рабочих дней.</text>
      <text x="350" y="575" fill="#1e3a8a" font-size="12">• Возврат в течение 14 дней.</text>
      <text x="350" y="595" fill="#2563eb" font-weight="bold" font-size="11">Читать полную оферту →</text>

      <!-- СЕКЦИЯ 3: Реквизиты (Внизу) -->
      <rect x="330" y="630" width="340" height="100" rx="12" fill="#f8fafc" stroke="#e2e8f0" />
      <text x="350" y="660" fill="#0f172a" font-weight="800" font-size="12">Реквизиты и контакты</text>
      <text x="350" y="680" fill="#475569" font-size="11">ИП Иванов Иван Иванович</text>
      <text x="350" y="695" fill="#475569" font-size="11">ИНН: 12345784912</text>
      <text x="350" y="710" fill="#2563eb" font-size="11">+7 (800) 800 88 88</text>

      <!-- Кнопка "Наверх" или навигация -->
      <rect x="310" y="760" width="380" height="80" fill="#ffffff" />
      <rect x="0" y="759" width="1000" height="1" fill="#e2e8f0" />
      
      <!-- Иконки навигации -->
      <circle cx="400" cy="800" r="12" fill="#2563eb" />
      <circle cx="500" cy="800" r="12" fill="#e2e8f0" />
      <circle cx="600" cy="800" r="12" fill="#e2e8f0" />

    </svg>
  </div>
</div>

</div>