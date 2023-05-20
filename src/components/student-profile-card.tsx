import { Session } from 'next-auth';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

import { CopyButton } from '~/components/copy-button';

type Props = {
  user: Session['user'];
};

export function StudentProfileCard({ user }: Props) {
  return (
    <section className="flex w-[265px] flex-col items-center rounded-md gap-2">
      <Avatar className="h-32 w-32">
        <AvatarImage src={user.picture} alt={user.name} />
        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="mt-2 w-full space-y-4">
        <section>
          <h2 className="truncate text-xl font-medium">{user.name}</h2>
        </section>

        <section className="flex flex-col gap-1">
          <div className="flex-1">
            <span className="text-xs">Email Institucional</span>
            <CopyButton
              id="institutional-email"
              content={user.email}
              className="w-full"
            >
              <span className="mr-2 truncate text-sm">{user.email}</span>
            </CopyButton>
          </div>
          <div className="flex-1">
            <span className="text-xs">RA</span>
            <CopyButton id="student-id" content={user.ra} className="w-full">
              <span className="mr-2 truncate text-sm">{user.ra}</span>
            </CopyButton>
          </div>
        </section>
      </div>
    </section>
  );
}
