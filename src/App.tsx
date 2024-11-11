import Forms from "@eli/pages/Forms";
import { Route, Routes } from "react-router-dom";
import Notfound from "@eli/pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/NotFound" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
