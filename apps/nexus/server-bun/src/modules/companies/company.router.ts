import { Router } from 'express'

import CompanyController from './company.controller'

const router = Router()

router.post('/companies', CompanyController.createCompany)
router.get('/companies', CompanyController.getCompanies)
router.get('/companies/:id', CompanyController.getCompany)
router.put('/companies/:id', CompanyController.updateCompany)
router.delete('/companies/:id', CompanyController.deleteCompany)

export default router
