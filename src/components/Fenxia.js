import React, { Component } from 'react'

export default class Fenxia extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{width:'100%',display:'flex',justifyContent:'space-around',justifyItems:'center',color:'#fff'}}>
                <div style={{width:'22%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <span className="icon iconfont" style={{fontSize:'1.2rem'}}>&#xe6ac;</span>
                    <p>{Math.floor(this.props.playCount/10000)}万</p>
                </div>
                <div style={{width:'22%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <span className="icon iconfont" style={{fontSize:'1.2rem'}}>&#xe9dd;</span>
                    <p>{this.props.subscribedCount}</p>
                </div>
                <div style={{width:'22%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <span className="icon iconfont" style={{fontSize:'1.2rem'}}>&#xe6ad;</span>
                    <p>{this.props.shareCount}</p>
                </div>
                <div style={{width:'22%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <span className="icon iconfont" style={{fontSize:'1.2rem'}}>&#xe687;</span>
                    <p>下载</p>
                </div>
            </div>
        )
    }
}
