
const Button = ({url,text,className,download}) => {
  return (
    <>
      <a href={url}  className={className} target="_blank" rel="noreferrer" download={download}>{text}</a>
    </>
  )
}

export default Button