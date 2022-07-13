import './Avatar.css'

export const Avatar = (props) => {
  const { src } = props

  return (
    <div className="avatar">
      <img src={src} alt="User avatar" />
    </div>
  )
}