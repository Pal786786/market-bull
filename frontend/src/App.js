import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IconPreview from "@/components/IconPreview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IconPreview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
