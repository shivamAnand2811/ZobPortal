
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import  Home  from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'


const appRouter =createBrowserRouter([
  {
    path:'/',
    element:<Home/>

  },
  {
    path:'/',
    element:<Home/>

  },
  {
    path:'/login',
    element:<Login/>

  },
  {
    path:'/signup',
    element:<Signup/>

  },
  {
    path:"/Jobs",
    element:<Jobs/>
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },

  {
    path:"/browse",
    element:<Browse/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },

   
])

function App() {
 

  return (
    <div>
      <RouterProvider router ={appRouter}/>
    </div>
  )
}

export default App
