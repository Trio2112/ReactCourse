import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: "0",
    annualInvestment: "0",
    expectedReturn: "0",
    duration: "0",
  });

  // Function to handle input changes
  const handleInputChange = (event) => {
      const { name, value } = event.target;

      // Update the state with the new value
      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };

  
  return (
    <>
      <Header />
      <UserInput formData={formData} handleInputChange={handleInputChange} />
      {formData.duration && formData.duration > 0 && <Result formData={formData} />}
    </>
  )
}

export default App
