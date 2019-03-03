const ENV_APP_TITLE = process.env.VUE_APP_TITLE;
const ENV_API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

export const APP_TITLE = ENV_APP_TITLE ? ENV_APP_TITLE : 'Awesome Website';
export const API_BASE_URL = ENV_API_BASE_URL ? ENV_API_BASE_URL : '';
