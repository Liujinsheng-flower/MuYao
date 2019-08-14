import React, { Component } from 'react'
import {get} from '../utils/request'
import {getToken} from '../utils/isLogin'
import {Toast} from 'antd-mobile'
import Link from 'umi/Link'
export default class Playmusic extends Component {
    constructor(props){
        super(props);
        this.state={
            isPlay:false,
            gdid:'',
            list:[],
            Oneinfos:{ar:[{name:''}],al:{id:'',picUrl:''}},
            MusicUrl:"",
            index:0,
            that:{}
        }
    }
   async componentDidMount(){
        this.setState({
            that:this
        })
        //派发一个切换歌单的事件
       
        //为了解决this指向的问题，将当前的this当做参数传到父组件
        var audio = document.getElementById('audio');
        audio.volume = .5;
    //    console.log(this.props)
         //如果没有传入歌单id，则获取用户的歌单
        //获取用户歌单表
        if(getToken()){
        var result1=await get('/user/playlist',{uid:getToken()});
        if(result1.data.playlist.length!=0){
            await this.setState({
             gdid:result1.data.playlist[0].id
         })
        }else{
            await this.setState({
                gdid:924680166
            })
        }
        
         //获取第一份歌单详细信息
         var result2 =await get('/playlist/detail',{id:this.state.gdid});
         await this.setState({list:result2.data.playlist.tracks});
         //调用获取歌曲函数
         this.gengxin(this.state.list);
        this.props.that(this.state.that);
        this.props.CallParent(this.QieHuanGeDan);
        }else{
            
            var result2 =await get('/playlist/detail',{id:924680166});
            await this.setState({list:result2.data.playlist.tracks});
            //调用获取歌曲函数
            this.gengxin(this.state.list);
            this.props.that(this.state.that);
            this.props.CallParent(this.QieHuanGeDan);
        }
     
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    async QieHuanGeDan(a,list,index){
          //如果传入了歌单id,和当前歌曲的id
        //获取传入的歌单和点击的歌曲的id
        //a 是当前的this，因为在父组件中会改变this的指向
        await a.setState({
            list:list,
            index:index,
            isPlay:true
        })
        //
       a.gengxin(a.state.list)
     
    }
    
    async gengxin(list) {
          //获取歌曲
          await this.setState({Oneinfos:list[this.state.index]});
          //验证是否具有版权
          var result3 =await  get('/check/music',{id:this.state.Oneinfos.id});
        //   console.log(result3.data);
         
          if(!result3.data.success){
             
              Toast.info(result3.data.message);
          }else{
               //如果有版权就获取链接
             var result4=await get('/song/url',{id:this.state.Oneinfos.id});
             if(result4.data.data[0].url==null){
                Toast.info('因官方要求，该资源暂时下架')
             }else{
                 this.setState({
                    MusicUrl:result4.data.data[0].url
                 }) 
             }
            
          }
    }
    //上一首
    async shangyishou(){
        //设置自动播放
        await this.setState({
            isPlay:true
        })
        //如果当前是第1首，点击会改变index为歌单的最后一首，如果不是第一首，则-1
        if(this.state.index==0){
            this.state.index=this.state.list.length-1;
            this.gengxin(this.state.list);
        }else{
            this.state.index-=1;
            this.gengxin(this.state.list);
        }
    }
    //下一首
    async xiayishou(){
        //设置自动播放
        await this.setState({
            isPlay:true
        })
          //如果当前是第最后首，点击会改变index为歌单的第一首，如果不是最后一首，则+1
        if(this.state.index==this.state.list.length-1){
            this.state.index=0;
            this.gengxin(this.state.list);
        }else{
            this.state.index+=1;
            this.gengxin(this.state.list);
        }
    }
    //点击播放或者暂停
    PlayMusic(a){
        this.setState({
            isPlay:!a
        })
        var audio = document.getElementById('audio');
        audio.volume = .5;
        //如果当前是暂停状态
        if(!this.state.isPlay){
           //播放
            audio.play();
        }else{
            //如果当时是播放状态，则暂停
            audio.pause();
        }
    }
    render() {
        const {Oneinfos,MusicUrl,isPlay,index} =this.state;
        // console.log(MusicUrl);
        return (
            <div style={{zIndex:'3', width:'100%', position:'fixed',bottom:'0',left:'0',height:'4rem',background:'rgba(0,0,0,0.7)',display:'flex',justifyContent:'space-around',alignItems:'center',padding:'0.2rem 0'}}>
                <div style={{width:"17%",height:'3.42rem'}}>
               <img style={{width:'100%',height:'100%'}} src={Oneinfos.al.picUrl} />
                </div>
                <div style={{width:'20%',fontSize:'1rem',display:'flex',flexDirection:'column',height:'3rem',color:'#fff',lineHeight:'1.5rem'}}>
                    <span style={{width:'100%',overflow:'hidden',whiteSpace:'nowrap',textOverflow:"ellipsis"}}>{Oneinfos.name}</span>
                    <span style={{width:'100%',overflow:'hidden',whiteSpace:'nowrap',textOverflow:"ellipsis"}}>{Oneinfos.ar[0].name}</span>
                </div>
                <div style={{width:'45%',height:'3rem',display:'flex',justifyContent:'space-around',alignItems:'center',color:'#fff'}}>
                    <span style={{fontSize:'1.5rem'}} onClick={()=>this.shangyishou()} className='iconfont icon-shangyishou' ></span>
                    <span 
                    style={{fontSize:'1.5rem'}} 
                    className={isPlay ?"iconfont icon-zanting": "iconfont icon-ttpodicon"}
                    onClick={()=>this.PlayMusic(isPlay)}
                    ></span>
                    <span style={{fontSize:'1.5rem'}} onClick={()=>this.xiayishou()} className='iconfont icon-xiayishou'></span>
                    <span style={{fontSize:'1.5rem'}} className='iconfont icon-paihang3'></span>
                    
                </div>
                <audio 
                
                onEnded={()=>this.xiayishou()}
                autoPlay={isPlay} 
                id='audio' 
                 name='media'
                  src={MusicUrl}>
                </audio>
            </div>
        )
    }
}
