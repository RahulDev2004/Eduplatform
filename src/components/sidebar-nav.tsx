import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    id: string,
    title: string
  }[],
  currentId: string;
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <div
          onClick={props.onClick}
          key={item.id}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            props.currentId === item.id
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </div>
      ))}
    </nav>
  )
}