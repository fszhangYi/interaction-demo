const Sequelize = require('sequelize');

// 请根据你的数据库配置填写以下信息
const dbName = 'db3'; // 数据库名
const dbUser = 'root'; // 数据库用户
const dbPassword = 'Turbine223@'; // 数据库密码
const dbHost = 'localhost'; // 数据库主机地址
const dbDialect = 'mysql'; // 数据库类型，可以是mysql、postgres等

async function initializeDatabase() {
  let sequelize = {};
  try {
    const url = `mysql://${dbUser}:${dbPassword}@${dbHost}`;
    sequelize = new Sequelize(url, {
      host: dbHost,
      dialect: dbDialect,
      logging: false,
    });

    // 创建数据库（如果不存在）
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);
    console.log('Database checked/created successfully');

    // 关闭初始连接
    await sequelize.close();

    // 重新连接到新创建的数据库
    sequelize = new Sequelize(dbName, dbUser, dbPassword, {
      host: dbHost,
      dialect: dbDialect,
      logging: false,
    });
  } catch(e){
    throw new Error(e.message);
  } finally {
    return sequelize;
  }
}

module.exports = initializeDatabase;