import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';

class VerticalText extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const {className, text} = this.props;
        const textArray = text.split(' ');
        let str = '';
        textArray.forEach((t, index)=>{
            if(index==0) {
                str = '|';
            }
            str += ` ${t} |`;
        });

        return (
            <div className={className} >
                {str}
            </div>
        );
    }
}

export default styled(VerticalText)`
    display: flex;
    position: absolute;
    font-family: "PingFang SC Light";
    margin-left: 0px;
    top: 95px;
    font-size: 16px;
    color: #ffffff;
`;