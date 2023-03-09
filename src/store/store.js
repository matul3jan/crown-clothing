import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

const sagaMiddleWare = createSagaMiddleware();

const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleWare
].filter(Boolean);

const enhancers = compose(applyMiddleware(...middleWares));

const persistConfig = { key: "root", storage: storage, whitelist: ["cart"] };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, enhancers);
sagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);