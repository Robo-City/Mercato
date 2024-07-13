import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type MenuItemProps = {
  icon: string;
  title: string;
};

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image 
          style={styles.avatar} 
          source={{ uri: 'https://example.com/avatar.png' }} // Replace with your avatar URL
        />
        <Text style={styles.name}>hendie</Text>
        <Text style={styles.info}>8967452743</Text>
        <Text style={styles.info}>robi123@gmail.com</Text>
      </View>

      <View style={styles.menuSection}>
        <MenuItem icon="list" title="Order History" />
        <MenuItem icon="location" title="Shipping Address" />
        <MenuItem icon="create" title="Create Request" />
        <MenuItem icon="document" title="Privacy Policy" />
        <MenuItem icon="settings" title="Settings" />
        <MenuItem icon="log-out" title="Log out" /> 
      </View>
    </View>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, title }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Icon name={icon} size={24} color="#f26a4b" />
    <Text style={styles.menuItemText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    color: '#888',
  },
  menuSection: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  
  menuItemText: {
    fontSize: 18,
    marginLeft: 20,
  },
});

export default ProfileScreen;
