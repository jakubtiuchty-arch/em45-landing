import { cn } from "@/lib/utils"
import { createContext, useContext, useState } from "react"

const TabsContext = createContext<any>(null)

export const Tabs = ({ defaultValue, children, ...props }: any) => {
  const [value, setValue] = useState(defaultValue)
  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div {...props}>{children}</div>
    </TabsContext.Provider>
  )
}

export const TabsList = ({ className, ...props }: any) => (
  <div className={cn("inline-flex items-center gap-2 rounded-md bg-slate-100 p-1", className)} {...props} />
)

export const TabsTrigger = ({ value, className, ...props }: any) => {
  const { value: selectedValue, setValue } = useContext(TabsContext)
  return (
    <button
      onClick={() => setValue(value)}
      className={cn(
        "px-3 py-1.5 text-sm rounded-sm transition-colors",
        selectedValue === value ? "bg-white shadow-sm" : "hover:bg-slate-200",
        className
      )}
      {...props}
    />
  )
}

export const TabsContent = ({ value, className, ...props }: any) => {
  const { value: selectedValue } = useContext(TabsContext)
  if (selectedValue !== value) return null
  return <div className={cn("mt-4", className)} {...props} />
}
