import React, { Component } from 'react'
import {get} from '../utils/request'
export default class DianTaituijian extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        
        get('/personalized/djprogram').then(res=>{
            

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
            <div className='tuijianlist'>
                <p style={{fontSize:'1rem'}}>主播电台></p>
                <ul>
                    {
                        list.map(item=>(
                            <li key={item.id} >
                                <div style={{position:"relative",height:'auto'}}>
                                <img src={item.program.dj.avatarUrl} style={{marginBottom:'1rem',display:'block'}}/>
                                <span style={{display:'block',position:"absolute",bottom:'0',left:'0',fontSize:'0.05rem',color:'#fff',width:'100%',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>【{item.program.dj.brand}】</span>
                                </div>
                                <p style={{fontSize:'1rem', display: '-webkit-box', WebkitBoxOrient:'vertical',WebkitLineClamp: '2',overflow: 'hidden'}}>{item.program.description}</p>
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
