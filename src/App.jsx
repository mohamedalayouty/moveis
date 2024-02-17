import React from 'react';
import Header from './Pages/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { jwtDecode } from "jwt-decode";



const App = () => {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGJhNjczMjRmMDk4Y2NlMWJkOGZkNmJjNmQ3MzUyZiIsInN1YiI6IjY1YzI5YTFhOGUyZTAwMDE4M2E0ZWQ4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey3zKy0IXKuluJIKI0ggzQvrg8u1CHnMSpATKdvMd2w"
    const decode = jwtDecode(token);
    console.log(decode)
return (
    <>
    <Header />
    <Routes>
        <Route path='/' element = {<Home />} />
    </Routes>
    </>
)
}

export default App;