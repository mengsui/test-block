import React from "react";
import styles from "./index.less";
import { message, Button } from "antd";

const success = () => {
  message
    .loading("Action in progress..", 2.5)
    .then(() => message.success("Loading finished", 2.5))
    .then(() => message.info("Loading finished is finished", 2.5));
};

export default () => (
  <div className={styles.container}>
    <div id="components-message-demo-thenable">
      <Button onClick={success}>Display sequential messages</Button>
    </div>
  </div>
);
