import {Spreadsheets} from '@/components/spreadsheets/Spreadsheets';
import {Header} from '@/components/header/Header';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Formula} from '@/components/formula/Formula';
import {Table} from '@/components/table/Table';
import '@/scss/index.scss';

const spreadsheets = new Spreadsheets('#app', {
  components: [Header, Toolbar, Formula, Table],
});

spreadsheets.render();
