import React, { Component } from 'react'
import {get} from '../utils/request'
export default class JingxuanMv extends Component {
    constructor(props){
        super();
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        get('/personalized/mv').then(res=>{
            this.setState({
                list:res.data.result
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
            <div style={{width:'100%',marginTop:'0.6rem',marginBottom:'1rem'}}>
                 <p style={{marginBottom:'1rem',padding:'0 2%',fontSize:'1rem'}}>推荐MV></p>
                <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
                    {
                        list.map(item=>{
                            return( <div style={{width:'45%',marginBottom:'1rem',position:"relative"}} key={item.id}>
                                <img src={item.picUrl} style={{width:'100%',display:'block'}}/>
                                <p style={{fontSize:'1rem', display: '-webkit-box', WebkitBoxOrient:'vertical',WebkitLineClamp: '2',overflow: 'hidden',lineHeight:'1rem'}}>短视频  {item.name}</p>
                                <span className='icon iconfont' style={{display:'block',position:'absolute',fontSize:'2rem',color:'#aaa',top:'20%',left:'40%'}} >&#xe6f6;</span>
                            </div>)
                        })
                    }
                    </div>
            </div>
        )
    }
}
