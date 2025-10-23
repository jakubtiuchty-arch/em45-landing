import { cn } from "@/lib/utils"

export const Label = ({ className, ...props }: any) => (
  <label
    className={cn("text-sm font-medium", className)}
    {...props}
  />
)
