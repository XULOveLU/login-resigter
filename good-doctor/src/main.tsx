import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ConfigProvider} from 'antd'
import Login from './Pages/login'
import Register from './Pages/register'
import zhCN from 'antd/lib/locale/zh_CN';
import {HashRouter as Router,Routes,Route,} from 'react-router-dom'
import { RecoilRoot } from "recoil";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
<ApolloProvider client={client}>
<RecoilRoot>
 <Router>
  <ConfigProvider locale={zhCN}>
    <Routes>
      <Route path='/' element={<Login/>}/>
      
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin/*' element={<App/>}/>
    </Routes>
  </ConfigProvider>
  </Router>
</RecoilRoot>
</ApolloProvider>
)
