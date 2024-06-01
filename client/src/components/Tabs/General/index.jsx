import { useState, useEffect } from "react";
import InputBox from "../../InputBox";

const GeneralTab = () => {
  const [chatbotName, setChatbotName] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("");

  return (
    <>
      <InputBox
        value={chatbotName}
        setValue={setChatbotName}
        label="Chatbot Name"
        placeholder="Enter chatbot name..."
      />
      <InputBox
        value={welcomeMsg}
        setValue={setWelcomeMsg}
        label="Welcome Message"
        placeholder="Enter welcome message..."
      />
      <InputBox
        value={inputPlaceholder}
        setValue={setInputPlaceholder}
        label="Input Placeholder"
        placeholder="Enter input placeholder"
      />
    </>
  );
};

export default GeneralTab;
