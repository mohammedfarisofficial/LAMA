import "./style.scss";
import { useRef, useState, useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
import { closeModel, openModel } from "../../state/reducers/modelSlice";
// constants
import { tableHeaders } from "../../contants/links";
// comp
import Title from "../../components/Title";
import ProjectItem from "../../components/ProjectItem";
import InputBox from "../../components/InputBox";
import Navbar from "../../components/Navbar";
import Divition from "../../components/Division";
import FilePicker from "../../components/FilePicker";
import Table from "../../components/Table";
import Badge from "../../components/Badge";
import Button from "../../components/Button";

const Upload = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();

  const nameRef = useRef(name);
  const descRef = useRef(desc);

  useEffect(() => {
    nameRef.current = name;
    descRef.current = desc;
  }, [name, desc]);

  const uploadHandler = () => {
    console.log("name: ", nameRef.current);
    console.log("desc: ", descRef.current);
  };

  const RenderModel = () => {
    return (
      <>
        <InputBox
          onChange={(e) => setName(e.target.value)}
          label="Name"
          placeholder="Enter name..."
        />
        <InputBox
          onChange={(e) => setDesc(e.target.value)}
          label="Description"
          placeholder="Enter description..."
        />
      </>
    );
  };

  const closeModelHanlder = () => {
    dispatch(closeModel());
  };
  const uploadModelHanlder = () => {
    dispatch(
      openModel({
        isOpen: true,
        children: <RenderModel />,
        title: "Upload from youtube",
        logo: null,
        onAction: () => {
          uploadHandler();
          closeModelHanlder();
        },
        actionLabel: "Upload",
        actionVariant: "primary",
      })
    );
  };
  return (
    <div className="upload-container">
      <Title title="Upload" />
      <div className="upload-list">
        <ProjectItem onClick={uploadModelHanlder} />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
      {/* <Divition /> */}
      {/* <FilePicker /> */}
      <Badge>
        <h4>All files are processed! Your widget is ready to go!</h4>
        <Button label="Try it out!" onClick={() => alert("Button Clicked!")} />
      </Badge>
      <Table headers={tableHeaders} />
    </div>
  );
};

export default Upload;
