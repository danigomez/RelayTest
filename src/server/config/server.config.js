import path from "path";

/* Server configuration */
var ROOT_DIR = path.resolve(__dirname, "../..");

const SERVER_CONFIG = {
	PORT: process.env.SERVER_PORT || 9001,
	PUBLIC_STATIC_CONTENT_DIR: ROOT_DIR + "/public",
	ROOT_DIR: ROOT_DIR,
	MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017",
	ENV: process.env.ENV_NAME || "development"
};

export default SERVER_CONFIG;