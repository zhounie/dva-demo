import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';
import { Button, Layout, Menu, Breadcrumb, Table, Form, Input } from 'antd'
import { Link } from 'dva/router'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LockOutlined
} from '@ant-design/icons';


const { Header, Sider, Content} = Layout
function IndexPage(props) {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  };

  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}
          style={{
            overflow: 'auto',
            height: '100vh'
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/'>首页</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to='/userManage'>用户管理</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles['trigger'],
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '0 16px',
              maxHeight: 'calc(100vh - 64px - 24px)',
              boxSizing: 'border-box'
            }}
          >
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className={styles['content_wrap']}
              style={{
                padding: 24,
                height: 'calc(100% - 32px - 22px)',
                overflow: 'auto',
                boxSizing: 'border-box'
              }}>
                {props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
  )
}


export default connect()(IndexPage);
