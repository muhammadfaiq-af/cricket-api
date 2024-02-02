import { expect, test } from '@playwright/test'

test('Current Matches', async ({ request }) => {

    const currentMatches = await request.get('https://api.cricapi.com/v1/currentMatches?apikey=700b0f94-86ad-4cb6-8fb9-3be3fb29d71f&offset=0', {

        data: {

            apikey: '700b0f94-86ad-4cb6-8fb9-3be3fb29d71f',
            offset: 0
        }
    })

    const res = await currentMatches.json()
    expect(currentMatches.status()).toBe(200) 
    console.log(res.data[0].id)

})