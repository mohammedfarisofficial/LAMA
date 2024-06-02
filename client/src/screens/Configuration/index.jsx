import "./style.scss";
//comp
import Title from "../../components/Title";
import InputBox from "../../components/InputBox";
import Tab from "../../components/Tab";
import DisplayTab from "../../components/Tabs/DisplayTab";
import GeneralTab from "../../components/Tabs/General";
import Breadcrumbs from "../../components/Breadcrumps";

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
      <Breadcrumbs />
      <Title title="Configuration" subTitle="Settings" />
      <Tab data={tabs} />
    </div>
  );
};

export default Configuration;
