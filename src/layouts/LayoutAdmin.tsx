import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;



type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem( <Link to={`/admin/products`}>Sản phẩm</Link> , 'sub1', <PieChartOutlined />, [getItem(<Link to={`/admin/products`}>Tất cả sản phẩm</Link>, '1'), getItem(<Link to={`/admin/products/add`}>Thêm sản phẩm</Link>, '2')]),
  getItem( <Link to={`/admin/products`}>Tài khoản</Link> , 'sub2', <UserOutlined />, [getItem(<Link to={`/admin/products`}>Tất cả tài khoản</Link>, '3'), getItem(<Link to={`/admin/products/add`}>Thêm tài khoản</Link>, '4')]),
  getItem( <Link to={`/`}>Website người dùng</Link> , '5', <TeamOutlined />)
  
];

const LayoutAdmin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>ADMIN DASHBOARD</Breadcrumb.Item>
            
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

            {/* Chức năng CRUD */}
            <Outlet/>


          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
