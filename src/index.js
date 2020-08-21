import {Router} from '@core/routes/Router';
import {DashboardPage} from '@/pages/DashboardPage';
import {SheetsPage} from '@/pages/SheetsPage';
import '@/scss/index.scss';

new Router('#app', {
  dashboard: DashboardPage,
  spreadsheet: SheetsPage,
});
