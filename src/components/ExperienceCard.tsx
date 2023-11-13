import { Experience } from '@/lib/api';
import TagGroup from './TagGroup';

const ExperienceCard = (props: Experience) => {
  const {
    title,
    company,
    descriptions = [],
    start_date,
    end_date,
    tags = [],
  } = props;

  const descriptionSection =
    descriptions.length >= 2 ? (
      <ul className="mb-4 list-disc pl-5">
        {descriptions.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
    ) : (
      <p className="mb-4">{descriptions}</p>
    );

  return (
    <div className="flex flex-col">
      {start_date && (
        <i>
          {start_date} - {end_date || 'present'}
        </i>
      )}
      <p className="mb-2 text-xl">
        <b>{title}</b> – {company}
      </p>
      {descriptionSection}
      <TagGroup tags={tags} />
    </div>
  );
};

export default ExperienceCard;
