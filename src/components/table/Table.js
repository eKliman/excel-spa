import {SpreadsheetsComponent} from '@core/SpreadsheetsComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends SpreadsheetsComponent {
  static className = 'table';

  toHTML() {
    return createTable();
  }
}
