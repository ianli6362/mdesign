import React from 'react';
import styled, {keyframes} from 'styled-components';


const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const x = keyframes`
    100% {
         transform: translateX(calc(100vw - 161px));
    }
`;

const y = keyframes`
    100% {
         transform: translateY(calc(100vh - 161px));
    }
`;

class FloatingBox extends React.PureComponent {

    constructor(props) {
        super(props);

        this.x = Math.floor(Math.random() * 20) + 10;
        this.y = Math.floor(Math.random() * 20) + 10;
        this.r = Math.floor(Math.random() * 20) + 10;

    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                circle: true
            });
        }, 3400)
    }


    render(){
        const {className} = this.props;

        return (
            <div className={className}>
                <div className="x" style={{
                    animationDuration: this.x
                }}>
                    <div className="y"style={{
                        animationDuration: this.y
                    }}>
                        <div className="box rotate" style={{
                            animationDuration: this.r
                        }}>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default styled(FloatingBox)`
    display: flex;
    width: 100%;
    position: absolute;
    height: 100%;
    
    .box {
        width: 161px;
        height: 161px;
        border: 1px solid #D8D8D8;
        opacity: 0.4;
        z-index: 200;
    }
    
    .rotate {
        animation: ${rotate} 20s linear infinite alternate;
    }
    
    .x {
        animation: ${x} 20s linear infinite alternate;
    }
    .y {
        animation: ${y} 10s linear infinite alternate;
    }
    
`;
