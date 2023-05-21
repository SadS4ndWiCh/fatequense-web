import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid h-full w-full flex-1 place-content-center">
      <Loader2 className="h-12 w-12 animate-spin text-red-600" />
    </div>
  );
}
