import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import _ from 'lodash';

import Intro from './pages/intro/index';
import Display from './pages/display/index';
import Services from './pages/services/index';
import Contact from './pages/contact/index';

import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';
import p4 from './4.png';

import Logo from '../components/logo';

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
        this.isMozilla = (/Macintosh/i.test(navigator.userAgent))


        // ------------- VARIABLES ------------- //
        this.scrollSensitivitySetting = 200; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
        this.slideDurationSetting = 400; //Amount of time for which slide is "locked"

        this.state = {
            jacks: ['f1','f2','f3','f4','f5','f6'],
            prevPage: 0,
            currentPage: 0,
            pages: [0,100,200,300, 400, 500],
            background: ps[0],
        };

        this.parallaxScroll = this.parallaxScroll.bind(this);
        this.backToTop = this.backToTop.bind(this);
        this.changePage = this.changePage.bind(this);
        this.resizeEvent = this.resizeEvent.bind(this);
    }

    changePage(scrollSensitivitySetting) {

        if (this.ticking != true) {

            if (this.delta <= scrollSensitivitySetting * -1 ) {

                this.ticking = true;

                if (this.state.currentPage !== 6 - 1) {
                    let arr = this.state.jacks;
                    arr[this.state.currentPage] = 'f2';
                    let newArray = [];
                    this.state.pages.forEach((value)=>{
                        newArray.push(value-100);
                    });


                    this.setState({
                        prevPage: this.state.currentPage,
                        currentPage: this.state.currentPage + 1,
                        jacks: arr,
                        pages: newArray,
                        background: ps[this.state.currentPage + 1]
                    });
                }

                setTimeout(()=>{
                    this.ticking = false;
                }, this.slideDurationSetting);
            }

            if (this.delta >= scrollSensitivitySetting ) {

                this.ticking = true;

                if (this.state.currentPage !== 0) {
                    let arr = this.state.jacks;

                    arr[this.state.currentPage-1] = 'f1';

                    let newArray = [];
                    this.state.pages.forEach((value)=>{
                        newArray.push(value+100);
                    });

                    console.log(newArray);

                    this.setState({
                        currentPage: this.state.currentPage - 1,
                        jacks: arr,
                        pages: newArray,
                        background: ps[this.state.currentPage - 1]
                    });
                }

                setTimeout(()=>{
                    this.ticking = false;
                }, this.slideDurationSetting);
            }
        }
    }

    parallaxScroll(evt) {

        if (this.isFirefox) {
            this.delta = evt.detail * (-120);
            this.changePage(40)
        } else if (this.isIe) {
            this.delta = -evt.deltaY;
        } else if (this.isMozilla) {
            this.delta = evt.wheelDelta;
            this.changePage(2)
        } else {
            this.delta = evt.wheelDelta;
            this.changePage(40)
        }
    }

    backToTop () {
        this.setState({
            jacks: ['f1','f1','f1','f1','f1','f1'],
            currentPage: 0
        })
    }


    resizeEvent(e) {
        console.log(e.currentTarget.innerHeight);
        this.forceUpdate(()=>{
            console.log('rerender')
        });

    }

    componentDidMount() {
        const mousewheelEvent = this.isFirefox ? "DOMMouseScroll" : "wheel";
        window.addEventListener(mousewheelEvent, _.throttle(this.parallaxScroll, 100), true);
        window.addEventListener("resize", this.resizeEvent.bind(this));
    }

    render(){

        const { jacks,currentPage } = this.state;

        let style = {};
        if(currentPage===5) {
            style = {
                zIndex: 10, minHeight: `877px`
            }
        } else {
            style = {
                zIndex: 10, height: '100vh'
            }
        }

        console.log(this.state.background);

        return (
                <div className={this.props.className} >
                    <Logo backToTop={this.backToTop} />

                    <div className="background-photo" style={
                        this.state.background
                    } />

                    <div className="background-photo" style={{
                        backgroundColor: 'transparent', transform:  `translate3d(0,${this.state.pages[0]}vh,0)`
                    }}>
                        <Intro />
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
                        backgroundColor: 'transparent', transform:  `translate3d(0,${this.state.pages[5]}vh,0)`,
                        overflowY: 'auto'
                    }}>
                        <Contact />
                    </div>

                </div>
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
    }
    
`;
