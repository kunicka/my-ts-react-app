import React, { Component } from 'react'

class Timer extends Component {
    constructor(props){
        super(props);
        this.state={date: new Date()}
    }
   
    tick(){
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(),1000)
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }
    render() {
        return (
            <div>
                <h3>Co sekundę: {this.state.date.toLocaleString()}</h3>
            </div>
        )
    }
}

export default Timer
