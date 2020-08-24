import {Page} from '@core/Page';
import {Spreadsheet} from '@/components/spreadsheet/Spreadsheet';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import {createStore} from '@core/store/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {storage, debounce} from '@core/utils';
import {normalizeInitialState} from '@/redux/initialState';

function storageName(params) {
  return 'sheets:' + params;
}

export class SheetsPage extends Page {
  getRoot() {
    const params = this.params ? this.params : Date.now().toString();
    const state = storage(storageName(params));
    const store = createStore(rootReducer, normalizeInitialState(state));
    const stateListener = debounce((state) => {
      storage(storageName(params), state);
    }, 300);

    store.subscribe(stateListener);

    this.spreadsheet = new Spreadsheet({
      components: [Header, Toolbar, Formula, Table],
      store,
    });

    return this.spreadsheet.getRoot();
  }

  afterRender() {
    this.spreadsheet.init();
  }

  destroy() {
    this.spreadsheet.destroy();
  }
}
