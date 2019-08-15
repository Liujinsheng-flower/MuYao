import React, { Component } from 'react'
import { get } from '../utils/request';

export default class artlist extends Component {
    constructor(props){
        super(props);
        this.state={
            Img:'',
            list:[]
        }
    }
    componentDidMount(){
        get('/toplist/artist').then(res=>{
            
            var aa=res.data.list.artists;
            this.setState({
                Img:res.data.list.artists[0].img1v1Url,
                list:aa.slice(0,3)
            })
            
        })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
        return;
        };
    }
    render() {
        const {Img,list}=this.state;
        return (
            <div style={{width:"100%",height:'auto',display:'flex',justifyContent:'space-around',alignItems:'center',padding:'1rem 0'}}>
               <div style={{width:'35%'}}>
                   <img src={Img} style={{width:'100%'}}/>
               </div>
               <div style={{width:'55%'}}>
                   <ul>
                       {
                           list.map((item,index)=>{
                               return  (
                                   <li key={item.id} style={{margin:'1rem 0',width:'100%',overflow:"hidden",textOverflow:"ellipsis",whiteSpace:'nowrap'}}>{index+1}.{item.name}</li>
                               )
                           })
                       }
                   </ul>
               </div>
            </div>
        )
    }
}
