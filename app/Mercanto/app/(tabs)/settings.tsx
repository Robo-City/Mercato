import React, { useState } from 'react';
import { View, Text, Switch, Button, TextInput, StyleSheet, ScrollView } from 'react-native';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [language, setLanguage] = useState('English');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const toggleNotifications = () => setNotificationsEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.setting}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.settingText}>Language</Text>
        <TextInput
          style={styles.input}
          onChangeText={setLanguage}
          value={language}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.settingText}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.settingText}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
      </View>

      <Button
        title="Save Changes"
        onPress={() => {
          // Save settings changes
          console.log('Settings saved:', { notificationsEnabled, language, name, email });
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 10,
  },
});

export default SettingsScreen;
