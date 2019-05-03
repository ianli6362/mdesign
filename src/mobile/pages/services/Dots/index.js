import React from "react";
import styled from 'styled-components';
import posed from 'react-pose';


const active = {
    width: '10px',
    height: '10px',
    backgroundColor: '#313131'
};

const inactive = {
    width: '6px',
    height: '6px',
    backgroundColor: '#D8D8D8'
};

class Dots extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const {className} = this.props;

        const kk = [0,1,2,3,4];

        return (
            <div className={className} >
                {
                    kk.map((i)=>{
                        if(this.props.active === i) {
                            return <div key={i} className="dot" style={active}></div>
                        } else {
                            return <div key={i} className="dot" style={inactive}></div>
                        }
                    })
                }
            </div>
        );
    }
}

export default styled(Dots)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    margin-top: 14px;
    height: 100%;
    
    & .dot {
        display: flex;
        border-radius: 50%; 
        margin-left: 6px;
    }
`;