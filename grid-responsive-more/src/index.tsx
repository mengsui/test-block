import React from "react";
import styles from "./index.less";
import { Row, Col } from "antd";

export default () => (
  <div className={styles.container}>
    <div id="components-grid-demo-responsive-more">
      <Row>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          Col
        </Col>
      </Row>
    </div>
  </div>
);
