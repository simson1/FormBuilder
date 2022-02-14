import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ViewForm from "./pages/ViewForm";
import CreateForm from "./pages/CreateForm";
import FormLink from "./pages/FormLink";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <AppRoutes />
      </Router>
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CreateForm />} />
      <Route path="/view" element={<ViewForm />} />
      <Route path="/form/:formId" element={<FormLink />} />
    </Routes>
  );
}

export default App;
