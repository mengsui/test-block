import React from "react";
import styles from "./index.less";
import { Statistic, Row, Col, Button } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-statistic-demo-basic">
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Users" value={112893} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
          />
          <Button style={{ marginTop: 16 }} type="primary">
            Recharge
          </Button>
        </Col>
      </Row>
    </div>
  </div>
);
