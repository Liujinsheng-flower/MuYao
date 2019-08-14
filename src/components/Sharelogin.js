import React, { Component } from 'react'
import { Flex } from 'antd-mobile';

export default class Sharelogin extends Component {
    render() {
        return (
            <div style={{position:'fixed',bottom:'0',left:'0',width:'100%',height:'8rem',textAlign:'center',display:"flex",justifyContent:"space-between",alignItems:'center',flexDirection:'column'}}>
                <p style={{margin:'1rem 0',color:'#fff'}}>其他登录方式</p>
                <div style={{width:'100%',height:'6rem',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                    <div className='sharelogin'>
                        <span className="icon iconfont" style={{color:'rgb(35,169,242)'}}>&#xe6b0;</span>
                        <p>QQ</p>
                    </div>
                    <div className='sharelogin'>
                        <span className="icon iconfont" style={{color:'rgb(125,212,59)'}}>&#xe63c;</span>
                        <p>微信</p>
                    </div>
                    <div className='sharelogin' >
                        <span className="icon iconfont" style={{color:'rgb(190,57,52)'}}>&#xe639;</span>
                        <p>微博</p>
                    </div>
                    <div className='sharelogin'>
                        <span className="icon iconfont">&#xe6b7;</span>
                        <p>163邮箱</p>
                    </div>
                </div>
            </div>
        )
    }
}
