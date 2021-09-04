import React from "react";
import styles from "./index.less";
import { TimePicker } from "antd";
import moment from "moment";

export default () => (
  <div className={styles.container}>
    <div id="components-time-picker-demo-size">
      <div>
        <TimePicker
          defaultValue={moment("12:08:23", "HH:mm:ss")}
          size="large"
        />
        <TimePicker defaultValue={moment("12:08:23", "HH:mm:ss")} />
        <TimePicker
          defaultValue={moment("12:08:23", "HH:mm:ss")}
          size="small"
        />
      </div>
    </div>
  </div>
);
