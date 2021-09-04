import React from "react";
import styles from "./index.less";
import { TimePicker } from "antd";

function onChange(time, timeString) {
  console.log(time, timeString);
}

export default () => (
  <div className={styles.container}>
    <div id="components-time-picker-demo-12hours">
      <div>
        <TimePicker use12Hours onChange={onChange} />
        <TimePicker
          use12Hours
          format="h:mm:ss A"
          onChange={onChange}
          style={{ width: 140 }}
        />
        <TimePicker use12Hours format="h:mm a" onChange={onChange} />
      </div>
    </div>
  </div>
);
