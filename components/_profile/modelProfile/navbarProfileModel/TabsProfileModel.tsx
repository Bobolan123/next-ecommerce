import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import ApplyCV from './applyCV/ApplyCV';
import ChangePassword from './changePassword/changePassword';
import GetJobBySkills from './getJobEmail/getJobBySkills';

const onChange = (key: string) => {
  
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
    children: <GetJobBySkills/>,
  },
  {
    key: '3',
    label: 'Update Information',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Change Password',
    children: <ChangePassword/>,
  },
];

const TabsProfileModel: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default TabsProfileModel;