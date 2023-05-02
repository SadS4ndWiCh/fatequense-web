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

export function StudentMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src="https://github.com/SadS4ndWiCh.png"
            alt="@SadS4ndWiCh"
          />
          <AvatarFallback>SW</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">John Doe</p>
            <p className="w-[200px] truncate text-sm text-muted-foreground">
              example.mail@fatec.sp.gov.br
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Home className="w-4 h-4 mr-2" />
            <span>Home</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CalendarDays className="w-4 h-4 mr-2" />
            <span>Horários</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Star className="w-4 h-4 mr-2" />
            <span>Notas Parciais</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Puzzle className="w-4 h-4 mr-2" />
            <span>Faltas Pariciais</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Inbox className="w-4 h-4 mr-2" />
            <span>Histórico</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex items-center cursor-pointer">
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
