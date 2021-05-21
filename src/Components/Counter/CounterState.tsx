import { State, Props } from "./interface";
import React from "react";
import "./Style.css";

class CounterState extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //   changeValue = (value: string) => {
  //     if (value === "ADD") {
  //       this.setState((prevState) => ({ count: prevState.count + 1 }));
  //     } else {
  //       this.setState((prevState) => ({ count: prevState.count - 1 }));
  //     }
  //   };

  changeValue(value: string): void {
    if (value === "ADD") {
      this.setState(
        (prevState) => ({ count: prevState.count + 1 }),
        () => {
          console.log(value);
        }
      );
    } else {
      this.setState(
        (prevState) => ({ count: prevState.count - 1 }),
        () => {
          console.log(value);
        }
      );
    }
  }

  changeValueDefault = (): void => {
    this.setState(
      (prevState) => ({ count: 0 }),
      () => {
        console.log("Default Value");
      }
    );
  };

  render() {
    return (
      <>
        <h1>{this.props.heading}</h1>
        <span>{this.state.count}</span>
        <button onClick={() => this.changeValue("ADD")}>Add</button>
        <button onClick={() => this.changeValue("DEC")}>Subtract</button>
        <button onClick={this.changeValueDefault}>Default</button>
      </>
    );
  }
}

export default CounterState;
