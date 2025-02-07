export const ProjectCard = ({ title, description, imgUrl, webUrl }) => {
  return (
    <a href={webUrl} target="_blank" rel="noreferrer" className="project-links">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
  );
};