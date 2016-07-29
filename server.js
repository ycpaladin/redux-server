// import path from 'path'
import Express from 'express'
import React from 'react'
import {createStore } from 'redux'
import {Provider} from 'react-redux'
import counterApp from './reducers/index'
import App from './containers/App'
import {renderToString} from 'react-dom/server'
import { fetchCounter} from './api/counter'
import qs from 'qs';
const app = Express();
const port = 3000

app.use(handleRender)

function handleRender(req, res) {

  fetchCounter(apiResult => {

    const params = qs.parse(req.query)
    const counter = parseInt(params.counter)
    const initialState = { counter } //store.getState();
    const store = createStore(counterApp, initialState);

    const html = renderToString(
      <Provider  store={store}>
        <App />
      </Provider>
    )

    const finalState = store.getState()

    res.send(renderFullPage(html, finalState));

  })

}


function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port);