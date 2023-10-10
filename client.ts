// client.ts
import { createClient } from '@sanity/client'

export default createClient({
    projectId: '05qno148',
    dataset: 'production',
    useCdn: true // `false` if you want to ensure fresh data
})