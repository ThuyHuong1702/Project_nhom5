import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PrivacySettingsScreen = ({ navigation }) => {
    const [dataCollectionEnabled, setDataCollectionEnabled] = useState(true);
    const [sharingEnabled, setSharingEnabled] = useState(true);

    return (
        <View style={styles.container}>
            {/* Header with Back Button */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <FontAwesome name="chevron-left" size={24} color="#A9A9A9" />
                </TouchableOpacity>
                <Text style={styles.header}>Cài đặt quyền riêng tư</Text>
            </View>

            {/* Privacy Settings Options */}
            <View style={styles.optionsContainer}>
                <View style={[styles.optionBox, styles.withSeparator]}>
                    <View style={styles.optionContent}>
                        <Text style={styles.optionText}>Bộ sưu tập thông tin</Text>
                        <Switch
                            value={dataCollectionEnabled}
                            onValueChange={(value) => setDataCollectionEnabled(value)}
                        />
                    </View>
                    <Text style={styles.optionDescription}>Cho phép thu thập thông tin để phân tích</Text>
                </View>

                <View style={styles.optionBox}>
                    <View style={styles.optionContent}>
                        <Text style={styles.optionText}>Chia sẻ</Text>
                        <Switch
                            value={sharingEnabled}
                            onValueChange={(value) => setSharingEnabled(value)}
                        />
                    </View>
                    <Text style={styles.optionDescription}>Chia sẻ ẩn danh bài nói để giúp Duolingo cải thiện</Text>
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
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        justifyContent: 'center',
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
    optionsContainer: {
        marginTop: 16,
        borderRadius: 12,
        backgroundColor: '#fff',
        padding: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    optionBox: {
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    withSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    optionDescription: {
        color: '#666',
        fontSize: 14,
        marginTop: 8,
    },
});

export default PrivacySettingsScreen;
