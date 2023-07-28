interface TagDifficultyProps {
    color: "Beginner" | "Medium" | "Advanced";
    children: React.ReactNode;
}

interface Color {
    Beginner: string;
    Medium: string;
    Advanced: string;
}


function TagDifficulty({ color, children }: TagDifficultyProps) {
    const colorVariants: Color = {
        Beginner: "bg-green-500",
        Medium: "bg-orange-500",
        Advanced: "bg-red-500",
    }
  return (
    <div className={`${colorVariants[color]} w-fit px-1.5 py-1 text-white absolute top-4 left-4`}>{children}</div>
  )
}

export default TagDifficulty