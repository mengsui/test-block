import React from "react";
import styles from "./index.less";
import { Tag, Button } from "antd";

class Demo extends React.Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div>
        <Tag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </Tag>
        <br />
        <Button
          size="small"
          onClick={() => this.setState({ visible: !this.state.visible })}
        >
          Toggle
        </Button>
      </div>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-tag-demo-controlled">
      <Demo />
    </div>
  </div>
);
