const {
    PORT,
    ENV,
    SECRET,
    MONGO_URI,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USERNAME,
    SMTP_PASSWORD,
} = process.env;

const constants = {
    PORT,
    ENV,
    SECRET,
    MONGO_URI,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USERNAME,
    SMTP_PASSWORD,
    SUCCESS: {
        CODE: 200,
    },
    ERROR: {
        BAD_REQUEST: {
            TYPE: 'BAD_REQUEST',
            CODE: 400,
        },
        NOT_FOUND: {
            TYPE: 'NOT_FOUND',
            CODE: 404,
        },
        INTERNAL_SERVER_ERROR: {
            TYPE: 'INTERNAL_SERVER_ERROR',
            CODE: 500,
        },
        UNAUTHORIZED: {
            TYPE: 'UNAUTHORIZED',
            CODE: 403,
        },
        UNAUTHENTICATED: {
            TYPE: 'UNAUTHENTICATED',
            CODE: 401,
        },
    },
    LOGGER_LEVELS : {
    	ERROR: "Error",
    	WARN: "Warning",
    	INFO: "Info",
    	DEBUG: "Debug",
    	MARK: "Mark",
    	FATAL: "Fatal",
    	TRACE: "Trace"
	},
    REGEX_PATTERN : {
        EMAIL: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
        PASSWORD: new RegExp(/^(?=.*?[A-Z])[A-Za-z\d@$!%*?&]{8,}$/),
    },
    USER_ROLES: ['admin', 'user'],
};

module.exports = {
    constants,
};
