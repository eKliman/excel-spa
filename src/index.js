import {Spreadsheet} from '@/components/spreadsheet/Spreadsheet';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import {createStore} from '@core/createStore';
import {rootReducer} from '@/redux/rootReducer';
import {storage, debounce} from '@core/utils';
import {initialState} from '@/redux/initialState';
import '@/scss/index.scss';

const store = createStore(rootReducer, initialState);

const stateListener = debounce((state) => {
  storage('sheets-state', state);
}, 300);

store.subscribe(stateListener);

const spreadsheet = new Spreadsheet('#app', {
  components: [Header, Toolbar, Formula, Table],
  store,
});

spreadsheet.render();
