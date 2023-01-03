import { DcPage, MarvelPage, Navbar } from "../heroes"
import { LoginPage } from "../auth"
import { Navigate, Route, Routes } from "react-router-dom"

export const AppRouter = () => {
    return (
        <>
            <Navbar />
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

