import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"

import Main from "./pages/www/Main"
import Login from "./pages/www/Login"
import Signup from "./pages/www/Signup"
import Cabinet from "./pages/app/Cabinet"
import Support from "./pages/app/Support"
import News from "./pages/app/News"
import Error from "./pages/Error"
import Documents from "./pages/app/Documents"
import Permit from "./pages/app/Permit"
import StudentSchedule from "./pages/app/StudentSchedule"
import DwellerSchedule from "./pages/app/DwellerSchedule"
import ProtectedRoute from "./components/app/ProtectedRoute"

import AppLayout from "./layouts/AppLayout"

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path="/">
      <Route index element={<Main/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>

      <Route path="app" element={<ProtectedRoute/>}>

      <Route path="student" element={<AppLayout type="student"/>}>
        <Route path="cabinet" element={<Cabinet type="student"/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="news" element={<News type="student"/>}/>
        <Route path="schedule" element={<StudentSchedule/>}/>
      </Route>

      <Route path="dweller" element={<AppLayout type="dweller"/>}>
        <Route path="cabinet" element={<Cabinet type="dweller" />}/>
        <Route path="support" element={<Support/>}/>
        <Route path="news"  element={<News type="dweller"/>}/>
        <Route path="schedule" element={<DwellerSchedule/>}/>
        <Route path="documents" element={<Documents/>}/>
        <Route path="permit" element={<Permit/>}/>
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
