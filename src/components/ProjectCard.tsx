import Image, { type StaticImageData } from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imgUrl: StaticImageData;
  webUrl: string;
};

export function ProjectCard({ title, description, imgUrl, webUrl }: ProjectCardProps) {
  return (
    <a href={webUrl} target="_blank" rel="noreferrer" className="project-links">
      <div className="proj-imgbx">
        <Image src={imgUrl} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
  );
}
