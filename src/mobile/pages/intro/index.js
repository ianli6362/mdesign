import React from 'react';
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';


import TurningBox from './TurningBox/index';
import AmazingText from './AmazingText/index';
import MagicText from './MacigText/index';

import logo from './logo.png';
import DownArrow from '../../../components/DownArrow';

const Box = posed.div({
    f1: { opacity: 0.1 },
    f2: {
        opacity: 1,
        transition: { duration: 2000 }
    },
    f3: {
        top: '6.4%',  //44/684
        transition: {
            top: { ease: 'easeInOut', duration: 800 },
        }
    },
    f4: {
        left: '10.9%',
        transition: {
            left: { ease: 'easeInOut', duration: 800 },
        }
    }
});

class Index extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            logo_anime: 'f1',
        }
    }

    componentDidMount() {

        this.setState({
            logo_anime: 'f2',
        });

        setTimeout(() => {
            this.setState({
                logo_anime: 'f3',
            });

            setTimeout(()=>{
                this.setState({
                    logo_anime: 'f4',
                });
            }, 1400)

        }, 2000);

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps);

        if(nextProps.doneLoading) {
            return true;
        }

        return false;
    }

    render(){
        const {className, doneLoading} = this.props;
        const {logo_anime, } = this.state;

        let content = null;

        if(doneLoading) {
            content = <div className="content">
                <Box className="logo" pose={logo_anime} />
                <div className="content-wrapper">
                    <TurningBox />
                    <MagicText top="calc(50% - 180px)" left="10%" text="M for Mastermind" />
                    <AmazingText leftText="用" centerText="创新设计" top="calc(50% - 126px)" marginLeft="10%" showCircle={0} />
                    <AmazingText leftText="" centerText="引领" top="calc(50% - 46px)" marginLeft="0%" showCircle={1} />
                    <AmazingText leftText="" centerText="品牌及产品" top="calc(50% + 26px)" marginLeft="0%" showCircle={0} />
                    <MagicText top="calc(50% + 120px)" text="我们的核心团队全部来自于美国硅谷，具备超前的设计视角，也拥有顶尖的技术研发团队。我们发现设计问题，更提供当下最优的解决方案。"/>
                </div>
            </div>
        } else {
            content = null;
        }

        return (
            <div className={className}>
                {content}
                <DownArrow className="down-arrow" timeOut={4000} />
            </div>
        )
    }
};

export default styled(Index)`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    background-color: #313131;

    .content {
        display: flex;
        position: relative;
        width: 1280px;
        background-color: #313131;
        color: white;
        overflow: hidden;
    }
    
    & .content-wrapper {
        display: flex;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: -10px;
    }
    
    .logo {
        height: 40px;
        width: 40px;
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
        background-image: url(${logo});
        background-repeat: no-repeat;
        background-size: contain;
        z-index: 4;
    }
    
    & .down-arrow {
       position: absolute;
       bottom: 4vh; 
    }
`;