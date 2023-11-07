import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"

import Main from "./pages/www/Main"
import Login from "./pages/www/Login"
import Signup from "./pages/www/Signup"
import Cabinet from "./pages/app/Cabinet"
import Support from "./pages/app/Support"
import News from "./pages/app/News"
import Schedule from "./pages/app/Schedule"
import Error from "./pages/Error"
import Documents from "./pages/app/Documents"

import AppLayout from "./layouts/AppLayout"

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path="/">
      <Route index element={<Main/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>

      <Route path="app">

      <Route path="student" element={<AppLayout type="student"/>}>
        <Route path="cabinet" element={<Cabinet/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="news" element={<News/>}/>
        <Route path="schedule" element={<Schedule/>}/>
      </Route>

      <Route path="dweller" element={<AppLayout type="dweller"/>}>
        <Route path="cabinet" element={<Cabinet/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="news" element={<News/>}/>
        <Route path="schedule" element={<Schedule/>}/>
        <Route path="documents" element={<Documents/>}/>
      </Route>

      </Route>

      <Route path="*" element={<Error/>} />
    </Route>
  ))
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
