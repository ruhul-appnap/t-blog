import React from 'react'

type ButtonProps = {
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const buttonVariant = {
  primary: "button-base primary-button",
  secondary: "button-base secondary-button"
}

function Button(props: ButtonProps) {
  const { children, className, variant } = props;

  let buttonType = '';
  if (variant) {
    buttonType = buttonVariant[variant] ? buttonVariant[variant] : "button-base"
  }
  if (className) buttonType += ' ' + className

  return (
    <button {...props} className={`${buttonType}`}>{children}</button>
  )
}

export default Button