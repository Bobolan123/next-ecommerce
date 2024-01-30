import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ApplyCV from './applyCV/ApplyCV';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Applied CV',
    children: <ApplyCV/>
  },
  {
    key: '2',
    label: 'Get job by Email',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Update Information',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Change Password',
    children: 'Content of Tab Pane 3',
  },
];

const TabsProfileModel: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default TabsProfileModel;