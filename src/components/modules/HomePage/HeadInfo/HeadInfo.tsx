import { ColumnBox, RowBox } from '../../../../styles/Boxes'
import { Text } from '../../../../styles/Typography'
import { ProfileAvatar } from '../../../elements/ProfileAvatar/'
import { SocialMedia } from '../../../elements/SocialMedia'

interface HeadInfoProps {
  name: string
  sername: string
}

export const HeadInfo: React.FC<HeadInfoProps> = (props) => {
  const { name, sername } = props

  return (
    <RowBox justify="flex-start">
      <ProfileAvatar
        name={name}
        sername={sername}
      />
      <ColumnBox
        justify="flex-start"
        align="flex-start"
        gap="10"
      >
        <Text
          size="l"
          bold
        >
          {name} {sername}
        </Text>
        <SocialMedia />
      </ColumnBox>
    </RowBox>
  )
}
