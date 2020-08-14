import {SheetsComponent} from '@core/SheetsComponent';

export class Toolbar extends SheetsComponent {
  static className = 'toolbar';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: [],
      ...options,
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
}
