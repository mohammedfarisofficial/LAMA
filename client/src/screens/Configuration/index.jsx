import "./style.scss";
import { useState, useEffect, useMemo } from "react";
//comp
import Title from "../../components/Title";
import InputBox from "../../components/InputBox";
import Tab from "../../components/Tab";

const Configuration = () => {
  // input data
  const [chatbotName, setChatbotName] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("");

  // useEffect(() => {
  //   console.log(chatbotName, welcomeMsg, inputPlaceholder);
  // }, [chatbotName, welcomeMsg, inputPlaceholder]);

  const tabs = useMemo(
    () => [
      {
        id: 1,
        tabTitle: "General",
        title: "Title 1",
        Content: () => (
          <>
            <InputBox
              value={chatbotName}
              onChange={(e) => setChatbotName(e.target.value)}
              label="Chatbot Name"
              placeholder="Enter chatbot name..."
            />
            <InputBox
              value={welcomeMsg}
              onChange={(e) => setWelcomeMsg(e.target.value)}
              label="Welcome Message"
              placeholder="Enter welcome message..."
            />
            <InputBox
              value={inputPlaceholder}
              onChange={(e) => setInputPlaceholder(e.target.value)}
              label="Input Placeholder"
              placeholder="Enter input placeholder"
            />
          </>
        ),
      },
      {
        id: 2,
        tabTitle: "Display",
        title: "Title 2",
        Content: () => (
          <>
            <InputBox />
            <InputBox />
          </>
        ),
      },
      {
        id: 3,
        tabTitle: "Advanced",
        title: "Title 3",
        Content: () => (
          <>
            <InputBox />
            <InputBox />
          </>
        ),
      },
    ],
    [chatbotName, welcomeMsg, inputPlaceholder]
  );
  // const tabs = [
  //   {
  //     id: 1,
  //     tabTitle: "General",
  //     title: "Title 1",
  //     Content: () => (
  //       <>
  //         <InputBox
  //           value={chatbotName}
  //           onChange={(e) => setChatbotName(e.target.value)}
  //           label="Chatbot Name"
  //           placeholder="Enter chatbot name..."
  //         />
  //         <InputBox
  //           value={welcomeMsg}
  //           onChange={(e) => setWelcomeMsg(e.target.value)}
  //           label="Welcome Message"
  //           placeholder="Enter welcome message..."
  //         />
  //         <InputBox
  //           value={inputPlaceholder}
  //           onChange={(e) => setInputPlaceholder(e.target.value)}
  //           label="Input Placeholder"
  //           placeholder="Enter input placeholder"
  //         />
  //       </>
  //     ),
  //   },
  //   {
  //     id: 2,
  //     tabTitle: "Display",
  //     title: "Title 2",
  //     Content: () => (
  //       <>
  //         <InputBox />
  //         <InputBox />
  //       </>
  //     ),
  //   },
  //   {
  //     id: 3,
  //     tabTitle: "Advanced",
  //     title: "Title 3",
  //     Content: () => (
  //       <>
  //         <InputBox />
  //         <InputBox />
  //       </>
  //     ),
  //   },
  // ];
  return (
    <div className="configuration-container">
      <Title title="Configuration" />
      <Tab data={tabs} />
    </div>
  );
};

export default Configuration;
