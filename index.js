import Item from './item';

class ContainerQuery {
  constructor(window) {
    this.items = [];
    this.window = window;
    this.observer = new MutationObserver(mutations => {
      this.check();
    });
    this.config = {
      attributes: true,
      childList: true,
      characterData: true
    };
  }

  run() {
    this.register();
    this.check();
  }

  register() {
    this.window.addEventListener('resize', () => {
      this.check();
    });
  }

  check() {
    this.observer.disconnect();
    this.items.forEach(item => {
      item.check();
    });
    this.items.forEach(item => {
      this.observer.observe(item.element, this.config);
    });
  }

  add(element, options) {
    this.observer.observe(element, this.config);
    this.items.push(new Item(element, options));
  }
}

export default new ContainerQuery(window);
