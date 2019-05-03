import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';

import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';

class Lists extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const {className} = this.props;

        return (
            <div className={className} >
                <div className="list-item">
                    <div className="upper" style={{
                        backgroundImage: `url(${p1})`
                    }} />
                    <div className="lower">电邮</div>
                </div>

                <div className="list-item">
                    <div className="upper" style={{
                        backgroundImage: `url(${p2})`
                    }} />
                    <div className="lower">微信</div>
                </div>

                <div className="list-item">
                    <div className="upper" style={{
                        backgroundImage: `url(${p3})`
                    }} />
                    <div className="lower">电话号码</div>
                </div>
            </div>
        );
    }
}

export default styled(Lists)`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    
    & .list-item {
        display : flex;
        flex-direction: column;
        width: 62px;
        height: 70px;
        align-items: center;
        justify-content: center;
    }
    
    & .upper {
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        width: 36px;
    } 
    
    & .lower {
        display: flex;
        justify-content: center;
        font-size: 14px;
    } 
`;