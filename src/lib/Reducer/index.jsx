import {combineReducers} from 'redux'
import LoginReducer, {migrations} from './LoginReducer';
import { persistStore, createMigrate } from "redux-persist";
import {persist} from "../Service/reduxPersist";

const MIGRATION_DEBUG = false;

const numberPersistConfig = {
  key: "persistedStore",
  version: 1,
  migrate: createMigrate(migrations, { debug: MIGRATION_DEBUG })
};

const AppReducer = combineReducers({
    persistedStore: persist(numberPersistConfig, LoginReducer),
});

const rootReducer = (state, action) => {
    return AppReducer(state, action);
}

export default rootReducer;
