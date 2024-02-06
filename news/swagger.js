const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0', // 使用OpenAPI Specification 3.0版本
    info: {
        title: 'Mail模块新增功能相关API文档',
        version: '1.0.0',
        description: 'Mail模块新增Preference - Suites booking表单和Recipient - Suites booking列表相关的API',
    },
    servers: [
        {
            url: 'http://localhost:7777',
            description: '前端Mock数据格式',
        },
        {
            url: 'http://localhost:7777',
            description: '前端Mock数据格式2',
        },
    ],
    tags: [ // 定义标签
        {
            name: 'Mail', // 标签名称
            description: 'Mail模块新增操作', // 标签描述
        },
        // 其他标签...
    ]
};

const options = {
    swaggerDefinition,
    apis: ['./app/routes/*.js'], // 指向API文档的路径

};

const swaggerSpec = swaggerJSDoc(options);


module.exports = swaggerSpec;