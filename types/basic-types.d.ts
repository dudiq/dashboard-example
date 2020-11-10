import { DATA_SOURCE_NAME } from '@/constants/dataSources';
import { WIDGET_NAME } from '@/constants/widgets';
import { SIZE_HEIGHT, SIZE_WIDTH } from '@/constants/sizes';

export type TTimestamp = number;

export type TCurrencySettings = {
  from: string;
  to: string;
};

export type TSettings = TCurrencySettings;

export type TDataCol = {
  title: string;
  value: any;
}

export type TDataRow = {
  title: string;
  value: any;
  cols: Array<TDataCol>;
};

export type TData = {
  settings: TSettings;
  table: Array<TDataRow>
};

export type TWidget = {
  widgetName: keyof typeof WIDGET_NAME;
  title: string;
  grid: {
    x: number;
    y: number;
  };
  width: keyof typeof SIZE_WIDTH;
  height: keyof typeof SIZE_HEIGHT;
};

export type TSource = {
  source: keyof typeof DATA_SOURCE_NAME;
  settings: TSettings;
  priority: number;
  grid: {
    x: number;
    y: number;
  };
  widgets: Array<TWidget>;
};
