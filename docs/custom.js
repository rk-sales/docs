document.addEventListener('DOMContentLoaded', function() {
  // ===== 1. ЛОГИКА ДЛЯ МЕНЮ =====
  document.querySelectorAll('.md-nav__item--nested').forEach(function(item) {
    var link = item.querySelector(':scope > .md-nav__container .md-nav__link[href]') ||
               item.querySelector(':scope > .md-nav__link[href]');
    var label = item.querySelector(':scope > .md-nav__container label.md-nav__link') ||
                item.querySelector(':scope > label.md-nav__link');
    var toggle = item.querySelector(':scope > .md-toggle');
    var subNav = item.querySelector(':scope > .md-nav');

    if (!link || !label || !toggle || !subNav) return;

    link.addEventListener('click', function(e) {
      if (e.target.closest('.md-nav__icon')) return;

      var isOpen = toggle.checked;

      if (isOpen) {
        e.preventDefault();
        e.stopPropagation();
        label.click();
      }
    });
  });

  // ===== 2. ЛОГИКА ДЛЯ ГЕНЕРАЦИИ PDF =====
  const pdfButton = document.querySelector('.pdf-btn');
  if (!pdfButton) return;

  pdfButton.addEventListener('click', function (e) {
    e.preventDefault();

    const originalBlock = document.querySelector('.requisites-card');
    if (!originalBlock) return;

    if (typeof html3pdf !== 'function') {
      console.error('Библиотека html3pdf не загружена.');
      alert('Не удалось загрузить модуль генерации PDF.');
      return;
    }

    const footer = originalBlock.querySelector('.requisites-footer');
    if (footer) footer.style.display = 'none';

    // Собираем данные о ссылках для второй страницы
    const linksData = [];
    const anchors = originalBlock.querySelectorAll('a[data-pdf-link]');
    anchors.forEach(function (a) {
      const url = a.getAttribute('data-pdf-link');
      const text = a.textContent.trim();
      
      let engLabel = 'Link';
      if (url.startsWith('tel:')) engLabel = 'Phone';
      else if (url.startsWith('mailto:')) engLabel = 'Email';
      else if (url.includes('t.me')) engLabel = 'Telegram';
      else if (url.includes('audit')) engLabel = 'Audit Report';

      linksData.push({ label: engLabel, url: url, text: text });
    });

    setTimeout(function () {
      const options = {
        margin: 10,
        filename: 'robokassa-requisites.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true, 
          backgroundColor: '#ffffff',
          enableLinks: true,
          onclone: function(clonedDoc) {
             const style = clonedDoc.createElement('style');
             style.innerHTML = `
                .requisite-value a {
                   display: inline-block !important;
                   padding: 8px 0 !important;
                   margin: 2px 0 !important;
                }
             `;
             clonedDoc.head.appendChild(style);
          }
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html3pdf().from(originalBlock).set(options).toPdf().get('pdf').then(function (pdf) {
        
        if (linksData.length > 0) {
          pdf.addPage();
          pdf.setFontSize(16);
          pdf.setTextColor(0, 0, 0);
          pdf.text('Contacts and Links', 14, 20);
          
          let y = 30;
          pdf.setFontSize(11);
          
          linksData.forEach(function (item) {
            pdf.setTextColor(80, 80, 80);
            pdf.text(item.label + ':', 14, y);
            
            pdf.setTextColor(37, 99, 235);
            pdf.text(item.url, 14, y + 5);
            
            const textWidth = pdf.getTextWidth(item.url);
            pdf.link(14, y + 1, textWidth + 2, 6, { url: item.url }); 
            
            y += 15; 
            
            if (y > 270) {
              pdf.addPage();
              y = 20;
            }
          });
        }

        pdf.save('robokassa-requisites.pdf');
        
      }).catch(function (err) {
        console.error('Ошибка генерации PDF:', err);
      }).finally(function() {
        if (footer) footer.style.display = '';
      });
    }, 100);
  });
});

// ===== 3. МАРКЕТИНГОВЫЙ ВИДЖЕТ ВМЕСТО СОДЕРЖАНИЯ (Только для Платёжных методов) =====
document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector('.payments-page')) return;

  var sidebar = document.querySelector('.md-sidebar--secondary');
  if (!sidebar) return;

  var inner = sidebar.querySelector('.md-sidebar__inner') || sidebar;

  inner.innerHTML =
    '<div class="aside-sticky">' +
      '<div class="aside-icon">💳</div>' +
      '<h3>Нужна помощь с выбором?</h3>' +
      '<p class="aside-text">Подключите Robokassa, и мы поможем настроить доступные методы под ваш бизнес и тип задач.</p>' +
      '<div class="aside-divider"></div>' +
      '<div class="aside-feature">' +
        '<span class="aside-feature__icon">⚡</span>' +
        '<div><strong>Быстрый старт</strong><p>Подключение за 1 день</p></div>' +
      '</div>' +
      '<div class="aside-feature">' +
        '<span class="aside-feature__icon">🛡</span>' +
        '<div><strong>Без абонентской платы</strong><p>Платите только за успешные платежи</p></div>' +
      '</div>' +
      '<a class="md-button md-button--primary aside-btn" href="/docs/podklyuchenie/ip/">Подключить сервис →</a>' +
      '<a class="aside-link" href="https://docs.robokassa.ru/demoshop/" target="_blank" rel="noopener noreferrer">Посмотреть демо ↗</a>' +
    '</div>';
});

// ===== 4. PAYMENT LINKS — Кнопка «Копировать» =====
document.querySelectorAll('.pl-page .pl-pass-btn').forEach(function (btn) {
  btn.addEventListener('click', async function () {
    var urlEl = btn.parentElement.querySelector('span');
    if (!urlEl) return;

    var url = urlEl.textContent.trim();
    var original = btn.textContent;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        // fallback для http / старых браузеров
        var ta = document.createElement('textarea');
        ta.value = url;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      btn.textContent = 'Скопировано ✓';
      btn.classList.add('pl-pass-btn--copied');
    } catch (err) {
      btn.textContent = 'Ошибка';
    }

    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove('pl-pass-btn--copied');
    }, 1800);
  });
});