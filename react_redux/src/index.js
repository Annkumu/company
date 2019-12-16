import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import App from './containers/App'
import store from './redux/store'

ReactDOM.render((
    //使用Provider组件将App组件包裹住，这样内部都有store提供的属性。
    <Provider store={store}>
        <App/>
    </Provider>
),document.getElementById('root'))
