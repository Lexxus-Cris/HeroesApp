import React from 'react'
import { Navbar } from '../components'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />

                    {/* Search, Hero by id */}
                    <Route path='search' element={<SearchPage />} />
                    {/* Se agrega el param a nuestra url */}
                    <Route path='hero/:heroId' element={<HeroPage />} />

                    {/* Redireccionamiento si se encuentra en / */}
                    <Route path='/' element={<Navigate to='/marvel' />} />
                </Routes>
            </div>
        </>
    )
}
