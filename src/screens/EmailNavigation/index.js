import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const EmailNavigation = () => {
  const [emailName, setEmailName] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const submitButton = () => {
    if (!emailName || !subject || !body) {
      Alert.alert('Missing Information', 'Please fill in all fields.');
      return;
    }

    const mailtoUrl = `mailto:${emailName}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailtoUrl)
      .then(supported => {
        if (supported) {
          Linking.openURL(mailtoUrl);
        } else {
          console.log('No email client found');
        }
      })
      .catch(err => {
        console.error('Error occurred', err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Email Form</Text>

      <TextInput
        placeholder="Enter email"
        value={emailName}
        onChangeText={setEmailName}
        style={styles.emailStyle}
      />
      <TextInput
        placeholder="Enter subject"
        value={subject}
        onChangeText={setSubject}
        style={styles.subjectStyle}
      />
      <TextInput
        placeholder="Enter email body"
        value={body}
        onChangeText={setBody}
        style={styles.bodyStyle}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity onPress={submitButton} style={styles.button}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f4f4f4',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  emailStyle: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  subjectStyle: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  bodyStyle: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  button: {
    height: 40,
    width: 100,
    backgroundColor: 'green',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  submitText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
});
