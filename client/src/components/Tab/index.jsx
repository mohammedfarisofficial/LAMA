import "./style.scss";
import { useState } from "react";
const Tab = ({ data }) => {
  const [currentTab, setCurrentTab] = useState("1");

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  return (
    <div className="container">
      <div className="tabs">
        {data.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {data.map(({ id, Content }, i) => (
          <div key={i}>
            {currentTab === `${id}` && (
              <div className="tab-body">
                <Content />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
