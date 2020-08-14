import {SheetsComponent} from '@core/SheetsComponent';

export class Header extends SheetsComponent {
  static className = 'header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options,
    });
  }

  toHTML() {
    return `
      <input class="header__input" type="text" value="Новая таблица">
      <div class="header__buttons-block">
        <div class="header__button">
          <span class="header__button-icon material-icons">
          delete_forever
          </span>
        </div>
        <div class="header__button">
          <span class="header__button-icon material-icons">exit_to_app</span>
        </div>
      </div>`;
  }
}
