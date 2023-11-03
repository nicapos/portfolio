import Image from 'next/image';
import Link from 'next/link';
import TagGroup from './TagGroup';
import { Project } from '@/config/projects';

const ProjectCard = (props: Project) => {
  const {
    title,
    coverImageURL,
    tags = [],
    description,
    githubURL,
    websiteURL,
  } = props;

  const imageURL = coverImageURL ?? '/placeholder.svg';
  const imageAlt = coverImageURL ? `${title} preview` : 'placeholder';

  const mainLink = websiteURL || githubURL || '#';

  const hoverLinkProps = {
    className: 'flex flex-1 items-center justify-center',
    target: '_blank',
  };

  return (
    <div className="flex w-full flex-col flex-wrap gap-y-3">
      <div className="group relative aspect-[3/2] w-full">
        <Image src={imageURL} alt={imageAlt} className="object-cover" fill />

        <div className="absolute left-0 top-0 hidden aspect-[3/2] w-full flex-col bg-black py-12 text-center text-lg opacity-50 group-hover:flex">
          {githubURL && (
            <Link href={githubURL} {...hoverLinkProps}>
              View on GitHub
            </Link>
          )}
          {githubURL && websiteURL && <p>or</p>}
          {websiteURL && (
            <Link href={websiteURL} {...hoverLinkProps}>
              View website
            </Link>
          )}
        </div>
      </div>

      <Link
        className="-mb-1 text-2xl font-semibold hover:underline lg:text-xl"
        href={mainLink}
      >
        {title}
      </Link>
      <TagGroup tags={tags} />
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
