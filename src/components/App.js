import React,{Component} from 'react';

import '../mock'
import axios from 'axios'
class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        axios.get('/books').then((res)=>{
            console.log(res.data);
        })
    }
    render(){
        return (
            <div className="app" onClick={this.handleClick}>
				点击获取列表
            </div>
        )
    }
}

export default App;

