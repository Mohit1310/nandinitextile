import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
