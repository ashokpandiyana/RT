import { State, Props } from "./interface";
import React from "react";
import "./Style.css";

class CounterState extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    console.log("getDerivedStateFromProps");
    return null;
  }

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

  componentDidMount() {
    console.log("Component Did Mount");
  }

  shouldComponentUpdate(nextprops: Props, nextstate: State): boolean {
    console.log("Should Component Update", nextprops, nextstate);
    if (nextprops !== this.props || nextstate !== this.state) {
      return true;
    }
    return false;
  }

  getSnapshotBeforeUpdate(nextprops: Props, nextstate: State): boolean {
    console.log("get snapshot before update", nextprops, nextstate);
    if (nextprops !== this.props || nextstate !== this.state) {
      this.forceUpdate();
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    console.log("Component Updated");
  }

  render() {
    console.log("Render");
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
