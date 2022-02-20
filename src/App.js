import HomePage from "./pages/home/homepage.component";
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";


const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
        </div>
    )
}

function App() {
    return (
        <Routes>
            <Route exact path={'/'} element={<HomePage/>}/>
            <Route exact path='/shop/:type' element={<ShopPage/>}/>
            <Route exact path='*' element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
