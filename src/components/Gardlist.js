import React, { Component } from 'react'
import {get} from '../utils/request'
import Link from 'umi/Link'
export default class Gardlist extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        get('/personalized').then(res=>{
            console.log(res.data.result.slice(0,6));
            this.setState({
                list:res.data.result.slice(0,6)
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
                <p style={{fontSize:'1rem'}}>推荐歌单></p>
                <ul>
                    {
                        list.map(item=>(
                           
                            <li key={item.id}>
                                 <Link to={{pathname:"/songlistde",search:'?id='+item.id}} style={{display:'block'}}>
                                <img src={item.picUrl} style={{marginBottom:'1rem'}}/> </Link>
                                <p style={{fontSize:'1rem', display: '-webkit-box', WebkitBoxOrient:'vertical',WebkitLineClamp: '2',overflow: 'hidden'}}>{item.name}</p>
                                <span className='iconfont icon-erji2' style={{fontSize:'1rem',position:"absolute",top:'0px',right:'0px',width:'70px',textAlign:'right',height:'20px',lineHeight:'20px',display:"block"}}>{Math.floor(item.playCount/10000)}万</span>
                           
                            </li>
                          
                        ))
                    }
                </ul>
            </div>
        )
    }
}
