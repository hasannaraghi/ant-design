import React from 'react';
/*
 * version: 4.19.0
 */

import { Space, TreeSelect } from 'antd';

const App: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }}>
    <TreeSelect status="error" style={{ width: '100%' }} placeholder="Error" />
    <TreeSelect
      status="warning"
      style={{ width: '100%' }}
      multiple
      placeholder="Warning multiple"
    />
  </Space>
);

export default App;
