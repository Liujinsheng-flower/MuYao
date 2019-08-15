import React, { Component } from 'react'
import {NavBar,WhiteSpace,Icon,List, Toast} from 'antd-mobile'
import Bottom from '../components/NavBottom'
import router from 'umi/router' ;
import {get} from '../utils/request'
import { getToken } from '../utils/isLogin';
import Link from 'umi/Link'
const Item=List.Item;
export default class mymusic extends Component {
    constructor(props){
        super(props);
        this.state={
            Local:{num:0},//本地音乐
            CreateLlist:[{creator:{avatarUrl:'',userId:'',description:''}}],//我创建的歌单
            AddList:[{creator:{avatarUrl:'',userId:'',description:''}}],//我收藏的歌单
            Playinlast:{},//最近播放
            MyDj:{},//我的电台
            Myshoucang:{}//我的收藏
        }
    }
    componentDidMount(){
        if(getToken()){
               get('/user/playlist',{uid:getToken()}).then(res=>{
           var arr=[];
           res.data.playlist.map((item,index)=>{
               if(item.userId==getToken()){
                   arr.push(index);
               }
           })
        //    console.log(res.data.playlist.slice(0,arr.length)); 
        //    console.log(res.data.playlist.slice(arr.length))
           this.setState({
               CreateLlist:res.data.playlist.slice(0,arr.length),
               AddList:res.data.playlist.slice(arr.length)
           })
          
       })
        }else{
            Toast.info('还未登录')
        }
    
    }
    render() {
        const {CreateLlist,AddList}=this.state;
        return (
            <div style={{width:'100%',display:'flex',flexDirection:'column',height:'100%'}}>
            <div style={{width:'100%',height:'2.875rem',borderBottom:'0.01rem solid #cecece'}}>
            <NavBar
            mode="light"
            icon={<Icon type="left" color='black'/>}
            onLeftClick={() =>{
                router.go(-1);
            }}
            >我的音乐</NavBar>
            </div>
            <div style={{flex:'1',overflow:'auto',background:'#fff'}}>
                <List>
                     <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe69d;</span>本地音乐</Item>
                     <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe817;</span>最近播放</Item>
                     <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe874;</span>我的电台</Item>
                     <Item extra=">"><span style={{fontSize:'1.2rem',marginRight:'0.3rem'}} className='icon iconfont'>&#xe60c;</span>我的收藏</Item>
                 </List>
                 <WhiteSpace  style={{background:'rgb(238,238,238)' }}/>
                 <p style={{background:'rgb(238,238,238)',padding:' 0 2%'}}>我创建的歌单({CreateLlist.length})</p>
                 <WhiteSpace  style={{background:'rgb(238,238,238)' }}/>

                 <List>
                     {
                        CreateLlist.map(item=>{
                           return (<Item  key={item.id}>
                             <Link to={{pathname:"/songlistde",search:'?id='+item.id}} style={{display:'block'}}>
                               <div style={{display:'flex',justifyContent:'space-around',height:'4rem'}}>
                                    <img style={{width:'20%',height:'100%'}} src={item.coverImgUrl} />
                                    <div style={{width:'60%',fontSize:'1rem',display:'flex',flexDirection:'column'}}>
                                        <span style={{display:'block',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis',marginBottom:'1rem'}}>{item.name}</span>
                                        <span style={{display:'block',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>共计{item.trackCount}首</span>
                                    </div>
                               </div>
                               </Link>
                            </Item>)
                        })
                     }
                
                 </List>
                 <WhiteSpace  style={{background:'rgb(238,238,238)' }}/>
                 <p style={{background:'rgb(238,238,238)',padding:' 0 2%'}}>我收藏的歌单({AddList.length})</p>
                 <WhiteSpace  style={{background:'rgb(238,238,238)' }}/>
                 <List>
                 {
                        AddList.map(item=>{
                           return (<Item  key={item.id}>
                                <Link to={{pathname:"/songlistde",search:'?id='+item.id}} style={{display:'block'}}>
                               <div style={{display:'flex',justifyContent:'space-around',height:'4rem'}}>
                                    <img style={{width:'20%',height:'100%'}} src={item.coverImgUrl} />
                                    <div style={{width:'60%',fontSize:'1rem',display:'flex',flexDirection:'column'}}>
                                        <span style={{display:'block',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis',marginBottom:'1rem'}}>{item.name}</span>
                                        <span style={{display:'block',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>共计{item.trackCount}首</span>
                                    </div>
                               </div></Link>
                            </Item>)
                        })
                     }
                 </List>
                 <WhiteSpace  style={{background:'rgb(238,238,238)' }}/>
                 <WhiteSpace  style={{background:'rgb(238,238,238)' }}/>
                 <WhiteSpace  style={{background:'rgb(238,238,238)' }}/>
                 <WhiteSpace  style={{background:'rgb(238,238,238)' }}/>
                 <WhiteSpace  style={{background:'rgb(238,238,238)' }}/>

            </div>
            <div style={{width:'100%',height:'2.875rem'}}>
                <Bottom></Bottom>
            </div>
        </div>
        )
    }
}
