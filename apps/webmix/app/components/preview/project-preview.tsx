import { FC } from 'react';
import { Project } from '~/types/project';
import { Link } from '~/components/text/link';
import { Text } from '~/components/text/text';

export type ProjectPreviewProps = {
  project: Project;
};

export const ProjectPreview: FC<ProjectPreviewProps> = ({ project }) => {
  const org = project.repository.split('/')[0];
  return (
    <div className="border border-black text-left w-full p-2 flex flex-col items-start">
      <div className="flex items-center gap-2">
        <img
          className="rounded-full"
          src={`https://github.com/${org}.png?size=48`}
          alt={`${org} organization icon`}
          width={32}
          height={32}
        />
        <h3 className="font-semibold text-lg mb-1 font-noto tracking-tighter text-black">{project.repository}</h3>
      </div>

      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <div className="flex flex-col gap-1 min-w-[32px] h-full self-start mt-6">
            {project.technologies.map(({ url }) => (
              <img key={url} src={url} alt="Tech logo" width={32} height={32} />
            ))}
          </div>

          <div>
            <Text>{project.projectDescription}</Text>
            <Text>{project.contribution}</Text>
          </div>
        </div>
      </div>

      <Link className="ml-[40px] mt-auto" to={`https://github.com/${project.repository}`}>
        Read →
      </Link>
    </div>
  );
};
