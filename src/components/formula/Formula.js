import {SheetsComponent} from '@core/SheetsComponent';
import {$} from '@core/dom';

export class Formula extends SheetsComponent {
  static className = 'formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options,
    });
  }

  toHTML() {
    return `
      <div class="formula__info">fx</div>
      <div class="formula__input"
      id="formula"contenteditable spellcheck="false"></div>`;
  }

  init() {
    super.init();
    this.$formula = this.$root.find('#formula');

    this.$on('table:select', ($cell) => {
      this.$formula.text($cell.text());
    });

    this.$on('table:input', (cell) => {
      this.$formula.text(cell.text());
    });
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text());
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(event.key)) {
      event.preventDefault();
      this.$emit('formula:done');
    }
  }
}
