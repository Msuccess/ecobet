import { AuthenticationState } from './modules/authentication/core/store/authentications.states';

export const StoreStates = [AuthenticationState];

// add all data to be stored in local storage here by their key.
export const StoreKeys = { key: ['auth.token', 'auth.user'] };
