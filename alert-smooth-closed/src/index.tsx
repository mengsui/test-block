import React, { useState } from "react";
import { Alert } from "antd";
import styles from "./index.less";

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div>
      {visible ? (
        <Alert
          message="Alert Message Text"
          type="success"
          closable
          afterClose={handleClose}
        />
      ) : null}
      <p>placeholder text here</p>
    </div>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-alert-demo-smooth-closed">
      <App />
    </div>
  </div>
);
