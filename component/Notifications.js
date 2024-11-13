import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NotificationsScreen = ({ navigation }) => {
    const notifications = [
        {
            title: 'Nhắc nhở',
            description: 'Nhắc nhở luyện tập hằng ngày và giữ streak',
            actionText: 'Đã tắt 1 thông báo',
        },
        {
            title: 'Bạn bè',
            description: 'Cập nhật khi có người theo dõi mới và bạn bè đạt thành tích mới',
        },
        {
            title: 'Bảng xếp hạng',
            description: 'Cập nhật thông tin giải đấu',
        },
        {
            title: 'Thông báo',
            description: 'Cập nhật về các tính năng mới, khuyến mãi và các sự kiện',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.header}>Thông báo</Text>
            </View>
            <View style={styles.notificationsContainer}>
                {notifications.map((notification, index) => (
                    <View key={index} style={[styles.notificationBox, index < notifications.length - 1 && styles.withSeparator]}>
                        <Text style={styles.notificationTitle}>{notification.title}</Text>
                        <Text style={styles.notificationDescription}>{notification.description}</Text>
                        {notification.actionText && (
                            <TouchableOpacity>
                                <Text style={styles.actionText}>{notification.actionText}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                ))}
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
    backText: {
        fontSize: 18,
        color: '#007AFF',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    notificationsContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        marginTop: 16,
        paddingVertical: 8,
    },
    notificationBox: {
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    withSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    notificationTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    notificationDescription: {
        fontSize: 16,
        color: '#666',
    },
    actionText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
});

export default NotificationsScreen;
