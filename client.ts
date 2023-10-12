// client.ts
import { createClient } from '@sanity/client'

const client = createClient({
    projectId: '05qno148',
    dataset: 'production',
    apiVersion: "2023-10-11",
    useCdn: true // `false` if you want to ensure fresh data
})

export default client