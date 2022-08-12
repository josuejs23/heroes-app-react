import { Route, Routes } from "react-router-dom"
import { DcPage, HereoesRoutes } from "../heroes"
import {LoginPage} from "../auth"
import { Navbar } from "../ui"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {
  return (
    <>
    <Routes>

        <Route path='/login' element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        }/>

         {/* <Route path="login" element={<LoginPage />} /> */}

        <Route path='/*' element={
          <PrivateRoute>
            <HereoesRoutes/>
          </PrivateRoute>
        }
        />

    </Routes>
    </>
  )
}
