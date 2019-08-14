import React, { Component } from 'react'
import { NavBar, Icon, Button,Toast} from 'antd-mobile';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import router from 'umi/router';
import {get} from '../../utils/request'
import {setToken} from '../../utils/isLogin'
export default class login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            hasError:false
        }
    }
    UserNameHandle(){
        var reg=/^1(3|4|5|7|8|9)\d{9}$/ig;
        if(!reg.exec(this.state.username)){
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
    UsifNull(){
        if(this.state.username==''){
            Toast.info('账号不能为空');
        }
    }
    LoginHandle(){
        if((this.state.username==''||this.state.username==null) && (this.state.password==''||this.state.password==null)){
            Toast.info('账号或手机号不能为空')
        }else{
        //    get('http://localhost:3000/cellphone/existence/check',{
        //     phone:this.state.username,
        //    }).then(res=>{
            //   if(res.data.exist=='-1'){
            //       Toast.info('该手机号还未注册');
            //   }else{
                  get("/login/cellphone",{
                      phone:this.state.username,
                      password:this.state.password
                  }).then(res=>{
                      if(res.status==200){
                          setToken(res.data.account.id);
                          router.push('/');
                      }
                      
                  })
            //   }
        //    })
        }
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
                >登录</NavBar>

            </div>
            <div style={{flex:'1'}}>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>

                <List >
                    <InputItem
                    type='text'
                    error={this.state.hasError}
                    style={{fontSize:'1rem'}}
                    placeholder="请输入手机号"
                    onBlur={()=>this.UserNameHandle()}
                    onKeyUp={(e)=>{
                        this.setState({
                            username:e.target.value
                        })
                    }
                    }
                    ><span className='icon iconfont' style={{fontSize:'1.5rem',marginRight:'1rem'}}>&#xe654;</span></InputItem>
                     <InputItem
                     type="password"
                     style={{fontSize:'1rem'}}
                    placeholder="输入密码"
                    onFocus={()=>this.UsifNull()}
                    onKeyUp={(e)=>{
                            this.setState({
                                password:e.target.value
                            })
                        }
                    }
                    ><span className='icon iconfont' style={{fontSize:'1.5rem'}}>&#xe604;</span></InputItem>
                </List>
                <Button onClick={()=>{
                    this.LoginHandle();
                }} style={{color:'#fff',backgroundColor:'rgb(277,0,27)',margin:"0 auto",marginTop:'2rem',width:'80%',height:'2.3rem',lineHeight:'2.3rem'}}>登录</Button>
                <p style={{margin:'1rem 0',textAlign:'center',color:'#666'}}>重置密码</p>
                <p  style={{margin:'1rem 0',textAlign:'center',color:'#666'}} onClick={()=>router.push('/user/regist')}>还没有账号?去注册</p>

            </div>
        </div>
        )
    }
}
