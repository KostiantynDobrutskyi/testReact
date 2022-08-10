import React from "react";
import './scss/app.scss';
import {Routes, Route} from "react-router-dom";
import {Header} from "./Components/Header/Header";
import Catalog from "./pages/Catalog";
import NotFound from "./pages/notFound";
import Cart from "./pages/Cart";


function App() {
    const [searchResult, setSearchResult] = React.useState('');

    return (
        <div className="wrapper">
            <Header setSearchResult={setSearchResult} searchResult={searchResult} />
            <div className="content">
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Catalog searchResult={searchResult} />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
