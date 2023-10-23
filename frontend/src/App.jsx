import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"

import Main from "./pages/www/Main"
import Login from "./pages/www/Login"

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path="/">
      <Route index element={<Main/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup"/>

      <Route path="app">
        <Route path="profile"/>
      </Route>
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
