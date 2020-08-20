export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = [];
    this.current = null;
  }

  clear() {
    this.group.forEach(($ell) => $ell.removeClass(TableSelection.className));
    this.group = [];
  }

  select($el) {
    this.clear();
    $el.focus().addClass(TableSelection.className);
    this.group.push($el);
    this.current = $el;
  }

  get selectedIds() {
    return this.group.map(($el) => $el.id());
  }

  selectGroup($group = []) {
    this.clear();
    this.group = $group;
    this.group.forEach(($el) => $el.addClass(TableSelection.className));
  }

  selectGroupCTRL($el) {
    this.group.push($el);
    $el.addClass(TableSelection.className);
  }

  applyStyle(style) {
    this.group.forEach(($el) => $el.css(style));
  }
}
