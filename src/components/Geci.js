import React, { Component } from 'react'

export default class Geci extends Component {
    constructor(props){
        super(props);
        this.state={
            click:true,
            arr:[],
        }
    }
    componentDidMount(){
     
    }
    gundong(index){
        var Musicci=document.getElementById('Musicci');
        Musicci.style.top=(12-1.5*index)+'rem';
        Musicci.style.transition='1s linear'
        // console.log(Musicci.style.top);
        // console.log('aa')

    }
    render() {
        // console.log(this.props.timer)
        var i=0;
        const {click}=this.state;
        return (
            <div style={{width:'100%',height:'100%',overflow:'auto',position:'relative'}} 
            onClick={()=>{ 
                this.props.Callparents(click)}
            }>
              <ul id='Musicci' style={{width:'100%',position:'absolute',left:'0',top:'12rem',color:'#fff'}}>
                  {
                      this.props.gecis.map((item,index)=>{
                          if(item.time==this.props.timer){
                            this.gundong(index)
                            return (
                                <li className='shenglh geci'  key={index} style={{width:'100%',height:'1.5rem',lineHeight:'1.5rem',textAlign:'center'}}>{item.con}</li>
                            )
                          }else{
                            return (
                                <li className='shenglh' key={index} style={{width:'100%',height:'1.5rem',lineHeight:'1.5rem',textAlign:'center'}}>{item.con}</li>
                            )
                          }
                          
                      })
                  }
              </ul>
            </div>
        )
    }
}
