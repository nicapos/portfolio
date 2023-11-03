import React from 'react';

const TagGroup = ({ tags }: { tags: string[] }) => {
  return (
    <ul className="mb-1 flex flex-wrap gap-1">
      {tags.map((tag) => (
        <li key={tag} className="rounded-3xl border-2 px-3 py-1 text-sm">
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagGroup;
