import "./style.scss";
//comp
import Title from "../../components/Title";
import InputBox from "../../components/InputBox";
import Tab from "../../components/Tab";
import DisplayTab from "../../components/Tabs/DisplayTab";
import GeneralTab from "../../components/Tabs/General";

const Configuration = () => {
  // input data
  const tabs = [
    {
      id: 1,
      tabTitle: "General",
      Content: <GeneralTab />,
    },
    {
      id: 2,
      tabTitle: "Display",
      Content: <DisplayTab />,
    },
    {
      id: 3,
      tabTitle: "Advanced",
      Content: () => (
        <>
          <InputBox />
          <InputBox />
        </>
      ),
    },
  ];
  return (
    <div className="configuration-container">
      <Title
        title="Widget Configuration"
        subTitle="Settings"
      />
      <Tab data={tabs} />
    </div>
  );
};

export default Configuration;
