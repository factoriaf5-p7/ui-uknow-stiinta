interface ButtonProps {
    children: React.ReactNode;
    color: string;
    text: string;
}

function Button ({children, color, text}: ButtonProps ): JSX.Element {
  return (
    <button className={`${color} ${text} py-0.5 px-1 text-sm rounded-md hover:font-bold`}>{children}</button>
  )
}

export default Button

