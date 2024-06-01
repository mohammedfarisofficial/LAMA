import "./style.scss";
// contant
import { editIcon } from "../../contants/icons";
// comp
import Button from "../Button";
import { useState } from "react";

const testData = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit porro pariatur quis repellendus, neque nesciunt maxime aliquam cum, laborum dicta rerum quia deleniti, tempora provident quasi facilis illo sed quas doloribus facere atque beatae nulla ea! Veritatis vel obcaecati laborum quae corporis natus, expedita quia debitis consequatur aut, fugit illum non at laboriosam, neque sed labore quaerat nam. Hic, molestias saepe recusandae natus accusamus veniam tempore non sunt quae delectus tenetur ducimus perspiciatis! Id quod ea delectus iure. At excepturi obcaecati temporibus iure optio! Consequuntur sint, atque eius quod ipsam aperiam qui quae architecto porro asperiores nihil, minima tempore! Harum!`;

const TextArea = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [data, setData] = useState(testData);
  return (
    <div className="textarea-container">
      <Button
        onClick={() => setIsEditable(!isEditable)}
        variant="action"
        label="Edit Mode"
        Icon={editIcon}
      />
      <h3>Speaker</h3>
      <textarea
        disabled={!isEditable}
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="textarea-inner"
      />
    </div>
  );
};

export default TextArea;
