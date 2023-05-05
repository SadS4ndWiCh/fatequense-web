import type { Session } from "next-auth";
import { CalendarDays, Home, Inbox, LogOut, Puzzle, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";

type Props = {
  user: Session["user"];
};

export function StudentMenu({ user }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user.picture} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">{user.name}</p>
            <p className="w-[200px] truncate text-sm text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno">
              <Home className="w-4 h-4 mr-2" />
              <span>Home</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno/horarios">
              <CalendarDays className="w-4 h-4 mr-2" />
              <span>Horários</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno/notas-parciais">
              <Star className="w-4 h-4 mr-2" />
              <span>Notas Parciais</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno/faltas-parciais">
              <Puzzle className="w-4 h-4 mr-2" />
              <span>Faltas Pariciais</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/aluno/historico">
              <Inbox className="w-4 h-4 mr-2" />
              <span>Histórico</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="flex items-center cursor-pointer"
          onSelect={(event) => {
            event.preventDefault();
            signOut({ callbackUrl: `${window.location.origin}/login` });
          }}
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
