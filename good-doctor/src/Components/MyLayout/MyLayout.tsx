import logo from '../../assets/logo1.png'
import images from '../../assets/images.jpg'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    WeiboOutlined 
  } from '@ant-design/icons';
  import { Layout, Menu,Dropdown, message} from 'antd';
  import React, { useState } from 'react';
  import {useNavigate} from 'react-router-dom'
  const { Header, Sider, Content } = Layout;
  
  const MyLayout: React.FC = ({ children }: any) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    return (
      <Layout
      style={{ width: '100vw', height: '100vh' }}
      id='components-layout-demo-custom-trigger'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" >
          
          <img src={logo} alt='好大夫' />
        </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={({key})=>{
              navigate(key)
            }}
            items={[
              {
                key: '/admin/dashboard',
                icon: <WeiboOutlined />,
                label: '首页',
              },
              {
                key: '/admin/medicine',
                icon: <VideoCameraOutlined />,
                label: '项目管理',
                children:[{
                  label:'项目分类',
                  key:'/admin/medicine/categories'
                },
                {
                  label:'项目信息',
                  key:'/admin/medicine/list'
                }
                  
                ]
              },
              {
                key: '/admin/articles',
                icon: <UploadOutlined />,
                label: '文章管理',
                children:[{
                  label:'文章分类',
                  key:'/admin/articles/categories'
                },
                {
                  label:'文章信息',
                  key:'/admin/articles/list'
                }
                ]
              },
              {
                key: '/admin/user',
                icon: <UserOutlined />,
                label: '我的'
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout">
        
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            <span className='app-title'>学习管理平台</span>
          <Dropdown
            overlay={
              <Menu
              onClick={({key})=>{
              switch(key){
                case "logOut":
                  navigate('/');
                  break;
                case "userCenter":
                  message.info('尚未开通');
                  break;
                case "register":
                  navigate('/register')
                  break;
              }
              }}
              items={[
                {
                  label:'个人中心',
                  key:'userCenter'
                },
                {
                  label:'退出',
                  key:'logOut'
                },{
                  label:'注册',
                  key:'register'
                },
              ]}
              />
            }
          >
            <img src={images} style={{
                width: '30px',
                borderRadius: '50%',
                float: 'right',
                marginTop: '16px',
                marginRight: '20px',
              }}/>
          </Dropdown>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
             {children}
          </Content>
        </Layout>
      </Layout>
    );
  };
  
  export default MyLayout;