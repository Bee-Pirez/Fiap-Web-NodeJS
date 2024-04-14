import express from 'express'
import { companiesController } from './controllers/companies-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world!' }))

router.get('/companies', companiesController.index)
router.post('/companies', companiesController.create)
router.get('/companies/:id', companiesController.show)
router.post('/companies/login', companiesController.login);

export { router }