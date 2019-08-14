import { NavBar, Icon, Flex } from 'antd-mobile';
import React, { Component } from 'react';
import { Router } from 'react-router';
import router from 'umi/router';
export default class SearchBarExample extends Component {
  componentDidMount() {
  
  }
  
  render() {
    return (<div style={{width:'100%',display:'flex'}}>
      <NavBar
      style={{background:'rgb(221,0,27)',width:'100%'}}
      mode="dark"
      leftContent={<span className='icon iconfont' style={{fontSize:'1.5rem',color:'rgb(203,203,203)'}}>&#xe698; </span>}
      rightContent={
       <span className='icon iconfont' style={{fontSize:'1.5rem',color:'rgb(203,203,203)'}}>&#xe67c;</span>
      }
    ><input type='text' 
    placeholder='搜索音乐、电台、歌词' 
    style={{border:0,height:'2.0rem',borderRadius:'20px',fontSize:'1rem',width:'230px',textAlign:'center'}}
    onClick={()=>router.push('/search')}
    /></NavBar>
    </div>);
  }
}