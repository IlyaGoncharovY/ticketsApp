import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const URL = 'https://www.cbr-xml-daily.ru/';


export type RootObjectType = {
	Date: string;
	PreviousDate: string;
	PreviousURL: string;
	Timestamp: string;
	Valute: RootObjectValute;
};
type RootObjectValute = {
	[key: string]: {
		ID: string;
		NumCode: string;
		CharCode: string;
		Nominal: number;
		Name: string;
		Value: number;
		Previous: number;
	};
};

export type KeyType = 'AUD' | 'AZN' | 'GBP' | 'AMD'
	| 'BYN' | 'BGN' | 'BRL' | 'HUF' | 'VND' | 'HKD'
	| 'GEL' | 'DKK' | 'AED' | 'USD' | 'EUR' | 'EGP'
	| 'INR' | 'IDR' | 'KZT' | 'CAD' | 'QAR' | 'KGS'
	| 'CNY' | 'MDL' | 'NZD' | 'NOK' | 'PLN' | 'RON'
	| 'XDR' | 'SGD' | 'TJS' | 'THB' | 'TRY' | 'TMT'
	| 'UZS' | 'UAH' | 'CZK' | 'SEK' | 'CHF' | 'RSD'
	| 'ZAR' | 'KRW' | 'JPY'

export const apiFilterSlice = createApi({
  reducerPath: 'apiFilterSlice',
  baseQuery: fetchBaseQuery({baseUrl: URL}),
  endpoints: builder => ({
    getCurrencyExchangeRates: builder.query<RootObjectType, void>({
      query: () => ({
        url: 'daily_json.js',
      }),
    }),
  }),
});
