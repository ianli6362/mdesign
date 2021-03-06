import React from 'react';
import styled from 'styled-components';

import p1 from './1.png';
import p2 from './2.png';
import p3 from './3.png';
import triangle from './t.png';

const Tab = (props)=>{
    const { className, text } = props;
    return (
        <div className={className}>
            <div className="left"></div>
            <div className="right">{text}</div>
        </div>
    )
};

const Stab = styled(Tab)`
    display: flex;
    flex-direction: row;
    height: 46px;
    width: 150px;
    
    .left {
        height: 100%;
        width: 46px;
        background-image: ${props => `url(${props.background})`};
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
    
    .right {
        display: flex;
        height: 44px;
        justify-content: center;
        margin-left: 14px;
        font-family: "PingFang SC Light";
        align-items: center;
    }
`;

const SelectionBox = (props)=>{
    const {className, name, placeholder} = props;
    return (
        <div className={className}>
            <div className="select">
                <select>
                    <option value="girl">{name}</option>
                    <option value="boy">男士</option>
                </select>
            </div>
            <div className="text-box-wrapper">
                <input type="text" className="text-box" placeholder={placeholder} />
            </div>
        </div>
    )
};

const SSelectionBox = styled(SelectionBox)`
    display: flex;
    margin-bottom: 20px;
    height: 44px;
    
    /* Reset Select */
    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      background-image: none;
      background-color: transparent;
      border: 1px solid #DEDEDE;
      border-radius: 0;
    }
    /* Custom Select */
    .select {
      position: relative;
      display: flex;
      width: ${props => `${props.width}`};
      height: 100%;
      line-height: 3;
      color: #D8D8D8;
      overflow: hidden;
      font-family: "PingFang SC Light";
    }
    select {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 10px;
      padding-left: 14px;
      color: #3F3F3F;
      cursor: pointer;
    }
    select::-ms-expand {
      display: none;
    }
    select::selection {
        background: #ffb7b7; /* WebKit/Blink Browsers */
    }
    /* Arrow */
    .select::after {
      content: '';
      position: absolute;
      right: 8px;
      bottom: 14px;
      height: 14px;
      width: 14px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      background-image: url(${triangle});
      z-index: -20;
    }
    
    .text-box-wrapper {
      height: 100%;
    }
    
    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      appearance: none;
      outline: 0;
      box-shadow: none;
      background-image: none;
      padding: 0;
      margin: 0;
      width: 100%;
    }
    
    input::placeholder {
      color: #C0C0C0;
      font-family: "PingFang SC Light";
      opacity: 1; /* Firefox */
    }


    .text-box {
      height: 42px;
      border: 1px solid #DEDEDE;
      border-left-width: 0px;
      padding-left: 14px;
    }
`;

class ContactForm extends React.Component {

    render(){

        const {className} = this.props;

        return (
            <div className={className}>
                <div className="selection-box">
                    <SSelectionBox width="104px" name="女士" placeholder="您的姓名" />
                    <SSelectionBox width="160px" name="您的企业名称" placeholder="企业全名" />
                </div>
                <div className="selection-box">
                    <SSelectionBox width="104px" name="职称" placeholder="您的职位" />
                    <SSelectionBox width="160px" name="手机号码" placeholder="1500 888 666" />
                </div>
                <div className="textarea-wrapper">
                    <textarea className="char-textarea" placeholder="我们会在24小时内，通过您预留的联系方式，回复您的留言。"></textarea>
                </div>
                <div className="button-wrapper">
                    <a href="mailto:ianli6362@gmail.com?subject=Big%20News&body=Body-goes-here"><button className="button">留言</button></a>
                </div>
            </div>
        )
    }
}

const SContactForm = styled(ContactForm)`
    display: flex;
    flex-direction: column;
    
    & .selection-box {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        width: 700px;
        justify-content: space-evenly;
    }
    
    & .textarea-wrapper {
        display: flex;
        justify-content: center;
        font-family: "PingFang SC Light";
        height: 100%;
        width: 100%;
    }
    
    & .char-textarea {
         width:88%; 
         height:149px; 
         resize:none;
         border: 1px solid #D8D8D8;
         padding: 10px;
    }
    & .char-textarea::placeholder {
        color: #C0C0C0;
        font-family: "PingFang SC Light";
    }
    
    & .button-wrapper {
        display: flex;
        width: 100%;
        margin-top: 20px;
        padding-left: 30px;
    }
    
    & .button {
        width: 104px;
        height: 44px;
        color: #ffffff;
        background-color: #000000;
        font-family: "PingFang SC Light";
    }
    
    
`;


class Services extends React.PureComponent {

    render(){
        const { className, content, location } = this.props;

        return (
            <div className={className}>
                <div className="tittle">我们的设计服务包含</div>
                <div className="tabs">
                    <Stab background={p1} text="电子邮件" />
                    <Stab background={p2} text="微信企业号" />
                    <Stab background={p3} text="电话号码" />
                </div>
                <div className="leave-message">
                    您也可以给我们留言
                </div>
                <div className="form">
                    <SContactForm />
                </div>
                <div className="copyright">
                    Copyright©2019 M Design Studio Rights Reserved
                </div>
            </div>
        )
    }
};

export default styled(Services)`
    display: flex;
    flex-direction: column;
    height: 1000px;
    width: 100%;
    justify-content: center;
    align-items: center;
    
    & .tittle {
        position: absolute;
        top: 200px;
        font-size: 1.5em;
        font-family: "LisongPro";
    }
    
    & .tabs {
        display: flex;
        position: absolute;
        top: 300px;
        flex-direction: row;
        justify-content: space-evenly;
        width: 1000px;
    }
    
    & .leave-message {
        position: absolute;
        top: 380px;
        font-family: "PingFang SC Light";
        font-size: 0.875em;
        color: #D8D8D8;
    }
    
    & .form {
        position: absolute;
        top: 440px;
    }
    
    & .copyright {
        position: absolute;
        top: 900px;
        margin-bottom: 100px;
        font-family: arial;
        font-size: 0.75em;
    }
`;
