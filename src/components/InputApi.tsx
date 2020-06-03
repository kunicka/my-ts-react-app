import React, { Component } from 'react';

export interface InputApiProps {}

export interface InputApiState {
  text: string;
  // TIP something ?: string to to samo co something: string | undefined
  // meaning it could be undefined / is nullable :P
  error?: string;
}

export class InputApi extends Component<InputApiProps, InputApiState> {
  state: InputApiState = {
    text: 'w tym roku pokonalismy krzyzakow',
    error: undefined,
  };

  // TIP: THIS IS THE WAY to type events
  // you can hover on onChange in eg. `<input onChange={this.handleDateChange} type="text" ref="numer" />`
  // to lookup what was the type
  handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // const value = this.refs.numer.vaule;
    fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error(res.statusText);
      })

      .then((res) => res.json())
      .then((data) =>
        this.setState({
          text: data.title,
        })
      )
      .catch((err) => console.log(err));

    this.setState({ text: 'Jest Problem :(' });
  };

  render() {
    return (
      <div>
        <h3>Api</h3>
        <div className="div-container">
          <input onChange={this.handleDateChange} type="text" ref="numer" />
          <p>Wpisz od 1 do 100: {this.state.text}</p>
        </div>
      </div>
    );
  }
}
