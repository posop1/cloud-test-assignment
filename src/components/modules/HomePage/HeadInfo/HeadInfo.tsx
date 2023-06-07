import { ColumnBox, RowBox } from '../../../../styles/Boxes'
import { Text } from '../../../../styles/Typography'
import { ProfileAvatar } from '../../../elements/ProfileAvatar/'
import { SocialMedia } from '../../../elements/SocialMedia'

export const HeadInfo: React.FC = () => {
  const name = 'Иван'
  const sername = 'Иванов'

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
