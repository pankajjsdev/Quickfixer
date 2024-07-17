import { cn } from "@/utils/cn";

export function HeadingH1({ text, className = '' }: { text: string, className?: string }) {
    return (
        <h1 className={cn(`text-center my-3 text-4xl lg:text-6xl font-semibold ${className}`)}>{text}</h1>
    )
}

