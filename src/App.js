import React, { useState } from 'react';
import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';
import { Select, Input, Button, Space, DatePicker, version } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const App = () => {
  const fruits = ['banana', 'apple', 'orange', 'mango'];

  const options = fruits.map((fruit) => ({
    label: fruit,
    value: fruit,
  }));

  return (
    <div style={{ padding: '24px' }}>
      <Select
        mode="multiple"
        placeholder="what are you favorite fruits?"
        style={{ width: 170 }}
        options={options}
        allowClear
      />
    </div>
  );
};

export default App;
