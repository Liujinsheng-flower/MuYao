import React, { Component } from 'react'
import {get} from '../utils/request'
import Link from 'umi/Link'
export default class Bangdanlist2 extends Component {
    constructor(props){
        super(props);
        this.state={
            item:{}
        }
    }
    componentDidMount(){
        get('/top/list',{
            idx:this.props.idx
        }).then(res=>{
            // console.log(res.data.playlist)
            this.setState({
                item:res.data.playlist
            })
        })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    render() {
        const {item} =this.state;
        return (
            <li style={{width:'30%',fontSize:'1rem'}}>
                <Link to={{pathname:'/bangdan',search:'?idx='+this.props.idx}} style={{display:'block',width:'100%',height:'auto'}}>
              <img src={item.coverImgUrl} style={{width:'100%'}}/>
              <p style={{height:'2rem',lineHeight:'1rem',display: '-webkit-box', WebkitBoxOrient:'vertical',WebkitLineClamp: '2',overflow: 'hidden'}}>{item.name}</p>  
            </Link>
            </li>
        )
    }
}
