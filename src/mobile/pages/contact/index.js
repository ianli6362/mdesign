import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';

import Lists from './Lists/index';
import Form from './Form/index';

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
                <div className="upper">
                    <div className="title-top">联系</div>
                    <div className="list">
                        <Lists />
                    </div>

                    <div className="form">
                        <Form />
                    </div>

                    <div className="copyright">
                        <div className="copy-text">Copyright©2019</div>
                        <div className="copy-text"> M Design Studio Rights Reserved</div>
                    </div>
                </div>

            </div>
        );
    }
}

export default styled(Service)`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    height: 100%;
    width: 100%;
    
    .upper {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    & .title-top {
        margin-top: 51px;
        margin-left: 10.9%;
        font-size: 30px;
    }
    
    & .list {
        margin-top: 30px;
        width: 100%;
    }
    
    & .form {
        height: 305px;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        margin-top: 30px;
    }
    
    & .copyright {
        display: flex;
        position: absolute;
        flex-direction: column;
        justify-content: center;
        bottom: 12px;
        width: 100%;
        font-size: 12.8px;
    }
  
    & .copy-text  {
        display: flex;
        justify-content: center;
        margin-top: 8px;
    }
`;