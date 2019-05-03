import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';


import SelectionBox from '../SelectionBox/index';

class Form extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const {className} = this.props;

        return (
            <div className={className} >

                <div className="input-form">
                    <SelectionBox width="104px"  name="女士" placeholder="您的姓名" />
                </div>
                <div className="input-form">
                    <SelectionBox width="104px"  name="职称" placeholder="您的职位" />
                </div>
                <div className="input-form">
                    <textarea className="char-textarea" placeholder="请写明您的联系方式，以及您的公司全名。" ></textarea>
                </div>
                <div className="button-box">
                    <button className="button">留言</button>
                </div>
            </div>
        );
    }
}

export default styled(Form)`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 78.2%;
    
    & .input-form {
        display: flex;
        width: 100%;
    }
    
    & .char-textarea {
         width:100%; 
         height:88px; 
         resize:none;
         border: 1px solid #D8D8D8;
         padding: 10px;
         outline: none;
    }
    & .char-textarea::placeholder {
        color: #C0C0C0;
        font-size: 14px;
    }
    
    & .button-box {
        margin-top: 14px;
    }
    
    & .button {
        background-color: #313131;
        color: #ffffff;
        width: 104px;
        height: 36px;
    }
    
`;