import "./style.scss";
import { useNavigate } from "react-router-dom";
// comp
import Button from "../Button";

const Table = ({ headers }) => {
  const navigate = useNavigate();
  return (
    <table className="table-container">
      <thead>
        <tr>
          {headers.map(({ title }, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>hello</td>
          <td>hello</td>
          <td>hello</td>
          <td>
            <Button
              onClick={() => navigate("/project/overview/edit")}
              label="Edit"
            />
            <Button variant="cancel" label="Delete" />
          </td>
        </tr>
        <tr>
          <td>hello</td>
          <td>hello</td>
          <td>hello</td>
          <td>
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </tr>
        <tr>
          <td>hello</td>
          <td>hello</td>
          <td>hello</td>
          <td>
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </tr>
        <tr>
          <td>hello</td>
          <td>hello</td>
          <td>hello</td>
          <td>
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </tr>
        <tr>
          <td>hello</td>
          <td>hello</td>
          <td>hello</td>
          <td>
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
