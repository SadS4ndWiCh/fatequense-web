"use client";

import { ComponentProps, useState } from "react";

import { Check, Copy } from "lucide-react";

import useCopyToClipboard from "~/hooks/use-copy-to-clipboard";

import { cn } from "~/lib/utils";

import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

type Props = ComponentProps<typeof Button> & {
  content: string;
};

export function CopyButton({ content, className, children, ...rest }: Props) {
  const { toast } = useToast();
  const [hasCopyed, setHasCopyed] = useState(false);
  const [_, copy] = useCopyToClipboard();

  const hide = () => setHasCopyed(false);

  function handleCopyedToClipboard() {
    setHasCopyed(true);
    copy(content);

    setTimeout(hide, 1500);

    toast({
      description: `"${content}" foi copiado para área de transferência.`,
      duration: 1500,
    });
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopyedToClipboard}
      className={cn("flex items-center justify-between", className)}
      {...rest}
    >
      {children}
      {hasCopyed ? (
        <Check className="h-4 w-4" />
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copiado!</span>
        </>
      )}
    </Button>
  );
}
