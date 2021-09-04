import React from "react";
import styles from "./index.less";
import { Popover, Button } from "antd";

class App extends React.Component {
  state = {
    visible: false
  };

  hide = () => {
    this.setState({
      visible: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };

  render() {
    return (
      <Popover
        content={<a onClick={this.hide}>Close</a>}
        title="Title"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
        <Button type="primary">Click me</Button>
      </Popover>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-popover-demo-control">
      <App />
    </div>
  </div>
);
