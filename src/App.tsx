import { Route, Routes } from "react-router";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { RoorLayout } from "./layout/RootLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RoorLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
