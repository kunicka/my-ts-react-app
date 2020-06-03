import React, { Component } from 'react';

export interface TimerProps {}

export interface TimerState {
  date: Date;
}

export class Timer extends Component<TimerProps, TimerState> {
  // TIP: provide type for state with ttype annotation like that
  // TIP: what is after "=" is your inital state and n general is jsut default property
  state: TimerState = {
    date: new Date(),
  };

  // FIXME: NodeJS type does not look good in frontend but that how setInterval is type
  timerID: NodeJS.Timeout;

  /*
    TIP: constructor is not required if you use modern "class fields"

    constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
*/

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillMount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h3>Co sekundę: {this.state.date.toLocaleString()}</h3>
      </div>
    );
  }
}
