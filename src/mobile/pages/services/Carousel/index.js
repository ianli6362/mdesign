import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';

import Swipe from 'react-easy-swipe';

import Dots from '../Dots/index';

import p0 from './0.png';
import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';
import p4 from './4.png';
import p5 from './5.png';


const picArray = [p5, p1,p2,p3,p4,p5, p1];
const strArray = [
    '品牌设计',
    '网页设计开发',
    '小程序设计开发',
    '演讲设计',
    '印刷品设计'
];

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previous: 0,
            current: 1,
            next: 2
        };

        this.nextService = this.nextService.bind(this);
        this.previousService = this.previousService.bind(this);

    }

    nextService() {
        const { current } = this.state;

        console.log('rerere');

        if(current===5) {

        } else {
            this.setState({
                previous: current,
                current: current+1,
                next: current+2
            });
        }
    }

    previousService() {
        const { current } = this.state;

        if(current===1) {

        } else {
            this.setState({
                previous: current-2,
                current: current-1,
                next: current
            });
        }
    }

    componentDidMount() {

    }

    render() {
        const {className} = this.props;

        const {previous, current, next} = this.state;

        return (
            <div className={className} >
                <Swipe className="carousel-box"
                       onSwipeRight={this.previousService}
                       onSwipeLeft={this.nextService}
                >
                    <div className="side-box" style={{
                        marginRight: '4px',
                        backgroundImage: `url(${picArray[previous]})`
                    }} onClick={this.previousService} />
                    <div className="center-box" style={{
                        backgroundImage: `url(${picArray[current]})`
                    }} />
                    <div className="side-box" style={{
                        marginLeft: '4px',
                        backgroundImage: `url(${picArray[next]})`
                    }} onClick={this.nextService} />
                </Swipe>
                <div className="text-box">
                    {strArray[current-1]}
                </div>
                <div className="line" />

                <div>
                    <Dots active={current-1} />
                </div>
            </div>
        );
    }
}

export default styled(Carousel)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    & .carousel-box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    
    & .side-box {
        display: flex;
        width: 80px;
        height: 80px;
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
        opacity: 0.4;
    }
    
    & .center-box {
        display: flex;
        width: 120px;
        height: 120px;
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    
    & .text-box {
        display: flex;
        width: 100%;
        justify-content: center;
        font-size: 18px;
    }
    
    & .line {
        height: 3px;
        margin-top: 20px;
        width: 50%;
        background-color: #D8D8D8;
    }
    
    $ .dots {
        
    }
    
`;