export const _DB_NAME = process.env.DATABASE_NAME;
export const _USERNAME = process.env.USER_NAME;
export const _ENVIRONMENT: 'development' | 'production' =
  process.env.DEV__ENVIRONMENT === 'true' ? 'development' : 'production';
