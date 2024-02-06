// 导入模块
const mailService = require('../services/mailService');

/**
 * 获取 Suites Booking 列表
 * @param {object} req - 请求对象
 * @param {object} res - 响应对象
 */
const preSutBookinglist = async (req, res) => {
    try {
        // 获取请求体中的数据
        const { body, query } = req.body;

        // 调用服务层函数获取响应数据
        const responseData = await mailService.getpreSutBookingList(body, query);

        // 发送响应
        res.json(responseData);
    } catch (error) {
        // 错误处理逻辑
        console.error('Error:', error);
        res.status(500).json({
            code: 500,
            success: false,
            msg: 'Internal Server Error',
        });
    }
};

/**
 * 添加新的 Suites Booking 记录
 * @param {object} req - 请求对象
 * @param {object} res - 响应对象
 */
const addNew2preSutBookingList = async (req, res) => {
    try {
        // 获取请求体中的数据
        const { mailAddress, recipientName } = req.body;

        // 调用服务层函数获取响应数据
        const responseData = await mailService.addNew2preSutBookingList(mailAddress, recipientName);

        // 发送响应
        res.json(responseData);
    } catch (error) {
        // 错误处理逻辑
        console.error('Error:', error);
        res.status(500).json({
            code: 500,
            success: false,
            msg: 'Internal Server Error',
        });
    }
};

/**
 * 更新 Suites Booking 记录
 * @param {object} req - 请求对象
 * @param {object} res - 响应对象
 */
const updatepreSutBookingList = async (req, res) => {
    try {
        // 获取请求体中的数据
        const { mailAddress, recipientName, id } = req.body;

        // 调用服务层函数获取响应数据
        const responseData = await mailService.updatepreSutBookingList(id, mailAddress, recipientName);

        // 发送响应
        res.json(responseData);
    } catch (error) {
        // 错误处理逻辑
        console.error('Error:', error);
        res.status(500).json({
            code: 500,
            success: false,
            msg: 'Internal Server Error',
        });
    }
};

/**
 * 更改 Suites Booking 记录状态
 * @param {object} req - 请求对象
 * @param {object} res - 响应对象
 */
const chgStatuspreSutBookingList = async (req, res) => {
    try {
        // 获取请求体中的数据
        const { status, id } = req.body;

        // 调用服务层函数获取响应数据
        const responseData = await mailService.chgStatuspreSutBookingList(id, status);

        // 发送响应
        res.json(responseData);
    } catch (error) {
        // 错误处理逻辑
        console.error('Error:', error);
        res.status(500).json({
            code: 500,
            success: false,
            msg: 'Internal Server Error',
        });
    }
};

/**
 * 删除 Suites Booking 记录
 * @param {object} req - 请求对象
 * @param {object} res - 响应对象
 */
const deletepreSutBookingList = async (req, res) => {
    try {
        // 获取查询字符串中的数据
        const { id } = req.query;

        // 调用服务层函数获取响应数据
        const responseData = await mailService.deletepreSutBookingList(id);

        // 发送响应
        res.json(responseData);
    } catch (error) {
        // 错误处理逻辑
        console.error('Error:', error);
        res.status(500).json({
            code: 500,
            success: false,
            msg: 'Internal Server Error',
        });
    }
};

// 导出模块
module.exports = {
    preSutBookinglist,
    addNew2preSutBookingList,
    updatepreSutBookingList,
    chgStatuspreSutBookingList,
    deletepreSutBookingList,
};