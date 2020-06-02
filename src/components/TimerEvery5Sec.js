import React, { Component } from 'react'

export class TimerEvery5Sec extends Component {
    constructor(props){
        super(props)
        this.state={
            date: new Date()
        }
    }

        tick(){
            this.setState({ 
                date: new Date()
            })
        }

        componentDidMount(){
            this.timerID=setInterval(()=>this.tick(),5000)
        }

        componentWillMount(){
            clearInterval(this.timerID)
        }
    
    render() {
        return (
            <div>
                <h3>Co 5 sekund: {this.state.date.toLocaleString()}</h3>
            </div>
        )
    }
}

export default TimerEvery5Sec
