

const Button = ({onClick,children,...rest}) => {
  return (
    <button {...rest} onClick={onClick}>{children}</button>
  )
}

export default Button
