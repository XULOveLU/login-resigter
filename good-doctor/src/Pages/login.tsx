import {Row,Col,Card,Form,Input,Button, message,Checkbox} from 'antd'
import logo from '../assets/login.png'
import {useNavigate,NavLink,} from 'react-router-dom'
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

interface userInfo {
    username: string;
    password: string;
    remember: boolean;
  }
  interface User {
    email: string;
    password: string;
  }
  const USER_EMAIL = gql`
    query GetUserByEmail($email: String!) {
      getUserByEmail(email: $email) {
        email
        password
      }
    }
  `;
const Login: React.FC = () => {
    const navigate = useNavigate()
    
    const [user, setUser] = useState<User>({ email: "", password: "" });
    const { data } = useQuery(USER_EMAIL, {
      skip: !user.email,
      variables: { email: user.email },
    });
  
    //处理成功登录后的函数
    const onFinish = (values: userInfo) => {
      console.log(data);
      console.log(user);
      if (data.getUserByEmail) {
        //账号存在
        const currUser = data.getUserByEmail;
        if (
          currUser.email === user.email &&
          currUser.password === user.password
        ) {
          alert("登录成功！");
          navigate('admin')
        } else {
          alert("登陆失败！");
        }
      } else {
        alert("账号不存在！");
      }
    };
    //处理失败登录后的函数
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
      alert(`登陆失败！你再检查一下信息呢？`);
    };
    return (
        <div className="loginForm">
           <Row>
          <Col
          md={{
              span:8,
              push:8
          }}
          xs={{
              span:22,
              push:1,
          }}
          >
              <img src={logo} alt="" style={{
                  display:'block',
                  margin:'20px auto',
                  borderRadius:'16px',
                  width:'200px'
                  }}/>
                <Card title="阿龙的学习仓库">
                  <Form labelCol={{
                      md:{
                          span:4
                      }
                  }}
                  className="kyzr-form"
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={
                    onFinish
                    
                    // navigate('/admin/dashboard')
                  }
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  >
                      <Form.Item label="用户名"
                      name="username"
                      rules={[
                          {
                            required:true,
                            message:'请输入用户名'
                          }
                      ]}
                      >
                          <Input placeholder="请输入用户名"
                            onChange={(e) => {
                                setUser({ ...user, email: e.target.value });
                              }}
                          />
                      </Form.Item >
                      <Form.Item label="密码"
                      name="password"
                      rules={[
                        {
                          required:true,
                          message:'请输入密码'
                        }
                    ]}>
                          <Input.Password placeholder="请输入密码"
                            onChange={(e) => {
                                setUser({ ...user, password: e.target.value });
                              }}
                          />
                          
                      </Form.Item>

                      <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>
                  
                  <Button type="primary" htmlType="submit" style={{
                      display:'block',
                      margin:'8px auto',
                      width:'10vw'
                  }}>登入 </Button>
                  
                  
                  </Form>
                  <Button type="primary" style={{display:'block',
                      margin:'8px auto ',
                      width:'10vw'}}> <NavLink to="Register" >注册</NavLink></Button>
                 
                 
                </Card>
          </Col>
      </Row>
        </div>
      );
    };



export default Login;
