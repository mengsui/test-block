import React from "react";
import styles from "./index.less";
import { Checkbox, Row, Col } from "antd";

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

export default () => (
  <div className={styles.container}>
    <div id="components-checkbox-demo-layout">
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          <Col span={8}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </div>
  </div>
);
