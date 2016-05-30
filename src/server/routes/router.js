import bodyParser from "body-parser";
import express from 'express';

import schema from 'models/graphql/schema'
import graphQLHTTP from 'express-graphql';

import SERVER_CONFIG from 'config/server_config';

var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.use(express.static(SERVER_CONFIG.PUBLIC_STATIC_CONTENT_DIR));

router.use("/graphql",
    graphQLHTTP({
        schema: schema,
        graphiql: true
    })
);



export default router;