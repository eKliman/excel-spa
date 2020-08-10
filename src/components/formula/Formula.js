import {SpreadsheetsComponent} from '@core/SpreadsheetsComponent';

export class Formula extends SpreadsheetsComponent {
  static className = 'formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
      <div class="formula__info">fx</div>
      <div class="formula__input" contenteditable spellcheck="false"></div>`;
  }

  onInput(event) {
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  onClick(event) {
    console.log('Formula: onClick', event);
  }
}
