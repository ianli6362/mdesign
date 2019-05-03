import React from 'react';
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

class Index extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render(){

        const {className} = this.props;

        return (
            <div className={className}>

            </div>
        )
    }

};

export default styled(Index)`
    display: flex;
    height: 100vh;
    width: 100%;
    opacity: 0.1;

    justify-content: center;
    
`;