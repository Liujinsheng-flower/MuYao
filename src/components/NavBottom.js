import React, { Component } from 'react'
import Link from 'umi/Link'
import {getToken} from '../utils/isLogin'
export default class NavBottom extends Component {
    render() {
        return (
            <div className='My_bottom'>
                <Link to={{pathname:'/'}}>
                    <span className="icon iconfont">&#xe6be;</span>
                    <p>发现音乐</p>
                </Link>
                <Link to={{pathname:getToken() ? '/mymusic':'/user/login'}}>
                    <span className="icon iconfont">&#xe6b0;</span>
                    <p>我的音乐</p>
                </Link>
                <Link to={{pathname:'/'}}>
                    <span className="icon iconfont">&#xe6bf;</span>
                    <p>朋友</p>
                </Link>
                <Link to={{pathname:getToken() ? '/user/mine':'/user/login'}}>
                    <span className="icon iconfont">&#xe653;</span>
                    <p>我的</p>
                </Link>
            </div>
        )
    }
}
