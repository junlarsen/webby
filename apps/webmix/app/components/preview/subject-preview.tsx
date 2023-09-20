import { FC } from 'react';
import { Link } from '~/components/text/link';
import { Subject } from '~/types/subject';

export type SubjectPreviewProps = {
  subject: Subject;
};

export const SubjectPreview: FC<SubjectPreviewProps> = ({ subject }) => {
  return (
    <div className="border border-black text-left w-full sm:w-1/3 p-2 flex flex-col items-start">
      <div className="font-noto text-slate-600 inline-flex gap-1">
        <p>Tatt {subject.semester}</p>
      </div>
      <h3 className="font-semibold text-lg font-noto tracking-tighter text-black">{subject.subjectName}</h3>

      <Link className="mt-auto" to={`/ntnu/${subject.slug}`}>
        Detaljer →
      </Link>
    </div>
  );
};
