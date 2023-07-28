interface ButtonProps {
    children: React.ReactNode;
    color: string;
    text: string;
}

function Button ({children, color, text}: ButtonProps ): JSX.Element {
  return (
    <button className={`${color} ${text}`}>{children}</button>
  )
}

export default Button

