import { expect, test } from '@playwright/test'

const {apiKey, offset} = require('./common.js')

test('Current Matches', async ({ request }) => {

   const baseUrl = new URL('https://api.cricapi.com/v1/currentMatches')

   baseUrl.searchParams.append('apikey', apiKey)
   baseUrl.searchParams.append('offset', offset)

   const currentMatch = await request.get(baseUrl.toString())

   const res = await currentMatch.json()
   expect(currentMatch.status()).toBe(200)
   console.log(res.data[1].id)
})