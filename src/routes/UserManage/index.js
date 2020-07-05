import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from '../IndexPage.less';
import { Button, Layout, Menu, Breadcrumb, Table, Form, Input } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LockOutlined
} from '@ant-design/icons';



const UserManage = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [form] = Form.useForm()
    const [, forceUpdate] = useState()
    useEffect(() => {
        forceUpdate({})
    }, [])
    const toggle = () => {
        setCollapsed(!collapsed)
    };
    const onFinish = values => {
        console.log('Finish:', values);
    };
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          width: 150,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          width: 150,
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push({
          key: i,
          name: `Edrward ${i}`,
          age: 32,
          address: `London Park no. ${i}`,
        });
      }
      
    return (
        <>
            <div className={styles['form_wrap']}>
                  <Form
                    form={form}
                    name="horizontal_login" layout="inline"
                    onFinish={onFinish}>
                    <Form.Item
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item shouldUpdate={true}>
                      {() => (
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={
                            !form.isFieldsTouched(true) ||
                            form.getFieldsError().filter(({ errors }) => errors.length).length
                          }
                        >
                          搜索
                        </Button>
                      )}
                    </Form.Item>
                    <Form.Item shouldUpdate={true}>
                      <Button>重置</Button>
                    </Form.Item>
                  </Form>
                </div>
                <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} scroll={{y: 1000}} />
        </>
    )
}

export default UserManage;