import React from "react";
import ReactDOM from "react-dom";
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={1100} />;
const Tablet = props => <Responsive {...props} minWidth={701} maxWidth={1100} />;
const Mobile = props => <Responsive {...props} maxWidth={700} />;

import DWeb from './desktop/index';
import MWeb from './mobile/index';
import TWeb from './tablet/index';

import './font.css';

class App extends React.Component {
    render(){
        return (
            <div>
                <Desktop>
                    <DWeb />
                </Desktop>
                <Tablet>
                    <TWeb />
                </Tablet>
                <Mobile>
                   <MWeb />
                </Mobile>
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById("app"));
