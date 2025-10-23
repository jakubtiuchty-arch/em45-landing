import { cn } from "@/lib/utils"

export const Input = ({ className, ...props }: any) => (
  <input
    className={cn(
      "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm",
      className
    )}
    {...props}
  />
)
