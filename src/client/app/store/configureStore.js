import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';
import rootSagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(params = {}) {
  const { initialState, history } = params;
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
  );
  sagaMiddleware.run(rootSagas);

  if (module.hot) {
    module.hot.accept(rootReducer, () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
}
