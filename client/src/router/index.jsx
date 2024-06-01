import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//layout
import Root from "../layout/Root";
import Project from "../layout/Project";

//pages
import CreateProject from "../screens/CreateProject";
import Projects from "../screens/Projects";
import Upload from "../screens/Upload";
import Deployment from "../screens/Deployment";
import RootLayout from "../layout/RootLayout";
import EditTranscript from "../screens/EditTranscript";
import Configuration from "../screens/Configuration";
import Pricing from "../screens/Pricing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Root />}>
      <Route path="" element={<RootLayout />}>
        <Route path="" element={<CreateProject />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="project" element={<Project />}>
        <Route path="overview">
          <Route path="upload" element={<Upload />} />
          <Route path="edit" element={<EditTranscript />} />
        </Route>
        <Route path="deployment" element={<Deployment />} />
        <Route path="widget-configuaration" element={<Configuration />} />
        <Route path="pricing" element={<Pricing />} />
      </Route>
    </Route>
  )
);

export default router;
