import React, { Component } from 'react'
import {NavBar,Icon} from 'antd-mobile'
import router from 'umi/router'
import {get} from '../../utils/request'
import Xuanzhuan from '../../components/Xuanzhuan'
import Geci from "../../components/Geci"
export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            MusicInfos:[],//歌词
            songUrl:'',//链接
            songauth:'',//作者
            songname:'',//歌名
            ablumId:'',//专辑id
            ablumname:'',//专辑名称
            songsImg:'',
            isclick:true,
            isplay:true,
            songstime:0
        }
    }
    async componentDidMount(){
        //获取歌曲链接
        get('/song/url',{id:this.props.location.query.id}).then(res=>{
            // console.log(res.data.data[0].url);
            this.setState({
                songUrl:res.data.data[0].url
            })
        })
        //获取歌词
        var result2= await get('/lyric',{
            id:this.props.location.query.id
        });
        // console.log(result2.data.lrc.lyric);
        await this.setState({
            MusicInfos:this.gecichuli(result2.data.lrc.lyric)
        })
        //处理歌词
        //  console.log(this.state.MusicInfos);




        //获取歌曲详情
        var result=await get('/song/detail',{ids:this.props.location.query.id});
        console.log(result.data);
        //     console.log(result.data.songs[0].al.id);
            await this.setState({
                songname:result.data.songs[0].name,
                songauth:result.data.songs[0].ar[0].name,
                ablumId:result.data.songs[0].al.id,
                songsImg:result.data.songs[0].al.picUrl
            })
        //获取专辑
        var result1=await get('/album',{id:result.data.songs[0].al.id});
        // console.log(result1.data.album.name);
        this.setState({
            ablumname:result1.data.album.name
        })

       
    }
    aa(a){
        this.setState({
            isclick:a
        })
    }
 
    gecichuli(lrc){
        var lyrics = lrc.split("\n");
        var arr=[];
        for(var i=0;i<lyrics.length;i++){
            var lyric = decodeURIComponent(lyrics[i]);
            var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
            var timeRegExpArr = lyric.match(timeReg);
            if(!timeRegExpArr)continue;
            var clause = lyric.replace(timeReg,'');
            for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
                var obj={};
                var t = timeRegExpArr[k];
                var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                    sec = Number(String(t.match(/\:\d*/i)).slice(1));
                var time = min * 60 + sec;
                obj.time=time;
                obj.con=clause;
                arr.push(obj)
                // lrcObj[time] = clause;
            }
        }
        // console.log(arr)
        return arr;
    }
    play(a){
        var  audio=document.getElementById('audio')
        this.setState({
            isplay:!a
        })
        if(audio.paused)
        {
            audio.play();
        }else{
           audio.pause();
        }
    }
    gettime(){
       var audio=document.getElementById('audio');
       var timer=audio.currentTime.toFixed(3);

    //    console.log(audio.currentTime.toFixed(3))
       this.setState({
           songstime:parseInt(timer)
       })
       
    }
    render() {
        const {songname,songauth,ablumname,songsImg,MusicInfos,isclick,isplay,songUrl,songstime}=this.state;
        // console.log(MusicInfos)
        return (
            <div style={{width:'100%',display:'flex',flexDirection:'column',height:'100%'}}>
                    <div style={{width:'100%',height:'2.875rem',borderBottom:'0.01rem solid #cecece'}}>
                    <NavBar
                    mode="light"
                    icon={<Icon type="left" color='black'/>}
                    rightContent={<span className='icon iconfont' style={{color:'#888'}}>&#xe6ad;</span>}
                    onLeftClick={() =>{
                        router.go(-1);
                    }}
                    >
                        <div style={{display:'flex',flexDirection:'column',fontSize:"1rem",justifyContent:'center',alignItems:'center'}}>
                            <span>{songname}</span>
                        </div>
                    </NavBar>
                    </div>
            <div style={{flex:'1',overflow:'auto',flexDirection:'column',display:'flex',backgroundImage:'url("http://img0.imgtn.bdimg.com/it/u=3661209281,1635561221&fm=26&gp=0.jpg")',backgroundSize:'cover'}}>
                <div style={{width:'100%',padding:'1rem 0',display:'flex',justifyContent:'space-around',alignItems:'center',color:'#fff'}}>
                    <div className='shenglh' style={{width:'40%',textAlign:'center'}}>专辑：{ablumname}</div>
                    <div className='shenglh' style={{width:'40%',textAlign:'center'}} >歌手：{songauth}</div>
                </div>
                <div style={{flex:'1'}}>
                {
                    isclick?<Xuanzhuan Callparent={this.aa.bind(this)} isZhuan={isplay} touImg={songsImg}/>:<Geci timer={songstime}  Callparents={this.aa.bind(this)} gecis={MusicInfos}/>
                }
                </div>
            </div>
           <div style={{height:'6rem',background:'#000',display:'flex',flexDirection:'column',color:'#fff'}}>
               <div style={{flex:'1',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <audio 
                    controls 
                    id='audio' 
                    onPlay={()=>{this.setState({isplay:true})}} 
                    onPause={()=>{this.setState({isplay:false})}} 
                    autoPlay={isplay} src={songUrl} 
                    onEnded={()=>this.setState({isplay:false})}
                    onTimeUpdate={()=>this.gettime()}
                   style={{width:'85%'}}
                    >

                    </audio>
               </div>
           </div>
        </div>
        )
    }
}
