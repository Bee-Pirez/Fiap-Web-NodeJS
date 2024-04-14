import { Company } from '../models/company'
import { Request, Response } from 'express'
import bcrypt from 'bcryptjs';

const companiesController = {
		index: async (req: Request, res: Response) => {
        try {
		        const companies = await Company.findAll()
		        return res.json(companies)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    create: async (req: Request, res: Response) => {
      const { company_name, email, cnpj, password } = req.body;

      try {
        // Verifica se já existe uma empresa com o mesmo CNPJ
        const existingCompany = await Company.findOne({ where: { cnpj } });

        if (existingCompany) {
            return res.status(409).json({ message: 'CNPJ já está em uso.' });
        }

        // Gera um hash para a senha antes de salvar a empresa
        const salt = await bcrypt.genSalt(10);
        const password_hash = await bcrypt.hash(password, salt);

        // Cria a nova empresa com a senha hasheada
        const company = await Company.create({
            company_name,
            email,
            cnpj,
            password_hash 
        });

        return res.status(201).json(company);
      } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message });
        }
      }
  },

  // GET / companies/1...
  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const company = await Company.findByPk(id)
        return res.json(company)
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
        }
    }
  },

  //simulação por enquanto...
  login: async (req: Request, res: Response) => {
    const { cnpj, password } = req.body;

    try {
      const company = await Company.findOne({ where: { cnpj } });

      if (!company) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
      }

      const isMatch = await bcrypt.compare(password, company.password_hash);

      if (isMatch) {
        return res.status(200).json({
            id: company.id,
            nome: company.company_name,
        });
      } else {
        return res.status(401).json({ error: 'Senha incorreta.' });
      }

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

}

export { companiesController }