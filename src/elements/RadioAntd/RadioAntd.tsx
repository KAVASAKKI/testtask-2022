import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Space } from "antd";
import styles from "./RadioAntd.module.scss";

export const RadioAntd: React.FC = () => {
  const [value, setValue] = useState("Frontend developer");

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group name='pos' onChange={onChange} value={value}>
      <Space direction='vertical'>
        <Radio className={styles.RadioBtn} value='Frontend developer'>
          Frontend developer
        </Radio>
        <Radio className={styles.RadioBtn} value='Backend developer'>
          Backend developer
        </Radio>
        <Radio className={styles.RadioBtn} value='Designer'>
          Designer
        </Radio>
        <Radio className={styles.RadioBtn} value='QA'>
          QA
        </Radio>
      </Space>
    </Radio.Group>
  );
};
