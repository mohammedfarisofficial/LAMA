import "./style.scss";
// redux
import { useDispatch } from "react-redux";
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
import UploadItem from "../../components/UploadItem";
import UploadModal from "../../components/Modals/UploadModal";
// hooks
import useDisclosure from "../../hooks/useDisclosure";

const Upload = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div className="upload-container">
      <UploadModal
        isOpen={isOpen}
        onClose={onClose}
        deleteBtnMessage="Delete"
        itemBody="Are you sure you want to delete this item?"
        errorText=""
        title="Create Project"
        actionButtonLabel="Upload"
      />
      <Title
        title="Upload"
        subTitle=" Extract and analyze metadata and content from YouTube, Spotify, and
        RSS feeds using their respective APIs to gather insights on trends."
      />
      <div className="upload-list">
        <UploadItem onClick={onOpen} />
        <UploadItem />
        <UploadItem />
      </div>
      {/* <Divition />
      <FilePicker /> */}
      <Badge>
        <h4>All files are processed! Your widget is ready to go!</h4>
        <Button label="Try it out!" onClick={() => alert("Button Clicked!")} />
      </Badge>
      <Table headers={tableHeaders} />
    </div>
  );
};

export default Upload;
