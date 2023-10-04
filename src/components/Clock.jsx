import React from "react";

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.tickID);
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }

    render(){
        return( 
            <div>
                <h1>Hello Clock</h1>
                <h2>it is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;