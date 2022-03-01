// React Router取得
import { BrowserRouter, Route, Routes } from "react-router-dom";

// コンポーネント取得
import Home from "./view/Home";
import User from "./view/User";
import Explore from "./view/Explore";

// ルーティング
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/:paramsUid" element={<User />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
