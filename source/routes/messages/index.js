import moment from 'moment';
import React, {
  useEffect, useState
} from 'react';
import {
  Image, Text, View
} from 'react-native';
import { GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';
import PrimaryHeader from '../../components/app-header/primary-header';
import Row from '../../components/row';
import Regular from '../../components/typo-graphy/regular';
import { mvs } from '../../config/metrices';
import { CHAT_MESSAGES } from '../../config/mock-up-data';
import PALETTE from '../../config/palette';
import { SendChat } from '../../resources/assets';
import { styles } from './style';
const Messages = props => {
  const { route } = props;
  const [messages, setMessages] = useState(CHAT_MESSAGES);
  useEffect(() => {

  }, []);
  //get-initial messages here from API
  const getMessages = async () => {
    let list = [];
    setMessages(list);
  };
  const customInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        primaryStyle={styles.toolbarContainer}
        containerStyle={{
          borderTopColor: 'transparent',
        }}
        accessoryStyle={{}}
        textInputStyle={{
          fontSize: mvs(15),
          color: 'gray',
        }}
      />
    );
  };
  const rendersend = props => {
    return (
      <Send
        {...props}
        containerStyle={{
          borderRadius: mvs(10),
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: mvs(10),
        }}>
        <Image source={SendChat} style={{ height: mvs(20), width: mvs(20) }} />
      </Send>
    );
  };
  const renderAvatar = props => {
    return (
      <View style={styles.avatarContainer}>
        {props?.currentMessage?.user?.avatar ? <Image
          source={{ uri: props?.currentMessage?.user?.avatar }}
          style={styles.img} /> :
          null}
      </View>
    )
  };

  const renderMessage = props => {
    const { currentMessage } = props;

    const bool = currentMessage?.user?._id == '1';
    return (
      <View style={{
        alignSelf: bool ? 'flex-end' : 'flex-start',
        ...styles.messageContainer
      }}>

        <Row style={{
          flexDirection: bool ? 'row-reverse' : 'row',
          alignSelf: bool ? 'flex-end' : 'flex-start',
        }}>
          {renderAvatar(props)}
          <Regular
            label={`${currentMessage?.text}`}
            style={{ marginLeft: mvs(bool ? 0 : 10), marginRight: mvs(bool ? 10 : 0), flex: 1 }} />
        </Row>
        <Regular
          label={`${moment(props?.currentMessage?.createdAt).format('HH:mm A')}`}
          style={{ alignSelf: bool ? 'flex-start' : 'flex-end' }} />
      </View>
    );
  };

  const onSend = async messages => {
    console.log('messages=>', messages);
    setMessages(previousMessages => GiftedChat.append(messages, previousMessages))
  }

  return (
    <View style={styles.container}>
      <PrimaryHeader back {...props} title={route?.params?.name} />
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: '1',
          name: route?.params?.name,
          avatar: route?.params?.image || ''
        }}
        textInputStyle={{ color: PALETTE.black }}
        renderAvatar={renderAvatar}
        showAvatarForEveryMessage={true}
        scrollToBottom
        inverted={false}
        multiline={false}
        renderDay={() => {
          return null;
        }}
        renderTime={() => {
          return null;
        }}
        renderMessage={renderMessage}
        renderInputToolbar={customInputToolbar}
        isTyping={false}
        placeholder={'Chat here ...'}
        renderSend={rendersend}
        messagesContainerStyle={{ paddingBottom: 40, paddingHorizontal: mvs(10), paddingTop: mvs(20) }}
      />
    </View>
  );
};
export default Messages;
