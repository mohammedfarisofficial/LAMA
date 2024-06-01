import "./style.scss";
import { motion } from "framer-motion";
import { bgVariants, modelVariants } from "../../contants/variants/variants";
//redux
import { useDispatch, useSelector } from "react-redux";
import { closeModel } from "../../state/reducers/modelSlice";
//comp
import Button from "../Button";

const Model = ({ children }) => {
  const {
    isOpen,
    children: Children,
    title,
    logo,
    onAction,
    actionLabel,
    actionVariant,
  } = useSelector((state) => state.model);

  const dispatch = useDispatch();

  const closeModelHanlder = () => {
    dispatch(closeModel());
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isOpen ? "open" : "closed"}
      variants={bgVariants}
      transition={{ duration: 0.5 }}
      className="model-container"
    >
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={modelVariants}
        className="model-inner"
      >
        <div
          style={{ justifyContent: "flex-start", padding: 0, margin: "1rem 0" }}
          className="model-section"
        >
          <h2>{title}</h2>
        </div>
        {children}
        {Children && Children}
        <div className="model-section">
          <Button onClick={closeModelHanlder} variant="cancel" label="Cancel" />
          <Button
            onClick={onAction}
            variant={actionVariant}
            label={actionLabel}
          />
        </div>
        <ModelContent><h2>hi</h2></ModelContent>
      </motion.div>
    </motion.div>
  );
};

export default Model;

export const ModelContent = ({ children }) => {
  return <div>ModelContent{children}</div>;
};
