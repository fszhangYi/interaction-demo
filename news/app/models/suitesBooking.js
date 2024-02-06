const Sequelize = require('sequelize');
const initializeDatabase = require('../../config/database');

const SuitesBooking = async () => {
    const sequelize = await initializeDatabase();
    let temp = '';
    const SuitesBooking = await sequelize.define('suitesbooking', {
        recipientName: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        mailAddress: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: false,
        },
        status: {
            type: Sequelize.INTEGER,
            allowNull: true,
            unique: false,
        },
        id: {
            type: Sequelize.STRING,
            allowNull: true,
            unique: false,
            primaryKey: true,
            defaultValue: (+new Date())+'',
        },
    },{
        hooks: {
            // beforeUpdate: (instance, options) => {
            //     console.log('options.individualHooks:', instance.getDataValue('updatedAt'))
            //     console.log('options.individualHooks:', options.individualHooks)

            //     // 在更新之前执行的操作
            //     if (options.individualHooks) {
            //         temp = instance.getDataValue('updatedAt')
            //         console.log('temp:', temp)
            //     }
            // },
            beforeBulkUpdate: ( options) => {
                // status改变的时候是不需要更行updateTime的
                if (options.individualHooks) {
                    options.fields = ['status'];    
                    options.attributes = {status: options.attributes.status}            
                }
            },
            // afterUpdate: (instance, options) => {
            //     console.log('options.individualHooks:', instance.getDataValue('updatedAt'))
            //     console.log('options.individualHooks:', temp)
            //     console.log('options.individualHooks:', options.individualHooks)

            //     // 在更新之前执行的操作
            //     if (options.individualHooks) {
            //         instance.setDataValue('temp', instance.getDataValue('updatedAt'));
            //     }
            // },
        }
    });
    await sequelize.sync(); // important
    return sequelize.models.suitesbooking;
}

module.exports = SuitesBooking;