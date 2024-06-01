import "./style.scss";
//comp
import Title from "../../components/Title";
import Button from "../../components/Button";
import ProjectItem from "../../components/ProjectItem";
import InputBox from "../../components/InputBox";
//redux
import { useDispatch } from "react-redux";
import { openModel } from "../../state/reducers/modelSlice";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const DisplayBox = () => {
    return (
      <>
        <InputBox label="Enter Project Name:" />
        <InputBox error={false} label="Enter Project Name:" />
      </>
    );
  };
  const openModelHandler = () => {
    dispatch(openModel(DisplayBox));
  };
  return (
    <div className="projects-container">
      <div className="projects-back-btn">go to home</div>
      <Title
        RightItem={() => (
          <Button
            variant="dark"
            label="New Project"
            onClick={openModelHandler}
          />
        )}
      />
      <div className="projects-list">
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
        <ProjectItem onClick={() => navigate("/project/overview/upload")} />
      </div>
    </div>
  );
};

export default Projects;
