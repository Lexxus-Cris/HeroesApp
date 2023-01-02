import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { DcPage } from "../heroes/pages/DcPage"
import { MarvelPage } from "../heroes/pages/MarvelPage"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='marvel' element={<MarvelPage />} />
                <Route path='dc' element={<DcPage />} />

                <Route path='login' element={<LoginPage />} />
                {/* Redireccionamiento si se encuentra en / */}
                <Route path='/' element={<Navigate to='/marvel' />} />
            </Routes>
        </>
    )
}
