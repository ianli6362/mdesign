import React from 'react';
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

import TurningBox from '../../../components/TurningBox';
import AmazingText from '../../../components/AmazingText';
import Circle from '../../../components/Circle';
import VerticalArrow from '../../../components/VerticalArrow';
import MagicText from '../../../components/MagicText';
import DownArrow from '../../../components/DownArrow';
import FloatingBox from '../../../components/FloatingBox';

import background from './background.png';

class Index extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            circle: false
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                circle: true
            });
        }, 3400)
    }

    render(){

        const {className} = this.props;
        const circle = this.state.circle ?  <Circle left="57%" top="25%" /> : null;

        return (
            <div className={className}>
                <FloatingBox />
                <div className="content">

                    <div className="animation-zone">
                        <TurningBox />
                        <MagicText top="calc(50% - 130px)" left="0px" text="M for Mastermind" />
                        <AmazingText leftText="用" centerText="创新设计 引领 品牌及产品" top="20%" marginLeft="0%" showCircle={0} />
                        {circle}
                        <VerticalArrow />
                        <MagicText top="calc(50% + 46px)" text="我们的核心团队全部来自于美国硅谷，具备超前的设计视角，也拥有顶尖的技术研发团队。我们发现设计问题，更提供当下最优的解决方案。"/>
                    </div>

                    <DownArrow className="down_arrow" timeOut={4000}/>

                </div>
            </div>
        )
    }
};

export default styled(Index)`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    
    & .content {
        display: flex;
        position: relative;
        width: 1280px;
        color: white;
        overflow: hidden;
        justify-content: center;
        align-items: center;
    }
    
    & .animation-zone {
        position: absolute;
        top: 28vh;
        height: 273px;
        width: 610px;
        z-index: 100;
    }
    
    & .down_arrow {
        position: absolute;
        bottom: 4%;
    }
`;