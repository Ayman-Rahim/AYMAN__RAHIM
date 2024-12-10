import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/reset.css';
import { Flex, Spin } from 'antd';


const App = lazy(() => import('./App'))
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Spin size="large" />}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

