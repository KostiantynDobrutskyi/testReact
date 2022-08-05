import './scss/app.scss';
import {Header} from "./Components/Header/Header";
import {Toolbar} from "./Components/Toolbar/Toolbar";
import {Items} from "./Components/Catalog/Items";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <Toolbar/>
                    <Items/>
                </div>
            </div>
        </div>
    );
}

export default App;
