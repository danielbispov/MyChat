export const HOST = import.meta.env.VITE_SERVER_URL
export const AUTH_ROUTES = "api/auth"
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`
export const GET_USER_INFO = `${AUTH_ROUTES}/user-info`
export const CONTACT_ROUTE = `api/contacts`
export const SEARCH_CONTACT_ROUTE = `${CONTACT_ROUTE}/search`