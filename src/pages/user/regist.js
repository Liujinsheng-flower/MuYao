import React, { Component } from 'react'
import { NavBar, Icon, Button,Toast} from 'antd-mobile';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import {get} from '../../utils/request'
import router from 'umi/router'
export default class regist extends Component {
    constructor(props){
        super(props);
        this.state={
            phone:'',
            password:'',
            ctcode:''
        }
    }
    UserNameHandle(){
        var reg=/^1(3|4|5|7|8|9)\d{9}$/ig;
        if(!reg.exec(this.state.phone)){
            Toast.info('手机号格式不对')
            this.setState({
                hasError:true
            })
        }else{
            this.setState({
                hasError:false
            })
        }
    }
    ctCode(){
        get('http://localhost:3000/cellphone/existence/check',{
            phone:this.state.phone
        }).then(res=>{
            if(res.data.exist==-1){
                Toast.info('可用') 
            }else{
               Toast.info('您已经注册过，请直接登录')
                router.push('/user/login');
            }
        })
    }
    render() {
        return (
            <div style={{display:'flex',flexDirection:'column',height:'100%'}}>
                <div style={{height:'2.875rem',borderBottom:'0.01rem solid #cecece'}}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" color='black'/>}
                    onLeftClick={() =>{
                        router.go(-1);
                    }}
                    >手机号注册</NavBar>

                </div>
                <div style={{flex:'1'}}>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>

                    <List >
                        <InputItem
                        type='text'
                        error={this.state.hasError}
                        onBlur={()=>this.UserNameHandle()}
                        onKeyUp={
                            (e)=>this.setState({
                                phone:e.target.value
                            })
                        }
                        style={{fontSize:'1rem'}}
                        placeholder="请输入手机号"
                        ><span className='icon iconfont' style={{fontSize:'1.5rem',marginRight:'1rem'}}>&#xe654;</span><span>+86</span></InputItem>
                         <InputItem
                         type="password"
                         style={{fontSize:'1rem'}}
                         onKeyUp={(e)=>{
                             this.setState({
                                 password:e.target.value
                             })
                         }}
                        placeholder="设置登录密码，不少于6位"
                        ><span className='icon iconfont' style={{fontSize:'1.5rem'}}>&#xe604;</span></InputItem>
                        <WhiteSpace/>
                        <Button type="ghost" onClick={()=>this.ctCode()} style={{width:'40%',height:'2rem',lineHeight:'2rem',fontSize:'1rem',marginLeft:'10%'}}>获取验证码</Button>
                        <WhiteSpace/>
                        <InputItem
                         type="text"
                         style={{fontSize:'1rem'}}
                        placeholder="填写6位验证码"
                        >验证码</InputItem>
                    </List>
                    <Button style={{color:'#fff',backgroundColor:'rgb(277,0,27)',margin:"0 auto",marginTop:'2rem',width:'80%',height:'2.3rem',lineHeight:'2.3rem'}}>下一步</Button>
                </div>
            </div>
        )
    }
}
