import React, { Component } from 'react'
import {get} from '../utils/request'
import Link from 'umi/Link'
export default class Jingpinlist extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        get('/top/playlist/highquality',{
            limit:11
        }).then(res=>{
            // console.log(res.data.playlists.slice(1,11))
            this.setState({
                list:res.data.playlists.slice(1,11)
            })
        })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    LeilistHandle(e){
        get('/top/playlist/highquality',{
            cat:e,
            limit:10
        }).then(res=>{
            this.setState({
                list:res.data.playlists
            })
        })
    }
    render() {
        const {list}=this.state
        return (
            <div style={{width:"100%",height:'auto',display:'flex',flexDirection:'column'}}>
                <div style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',height:'3rem'}}>
                   <p style={{width:'40%',fontSize:'1rem'}}>精品歌单></p>
                   <ul style={{width:'40%',display:'flex',justifyContent:'space-around'}}>
                       <li onClick={()=>this.LeilistHandle('欧美')}>欧美</li>|
                       <li onClick={()=>this.LeilistHandle('民谣')}>民谣</li>|
                       <li onClick={()=>this.LeilistHandle('古风')}>古风</li>
                   </ul>
                </div>
                <div style={{height:'auto',width:'90%',margin:'0 auto'}}>
                    <ul style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                    {
                        list.map(item=>(
                            <li key={item.id} style={{width:'45%',marginBottom:'1rem'}}>
                                <div style={{width:'100%',height:'auto',position:'relative'}}>
                                <Link to={{pathname:"/songlistde",search:'?id='+item.id}} style={{display:'block'}}>
                                    <img src={item.coverImgUrl} style={{width:'100%',marginBottom:'1rem'}}/></Link>
                                    <span className='iconfont icon-erji2' style={{fontSize:'1rem',position:"absolute",top:'0.3rem',right:'1rem',width:'70px',textAlign:'right',height:'20px',lineHeight:'20px',display:"block",color:'#fff'}}>   {Math.floor(item.playCount/10000)}万</span>
                                    <span style={{fontSize:'1rem',position:"absolute",bottom:'1rem',left:'0rem',width:'7rem',height:'20px',lineHeight:'20px',display:"block",color:'#fff',overflow:'hidden'}}> {item.creator.nickname}</span>
                                </div>
                                <p style={{fontSize:'1rem', display: '-webkit-box', WebkitBoxOrient:'vertical',WebkitLineClamp: '2',overflow: 'hidden',height:'2rem',lineHeight:'1rem'}}>{item.name}</p>
                            </li>
                        ))
                    }
                </ul>
                </div>

            </div>
        )
    }
}
