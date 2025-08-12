import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-portfolio hover:shadow-portfolio-hover hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        social: "bg-card border border-border hover:bg-portfolio-hover hover:scale-105 text-foreground shadow-portfolio hover:shadow-portfolio-hover transition-all duration-300",
        "social-linkedin": "bg-social-linkedin text-white hover:bg-social-linkedin/90 hover:scale-105 shadow-portfolio hover:shadow-portfolio-hover",
        "social-instagram": "bg-social-instagram text-white hover:bg-social-instagram/90 hover:scale-105 shadow-portfolio hover:shadow-portfolio-hover",
        "social-whatsapp": "bg-social-whatsapp text-white hover:bg-social-whatsapp/90 hover:scale-105 shadow-portfolio hover:shadow-portfolio-hover",
        "social-email": "bg-social-email text-white hover:bg-social-email/90 hover:scale-105 shadow-portfolio hover:shadow-portfolio-hover",
        "social-github": "bg-social-github text-white hover:bg-social-github/90 hover:scale-105 shadow-portfolio hover:shadow-portfolio-hover",
        "social-x": "bg-social-x text-white hover:bg-social-x/90 hover:scale-105 shadow-portfolio hover:shadow-portfolio-hover",
        gradient: "bg-portfolio-gradient text-white hover:scale-105 shadow-portfolio hover:shadow-portfolio-hover",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
