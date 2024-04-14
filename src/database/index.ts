//instância para se conectar com o bd - conexão
import { Sequelize } from 'sequelize'

const dbUrl = process.env.DATABASE_URL || ''

const sequelize = new Sequelize(dbUrl, {
  //snake_case
  define: {
    underscored: true
  }
})

export { sequelize }