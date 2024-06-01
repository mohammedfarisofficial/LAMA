import "./style.scss";
// framer
import { motion } from "framer-motion";
// router
import { useNavigate } from "react-router-dom";
// comp
import Button from "../Button";

const Table = ({ headers }) => {
  const navigate = useNavigate();
  return (
    <motion.table initial={{ scale: 0.9 }}
    animate={{ scale: 1 }} className="table-container">
      <thead>
        <tr>
          {headers.map(({ title }, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <motion.tr
          initial={{ scale: 0.99 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          whileHover={{ scale: 0.99 }}
        >
          <td>Sample Project</td>
          <td>12 jun 24 | 15:67</td>
          <td>Done</td>
          <td>
            <Button
              onClick={() => navigate("/project/overview/edit")}
              label="Edit"
            />
            <Button variant="cancel" label="Delete" />
          </td>
        </motion.tr>
        <motion.tr
          initial={{ scale: 0.99 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <td>Sample Project</td>
          <td>12 jun 24 | 15:67</td>
          <td>Done</td>
          <td
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </motion.tr>
        <motion.tr
          initial={{ scale: 0.99 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <td>Sample Project</td>
          <td>12 jun 24 | 15:67</td>
          <td>Done</td>
          <td>
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </motion.tr>
        <motion.tr
          initial={{ scale: 0.99 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <td>Sample Project</td>
          <td>12 jun 24 | 15:67</td>
          <td>Done</td>
          <td>
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </motion.tr>
        <motion.tr
          initial={{ scale: 0.99 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <td>Sample Project</td>
          <td>12 jun 24 | 15:67</td>
          <td>Done</td>
          <td>
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </motion.tr>
        <motion.tr
          initial={{ scale: 0.99 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <td>Sample Project</td>
          <td>12 jun 24 | 15:67</td>
          <td>Done</td>
          <td>
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </motion.tr>
        <motion.tr
          initial={{ scale: 0.99 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <td>Sample Project</td>
          <td>12 jun 24 | 15:67</td>
          <td>Done</td>
          <td>
            <Button label="Edit" />
            <Button variant="cancel" label="Delete" />
          </td>
        </motion.tr>
      </tbody>
    </motion.table>
  );
};

export default Table;
