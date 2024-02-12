import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/ui/tooltip";

type HintProps = {
  children: React.ReactNode;
  label: string;
  side: "top" | "right" | "bottom" | "left";
  align: "start" | "center" | "end";
};

export default function Hint({ children, label, side, align }: HintProps): JSX.Element {
  return (
    <TooltipProvider delayDuration={80}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          sideOffset={4}
          alignOffset={2}
          className=" border-gray-900 bg-gray-900"
        >
          <span className="font-semibold capitalize text-slate-50">{label}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
