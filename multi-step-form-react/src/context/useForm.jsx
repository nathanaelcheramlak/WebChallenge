import { useContext, createContext, useState } from "react";
import PropTypes from 'prop-types';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [personal, setPersonal] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [isMonthly, setIsMonthly] = useState(true);
    const [plan, setPlan] = useState('arcade');
    const [services, setServices] = useState([]);

    const handleNextStep = () => {
        if (step === 5) {
            console.log("Personal: ", personal);
            console.log("Plan: ", plan);
            console.log("Monthly: ", isMonthly);
            console.log("Services: ", services);
            return;
        }
        setStep((prev) => prev + 1);
    };

    const handlePrevStep = () => {
        if (step === 1) return;
        setStep((prev) => prev - 1);
    };

    const handleMonthly = () => {
        setIsMonthly((prev) => !prev);
    };

    const handlePlan = (newPlan) => {
        setPlan(newPlan);
    };

    const handlePersonal = (e) => {
        const { name, value } = e.target;
        setPersonal((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <FormContext.Provider value={{
            step, setStep,
            personal, setPersonal,
            isMonthly, setIsMonthly,
            plan, setPlan,
            services, setServices,
            handleNextStep, handlePrevStep, handleMonthly, handlePlan, handlePersonal
        }}>
            {children}
        </FormContext.Provider>
    );
};

FormProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useForm = () => useContext(FormContext);
