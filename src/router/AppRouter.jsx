import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { Route, Routes } from "react-router-dom"
import { PrivateRoute } from "../heroes/routes/PrivateRoute"

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path='login' element={<LoginPage />} />

                <Route element={<PrivateRoute />} >
                    <Route path='/*' element={<HeroesRoutes />}/>
                </Route>

                {/* <Route path='/*' element={<HeroesRoutes />} /> */}

            </Routes>
        </>
    )
}

