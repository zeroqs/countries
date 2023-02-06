import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import {useEffect, useState} from "react";
import HomePage from "./pages/HomePage";
import Details from "./pages/Details.jsx";
import NotFound from "./pages/404";
import {useDispatch} from "react-redux";
import {fetchAllCountries} from "./store/slices/CountrieSlice.js";

function App() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAllCountries())
    }, []);


    return (
        <>
            <BrowserRouter>
                <Header/>
                <Main>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/country/:name" element={<Details/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </Main>

            </BrowserRouter>
        </>
    )
}

export default App
