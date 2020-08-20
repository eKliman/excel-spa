import {storage} from '@core/utils';
import {defaultStyles, defaultSheetTitle} from '@/constants';

const defaultState = {
  sheetTitle: defaultSheetTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
};

export const initialState = storage('sheets-state')
  ? storage('sheets-state')
  : defaultState;
