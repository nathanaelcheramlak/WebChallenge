import { FormProvider } from "./context/useForm";
import Sidebar from "./container/Sidebar";
import StepLayout from "./container/StepLayout";
import './App.css';

const App = () => {

  return (
    <FormProvider>
      <main>
        <div className="container">
          <Sidebar />
          <StepLayout />
        </div>
      </main>
    </FormProvider>
  );
}

export default App;