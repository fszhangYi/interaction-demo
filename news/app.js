const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./api-spec.yaml');
const mailRouter = require('./app/routes/mail');

const app = express();
const port = 7777;

// 使用swaggerUi提供可视化界面
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// 解析JSON有效载荷
app.use(express.json());


// 启用CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});




app.use('/', mailRouter);

// 所有路由之后的错误处理中间件
app.use((err, req, res, next) => {
    // 检查错误对象是否是一个常规错误或HTTP错误
    if (err instanceof Error) {
        // 处理常规错误
        console.error('Error:', err.message);
        res.status(500).json({
            code: 500,
            success: false,
            msg: 'Internal Server Error',
        });
    } else if (typeof err === 'number') {
        // 处理HTTP错误码
        res.status(err).json({
            code: err,
            success: false,
            msg: http.STATUS_CODES[err] || 'Unknown Error',
        });
    } else {
        // 处理其他类型的错误
        console.error('Unknown Error:', err);
        res.status(500).json({
            code: 500,
            success: false,
            msg: 'Internal Server Error',
        });
    }
});
// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});