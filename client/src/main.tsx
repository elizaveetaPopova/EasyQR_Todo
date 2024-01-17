import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import TodoApp from './containers/TodoApp/index.tsx';
import { store } from './store';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
);
