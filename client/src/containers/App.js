import React from 'react'
import {Provider} from 'react-redux'
import {configureStore} from 'Lib'
import {Route, Switch} from 'react-router'
import {DevTools} from 'Containers'
import {
  Header,
  CreateArticle,
  EditArticle,
  ShowArticle,
  Articles,
  Signin,
  Signup
} from 'Containers'
import styles from './App.scss'

const store = configureStore();

export default () => (
  <Provider store={store}>
    <div>
      <Header/>
      <div className={styles.content}>
        <Switch>
          <Route path='/login' component={Signin}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/articles/new' component={CreateArticle}/>
          <Route path='/articles/:id/edit' component={EditArticle}/>
          <Route path='/articles/:id' component={ShowArticle}/>
          <Route path='/articles' component={Articles}/>
        </Switch>
      </div>
      <DevTools/>
    </div>
  </Provider>
)