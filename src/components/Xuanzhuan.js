import React, { Component } from 'react'
export default class Xuanzhuan extends Component {
    constructor(props){
        super(props);
        this.state={
            click:false
        }
    }


    render() {
        const {click}=this.state;
        return (
            <div 
            style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} 
            onClick={()=>this.props.Callparent(click)}>
                <div style={{width:'50%',background:'pink',border:'2rem solid #000',borderRadius:'50%',animation:'xuanzhuan 10s infinite linear',animationPlayState:this.props.isZhuan? 'running':'paused'}} >
                    <img  style={{width:'100%',borderRadius:'50%'}} src={this.props.touImg?this.props.touImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565630271184&di=db902c9251b31cb225f4baca289f58f4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201312%2F05%2F20131205172433_NsYGL.thumb.600_0.jpeg'}/>
                </div>
            </div>
        )
    }
}
