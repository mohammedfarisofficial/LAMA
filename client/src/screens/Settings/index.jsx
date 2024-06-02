import "./style.scss";
import { useState } from "react";
//comp
import Title from "../../components/Title";
import Badge from "../../components/Badge";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumps";
import InputBox from "../../components/InputBox";

const Settings = () => {
  const [username, setUsername] = useState("alphauser");
  const [email, setEmail] = useState("alphauser@email.com");
  return (
    <div className="settings-container">
      <Breadcrumbs />
      <Title title="Account Settings" />
      <div className="settings-inner">
        <div className="settings-profile">
          <img
            src="https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="settings-profile"
          />
        </div>
        <div className="settings-input-container">
          <InputBox
            value={username}
            setValue={setUsername}
            label="User name"
            placeholder="Enter user  name..."
          />
          <InputBox
            value={email}
            setValue={setEmail}
            label="Email"
            placeholder="Enter email..."
          />
        </div>
      </div>
      <Title title="Subscriptions" />
      <Badge>
        <h4>
          You are currently on the{" "}
          <span style={{ fontSize: "400", textDecoration: "underline" }}>
            Ques AI Basic plan!
          </span>
        </h4>
        <Button label="Try it out!" onClick={() => alert("Button Clicked!")} />
      </Badge>
      <Button variant="cancel" label="Cancel Subscription" />
    </div>
  );
};

export default Settings;
