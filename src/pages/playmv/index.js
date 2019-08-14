import React, { Component } from 'react'
import Test from '../../components/Test'
export default class index extends Component {
    constructor(props){
        super(props);
    }
    test(){
        console.log(this.refs.child);
        this.refs.child.aa();
    }
    render() {
        return (
            <div>
                <Test ref='child'/>
                <button onClick={()=>this.test()}> 改变</button>
            </div>
        )
    }
}
