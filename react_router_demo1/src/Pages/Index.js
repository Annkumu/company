import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {cid:1,title:'title1'},
                {cid:2,title:'title2'},
                {cid:3,title:'title3'}
            ]
         }
    }
    render() { 
        return (
            <div>
                <Redirect to="/home/"></Redirect>
            <h2>Index</h2>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                            <li key={index}>
                                <Link to={'/list/'+item.cid}>
                                    {item.title}
                                </Link>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Index