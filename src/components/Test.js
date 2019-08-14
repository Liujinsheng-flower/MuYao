import React, { Component } from 'react'

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state={
            aa:"hello"
        }
    }
    aa(){
        this.setState({
            aa:'hi'
        })
    }
    render() {
        return (
            <div>
               {this.state.aa}
            </div>
        )
    }
}
