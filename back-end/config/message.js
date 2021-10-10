const message = {
    ACCESS_DENIED: "Access denied",
    INTERNAL_SERVER_ERROR: 'something went wrong',
    PLEASE_PROVIDE_PHONE_NUMBER: 'please provide phone number',
    INVALID_REQUEST_ID: 'invalid request id',
    ID_NOT_FOUND: 'id not found',
    USER_NOT_FOUND: 'user not found',
    CREATED_SUCCESSFULLY: 'created successfully',
    UPDATED_SUCCESSFULLY: 'updated successfully',
    DELETED_SUCCESSFULLY: 'deleted successfully',
    DATA_ALREADY_EXISTS: 'data already exists',

    // USER
    USER_DOES_NOT_EXIST: 'user does not exists',
    USER_FIRST_NAME_REQUIRED: 'user first name required',
    USER_LAST_NAME_REQUIRED: 'user last name required',
    USER_EMAIL_REQUIRED: 'user email required',
    INVALID_USER_EMAIL: 'invalid user email',
    USER_PASSWORD_REQUIRED: 'user password required',
    INVALID_PHONE_NUMBER: 'invalid phone number',
    PLEASE_CHECK_INPUT_LENGTH: 'please check input length',
    PASSWORD_NOT_ACCEPTED: 'password not accepted',
    INVALID_EMAIL_PASSWORD: 'invalid email/password',
    USER_ALREADY_EXISTS: 'user already exists',
    INVALID_EMAIL_ADDRESS: 'invalid email address',
    INVALID_PASSWORD_PATTERN: 'invalid password pattern',
    USER_ROLE_REQUIRED: 'user role required',
    USER_ROLE_IS_NOT_VALID: 'invalid user role',
    USER_SIGN_UP_SUCCESSFULLY: 'signup successfully',
    USER_LOGIN_SUCCESSFULLY: 'login successfully',
    USER_EMAIL_LINK_SENT_SUCCESSFULLY: 'link on email sent successfully',
    INVALID_VERIFICATION_REQUEST: 'invalid verification email request',
    VERIFICATION_LINK_EXPIRED: 'email verification link expired',
    USER_EMAIL_VERIFIED: 'user email verified successfully',
    SMTP_CONNECTION_FAILED: 'smtp connection failed',
    UNABLE_TO_SEND_EMAIL: 'unable to send email',
    USER_OCCUPATION_REQUIRED: 'user occupation is required',
    USER_NOT_ACTIVE: 'user is not active',

    // CATEGORY
    CATEGORY_TITLE_REQUIRED: 'category title required',
    CATEGORY_DOES_NOT_EXIST: 'category does not exist',
    CATEGORY_REQUIRED: 'category required',
    CATEGORY_ALREADY_EXISTS: 'category already exists',

    // SUB-CATEGORY
    SUB_CATEGORY_TITLE_REQUIRED: 'sub-category title required',
    SUB_CATEGORY_DOES_NOT_EXIST: 'sub-category does not exist',
    SUB_CATEGORY_ID_REQUIRED: 'sub category id required',

    // GRIEVANCE
    PHONE_NUMBER_REQUIRED: 'phone number required',
    DATA_REQUIRED: 'data required',
    GRIEVANCE_DOES_NOT_EXIST: 'grievance does not exist',

    // FORM
    FORM_DATA_REQUIRED: 'form data is required',

    // AGNET-CALLER
    CALLER_NUMBER_REQUIRED: 'caller number is required',
    AGENT_NUMBER_REQUIRED: 'agent number is required',
    INVALID_AGENT_PHONE_NUMBER: 'invalid agent phone number',
    INVALID_CALLER_PHONE_NUMBER: 'invalid caller phone number',
    NO_CALL_RECEIVED: 'no call received',
};

module.exports = {
    message,
};
