import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import walletReducer from './slices/walletSlice';
import userReducer from './slices/userSlice';
import providerReducer from './slices/providerSlice'
import otherUsersReducer from './slices/otherUsersSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    wallet: walletReducer,
    user: userReducer,
    provider: providerReducer,
    otherUsers: otherUsersReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                    'wallet/setWallet',
                    'user/loadUserInfo',
                    'user/editUserInfo',
                    'provider/hasProviderStatus',
                    'otherUsers/loadUsers'
                ]
            }
        })
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
