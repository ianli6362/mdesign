import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';

import triangle from './t.png';

const SelectionBox = (props)=>{
    const {className, name, placeholder} = props;
    return (
        <div className={className}>
            <div className="select">
                <select>
                    <option value="girl">{name}</option>
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
    height: 36px;
    width: 100%;
    
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
      font-size: 14px;
    }
    /* Custom Select */
    & .select {
      position: relative;
      display: flex;
      width: ${props => `${props.width}`};
      height: 100%;
      line-height: 3;
      color: #D8D8D8;
      overflow: hidden;
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
      right: 4px;
      bottom: 18px;
      height: 6px;
      width: 16px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      background-image: url(${triangle});
    }
    
    .text-box-wrapper {
      height: 100%;
      width: 100%;
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
    }
    
    input::placeholder {
      color: #C0C0C0;
      font-size: 14px;
      opacity: 1; /* Firefox */
    }


    .text-box {
      height: 34px;
      width: calc(100% - 14px);
      border: 1px solid #DEDEDE;
      border-left-width: 0px;
      padding-left: 14px;
    }
`;

export default SSelectionBox;