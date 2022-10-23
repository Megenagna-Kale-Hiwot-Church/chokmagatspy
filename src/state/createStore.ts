import { createStore, StoreEnhancer } from 'redux';
import navigationReducer from "./reducers/navigation";
import article from "./reducers/article"
import { combineReducers } from "redux";




const allReducers = combineReducers({
   
    
    navigation: navigationReducer,
    article:article
    
}) 



// preloadedState will be passed in by the plugin
export default (preloadedState:any) => {
  return createStore(allReducers, preloadedState);
};