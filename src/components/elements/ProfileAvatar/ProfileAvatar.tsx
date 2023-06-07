import { Avatar } from '../../../styles/components/Avatar'

interface ProfileAvatarProps {
  name: string
  sername: string
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = (props) => {
  const { name, sername } = props

  const minName = name[0].toLocaleUpperCase() + sername[0].toLocaleUpperCase()

  return <Avatar>{minName}</Avatar>
}
