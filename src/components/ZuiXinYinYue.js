import React, { Component } from 'react'
import {get} from '../utils/request'
import Link from 'umi/Link'
export default class ZuiXinYinYue extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        get('/personalized/newsong').then(res=>{
            var aa=res.data.result
            this.setState({
                list:aa.slice(0,5)
            })

        })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    render() {
        const {list} =this.state;
        return (
            <div className='tuijianlist'>
                <p style={{fontSize:'1rem'}}>最新音乐></p>
                <ul style={{fontSize:'1rem'}}>
                    <li>
                        <img   style={{marginBottom:'1rem'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565155614032&di=3de629af423437c57c0236b91e805e9e&imgtype=0&src=http%3A%2F%2Fdownload-img.pchome.net%2F3k%2Fya%2F139268_120x90.jpg'/>
                        <p style={{display: '-webkit-box', WebkitBoxOrient:'vertical',WebkitLineClamp: '2',overflow: 'hidden'}}>新歌推荐<br/>
                        推荐合口味的新歌</p>
                    </li>
                    {
                        list.map(item=>(
                            <li key={item.id}>
                                <Link style={{display:'block'}} to={{pathname:'/songsdetil',search:'?id='+item.id}}>
                                <img src={item.song.album.blurPicUrl} style={{marginBottom:'1rem'}}/>
                                <p style={{display: '-webkit-box', WebkitBoxOrient:'vertical',WebkitLineClamp: '2',overflow: 'hidden'}} >{item.name}<br/>
                                {item.song.artists[0].name}</p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
