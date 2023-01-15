import React from 'react'
import { FlatList, View } from 'react-native'
import PrimaryHeader from '../../components/app-header/primary-header'
import InboxCard from '../../components/inbox-card'
import { CHATS, STUDENTS_DATA } from '../../config/mock-up-data'
import { styles } from './style'

const ChatScreen = (props) => {
  //flatlist card render here
  const renderItem = React.useCallback(({ item, index }) => {
    return (<InboxCard onPress={() => props?.navigation?.navigate('messages', { name: item?.name })} item={item} />)
  }, []);

  //main component return here
  return (
    <View style={styles.container}>
      <PrimaryHeader {...props} />
      <View style={styles.body}>
        <FlatList
          data={CHATS}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  )
}
export default ChatScreen