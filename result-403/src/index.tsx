import React from "react";
import styles from "./index.less";
import { Result, Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-result-demo-403">
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
    </div>
  </div>
);
