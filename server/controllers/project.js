import Project from "../models/Project.js";

const createProject = async (req, res) => {
  const { projectName, data } = req.body;

  try {
    //create project

    const newProject = new Project({
      name: projectName,
      data,
    });

    const projectCreated = await newProject.save();

    if (projectCreated) {
      console.log("Project Created!");
      res.status(201).json(projectCreated);
    } else {
      console.error("Something went wrong!");
      res.status(401).json("Something went wrong!");
    }
  } catch (error) {
    console.error(error.message);
    res.status(401).json(error.message);
  }
};
const createProjectData = async (req, res) => {
  const { projectId, projectData } = req.body;

  try {
    const isProjectExist = await Project.findById(projectId);
    if (!isProjectExist) {
      console.log("Project Not Found!");
      res.status(401).json("Project Not Found!");
    }
    if (isProjectExist) {
      const isProjectExist = await Project.findByIdAndUpdate(
        projectId,
        { $push: { data: projectData } },
        { new: true }
      );
      const dataAdded = await isProjectExist.save();
      if (dataAdded) {
        console.log("Project Created!");
        res.status(201).json(dataAdded);
      } else {
        res.status(401).json("Something went wrong!");
      }
    }
  } catch (error) {
    console.error(error.message);
    res.status(401).json(error.message);
  }
  console.log(projectId);
};
const updateProjectData = async (req, res) => {
  const { dataId, projectId, newDesc } = req.body;

  try {
    const isProjectExist = await Project.findById(projectId);
    if (!isProjectExist) {
      res.status(401).json("Project doesn't exist!");
    }

    const updatedProject = await Project.findOneAndUpdate(
      { _id: projectId, "data._id": dataId },
      { $set: { "data.$.desc": newDesc } },
      { new: true }
    );

    if (updatedProject) {
      console.log("Project Updated!", updatedProject);
      res.status(201).json(updatedProject);
    } else {
      res.status(401).json("Something went wrong!");
    }
  } catch (error) {
    console.error(error.message);
    res.status(401).json(error.message);
  }
};
export { createProject, createProjectData, updateProjectData };
