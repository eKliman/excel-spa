import {Page} from '@core/Page';
import {$} from '@core/dom';
import {createRecordsTable} from './dashboard.functions';

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString();
    return $.create('div', 'dashboard').html(`
      <div class="db-header">
        <h1 class="db-header__title">Spreadsheets Панель управления</h1>
      </div>
      <div class="db-new">
        <div class="db-view">
          <a class="db-new__create" href="#sheet/${now}">
            Новая <br/> таблица
          </a>
        </div>
      </div>
      <div class="db-table db-view">
        ${createRecordsTable()}
      </div>
    `);
  }
}
