import React, { useState } from 'react';
import { PoweroffOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Space, DatePicker, version } from 'antd';

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
    <div style={{ padding: '0 24px' }}>
      <h1>antd version: {version}</h1>
      <Space>
        {/* <DatePicker /> */}
        <Button
          type="primary"
          block
          onClick={onButtonClick}
          loading={loading}
          className="primary-button"
          icon={<PoweroffOutlined />}
          style={{ backgroundColor: 'skyBlue' }}
        >
          Primary Button
        </Button>
      </Space>
    </div>
  );
};

export default App;
