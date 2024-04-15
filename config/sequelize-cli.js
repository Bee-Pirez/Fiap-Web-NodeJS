//variáveis de ambientes
// require('dotenv').config();

// module.exports = {
//     dialect: 'postgres',
//     url: process.env.DATABASE_URL
// }

module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    url: process.env.DATABASE_URL
}