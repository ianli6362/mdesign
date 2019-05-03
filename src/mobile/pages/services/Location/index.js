import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';


class Dots extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const {className} = this.props;

        return (
            <div className={className} >
                <div className="text-box">
                    <span style={{
                        fontWeight: 800
                    }}>美国</span> <span style={{
                        marginLeft: '20px'
                }}>洛杉矶市中心</span>
                </div>
                <div className="text-box">
                    <span style={{
                        fontWeight: 200
                    }}>中国</span> <span style={{
                    marginLeft: '20px'
                }}>深圳科技园</span>
                </div>
                <div className="text-box" style={{
                    border: 'none'
                }}>
                    <span style={{
                        fontWeight: 200
                    }}>中国</span> <span style={{
                    marginLeft: '20px'
                }}>成都天府三街</span>
                </div>
            </div>
        );
    }
}

export default styled(Dots)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #313131;
    width: 100%;
    height: 80%;
    
    & .text-box {
        height: 30%;
        width: 78.2%;
        display: flex;
        color: #ffffff;
        align-items: center;
        border-bottom: 1px solid #D8D8D8;
    }

`;