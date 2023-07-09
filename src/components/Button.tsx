import ButtonProps from "@/types/button";

export default function Button({ variant, children, ...props }: ButtonProps) {
    const styles = {
        primary: "bg-primary text-secondary",
        secondary: "bg-secondary text-dark",
        tertiary:"bg-transparent text-secondary border border-secondary"
    }
    return (
        <button {...props} className={`${styles[variant]} px-4 py-2 rounded-md cursor-pointer text-lg`}>
            {children}
        </button>
    )
}
