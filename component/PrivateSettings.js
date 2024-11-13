import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PrivateSettingsScreen = ({ navigation }) => {
    // Tạo state để quản lý từng Switch
    const [soundEffect, setSoundEffect] = useState(false);
    const [vibration, setVibration] = useState(false);
    const [encourageNotification, setEncourageNotification] = useState(false);
    const [listeningExercise, setListeningExercise] = useState(false);
    const [friendMissions, setFriendMissions] = useState(false);
    const [friendStreak, setFriendStreak] = useState(false);

    return (
        <View style={styles.container}>
            {/* Nút Back và tiêu đề ở trung tâm */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <FontAwesome name="chevron-left" size={24} color="#A9A9A9" />
                </TouchableOpacity>
                <Text style={styles.header}>Cài đặt riêng</Text>
            </View>

            {/* Phần tiêu đề "Kinh nghiệm học tập" */}
            <Text style={styles.sectionTitle}>Kinh nghiệm học tập</Text>

            <ScrollView contentContainerStyle={styles.optionsContainer}>
                {/* Tùy chọn Hiệu ứng âm thanh */}
                <View style={styles.option}>
                    <Text style={styles.optionText}>Hiệu ứng âm thanh</Text>
                    <Switch
                        value={soundEffect}
                        onValueChange={setSoundEffect}
                        trackColor={{ false: '#ddd', true: '#007AFF' }}
                        thumbColor="#fff"
                    />
                </View>
                {/* Tùy chọn Cảm biến rung */}
                <View style={styles.option}>
                    <Text style={styles.optionText}>Cảm biến rung</Text>
                    <Switch
                        value={vibration}
                        onValueChange={setVibration}
                        trackColor={{ false: '#ddd', true: '#007AFF' }}
                        thumbColor="#fff"
                    />
                </View>
                {/* Tùy chọn Thông báo khích lệ */}
                <View style={styles.option}>
                    <Text style={styles.optionText}>Thông báo khích lệ</Text>
                    <Switch
                        value={encourageNotification}
                        onValueChange={setEncourageNotification}
                        trackColor={{ false: '#ddd', true: '#007AFF' }}
                        thumbColor="#fff"
                    />
                </View>
                {/* Tùy chọn Bài tập nghe */}
                <View style={styles.option}>
                    <Text style={styles.optionText}>Bài tập nghe</Text>
                    <Switch
                        value={listeningExercise}
                        onValueChange={setListeningExercise}
                        trackColor={{ false: '#ddd', true: '#007AFF' }}
                        thumbColor="#fff"
                    />
                </View>
                {/* Tùy chọn Nhiệm vụ bạn bè */}
                <View style={styles.option}>
                    <Text style={styles.optionText}>Nhiệm vụ bạn bè</Text>
                    <Switch
                        value={friendMissions}
                        onValueChange={setFriendMissions}
                        trackColor={{ false: '#ddd', true: '#007AFF' }}
                        thumbColor="#fff"
                    />
                </View>
                {/* Tùy chọn Streak bạn bè */}
                <View style={[styles.option, styles.noBorder]}>
                    <Text style={styles.optionText}>Streak bạn bè</Text>
                    <Switch
                        value={friendStreak}
                        onValueChange={setFriendStreak}
                        trackColor={{ false: '#ddd', true: '#007AFF' }}
                        thumbColor="#fff"
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    backButton: {
        position: 'absolute',
        left: 0,
        paddingLeft: 16,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 20,
        paddingLeft: 8,
        marginTop: 25,
    },
    optionsContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        backgroundColor: '#fff',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    noBorder: {
        borderBottomWidth: 0, // Xóa đường line cuối cùng
    },
    optionText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PrivateSettingsScreen;
