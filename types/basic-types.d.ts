import { DATA_SOURCE_NAME } from '@/constants/dataSources';

export type TTimestamp = number;

export type TCurrencySettings = {
  from: string,
  to: string,
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
  settings: TSettings,
  table: Array<TDataRow>
};

export type TSource = {
  source: keyof typeof DATA_SOURCE_NAME;
  settings: TSettings;
  priority: number;
  grid: {
    x: number;
    y: number;
  };
  widgets: Array<TWidget>,
};
