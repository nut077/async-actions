import React from 'react'
import {Provider} from 'react-redux'
import {configureStore} from 'Lib'

const store = configureStore();

export default () => (
  <Provider store={store}>
    <div>
      ddd
    </div>
  </Provider>
)