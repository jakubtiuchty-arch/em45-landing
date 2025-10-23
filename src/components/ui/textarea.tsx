import { cn } from "@/lib/utils"

export const Textarea = ({ className, ...props }: any) => (
  <textarea
    className={cn(
      "flex min-h-[80px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm",
      className
    )}
    {...props}
  />
)
