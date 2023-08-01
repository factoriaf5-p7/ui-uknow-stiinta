interface ButtonProps {
    children: React.ReactNode;
    color: string;
    text: string;
}

function Button ({children, color, text}: ButtonProps ): JSX.Element {
  return (
    <button className={`${color} ${text} py-1.5 px-1.5 text-sm rounded-md hover:font-bold flex-1`}>{children}</button>
  )
}

export default Button

