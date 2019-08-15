import React, { Component } from 'react'
import { Tabs,Button} from 'antd-mobile';
import Gxtj from './Gexingtuijian';
import Garidlist from './Gardlist';
import Djfs from './Dujiafangsong';
import Zxyy from './ZuiXinYinYue';
import Tjmv from './TuijianMv';
import Jxzl from './Jingxuanzhuanlan';
import Zbdt from './DianTaituijian';
import Onejpgd from './OneJingpin';
import Jingpinlist from './Jingpinlist';
import Bangdanlist1 from './Bangdanlist1';
import Artlist from "./Artlist";
import Bangdanlist2 from './Bangdanlist2';

const tabs = [
    { title: '个性推荐'},
    { title: '歌单' },
    { title: '排行榜' },
  ];  
  const ids=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
export default class Fourleilist extends Component {
    render() {
        return (
            <div style={{width:'100%',overflow:'auto'}}>
         
            <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false} swipeable={false}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff',flexDirection:'column' }}>
               <Gxtj></Gxtj>
               <div className='gxtj_center'>
                   <div>
                       <p><span className='icon iconfont'>&#xe874;</span></p>
                       <p>私人FM</p>
                   </div>
                   <div>
                       <p><span className='icon iconfont'>&#xe691;</span></p>
                       <p>每日推荐</p>
                   </div>
                   <div>
                       <p><span className='icon iconfont'>&#xe685;</span></p>
                       <p>音乐热歌榜</p>
                   </div>

               </div>
               <Garidlist></Garidlist>
               <Djfs></Djfs>
                <Zxyy></Zxyy>
                <Tjmv></Tjmv>
                <Jxzl></Jxzl>
                <Zbdt></Zbdt>
                <div style={{height:'auto'}}>
                    <p style={{margin:'1rem 0'}}>现在可以根据个人喜好,自由调整首页栏目顺序啦</p>
                    <Button size='small' style={{background:'rgb(221,0,27)',marginBottom:'1rem',color:'#fff'}}>调整栏目顺序</Button>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff',flexDirection:'column' }}>
               <Onejpgd></Onejpgd>
               <Jingpinlist></Jingpinlist>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'auto', backgroundColor: '#fff' ,flexDirection:'column'}}>
                <p style={{width:'96%',padding:'1rem 2%',textAlign:'left',fontSize:'1rem'}}>云音乐官方榜</p>
                <Bangdanlist1 idx={3} key={3}></Bangdanlist1>
                <Bangdanlist1 idx={0} key={0}></Bangdanlist1>
                <Bangdanlist1 idx={2} key={2}></Bangdanlist1>
                <Bangdanlist1 idx={1} key={1}></Bangdanlist1>
                <Artlist></Artlist>
                <div style={{width:'100%'}}>
                    <p style={{width:'96%',padding:'1rem 2%',textAlign:'left',fontSize:'1rem'}}>全球榜></p>
                    <ul style={{width:'96%',margin:'0 auto',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center'}}>
                        {ids.map(item=>{
                            return  <Bangdanlist2 key={item} idx={item}></Bangdanlist2>
                        })} 
                    </ul>
                </div>
              </div>
            </Tabs>
           
          </div>
        )
    }
}
