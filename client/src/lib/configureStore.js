import {createStore, applyMiddleware, compose} from 'redux'
import {persistState} from 'redux-devtools'
import {logger} from 'redux-logger'
import rootReducer from 'Reducers'
import {DevTools} from 'Containers'

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null
}

export default function (initialState) {
  const middlewares = [
    logger
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      DevTools.instrument(),
      persistState(getDebugSessionKey())
    )
  );

  if (module.hot) {
    module.hot.accept('Reducers', () => store.replaceReducer(rootReducer))
  }

  return store;
}