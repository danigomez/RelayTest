import express from 'express';
import cookieParser from 'cookie-parser';
import router from 'routes/router';

import SERVER_CONFIG from 'config/server_config';

var app = express();

app.use(cookieParser());
app.use(router);

app.listen(SERVER_CONFIG.PORT, () => {
    console.log("Environment @ " + process.env.ENV_NAME + " using -> " + SERVER_CONFIG.ENV);
    console.log("Node server listening @ " + SERVER_CONFIG.PORT);
});

export default app;