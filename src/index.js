import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import App from './containers/App'

injectTapEventPlugin()

const Root = () => ( 
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>
)


ReactDOM.render(
  <Root />
, document.getElementById('root')) // eslint-disable-line
registerServiceWorker()
