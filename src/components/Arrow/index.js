import React from "react";
import posed from 'react-pose';

const CoverLayer = posed.div({
    f1: {

    },
    f2: {
        left: '-100%',
        top: '100%',
        opacity: 0,
        transition: {
            left: { ease: 'linear', duration: 800, delay: 4000 },
            top: { ease: 'linear', duration: 800, delay: 4000 },
            opacity: { ease: 'linear', duration: 800, delay: 4800 },
        }
    }
});

import arrow from './arrow.png';

class Arrow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cover_layer: 'f1'
        }

    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                cover_layer: 'f2'
            })
        }, 2000)
    }

    render() {

        const {opacity, left, top} = this.props;
        const {cover_layer} = this.state;

        return (
            <div style={{
                opacity,
                left,
                top,
                height: '30px',
                width: '34px',
                backgroundImage: `url(${arrow})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'contain',
                position: 'absolute',
                zIndex: 40
            }}>
                <CoverLayer style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#313131'
                }} pose={cover_layer}/>
            </div>
        );
    }
}

export default Arrow;