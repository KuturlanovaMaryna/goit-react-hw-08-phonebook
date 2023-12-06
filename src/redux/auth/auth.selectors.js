export const selectUserData = state => state.auth.userData;
export const selectAuthenticated = state => state.auth.isAuth;
export const selectAuthIsLoading = state => state.auth.isLoading;
export const selectAuthError = state => state.auth.error;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectToken = state => state.auth.token;