import { Experience } from '@/config/experiences';
import { cn } from '@/lib/utils';
import TagGroup from './TagGroup';

const ExperienceCard = (props: Experience) => {
  const {
    title,
    company,
    description,
    startDate,
    endDate = 'present',
    tags,
  } = props;

  const descriptions =
    typeof description === 'string'
      ? description
      : description.map((desc) => <li key={desc}>{desc}</li>);

  return (
    <div className="flex flex-col">
      <i>
        {startDate} - {endDate}
      </i>
      <p className="mb-2 text-xl">
        <b>{title}</b> – {company}
      </p>
      <ul
        className={cn('mb-4 list-disc', {
          'pl-5': typeof description != 'string',
        })}
      >
        {descriptions}
      </ul>
      <TagGroup tags={tags} />
    </div>
  );
};

export default ExperienceCard;
