import "./style.scss";

const Title = ({ title = "Projects", RightItem, subTitle }) => {
  return (
    <div className="title-container">
      <div>
        <h3>{title}</h3>
        {subTitle && <p>{subTitle}</p>}
      </div>
      {RightItem && <RightItem />}
    </div>
  );
};

export default Title;
