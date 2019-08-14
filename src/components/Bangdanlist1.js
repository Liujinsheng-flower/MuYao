import React, { Component } from 'react'
import {get} from '../utils/request'
import Link from 'umi/Link'
export default class Bangdanlist1 extends Component {
    constructor(props){
        super(props);
        this.state={
            Img:'',
            list:[]
        }
    }
    componentDidMount(){
       get('/top/list',{
           idx:this.props.idx
       }).then(res=>{
        //    console.log(res.data.playlist);
           this.setState({
               Img:res.data.playlist.coverImgUrl,
               list:res.data.playlist.tracks.slice(0,3)
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
            <div style={{width:"100%",height:'auto'}}>
              <Link to={{pathname:'/bangdan',search:'?idx='+this.props.idx}} style={{height:'auto',display:'flex',justifyContent:'space-around',alignItems:'center',padding:'1rem 0'}}> 
              <div style={{width:'35%'}}>
                   <img src={Img} style={{width:'100%'}}/>
               </div>
               <div style={{width:'55%'}}>
                   <ul>
                       {
                           list.map((item,index)=>{
                               return  (
                                   <li key={item.id} style={{margin:'1rem 0',width:'100%',overflow:"hidden",textOverflow:"ellipsis",whiteSpace:'nowrap',fontSize:'1rem'}}>{index+1}.{item.name}</li>
                               )
                           })
                       }
                   </ul>
               </div>
               </Link>
            </div>
        )
    }
}
