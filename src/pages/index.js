import React, { Component } from 'react';
import SearchBarExample from '../components/SearchBarExample'
import Bottom from '../components/NavBottom';
import FourTabs from '../components/Fourleilist';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd-mobile/dist/font/iconfont.css';
export default class index extends Component {
    render() {
        return (
            <div className='box'>
                <div className='index_top'>
                    <SearchBarExample></SearchBarExample>
                </div>
                <div className='index_body'>
                    <FourTabs></FourTabs>
                </div>
                <div className='index_bottom'> 
                <Bottom></Bottom></div>
            </div>
        )
    }
}
