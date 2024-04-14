// src/models/candidate.ts

import { sequelize } from '../database'
import { DataTypes, Model } from 'sequelize'

interface CompanyInstance extends Model {
    id: number
    company_name: string
    email: string
    cnpj: string
    password_hash: string
}

const Company = sequelize.define<CompanyInstance>(
    'companies',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }
)

export { Company }