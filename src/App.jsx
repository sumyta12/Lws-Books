import "./../public/styles/style.css";
import AddPage from "./Component/AddPage/AddPage";
import Home from "./Component/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./App/Store";
import EditLayout from "./Component/EditLayout/EditLayout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditLayout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
