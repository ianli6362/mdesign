import React from "react";

class ProgressRing extends React.Component {
    constructor(props) {
        super(props);

        const { radius, stroke } = this.props;

        this.normalizedRadius = radius - stroke * 2;
        this.circumference = this.normalizedRadius * 2 * Math.PI;
    }

    render() {
        const { radius, stroke, progress } = this.props;

        const strokeDashoffset = this.circumference - progress / 100 * this.circumference;

        return (
            <svg
                height={radius * 2}
                width={radius * 2}
            >
                <circle
                    stroke="white"
                    fill="transparent"
                    strokeWidth={ stroke }
                    strokeDasharray={ this.circumference + ' ' + this.circumference }
                    style={ { strokeDashoffset } }
                    strokeWidth={ stroke }
                    r={ this.normalizedRadius }
                    cx={ radius }
                    cy={ radius }
                />
            </svg>
        );
    }
}

class Circle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0
        };
    }

    componentDidMount() {
        // emulating progress
        setTimeout(()=>{
            const interval = setInterval(() => {
                this.setState({ progress: this.state.progress + 1 });
                if (this.state.progress === 100)
                    clearInterval(interval);
            }, 10);
        }, 2400);
    }

    render() {

        const {opacity, left, top} = this.props;
        return (
            <div style={{
                opacity,
                left,
                top,
                position: 'absolute',
                zIndex: 40
            }}>
                <ProgressRing
                    radius={ 18 }
                    stroke={ 1 }
                    progress={ this.state.progress }
                />
            </div>
        );
    }
}

export default Circle;