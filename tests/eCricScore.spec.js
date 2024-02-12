import { expect, test } from '@playwright/test'

const {apiKey, offset} = require('./common.js')

test ('eCricLiveScore', async ({request}) => {

    const baseUrl = new URL('https://api.cricapi.com/v1/cricScore')

    baseUrl.searchParams.append('apikey', apiKey)
    baseUrl.searchParams.append('offset', offset)

    const eCricLiveScore = await request.get(baseUrl.toString())

    const res = await eCricLiveScore.json()
    expect(eCricLiveScore.status()).toBe(200)
    console.log(res.data[1].id)


})