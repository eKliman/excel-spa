import {toInlineStyles} from '@core/utils';
import {defaultStyles} from '@/constants';
import {parse} from '@core/parse';

const CODES = {
  A: 65,
  Z: 90,
};

const DEFAULT_WIDTH = 120;
const DEFAULT_HEIGHT = 24;
const DEFAULT_TEXT = '';

function getWidth(state, index) {
  return (state[index] || DEFAULT_WIDTH) + 'px';
}

function getHeight(state, index) {
  return (state[index] || DEFAULT_HEIGHT) + 'px';
}

function getText(state, id) {
  return state[id] || DEFAULT_TEXT;
}

function createCell(state, row) {
  return function(_, col) {
    const width = getWidth(state.colState, col);
    const id = `${row}:${col}`;
    const data = getText(state.dataState, id);
    const styles = toInlineStyles({...defaultStyles, ...state.stylesState[id]});
    return `
    <div
      class="table__cell" 
      contenteditable data-col="${col}" 
      data-type="cell"
      data-id="${id}"
      data-value="${data}"
      style="${styles}; width: ${width}"
    >${(parse(data))}</div>`;
  };
}

function createColumn({col, index, width}) {
  return `
    <div
      class="table__column"
      data-type="resizible"
      data-col="${index}"
      style="width: ${width}"
    >
      ${col}
      <div class="table__column-resize" data-resize="col"></div>
    </div>`;
}

function createRow(index, content, state) {
  const resize = index
    ? '<div class="table__row-resize" data-resize="row"></div>'
    : '';
  const height = getHeight(state, index);
  return `
    <div
    class="table__row"
    data-type="resizible"
    data-row="${index}"
    style="height: ${height}"
    >
      <div class="table__row-info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="table__row-data">${content}</div>
    </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

function withWidthFrom(state) {
  return function(col, index) {
    return {
      col, index, width: getWidth(state.colState, index),
    };
  };
}

export function createTable(rowsCount = 20, state = {}) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(withWidthFrom(state))
    .map(createColumn)
    .join('');

  rows.push(createRow(null, cols, {}));

  for (let row = 0; row < rowsCount; row++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(createCell(state, row))
      .join('');
    rows.push(createRow(row + 1, cells, state.rowState));
  }
  return rows.join('');
}
