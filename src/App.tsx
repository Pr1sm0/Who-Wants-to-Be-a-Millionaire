import React from 'react';
import { Provider } from 'react-redux';

import Layout from './components/layout';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
