import React, { Component } from 'react';

export interface TimerEvery5SecProps {}

export interface TimerEvery5SecState {
  date: Date;
}

export class TimerEvery5Sec extends Component<TimerEvery5SecProps, TimerEvery5SecState> {
  state = {
    date: new Date(),
  };

  // FIXME: NodeJS type does not look good in frontend but that how setInterval is type
  timerID: NodeJS.Timeout;

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h3>Co 5 sekund: {this.state.date.toLocaleString()}</h3>
      </div>
    );
  }
}
