import React, { Component } from 'react'
import {get } from  '../utils/request';
import { Carousel, WingBlank } from 'antd-mobile';
import Item from 'antd-mobile/lib/popover/Item';
export default class Swiper extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
        }
    }
    componentDidMount(){
        get('/banner',{type:2}).then(res=>{
            // console.log(res.data.banners);
            this.setState({
                list:res.data.banners
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
            <div style={{width:'100%'}}>
          
                <Carousel
                autoplay={true}
                style={{width:'100%',margin:0,padding:0}}
                >
                    {list.map(item=>{
                        return (
                            <a href="javascript:void(0)" key={item.bannerId} style={{display:'inline-block',width:'100%'}}>
                            <img 
                            src={item.pic}
                            alt=""
                            style={{width:'100%',verticalAlign: 'top'}}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                              }}
                            />
                            </a>
                        )
                    })}
                </Carousel>
          
            </div>
        )
    }
}
