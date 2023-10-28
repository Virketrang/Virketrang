import express from 'express'

import Database from './common/database'

import CompanyModule from './modules/companies'

Database.createTables()

const app = express()

app.use(express.json())

app.use(CompanyModule.router)

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
})
