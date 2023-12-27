class ItcAccordion {
    constructor(target, config) {
      if (typeof target === 'string') {
        this._el = document.querySelector(target);
      } else {
        this._el = target;
      }
      this._defaultConfig = {
        alwaysOpen: true
      };
      this._config = Object.assign({}, this._defaultConfig, config);
      this._initEventListener();
    }
        _initEventListener() {
      this._el.addEventListener('click', (event) => {
        const header = event.target.closest('.accordion__header');
        if (header === null) {
          return;
        }
        if (this._config.alwaysOpen === false) {
          const openItem = this._el.querySelector('.accordion__item_show');
          if (openItem !== null && openItem !== header.parentElement) {
            openItem.classList.remove('accordion__item_show');
          }
        }
        header.parentElement.classList.toggle('accordion__item_show');
      });
    }
  }
  new ItcAccordion('#accordion-1');
  new ItcAccordion('#accordion-2');