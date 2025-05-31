import React from 'react';
import ReactDOM from 'react-dom';
import AOS from 'aos';
import 'antd/dist/reset.css';
import 'aos/dist/aos.css';
import './styles/index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

AOS.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Se você deseja que seu aplicativo funcione offline e carregue mais rápido, você pode alterar
// unregister() para register() abaixo. Observe que isso traz algumas armadilhas.
// Saiba mais sobre service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
