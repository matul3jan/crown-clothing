import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);
const enhancers = compose(applyMiddleware(...middleWares));

const persistConfig = { key: "root", storage: storage, blacklist: ["user"] };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, enhancers);
export const persistor = persistStore(store);