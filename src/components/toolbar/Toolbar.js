import {SpreadsheetsComponent} from '@core/SpreadsheetsComponent';

export class Toolbar extends SpreadsheetsComponent {
  static className = 'toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }

  toHTML() {
    return `
      <div class="toolbar__button">
        <span class="toolbar__button-icon material-icons">
        format_align_left
        </span>
      </div>
      <div class="toolbar__button">
        <span class="toolbar__button-icon material-icons">
        format_align_center
        </span>
      </div>
      <div class="toolbar__button">
        <span class="toolbar__button-icon material-icons">
        format_align_right
        </span>
      </div>
      <div class="toolbar__button">
        <span class="toolbar__button-icon material-icons">
        format_bold
        </span>
      </div>
      <div class="toolbar__button">
        <span class="toolbar__button-icon material-icons">
        format_italic
        </span>
      </div>
      <div class="toolbar__button">
        <span class="toolbar__button-icon material-icons">
        format_underlined
        </span>
      </div>`;
  }

  onClick(event) {
    console.log(event.target);
  }
}
