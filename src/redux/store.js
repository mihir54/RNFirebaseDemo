import AsyncStorage from "@react-native-async-storage/async-storage";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import favPostReducer from "./reducer/FavPostReducer";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['favPost_Reducer']
}

const rootReducer = combineReducers({
    favPost_Reducer: favPostReducer
})

const persist_Reducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persist_Reducer, applyMiddleware(createLogger()))
    let persistore = persistStore(store)
    return { store, persistore }
}