import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';

import Carousel from './Carousel/index';
import Location from './Location/index';
import DownArrow from '../../../components/DownArrow';

class Service extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const {className} = this.props;

        return (
            <div className={className} >
                <div className="title">设计服务</div>
                <div className="upper">
                    <Carousel className="carousel" />
                </div>

                <div className="lower">
                    <Location />
                </div>
                <DownArrow className="down-arrow" timeOut={0} />
            </div>
        );
    }
}

export default styled(Service)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    height: 100%;
    
    .upper {
        display: flex;
        position: absolute;
        top: 20vh;
        width: 100%;
        flex-direction: column;
        height: 70%;
    }
    
    .lower {
        display: flex;
        position: absolute;
        bottom: 0;
        width: 100%;
        flex-direction: column;
        height: 38%;
        background-color: #313131;
    }
    
    & .title {
        position: absolute;
        top: 6.4%;
        left: 10.9%;
        font-size: 34px;
    }
    
    & .carousel {
        position: absolute;
        top: calc(50% - 200px);
        width: 100%;
        display: flex;
        justify-content: center;
        height: 200px;
    }
    
    & .down-arrow {
        position: absolute;
        bottom: 0;
    }
`;