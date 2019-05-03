import React from "react";
import styled from 'styled-components';

class VerticalText extends React.Component {
    constructor(props) {
        super(props);

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
    font-size: 14px;
    color: #ffffff;
`;