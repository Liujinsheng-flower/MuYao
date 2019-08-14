import React, { Component } from 'react'
import { NavBar, Icon, Button,Tag,List,WhiteSpace,Toast} from 'antd-mobile';
import router from 'umi/router'  
import Bottom from '../../components/NavBottom';
import {getToken,removeToken} from '../../utils/isLogin'
import {get} from '../../utils/request'
const Item=List.Item;

export default class mine extends Component {
    constructor(props){
        super(props);
        this.state={
            Myinfos:{avatarUrl:"http://p1.music.126.net/VnZiScyynLG7atLIZ2YPkw==/18686200114669622.jpg",nickname:'您还未登录',follows:'0',followeds:'0',gender:'0'},
            lv:'0',
            userPoint:{balance:0,version:0}
        }
    }
    componentDidMount(){
        if(getToken()==false){
            Toast.info('暂未登录')
        }else{
           get('/user/detail',{
                uid:getToken()
            }).then(res=>{
                console.log(res.data)
                this.setState({
                    Myinfos:res.data.profile,
                    lv:res.data.level
                })
            })
        }
    }
    relog(){
        if( getToken()==false){
            router.push('/user/login')
        }else{
            removeToken();
            router.push('/')
        }
    }
    render() {
        const {Myinfos,lv}=this.state;
        return (
            <div style={{width:'100%',display:'flex',flexDirection:'column',height:'100%'}}>
                <div style={{width:'100%',height:'2.875rem',borderBottom:'0.01rem solid #cecece'}}>
                <NavBar
                mode="light"
                icon={<Icon type="left" color='black'/>}
                onLeftClick={() =>{
                    router.go(-1);
                }}
                >个人中心</NavBar>
                </div>
                <div style={{flex:'1',overflow:'auto',background:'#fff'}}>

                    <div style={{width:'100%',height:'auto',padding:'1rem 0'}}>
                        <div style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',padding:'1rem 0'}}>
                            <div style={{width:'18%'}}><img style={{width:'100%',borderRadius:'50%'}} src={Myinfos.avatarUrl}/></div>
                            <div style={{width:'30%'}}>
                                <p style={{marginBottom:'1rem',fontSize:'1rem'}}>{Myinfos.nickname}</p>
                                <Tag small>lv{lv}</Tag>
                            </div>
                            <div style={{width:'20%'}}>
                                <Button type="primary" size='small'>签到</Button>
                            </div>
                        </div>
                        <div style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',marginTop:'0.3rem'}}>
                            <div style={{width:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <span style={{marginBottom:'1rem'}}>动态</span>
                                <span>{Myinfos.gender}</span>
                            </div>
                            <div style={{width:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <span style={{marginBottom:'1rem'}}>关注</span>
                                <span>{Myinfos.follows}</span>
                            </div>
                            <div style={{width:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <span style={{marginBottom:'1rem'}}>粉丝</span>
                                <span>{Myinfos.followeds}</span>
                            </div>
                            <div style={{width:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                我的资料
                            </div>
                        </div>

                    </div>
                    <WhiteSpace style={{background:'rgb(238,238,238)'}}/>
                     <List>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe6b7;</span>我的消息</Item>
                     </List>
                    <WhiteSpace style={{background:'rgb(238,238,238)'}}/>
                    <List>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe69f;</span>会员中心</Item>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe619;</span>商城</Item>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe6b3;</span>在线听歌免流量</Item>
                     </List>
                     <WhiteSpace style={{background:'rgb(238,238,238)'}}/>
                     <List>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe6d5;</span>设置</Item>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe69a;</span>扫一扫</Item>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe747;</span>主题换肤</Item>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe693;</span>夜间模式</Item>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe6d1;</span>定时关闭</Item>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe69c;</span>音乐闹钟</Item>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe664;</span>驾驶模式</Item>

                     </List>
                     <WhiteSpace style={{background:'rgb(238,238,238)'}}/>
                     <List>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe6ad;</span>分享网易云音乐</Item>
                         <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe6b7;</span>关于</Item>
                     </List>
                     <WhiteSpace style={{background:'rgb(238,238,238)'}}/>
                     <List>
                         <Button onClick={()=>this.relog()} type="warning" style={{height:'2rem',lineHeight:'2rem'}}>{getToken()==false? '去登陆':'退出登录'}</Button>
                     </List>
                     <WhiteSpace style={{background:'rgb(238,238,238)'}}/>
                     <WhiteSpace style={{background:'rgb(238,238,238)'}}/>
                     <WhiteSpace style={{background:'rgb(238,238,238)'}}/>

                </div>
                <div style={{width:'100%',height:'2.875rem'}}>
                    <Bottom></Bottom>
                </div>
            </div>
        )
    }
}
