import MyLayout from './Components/MyLayout/MyLayout.js'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/dashboard.js';
import Users from './Pages/user.js';
import ArticleCategories from './Pages/articles/categories.js';
import ArticleList from './Pages/articles/list.js'
import MedicineCategories from './Pages/medicine/categories.js'
import MedicineList from './Pages/medicine/list.js'

function App() {
  return (
    <MyLayout >
      <Routes>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='user' element={<Users/>}/>
        <Route path='articles/list' element={<ArticleList/>}/>
        <Route path='articles/categories' element={<ArticleCategories/>}/>
        <Route path='medicine/list' element={<MedicineList/>}/>
        <Route path='medicine/categories' element={<MedicineCategories/>}/>

      </Routes>
    </MyLayout>
  )
}

export default App
