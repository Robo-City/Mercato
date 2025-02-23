import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Modal from 'react-native-modal';

interface Conversation {
  id: number;
  name: string;
  message: string;
  time: string;
  image: string;
  unread: boolean;
  sent: boolean;
}

const ChatInbox: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    { id: 1, name: 'Smooth', message: 'Hey, how are you?', time: '2:45 PM', image: '(link unavailable)', unread: true, sent: false },
    { id: 2, name: 'Rasta', message: 'Meeting tomorrow at 10 AM.', time: '1:30 PM', image: '(link unavailable)', unread: false, sent: true },
  ]);
  
  const [newMessage, setNewMessage] = useState<string>('');
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleSend = () => {
    if (newMessage.trim() !== '') {
      const newConversation: Conversation = {
        id: conversations.length + 1,
        name: 'You',
        message: newMessage.trim(),
        time: new Date().toLocaleTimeString(),
        image: '(link unavailable)',
        unread: false,
        sent: true,
      };
      setConversations([...conversations, newConversation]);
      setNewMessage('');
    }
  };

  const handleDelete = (id: number) => {
    setConversations(conversations.filter((conversation) => conversation.id !== id));
    if (selectedConversation && selectedConversation.id === id) {
      setSelectedConversation(null);
    }
    setIsModalVisible(false);
  };

  const handleAction = (action: string) => {
    switch (action) {
      case 'highlight':
        Alert.alert('Action', 'Highlight message');
        break;
      case 'copy':
        Alert.alert('Action', 'Copy message');
        break;
      case 'forward':
        Alert.alert('Action', 'Forward message');
        break;
      default:
        break;
    }
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Inbox</Text>
        <View style={styles.headerIcons}>
          <Text style={styles.icon}>🔍</Text>
          <Text style={styles.icon}>➕</Text>
        </View>
      </View>
      <ScrollView style={styles.conversationList}>
        {conversations.map((conversation) => (
          <TouchableOpacity
            key={conversation.id}
            style={styles.conversationItem}
            onPress={() => setSelectedConversation(conversation)}
            onLongPress={() => setIsModalVisible(true)}
          >
            <Image
              source={{ uri: conversation.image }}
              style={styles.profilePicture}
            />
            <View
              style={[
                styles.conversationDetails,
                conversation.sent ? styles.sentMessage : styles.receivedMessage,
              ]}
            >
              <Text style={styles.contactName}>{conversation.name}</Text>
              <Text style={styles.messageText}>{conversation.message}</Text>
              <Text style={styles.timestamp}>{conversation.time}</Text>
              {conversation.unread && <Text style={styles.unreadIndicator}>•</Text>}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('highlight')}>
            <Text>Highlight</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('copy')}>
            <Text>Copy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => handleAction('forward')}>
            <Text>Forward</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, { backgroundColor: 'red' }]} onPress={() => handleDelete(selectedConversation?.id)}>
            <Text style={{ color: 'white' }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {selectedConversation && (
        <View style={styles.chatHead}>
          <Image
            source={{ uri: selectedConversation.image }}
            style={styles.profilePicture}
          />
          <View style={styles.chatHeadDetails}>
            <Text style={styles.contactName}>{selectedConversation.name}</Text>
            <Text style={styles.messageText}>{selectedConversation.message}</Text>
            <Text style={styles.timestamp}>{selectedConversation.time}</Text>
          </View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDelete(selectedConversation.id)}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.messageInputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    marginLeft: 20,
  },
  conversationList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  conversationDetails: {
    flex: 1,
  },
  receivedMessage: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  sentMessage: {
    backgroundColor: '#dbf5b4',
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  contactName: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  messageText: {
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  unreadIndicator: {
    color: 'green',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  chatHead: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatHeadDetails: {
    flex: 1,
    marginLeft: 10,
  },
  deleteButton: {
    padding: 10,
  },
  deleteText: {
    color: 'red',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
  },
  navItem: {
    fontSize: 24,
    color: '#888',
  },
  activeNavItem: {
    color: '#333',
  },
  messageInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
});

export default ChatInbox;
