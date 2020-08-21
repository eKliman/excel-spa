import {SheetsComponent} from '@core/SheetsComponent';
import {$} from '@core/dom';
import * as actions from '@/redux/actions';
import {defaultSheetTitle} from '@/constants';
import {debounce} from '@core/utils';
import {ActiveRoute} from '@core/routes/ActiveRoute';

export class Header extends SheetsComponent {
  static className = 'header';

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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
        <div class="header__button" id="delete-btn">
          <span class="header__button-icon material-icons">
          delete_forever
          </span>
        </div>
        <div class="header__button" id="exit-btn">
          <span class="header__button-icon material-icons">exit_to_app</span>
        </div>
      </div>`;
  }

  onInput(event) {
    const $target = $(event.target);
    this.$dispatch(actions.renameSheet($target.text()));
  }

  onClick(event) {
    const $target = $(event.target);
    if ($target.closest('#delete-btn').$el) {
      const decision = confirm('Вы действительно хотите удалить эту таблицу?');
      if (decision) {
        localStorage.removeItem(`sheets:${ActiveRoute.param}`);
        ActiveRoute.navigate('');
      }
    } else if ($target.closest('#exit-btn').$el) {
      ActiveRoute.navigate('');
    }
  }
}
