import { cn } from "@/lib/utils"
import { createContext, useContext, useState } from "react"

const AccordionContext = createContext<any>(null)
const AccordionItemContext = createContext<any>(null)

export const Accordion = ({ type, collapsible, children, ...props }: any) => {
  const [openItems, setOpenItems] = useState<string[]>([])
  
  const toggleItem = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) && collapsible ? [] : [value])
    } else {
      setOpenItems(
        openItems.includes(value)
          ? openItems.filter(i => i !== value)
          : [...openItems, value]
      )
    }
  }
  
  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div {...props}>{children}</div>
    </AccordionContext.Provider>
  )
}

export const AccordionItem = ({ value, className, ...props }: any) => {
  const { openItems } = useContext(AccordionContext)
  const isOpen = openItems.includes(value)
  
  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={cn("border-b", className)} {...props} />
    </AccordionItemContext.Provider>
  )
}

export const AccordionTrigger = ({ className, children, ...props }: any) => {
  const { toggleItem } = useContext(AccordionContext)
  const { value, isOpen } = useContext(AccordionItemContext)
  
  return (
    <button
      onClick={() => toggleItem(value)}
      className={cn("flex w-full items-center justify-between py-4 font-medium hover:underline", className)}
      {...props}
    >
      {children}
      <svg
        className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  )
}

export const AccordionContent = ({ className, children, ...props }: any) => {
  const { isOpen } = useContext(AccordionItemContext)
  if (!isOpen) return null
  
  return (
    <div className={cn("pb-4 text-sm", className)} {...props}>
      {children}
    </div>
  )
}
