import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const CryptoHeaders = {

  // 'X-RapidAPI-Key': 'a2a139f442msh90f217a844c442ap1b9404jsn3db8e247daba',
  // 'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

  // 'X-RapidAPI-Key': '542f6bd733msh4b7963039c44b00p1c9210jsne5043132b7cc',
	// 	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

  'X-RapidAPI-Key': '514c4e0f3emsh4770b5ffbf2c456p12f4a3jsn238c494b2233',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'

}

// const baseUrl = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';



const baseUrl = 'https://coinranking1.p.rapidapi.com';

// ====here baseurl 'b' should be in small letter

const createRequest = (url) => ({ url, headers: CryptoHeaders })

export const CryptoApi = createApi({
  reducerPath: 'CryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: builder => ({




    GetCryptos: builder.query({
      query: () => createRequest('/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0'),


    }),

    GetDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),


    }),
    GetMDetails: builder.query({
      query: (uuid) => createRequest(`/stats/${uuid}`),


    }),
    GetHistory: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h `)


    }),

  })

});

export const {

  useGetCryptosQuery, useGetDetailsQuery,useGetHistoryQuery,useGetMDetailsQuery,
} = CryptoApi;



// const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '542f6bd733msh4b7963039c44b00p1c9210jsne5043132b7cc',
// 		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// https://coinranking1.p.rapidapi.com