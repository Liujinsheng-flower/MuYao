import React, { Component } from 'react'
import {get} from '../../utils/request'
import {NavBar,Icon} from 'antd-mobile'
import Fenxia from '../../components/Fenxia'
import router from 'umi/router';
import Link from 'umi/Link'
import PlayMusic from '../../components/Playmusic'
export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
           infos:{creator:{}},
           list:[{ar:[{name:''}]}],
           fnfromChilden:{},
           that:{}
        }
    }
    componentDidMount(){
    //    console.log(this.props.location.query.idx)
        get('/top/list',{
            idx:this.props.location.query.idx
        }).then(res=>{
            // console.log(res.data.playlist)
            this.setState({
                infos:res.data.playlist,
                list:res.data.playlist.tracks
            })
        })
    }
    
        componentWillUnmount = () => {
            this.setState = (state,callback)=>{
            return;
            };
        }
        async aa(a){
            await this.setState({
                fnfromChilden:a
            })
          }
          bb(a){
              this.setState({
                  that:a
              })
          }
    render() {
        const {infos,list,gdid,gqxb}=this.state;
        return (
            <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
                <div style={{width:'100%',height:'45px',backgroundColor:'pink'}}>
                <NavBar
                mode="light"
                style={{borderBottom:'0.01rem solid #cecece'}}
                icon={<Icon type="left" size="md" color='black'/>}
                rightContent={
                    [<span key={0} style={{fontSize:'1.2rem',marginRight:'1rem',color:'#666'}} className='icon iconfont'>&#xe64a;</span>,<span style={{fontSize:'1.2rem',color:'#666'}} key={1} className='icon iconfont'>&#xe67c;</span>]
                
                }
                onLeftClick={() =>{
                    router.go(-1);
                }}
                >排行榜</NavBar>
                </div>
                <div style={{flex:'1',overflow:'auto'}}>
                    <div style={{width:'100%',height:"auto",display:'flex',flexDirection:'column',padding:'1rem 0',backgroundImage:'url('+infos.creator.backgroundUrl+')',backgroundSize:'100% 100%'}}>
                        <div style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',marginBottom:'1rem'}}>
                            <div style={{width:'40%'}}>
                                <img src={infos.coverImgUrl} style={{width:'100%'}}/>
                            </div>
                            <div style={{width:"50%"}}>
                              
                            </div>
                        </div>
                    <Fenxia playCount={infos.playCount} subscribedCount={infos.subscribedCount}  shareCount={infos.shareCount}/>
                    </div>
                    <div style={{width:'100%',height:'auto'}}>
                        <ul style={{width:'100%'}}>
                            <li  style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'3rem'}}>
                                <span style={{width:'15%',textAlign:'center'}} className='icon iconfont'>&#xe6f6;</span>
                                <div style={{width:'90%',borderBottom:'0.01rem solid #cecece',height:'100%',lineHeight:'3rem'}}>
                                    播放全部
                                </div>
                            </li>

                            {
                                list.map((item,index)=>{
                                    return (
                                        <li
                                         style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:'3rem'}}
                                          key={item.id}
                                          onClick={()=>{
                                            this.state.fnfromChilden(this.state.that,list,index)
                                        }}
                                          >
                                            <span style={{width:'15%',textAlign:'center'}}>{index+1}</span>
                                            <div style={{width:'85%',borderBottom:'0.01rem solid #cecece',height:'100%',lineHeight:'3rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                            <div style={{width:'70%',height:'100%',display:'flex',flexDirection:"column",justifyContent:'space-around',fontSize:'1rem'}}>
                                                <p className='shenglh' style={{height:'1rem',lineHeight:'1rem',width:'100%',overflow:'hidden',textOverflow:"ellipsis",whiteSpace:'nowrap' }}>{item.name}</p>
                                                <p  className='shenglh' style={{height:'1rem',lineHeight:'1rem',width:'100%'}}>{item.ar[0].name}</p>
                                            </div>
                                            <div style={{width:'30%',height:'100%',display:'flex',justifyContent:'space-around'}}>
                                                <span className='icon iconfont' style={{fontSize:'1.5rem'}}>&#xe6cc;</span>
                                                <Link   style={{display:'block'}} to={{pathname:'/songsdetil',search:'?id='+item.id}}><span className='icon iconfont' style={{fontSize:'1.5rem'}}>&#xe60f;</span></Link>
                                            </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                            



                        </ul>
                    </div>




                </div>
                <PlayMusic  that={this.bb.bind(this)}  CallParent={this.aa.bind(this)} />
            </div>
        )
    }
}
