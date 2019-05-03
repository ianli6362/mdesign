import React from "react";
import styled from 'styled-components';

import VerticalText from './VerticalText/index';

class Display extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {className, text, vtext, pic} = this.props;

        return (
            <div className={className} >
                <div className="upper">
                    <div className="vertical">
                        <VerticalText text={vtext} />
                    </div>
                    <div className="name">
                        {text}
                    </div>
                    <div className="labels">
                        <div className="label">交互设计</div>
                        <div className="label">界面设计</div>
                        <div className="label">品牌提升</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default styled(Display)`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    
    & .upper {
        display: flex;
        flex-direction: column;
        height: 50%;
        width: 100%;
    }
    
    & .labels {
        position: absolute;
        top: 36%;
        display: flex;
        color: #ffffff;
        padding-left: 34px;
        justify-content: space-around;
    }
    
    & .label {
        border: 1px solid #4A4A4A;
        padding: 6px;
        font-size: 12.8px;
        margin-right: 8px;
        width: 60px;
        display: flex;
        justify-content: center;
    }
    
    & .vertical {
        display: flex;
        width: 100%;
        height: 12px;
        position: absolute;
        top: 20%;
    }
    
    & .name {
        display: flex;
        width: 100%;
        height: 40px;
        position: absolute;
        top: 26%;
        font-size: 40px;
        padding-left: 34px;
        color: #ffffff;
    }
`;