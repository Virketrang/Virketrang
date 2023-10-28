import { Request, Response } from 'express'

export default abstract class CompanyController {
    public static createCompany(req: Request, res: Response) {
        res.send('Company created')
    }

    public static getCompanies(req: Request, res: Response) {
        res.send('Companies retrieved')
    }

    public static getCompany(req: Request, res: Response) {
        res.send('Company retrieved')
    }

    public static updateCompany(req: Request, res: Response) {
        res.send('Company updated')
    }

    public static deleteCompany(req: Request, res: Response) {
        res.send('Company deleted')
    }
}
