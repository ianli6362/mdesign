import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import _ from 'lodash';

import Intro from './pages/intro/index';
import Display from './pages/display/index';
import Services from './pages/services/index';
import Contact from './pages/contact/index';

import Title from './pages/display/Title/index';

import Swipe from 'react-easy-swipe';

import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';
import p4 from './4.png';

const ps = [
    {
        background: `radial-gradient(#313131, #1B1B1B)`
    },
    {
        backgroundImage: `url('${p1}')`
    },
    {
        backgroundImage: `url('${p2}')`
    },
    {
        backgroundImage: `url('${p3}')`
    },
    {
        backgroundImage: `url('${p4}')`
    },
    {
        backgroundImage: `url('${p4}')`
    }
];


class App extends React.PureComponent {

    constructor(props) {
        super(props);

        this.ticking = false;
        this.isFirefox = (/Firefox/i.test(navigator.userAgent));
        this.isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));

        this.state = {
            currentPage: 0,
            pages: [0,100,200,300, 400, 500],
            background: ps[0],
            showTitle: {
                opacity: 0
            },
            doneLoading: false
        };

        this.xx=0;
        this.yy=0;
        this.loadingImages = 0;

        this.parallaxScroll = this.parallaxScroll.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.onSwipeMove = this.onSwipeMove.bind(this);
        this.onSwipeEnd = this.onSwipeEnd.bind(this);
        this.onLoadEvent = this.onLoadEvent.bind(this);
    }

    nextPage() {
        this.ticking = true;

        const {currentPage, pages} = this.state;

        if (this.state.currentPage !== 5) {
            let newArray = [];
            pages.forEach((value)=>{
                newArray.push(value - 100);
            });

            let opacity = currentPage + 1 > 0 && currentPage +1 < 4 ? 1 : 0;

            this.setState({
                currentPage: currentPage + 1,
                pages: newArray,
                background: ps[currentPage + 1],
                showTitle: {
                    opacity
                }
            });
        }

        setTimeout(()=>{
            this.ticking = false;
        }, 400);
    }

    previousPage() {
        this.ticking = true;

        const {currentPage, pages} = this.state;

        if (currentPage !== 0) {

            let newArray = [];
            pages.forEach((value)=>{
                newArray.push(value + 100);
            });

            let opacity = currentPage - 1 > 0 && currentPage - 1 < 4 ? 1 : 0;

            this.setState({
                currentPage: currentPage - 1,
                pages: newArray,
                background: ps[currentPage - 1],
                showTitle: {
                    opacity
                }
            });
        }

        setTimeout(()=>{
            this.ticking = false;
        }, 400);
    }

    parallaxScroll(evt) {



        if (this.isFirefox) {
            this.delta = evt.detail * (-120);
        } else if (this.isIe) {
            this.delta = -evt.deltaY;
        } else {
            this.delta = evt.wheelDelta;
        }

        if (this.ticking != true) {

            if (this.delta <= -60 ) {

                this.ticking = true;

                if (this.state.currentPage !== 6 - 1) {
                    let arr = this.state.jacks;
                    arr[this.state.currentPage] = 'down';
                    this.setState({
                        currentPage: this.state.currentPage + 1,
                        jacks: arr
                    });
                }

                setTimeout(()=>{
                    this.ticking = false;
                }, 400);
            }

            if (this.delta >= 60 ) {


                this.ticking = true;

                if (this.state.currentPage !== 0) {
                    let arr = this.state.jacks;

                    arr[this.state.currentPage-1] = 'up';

                    this.setState({
                        currentPage: this.state.currentPage - 1,
                        jacks: arr
                    });
                }

                setTimeout(()=>{
                    this.ticking = false;
                }, 400);
            }
        }
    }

    onSwipeMove(position) {
        this.xx = position.x;
        this.yy = position.y;
    }

    onSwipeEnd(event) {
        if(Math.abs(this.xx) > Math.abs(this.yy)) {
            if(this.xx>0) {
                //right
            } else {
                //left
            }
        } else {
            if(this.yy>0) {
                //down
                this.previousPage()
            } else {
                //up
                this.nextPage()
            }
        }
    }

    componentDidMount() {
        const mousewheelEvent = this.isFirefox ? "DOMMouseScroll" : "wheel";
        window.addEventListener(mousewheelEvent, _.throttle(this.parallaxScroll, 60), { passive: true });

    }

    onLoadEvent(e) {
        console.log('on load event');
        this.loadingImages += 1;

        console.log(this.loadingImages);

        if(this.loadingImages===4) {
            this.setState({
                doneLoading: true
            })
        }
    }

    render(){

        return (
            <Swipe className={this.props.className}
                   onSwipeMove={this.onSwipeMove}
                   onSwipeEnd={this.onSwipeEnd} >

                <div style={{
                    display: 'none'
                }}>
                    <img src={p1} onLoad={this.onLoadEvent} />
                    <img src={p2} onLoad={this.onLoadEvent} />
                    <img src={p3} onLoad={this.onLoadEvent} />
                    <img src={p4} onLoad={this.onLoadEvent} />
                </div>


                <div className="title" style={
                    this.state.showTitle
                }>
                    <Title rotate={this.state.currentPage} />
                </div>

                <div className="background-photo" style={this.state.background} />

                <div className="background-photo" style={{
                    backgroundColor: 'transparent', transform:  `translate3d(0,${this.state.pages[0]}vh,0)`
                }}>
                    <Intro doneLoading={this.state.doneLoading} />
                </div>
                <div className="background-photo" style={{
                    backgroundColor: 'transparent', transform:  `translate3d(0,${this.state.pages[1]}vh,0)`
                }}>
                    <Display vtext="重 新 打 造" text="商旅服务品台" pic={p1} position="left" />
                </div>
                <div className="background-photo" style={{
                    backgroundColor: 'transparent', transform:  `translate3d(0,${this.state.pages[2]}vh,0)`
                }}>
                    <Display vtext="响 应 式" text="员工教学平台" pic={p2} position="right" />
                </div>
                <div className="background-photo" style={{
                    backgroundColor: 'transparent', transform:  `translate3d(0,${this.state.pages[3]}vh,0)`
                }}>
                    <Display vtext="创 新 概 念" text="App产品设计" pic={p3} position="right" />
                </div>
                <div className="background-photo" style={{
                    backgroundColor: 'transparent', transform:  `translate3d(0,${this.state.pages[4]}vh,0)`
                }}>
                    <Services />
                </div>
                <div className="background-photo" style={{
                    backgroundColor: 'transparent', transform:  `translate3d(0,${this.state.pages[5]}vh,0)`
                }}>
                    <Contact />
                </div>


            </Swipe>
        )
    }
};

export default styled(App)`
   overflow: hidden;
    
   & .background-photo {
        display: flex;
        height: 100%;
        width: 100%;
        position: fixed;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;
        z-index: -4;
    }
    
    & .title {
        width: 100%;
        height: 81px;
        top: 10%;
        position: fixed;
        transition: all 0.5s ease-in-out;
    }
`;
