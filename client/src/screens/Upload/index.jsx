import "./style.scss";
// redux
import { useDispatch } from "react-redux";
import { openModel } from "../../state/reducers/modelSlice";
// comp
import Title from "../../components/Title";
import ProjectItem from "../../components/ProjectItem";
import InputBox from "../../components/InputBox";

const Upload = () => {
  const dispatch = useDispatch();

  const renderModel = () => {
    return (
      <>
        <InputBox label="Name" placeholder="Enter name" />
        <InputBox label="Link" placeholder="Past Link" />
      </>
    );
  };

  const uploadModelHanlder = () => {
    dispatch(openModel(renderModel));
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
    </div>
  );
};

export default Upload;
