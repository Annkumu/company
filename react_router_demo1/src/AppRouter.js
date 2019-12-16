import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Index from './Pages/Index'
import List from './Pages/List'
import Home from './Pages/Home'

//设置规则 传递值 接受值 显示内容

function AppRouter(){
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>  {/*Link渲染成a标签*/}
                <li><Link to="/list/123">列表</Link></li>
            </ul>
            <Route path="/" exact component={Index}></Route> {/* exact精确匹配 ,必须使用一个/才能匹配*/}
            <Route path="/list/:id"  component={List}></Route>
            <Route path='/home/' component={Home}></Route>
        </Router>
    )
}

export default AppRouter