import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Browse } from "./pages/Browse";
import { Navbar } from "./components/Navbar";
import { FriendBar } from "./components/FriendBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Browse />} />
      </Routes>
      <FriendBar />
    </div>
  );
}

export default App;
