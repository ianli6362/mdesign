import React from 'react';
import styled from 'styled-components';

import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';
import p4 from './4.png';
import p5 from './5.png';

const Tab = (props)=>{
    const { className, text } = props;
    return (
        <div className={className}>
            <div className="upper"></div>
            <div className="lower">{text}</div>
        </div>
    )
};

const Stab = styled(Tab)`
    display: flex;
    flex-direction: column;
    height: 144px;
    width: 144px;
    
    .upper {
        height: 100px;
        width: 100%;
        background-image: ${props => `url(${props.background})`};
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    
    .lower {
        display: flex;
        height: 44px;
        margin-top: 14px;
        font-family: "PingFang SC Light";
        font-size: 18px;
        justify-content: center;
        align-items: flex-end;
    }
`;

const Location = (props)=>{
    const { className, leftText, rightText, border } = props;
    const rightLeft = rightText.split(' ')[0];
    const rightRight = rightText.split(' ')[1];

    return (
        <div className={className} style={border}>
            <div className="leftText">
                <b>{leftText}</b></div>
            <div className="rightText">{rightLeft}<span className="black">{rightRight}</span></div>
        </div>
    )
};

const SLocation = styled(Location)`
    display: flex;
    width: 50%;
    color: #ffffff;
    height: 100%;
    justify-content: center;
    align-items: center;
    
    & .leftText {
        font-weight: 800;
        font-size: 20px;
        font-family: "PingFang SC Regular";
    }
    
    & .rightText {
        margin-left: 10px;
        font-size: 20px;
        font-family: "PingFang SC Light";
    }
    
    & .black { color: transparent }
`;

class Services extends React.PureComponent {

    render(){
        const { className, content, location } = this.props;

        return (
            <div className={className}>
                <div className="tittle">我们的设计服务包含</div>
                <div className="tabs">
                    <Stab background={p1} text="品牌设计" />
                    <Stab background={p2} text="网页设计开发" />
                    <Stab background={p3} text="小程序设计开发" />
                    <Stab background={p4} text="演讲设计" />
                    <Stab background={p5} text="印刷品设计" />
                </div>
                <div className="middle-text">
                    产品孵化及其它项目请咨询市场部
                </div>
                <div className="location">
                    <SLocation leftText="美国" rightText="洛杉矶绿地中心" border={{borderBottom: `1px solid #D8D8D8`}} />
                    <SLocation leftText="中国" rightText="深圳科技园 龙套" border={{borderBottom: `1px solid #D8D8D8`}} />
                    <SLocation leftText="中国" rightText="成都华侨城 龙套"/>
                </div>
            </div>
        )
    }
};

export default styled(Services)`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #ffffff;
    
    .tittle {
        font-size: 24px;
        font-family: "LiSongPro";
    }

    .tabs {
        display: grid;
        grid-template-columns: 200px 200px 200px;
        grid-row-gap: 60px;
        margin-top: 120px;
        margin-bottom: 120px;
        width: 600px;
        justify-content: space-between;
    }
    
    .middle-text {
        position: absolute;
        bottom: 140px;
        font-size: 14px;
        font-family: "PingFang SC Light";
        color: #D8D8D8;
    }
    
    .location {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 210px;
        background-color: #262626
    }
  
`;
