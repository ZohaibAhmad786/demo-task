import React from 'react'
import { Image, View, Switch } from 'react-native'
import PrimaryHeader from '../../components/app-header/primary-header'
import PrimaryButton from '../../components/button/primaryButton'
import Row from '../../components/row'
import Medium from '../../components/typo-graphy/medium'
import Regular from '../../components/typo-graphy/regular'
import { mvs } from '../../config/metrices'
import PALETTE from '../../config/palette'
import { UserPng } from '../../resources/assets'
import { styles } from './style'
const LabelValue = ({ label, value }) => {
  return (
    <Row style={styles.row}>
      <Medium label={label} />
      <Regular label={value} />
    </Row>
  )
}
const StudentDetailsScreen = (props) => {
  const { route, navigation } = props;
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  //main component return here
  return (
    <View style={styles.container}>
      <PrimaryHeader title={'User Profile'} {...props} back />
      <View style={styles.body}>
        <View style={styles.imgContainer}>
          <Image source={UserPng} />
        </View>
        <LabelValue label={'First Name:'} value={route?.params?.user?.name} />
        <LabelValue label={'Roll No:'} value={route?.params?.user?.id} />
        <LabelValue label={'Class:'} value={route?.params?.user?.grade} />
        <PrimaryButton
          onPress={() => navigation?.navigate('messages', { name: route?.params?.user?.name })}
          btnStyle={styles.btn} btnLabel={'Chat'}
        />
        <View style={{ position: 'absolute', right: mvs(20), top: mvs(20) }}>
          <Switch
            trackColor={{ false: '#767577', true: PALETTE[707070] }}
            thumbColor={isEnabled ? PALETTE.black : PALETTE.F2F2F2}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  )
}
export default StudentDetailsScreen