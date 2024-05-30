import "./style.scss";

const Title = ({ title = "Projects", RightItem }) => {
  return (
    <div className="title-container">
      <h3>{title}</h3>
      {RightItem && <RightItem />}
    </div>
  );
};

export default Title;
