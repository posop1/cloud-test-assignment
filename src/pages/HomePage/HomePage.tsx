import { HeadInfo } from '../../components/modules/HomePage'
import { ColumnBox } from '../../styles/Boxes'
import { HomeWrapper } from '../../styles/Wrappers'
import { Line } from '../../styles/components/Line'

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeWrapper>
        <ColumnBox
          align="flex-start"
          justify="flex-start"
          gap="50"
        >
          <HeadInfo />
          <Line />
        </ColumnBox>
      </HomeWrapper>
    </>
  )
}
