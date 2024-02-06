// 导入模块
const { SuitesBooking } = require('../models');

/**
 * 获取 Suites Booking 列表
 * @param {object} body - 请求体
 * @param {object} query - 查询参数
 * @returns {object} - 响应数据
 */
const getpreSutBookingList = async (body, query) => {
    try {
        // 解构查询参数，设置默认值
        const { current = 1, size = 10 } = query;
        
        // 获取 SuitesBooking 模型
        const SuitesBookingModel = await SuitesBooking();

        // 使用 Sequelize 的 findAndCountAll 方法进行分页查询
        const { count, rows } = await SuitesBookingModel.findAndCountAll({
            limit: size, // 每页数量
            offset: (current - 1) * size, // 起始位置
            order: [['updatedAt', 'DESC']], // 根据 updatedAt 列降序排序
        });

        // 将查询结果进行格式化
        const formattedRecords = rows.map((record) => ({
            id: record.id,
            recipientName: record.recipientName,
            mailAddress: record.mailAddress,
            status: record.status,
            createTime: +new Date(record.createdAt),
            updateTime: +new Date(record.updatedAt),
        }));

        // 构造响应数据
        const responseData = {
            code: 200,
            success: true,
            data: {
                records: formattedRecords, // 使用格式化后的结果作为 records
                total: count,
                size: size,
                current: current,
                searchCount: true,
                pages: Math.ceil(count / size), // 总页数
            },
            msg: "SUCCESS",
        };

        return responseData;
    } catch (error) {
        // 错误处理逻辑
        throw error;
    }
};

/**
 * 添加新的 Suites Booking 记录
 * @param {string} mailAddress - 邮箱地址
 * @param {string} recipientName - 收件人姓名
 * @returns {object} - 响应数据
 */
const addNew2preSutBookingList = async (mailAddress, recipientName) => {
    try {
        const _ = await SuitesBooking();
        const item = await _.create({ mailAddress, recipientName });
        const rst = {
            code: 200,
            success: true,
            data: item,
            msg: "Success",
        };
        return rst;
    } catch (error) {
        // 错误处理逻辑
        throw error;
    }
};

/**
 * 更新 Suites Booking 记录
 * @param {string} id - 记录ID
 * @param {string} mailAddress - 邮箱地址
 * @param {string} recipientName - 收件人姓名
 * @returns {object} - 响应数据
 */
const updatepreSutBookingList = async (id, mailAddress, recipientName) => {
    try {
        const _ = await SuitesBooking();
        const item = await _.findOne({ where: {id} });
        const updatedRecord = await item.update({
            mailAddress,
            recipientName,
        });

        const rst = {
            code: 200,
            success: true,
            data: updatedRecord,
            msg: "Success",
        };
        return rst;
    } catch (error) {
        // 错误处理逻辑
        throw error;
    }
};

/**
 * 更改 Suites Booking 记录状态
 * @param {string} id - 记录ID
 * @param {string} status - 状态
 * @returns {object} - 响应数据
 */
const chgStatuspreSutBookingList = async (id, status) => {
    try {
        const _ = await SuitesBooking();
        const updatedRecord = await _.update({status}, { where: {id}, individualHooks: true });

        const rst = {
            code: 200,
            success: true,
            data: updatedRecord,
            msg: "Success",
        };
        return rst;
    } catch (error) {
        // 错误处理逻辑
        throw error;
    }
};

/**
 * 删除 Suites Booking 记录
 * @param {string} id - 记录ID
 * @returns {object} - 响应数据
 */
const deletepreSutBookingList = async (id) => {
    try {
        const _ = await SuitesBooking();
        const item = await _.findOne({ where: {id} });
        let updatedRecord = null;
        if (item) {
            // 删除实例
            updatedRecord = item.destroy();
        }

        const rst = {
            code: 200,
            success: true,
            data: updatedRecord,
            msg: "Success",
        };
        return rst;
    } catch (error) {
        // 错误处理逻辑
        throw error;
    }
};

// 导出模块
module.exports = {
    getpreSutBookingList,
    addNew2preSutBookingList,
    updatepreSutBookingList,
    chgStatuspreSutBookingList,
    deletepreSutBookingList,
};