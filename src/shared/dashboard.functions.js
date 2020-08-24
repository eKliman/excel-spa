import {storage} from '@core/utils';

function toHTML(key) {
  const title = storage(key).sheetTitle;
  const date = new Date(storage(key).lastOpened).toLocaleString();
  const href = key.split(':')[1];
  return `
    <li class="db-table__record">
      <a href="#sheets/${href}" class="db-table__record-link">${title}</a>
      <span class="db-table__record-date">${date}</span>
    </li>
  `;
}

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('sheets')) {
      continue;
    }
    keys.push(key);
  }
  return keys;
}

export function createRecordsTable() {
  const keys = getAllKeys();

  if (!keys.length) {
    return `<p class="db-table__no-records">
      Вы пока не создали ни одной таблицы
    </p>`;
  }

  return `
    <div class="db-table__list-header">
      <span class="db-table__title">Название</span>
      <span class="db-table__date">Дата открытия</span>
    </div>
    <ul class="db-table__list">
      ${keys.map(toHTML).join('')}
    </ul>
  `;
}
