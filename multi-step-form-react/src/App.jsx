import { useState } from "react";
import Sidebar from "./container/Sidebar";
import StepLayout from "./container/StepLayout";
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);

  return (
    <main>
      <div className="container">
        <Sidebar />
        <StepLayout />
      </div>
    </main>
  );
}

export default App;