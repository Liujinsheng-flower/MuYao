import React, { Component } from 'react';
import {get} from '../utils/request';

export default class OneJingpin extends Component {
    constructor(props){
        super(props);
        this.state={
            OneMusicinfo:{},
            backgroundImage:''
        }
    }
    componentDidMount(){
        get('/top/playlist/highquality',{
            limit:1
        }).then(res=>{
            // console.log(res.data.playlists);
            this.setState({
                OneMusicinfo:res.data.playlists[0],
                backgroundImage:res.data.playlists[0].creator.backgroundUrl
            })
        })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    render() {
        const {OneMusicinfo,backgroundImage}=this.state;
        return (
            <div style={{width:'100%',display:'flex',justifyContent:"space-around",alignItems:'center',backgroundImage:"url("+backgroundImage+")",padding:'1rem 0',height:'auto'}}>
                <div style={{width:'30%',height:'100%'}}>
                    <img src={OneMusicinfo.coverImgUrl} style={{width:'100%'}} />
                </div>
                <div style={{width:'50%',fontSize:'1rem',height:'100%',fontWeight:'bold',color:'#fff'}}>
                    <p style={{fontSize:'1rem',marginBottom:'3rem'}}>精品歌单></p>
                    <p style={{marginBottom:'1rem'}}>{OneMusicinfo.copywriter}</p>
                    <p>听歌写评论  评评更健康</p>
                </div>
            </div>
        )
    }
}
