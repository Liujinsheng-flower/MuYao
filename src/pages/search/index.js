import React, { Component } from 'react'
import {NavBar,List} from 'antd-mobile'
import router from 'umi/router'
import Bottom from '../../components/NavBottom'
import {get} from '../../utils/request'
const Item=List.Item
export default class index extends Component {
    constructor(props){
        super(props);
        this.state={
            Hotlist:[],
            keywords:'',
            Searchlist:[{album:{id:'',name:''}}],
            isdisplay:'none'
        }
    }
    componentDidMount(){
        get('/search/hot/detail').then(res=>{
            console.log(res.data.result.hots)
            this.setState({
                Hotlist:res.data.result.hots
            })
        })
    }
    SearchHandle(e){
        this.setState({
            isdisplay:'block'
        })
        get('/search',{
            keywords:e.target.value
        }).then(res=>{
            this.setState({
                Searchlist:res.data.result.songs
            })
        })
    }
    render() {
        const {Hotlist,Searchlist,isdisplay}=this.state
        return (
            <div className='box'>
                 <div className='index_top'>
                 <NavBar
                    style={{background:'#fff',width:'100%',borderBottom:'0.01rem solid #666'}}
                    rightContent={
                    <span key={0} style={{fontSize:'0.9rem',color:'#000'}}>取消</span>
                    }
                    ><input type='text'
                    onChange={(e)=>this.SearchHandle(e)}
                    onBlur={(e)=>{this.setState({Searchlist:[],isdisplay:'none'})}}
                    placeholder='搜索音乐、电台、歌词' 
                    style={{border:0,background:'#cecece',height:'2.0rem',borderRadius:'20px',fontSize:'1rem',width:'230px',textAlign:'center'}}
                    onClick={()=>router.push('/search')}
                    /></NavBar>
                </div>
                <div className='index_body' style={{position:'relative'}}>
                    <List >
                        <Item extra={'>'}>热门歌手分类</Item>
                    </List>
                    <div style={{width:'96%',height:'auto',padding:'1rem 2%'}}>
                        <p style={{margin:'0 0 1rem 0 '}}>热门搜索</p>
                        <div style={{width:'100%',display:'flex',flexWrap:'wrap'}}>
                            {
                                Hotlist.map((item,index)=>{
                                    return (<div  key={index} style={{width:'auto',margin:'0.5rem',background:'#aaa',padding:'0.2rem',borderRadius:'0.3rem'}}>{item.first}</div>)
                                })
                            }
                        </div>
                    </div>
                    <div style={{display:isdisplay, width:'100%',position:"absolute",top:'0',left:'0',zIndex:'4',height:'auto',background:'#fff'}}>
                        {
                            Searchlist==null ?'': Searchlist.map(itemone=>{
                                return (<div  key={itemone.id}
                                style={{width:'96%',margin:'0 2%',height:'2.5rem',fontSize:'1rem',lineHeight:'2.5rem',borderBottom:'0.01rem solid #cecece',display:'flex'}}>
                                    <span style={{display:"block", width:'10%',marginRight:'1rem'}} className='icon iconfont'>&#xe60e;</span>
                                <span style={{display:"block",width:'80%',fontSize:'1rem',overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis'}}>{itemone.album.name}</span>
                                </div>)
                            })
                        }
                    </div>
                </div>
                <div className='index_bottom'> 
                <Bottom></Bottom>
                </div>
            </div>
        )
    }
}
