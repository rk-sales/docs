document.addEventListener('DOMContentLoaded', function() {
  console.log('✅ custom.js (v9 - исправлен переход) загружен');

  document.querySelectorAll('.md-nav__item--nested').forEach(function(item) {
    var link = item.querySelector(':scope > .md-nav__container .md-nav__link[href]') ||
               item.querySelector(':scope > .md-nav__link[href]');
    var label = item.querySelector(':scope > .md-nav__container label.md-nav__link') ||
                item.querySelector(':scope > label.md-nav__link');
    var toggle = item.querySelector(':scope > .md-toggle');
    var subNav = item.querySelector(':scope > .md-nav');

    if (!link || !label || !toggle || !subNav) return;

    console.log('🔗 Обработчик на:', link.textContent.trim());

    link.addEventListener('click', function(e) {
      if (e.target.closest('.md-nav__icon')) return;

      var isOpen = toggle.checked;
      console.log(`Чекбокс: ${isOpen ? 'открыто' : 'закрыто'}`);

      if (isOpen) {
        // Подменю открыто — отменяем переход и закрываем его через label.click()
        e.preventDefault();
        e.stopPropagation();
        label.click();
        console.log('📁 Подменю закрыто, переход отменён');
      }
      // Если закрыто — ничего не делаем, позволяем браузеру перейти по ссылке
    });
  });
});