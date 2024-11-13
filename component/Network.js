import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SocialAccountScreen = ({ navigation }) => {
    const [facebookEnabled, setFacebookEnabled] = useState(false);
    const [googleEnabled, setGoogleEnabled] = useState(true);
    const [contactsEnabled, setContactsEnabled] = useState(true);

    return (
        <View style={styles.container}>
            {/* Header with Back Button */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <FontAwesome name="chevron-left" size={24} color="#A9A9A9" />
                </TouchableOpacity>
                <Text style={styles.header}>Tài khoản mạng xã hội</Text>
            </View>

            {/* Social Account Options */}
            <View style={styles.optionContainer}>
                <View style={styles.option}>
                    <FontAwesome name="facebook" size={24} color="#3b5998" style={styles.icon} />
                    <Text style={styles.optionText}>Facebook</Text>
                    <Switch
                        value={facebookEnabled}
                        onValueChange={(value) => setFacebookEnabled(value)}
                    />
                </View>
                <View style={styles.option}>
                    <FontAwesome name="google" size={24} color="#db4a39" style={styles.icon} />
                    <Text style={styles.optionText}>Google</Text>
                    <Switch
                        value={googleEnabled}
                        onValueChange={(value) => setGoogleEnabled(value)}
                    />
                </View>
                <View style={styles.option}>
                    <FontAwesome name="address-book" size={24} color="#ffab00" style={styles.icon} />
                    <Text style={styles.optionText}>Danh bạ</Text>
                    <Switch
                        value={contactsEnabled}
                        onValueChange={(value) => setContactsEnabled(value)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 16,
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    optionContainer: {
        marginTop: 16,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    icon: {
        marginRight: 16,
    },
    optionText: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default SocialAccountScreen;
