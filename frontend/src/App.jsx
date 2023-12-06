import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"

import Main from "./pages/www/Main"
import Login from "./pages/www/Login"
import Signup from "./pages/www/Signup"
import StudentCabinet from "./pages/app/StudentCabinet"
import ResidentCabinet from "./pages/app/ResidentCabinet"
import Support from "./pages/app/Support"
import Contacts from "./pages/app/Contacts"
import Error from "./pages/Error"
import Documents from "./pages/app/Documents"
import Permit from "./pages/app/Permit"
import StudentSchedule from "./pages/app/StudentSchedule"
import ResidentSchedule from "./pages/app/ResidentSchedule"
import ProtectedRoute from "./components/app/ProtectedRoute"
import NotAllowed from "./pages/app/NotAllowed"

import AppLayout from "./layouts/AppLayout"

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path="/">
      <Route index element={<Main/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>

      <Route path="app" element={<ProtectedRoute/>}>

      <Route path="student" element={<AppLayout type="student"/>}>
        <Route path="cabinet" element={<StudentCabinet/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="contacts" element={<Contacts type="student"/>}/>
        <Route path="schedule" element={<StudentSchedule/>}/>
      </Route>

      <Route path="resident" element={<AppLayout type="resident"/>}>
        <Route path="cabinet" element={<ResidentCabinet />}/>
        <Route path="support" element={<Support/>}/>
        <Route path="contacts"  element={<Contacts type="resident"/>}/>
        <Route path="schedule" element={<ResidentSchedule/>}/>
        <Route path="documents" element={<Documents/>}/>
        <Route path="permit" element={<Permit/>}/>
      </Route>

      <Route path="not-allowed" element={<NotAllowed/>}/>

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
