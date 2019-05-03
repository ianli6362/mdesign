import React from 'react';
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

import TurningBox from '../components/TurningBox';
import AmazingText from '../components/AmazingText';
import Circle from '../components/Circle';
import VerticalArrow from '../components/VerticalArrow';
import MagicText from '../components/MagicText';
import DownArrow from '../components/DownArrow';

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
        const circle = this.state.circle ?  <Circle top="-240px" left="370px" /> : null;

        return (
            <div className={className}>
                <div className="tablet-content">

                    <div className="tablet-animation-zone">

                        <div className="tablet-m-for">
                            <MagicText text="M for Mastermind" />
                        </div>

                        <div className="tablet-amazing-text">
                            <TurningBox />
                            <div style={{
                                height: '105px',
                                position: 'relative',
                                top: '-105px'
                            }}>
                                <AmazingText leftText="用" centerText="创新设计 引领" top="-105px" marginLeft="-10%" showCircle={0} />
                            </div>

                            <div style={{
                                height: '45px',
                                position: 'relative',
                                top: '-105px'
                            }}>
                                <AmazingText leftText="品牌及产品" top="14%" marginLeft="14%" showCircle={0} />
                            </div>

                            {circle}
                            <VerticalArrow top="-140px" left="30px" width="240px" />
                        </div>

                        <div className="tablet-description-text">
                            <MagicText text="我们的核心团队全部来自于美国硅谷，具备超前的设计视角，也拥有顶尖的技术研发团队。我们发现设计问题，更提供当下最优的解决方案。"/>
                        </div>

                    </div>

                    <DownArrow className="down_arrow" />

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

    & .tablet-content {
        display: flex;
        position: relative;
        width: 100%
        color: white;
        overflow: hidden;
        justify-content: center;
        align-items: center;
    }
    
    & .tablet-animation-zone {
        height: 347px;
        width: 500px;
        z-index: 100;
    }
    
    & .down_arrow {
        position: absolute;
        bottom: 4%;
    }
    
    & .tablet-m-for {
        height: 20px;
    }
    
    & .tablet-amazing-text {
        height: 160px;
        margin-top: 50px;
    }
    
    & .tablet-description-text {
        height: 105px;
        margin-top: 50px;
    }
`;