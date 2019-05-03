import React from 'react';
import styled, {keyframes}  from 'styled-components';
import posed from 'react-pose';

import logo from './logo.png';

const LogoBox = posed.div({
    visible: {
        opacity: 1,
        transition: { duration: 2000 }
    },
    toTop: {
        top: '6.4%',
        transition: {
            top: { ease: 'easeInOut', duration: 800 },
        }
    },
    toLeft: {
        left: '55px',
        transition: {
            left: { ease: 'easeInOut', duration: 800 },
        }
    }
});

class Logo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            logo_anime: '',
        }
    }

    componentDidMount() {
        this.setState({
            logo_anime: 'visible'
        });

        setTimeout(() => {
            this.setState({
                logo_anime: 'toTop'
            });

            setTimeout(()=>{
                this.setState({
                    logo_anime: 'toLeft'
                });
            }, 1400)

        }, 2000);
    }

    render(){

        const {className} = this.props;
        const {logo_anime} = this.state;

        return (
            <LogoBox className={className} pose={logo_anime} onClick={this.props.backToTop} />
        )
    }
};

export default styled(Logo)`
    height: 46px;
    width: 46px;
    position: absolute;
    opacity: 0.1;
    top: 46vh;
    left: calc(50% - 23px); 
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 100;
    
    :hover {
       cursor: pointer;
    }
`;