import { TCurrencySettings, TData, TTimestamp } from '@/types/basic-types';
import { cached } from './cached';

type TRate = number;

type TRatesMap = {
  [key: string]: TRate,
}

type TRatesByBase = {
  disclaimer: string,
  license: string,
  timestamp: TTimestamp,
  base: string,
  rates: TRatesMap,
}

const API_KEY = process.env.VUE_APP_OPEN_EXCHANGE_API_KEY;

const apiPath = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;

async function fetchMock(path: string): Promise<{ json(): any }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const req = {
        async json() {
          return cached;
        }
      };
      resolve(req);
    }, 2000);
  });
}

async function getData(settings: TCurrencySettings): Promise<TData> {
  const { from, to } = settings;
  const req = await fetchMock(apiPath);
  const data:TRatesByBase = await req.json();
  const { base, rates } = data;

  const allRates = {
    ...rates,
    [base]: 1,
  };

  const fromRate = allRates[from];
  const toRate = allRates[to];

  const rateKoef = toRate ? (toRate / fromRate) : 0;

  return {
    settings,
    table: [ // rows
      {
        title: '',
        value: null,
        cols: [
          {
            title: '',
            value: rateKoef,
          }
        ]
      }
    ]
  };
}

export default {
  getData,
}
