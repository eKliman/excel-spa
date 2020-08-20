import {SheetsComponent} from '@core/SheetsComponent';
import {$} from '@core/dom';
import * as actions from '@/redux/actions';
import {defaultSheetTitle} from '@/constants';
import {debounce} from '@core/utils';

export class Header extends SheetsComponent {
  static className = 'header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    });
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300);
  }

  toHTML() {
    function getTitle(state) {
      return state['sheetTitle'] || defaultSheetTitle;
    }

    const title = getTitle(this.store.getState());

    return `
      <input class="header__input" type="text" value="${title}">
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

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(actions.renameSheet($target.text()));
  }
}
