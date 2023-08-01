interface ButtonProps {
    children: React.ReactNode;
    color: string;
    text: string;
    action: React.MouseEventHandler<HTMLButtonElement> | undefined
}

function Button ({children, color, text, action}: ButtonProps ): JSX.Element {
  return (
    <button onClick={action} className={`${color} ${text} py-1.5 px-1.5 text-sm rounded-md hover:font-bold`}>{children}</button>
  )
}

export default Button

