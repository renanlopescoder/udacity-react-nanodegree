import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import './index.css';
import App from './utils/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
