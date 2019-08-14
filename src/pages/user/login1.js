import React, { Component } from 'react';
import Link from 'umi/Link'
import { NavBar, Icon, Button} from 'antd-mobile';
import router from 'umi/router'
import ShareLogin from '../../components/Sharelogin';
export default class login1 extends Component {
    render() {
        return (
            <div style={{display:'flex',flexDirection:'column',height:'100%',background:'url("https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3859956564,1843094128&fm=26&gp=0.jpg")',backgroundSize:'cover'}}>
            <div style={{height:'2.875rem',borderBottom:'0.01rem solid #cecece'}}>
            <NavBar
                mode="light"
                icon={<Icon type="left" color='black'/>}
                onLeftClick={() =>{
                    router.go(-1);
                }}
                >登录</NavBar>

            </div>
            <div style={{flex:'1'}}>
               <div style={{height:'10rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <span className='icon iconfont' style={{display:'block',width:'4.5rem',height:'4.5rem',backgroundColor:'rgb(200,0,27)',fontSize:'4.5rem',lineHeight:'4.5rem',borderRadius:'50%'}}> &#xe6b0;</span>
               </div>
               <Button onClick={()=>router.push('/user/login')} style={{color:'#fff',backgroundColor:'rgb(277,0,27)',margin:"0 auto",marginTop:'1rem',width:'80%',height:'2.3rem',lineHeight:'2.3rem'}}>手机号登录</Button>
               <Button onClick={()=>router.push('/user/regist')} style={{color:'#fff',backgroundColor:'rgb(277,0,27)',margin:"0 auto",marginTop:'1rem',width:'80%',height:'2.3rem',lineHeight:'2.3rem'}}>注册</Button>


               <ShareLogin/>
            </div>
        </div>
        )
    }
}
