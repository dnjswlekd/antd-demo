import React, { useState } from 'react';
import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';
import { Input, Button, Space, DatePicker, version } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const App = () => {
  const [loading, setLoading] = useState(false);

  const onButtonClick = (e) => {
    console.log('click');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '24px' }}>
      <Input.Search
        placeholder="password"
        maxLength={10}
        type="password"
        prefix={<UserOutlined />}
        allowClear
      />
    </div>
  );
};

export default App;
