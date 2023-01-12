import "./App.css";
import ReactDOM from "react-dom/client";
import Routing from "./pages/routing";

export default function App() {
  return (
    <div>
      <Routing></Routing>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
