import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import myAccountReducer from "./newAccountRedux";
import bassAmpCabinetReducer from "./amps-effects/bass/bass-amp-cabinets/bass-amp-cabinet-redux";
import bassAmpHeadReducer from "./amps-effects/bass/bass-amp-heads/bass-amp-head-redux";
import bassComboAmpReducer from "./amps-effects/bass/bass-combo-amp/bass-combo-amp-redux";
import guitarAmpCabinetReducer from "./amps-effects/guitar/guitar-amp-cabinets/guitar-amp-cabinet-redux";
import guitarAmpHeadReducer from "./amps-effects/guitar/guitar-amp-heads/guitar-amp-head-redux";
import guitarComboAmpReducer from "./amps-effects/guitar/guitar-combo-amp/guitar-combo-amp-redux";

const rootReducer = combineReducers({
  newAccount: myAccountReducer,
  bassAmpCabinetCatalog: bassAmpCabinetReducer,
  bassAmpHeadCatalog: bassAmpHeadReducer,
  bassComboAmpCatalog: bassComboAmpReducer,
  guitarAmpCabinetCatalog: guitarAmpCabinetReducer,
  guitarAmpHeadCatalog: guitarAmpHeadReducer,
  guitarComboAmpCatalog: guitarComboAmpReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
