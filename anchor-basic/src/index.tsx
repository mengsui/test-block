import React from "react";
import styles from "./index.less";
import { Anchor } from "antd";

const { Link } = Anchor;

export default () => (
  <div className={styles.container}>
    <div id="components-anchor-demo-basic">
      <Anchor>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link
          href="#components-anchor-demo-basic"
          title="Basic demo with Target"
          target="_blank"
        />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    </div>
  </div>
);
