import {defaultStyles, defaultSheetTitle} from '@/constants';
import {clone} from '@core/utils';

const defaultState = {
  sheetTitle: defaultSheetTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaultStyles,
  lastOpened: Date.now().toString(),
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultState,
  currentText: '',
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState);
}
