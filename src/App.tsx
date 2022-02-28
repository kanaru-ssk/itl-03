// React Router取得
import { BrowserRouter, Route, Routes } from "react-router-dom";

// コンポーネント取得
import Home from "./view/Home";
import User from "./view/User";

// ルーティング
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:uid" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
