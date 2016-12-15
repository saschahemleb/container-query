class ContainerQueryItem {
  constructor(element, options) {
    this.element = element;
    this.options = options;
  }

  check() {
    let classList = this.element.classList,
      elementWidth = this.element.offsetWidth,
      elementHeight = this.element.offsetHeight,
      removeClasses = [],
      addClasses = [];

    this.options['mw'].forEach(minWidth => {
      if (elementWidth >= minWidth) {
        addClasses.push('query-mw-' + minWidth);
      } else {
        removeClasses.push('query-mw-' + minWidth);
      }
    });

    this.options['mh'].forEach(minHeight => {
      if (elementHeight >= minHeight) {
        addClasses.push('query-mh-' + minHeight);
      } else {
        removeClasses.push('query-mh-' + minHeight);
      }
    });

    let removeDiff = removeClasses.filter(i => classList.contains(i));
    if (removeDiff.length) {
      classList.remove.apply(classList, removeDiff);
    }
    let addDiff = addClasses.filter(i => !classList.contains(i));
    if (addDiff.length) {
      classList.add.apply(classList, addDiff);
    }
  }
}

export default ContainerQueryItem;
