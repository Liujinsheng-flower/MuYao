import React, { Component } from 'react'
import {get} from '../utils/request'
export default class Dujiafangsong extends Component {
    constructor(props){
        super();
        this.state={
            list:[],
            lastItem:{}
        }
    }
    componentDidMount(){
        get('/personalized/privatecontent').then(res=>{
            var aa=res.data.result;
            this.setState({
                list:aa.slice(0,2),
                lastItem:res.data.result[2]
            })
        })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    render() {
        const {list,lastItem} =this.state;
        return (
            <div style={{width:'100%',marginTop:'0.6rem'}}>
                 <p style={{marginBottom:'1rem',padding:'0 2%',fontSize:'1rem'}}>独家放送></p>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    {
                        list.map(item=>{
                            return( <div style={{width:'45%',marginBottom:'1rem',position:'relative'}} key={item.id}>
                                <img src={item.sPicUrl} style={{width:'100%'}}/>
                                <p style={{fontSize:'1rem', display: '-webkit-box', WebkitBoxOrient:'vertical',WebkitLineClamp: '2',overflow: 'hidden',lineHeight:'1rem'}}>短视频  {item.name}</p>
                                <span className='icon iconfont' style={{display:'block',position:'absolute',fontSize:'2rem',color:'#ddd',opacity:'0.8',top:'20%',left:'40%'}} >&#xe6f6;</span>
                            </div>)
                        })
                    }
                </div>
                <div style={{display:'flex',flexDirection:"column",justifyContent:"center",alignItems:"center",position:'relative'}}>
                <img src={lastItem.sPicUrl} style={{width:'90%'}}/>
                <span className='icon iconfont' style={{display:'block',position:'absolute',fontSize:'2rem',color:'#aaa',top:'30%',left:'45%'}} >&#xe6f6;</span>
                <p style={{fontSize:'1rem', display: '-webkit-box', WebkitBoxOrient:'vertical',WebkitLineClamp: '2',overflow: 'hidden',lineHeight:'1rem',margin:'1rem 1rem'}}>短视频  {lastItem.name}</p>
                </div>
                
            </div>
        )
    }
}
