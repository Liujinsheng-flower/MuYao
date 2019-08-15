import React, { Component } from 'react'
import {Tag} from 'antd-mobile';
import {get} from '../utils/request'
export default class Jingxuanzhuanlan extends Component {
    constructor(props){
        super();
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        get('/program/recommend').then(res=>{
            // console.log(res.data.programs.slice(0,3))
            this.setState({
                list:res.data.programs.slice(0,3)
            })
        })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    render() {
        const {list} = this.state;
        return (
            <div style={{display:"flex",flexDirection:"column",width:'100%'}}>
                <p style={{marginBottom:'1rem',fontSize:'1rem',padding:'0 2%'}}>精选专栏></p>
                <ul style={{display:"flex",flexDirection:"column",height:'auto'}} >
                    {
                        list.map(item=>{
                            return (
                                 <li key={item.id} style={{height:'auto',display:'flex',justifyContent:"space-around",alignItems:'center',padding:'0.3rem 0',borderTop:'0.01rem solid #cecece'}}>
                                    <div style={{width:'60%',fontSize:'1rem',display:'flex',flexDirection:'column'}}>
                                        <div><Tag small>{item.channels[0]?item.channels[0]:'普通'}</Tag>{item.name}</div>
                                        <p style={{color:'#cecece',marginTop:'2rem'}}>订阅量{item.listenerCount}</p>
                                    </div>
                                    <div style={{width:'30%'}}>
                                        <img src={item.coverUrl} style={{width:'100%'}}/>
                                    </div>
                                </li>
                            )
                        })
                    }
                   
                </ul>
            </div>
        )
    }
}
