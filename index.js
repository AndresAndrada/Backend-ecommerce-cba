require('dotenv').config();
const server = require('./src/app');
const { sequelize } = require('./src/db/db');

const { PORT } = process.env;
server.listen(PORT, async () => {
    await sequelize.sync({ force: false, alter: true });
    console.log(`server listening on port ${PORT}`);
});