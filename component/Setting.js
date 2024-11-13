import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = ({ navigation }) => {
    // Function to handle the restore subscription button press
    const handleRestoreSubscription = () => {
        Alert.alert(
            "Không tìm thấy đơn hàng nào",
            "Không tìm thấy đơn hàng nào gắn với địa chỉ Apple ID của bạn.",
            [{ text: "Đồng ý", style: "default" }]
        );
    };

    return (
        <View style={styles.container}>
            {/* Header with Centered Title and Right-Aligned Done Button */}
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Cài đặt</Text>
                <TouchableOpacity 
                    style={styles.doneButton}
                    onPress={() => navigation.navigate('HosoScreen')} // Navigate to Hoso screen
                >
                    <Text style={styles.doneText}>HOÀN TẤT</Text>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tài khoản</Text>
                    <View style={styles.optionsContainer}>
                        <TouchableOpacity 
                            style={[styles.option, styles.optionWithBorder]}
                            onPress={() => navigation.navigate('PrivateSettings')}
                        >
                            <Text style={styles.optionText}>Cài đặt riêng</Text>
                            <FontAwesome name="chevron-right" size={24} color="#ddd" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.option, styles.optionWithBorder]}
                            onPress={() => navigation.navigate('Profiles')}
                        >
                            <Text style={styles.optionText}>Hồ sơ</Text>
                            <FontAwesome name="chevron-right" size={24} color="#ddd" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.option, styles.optionWithBorder]}
                            onPress={() => navigation.navigate('Notifications')}
                        >
                            <Text style={styles.optionText}>Thông báo</Text>
                            <FontAwesome name="chevron-right" size={24} color="#ddd" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.option, styles.optionWithBorder]}
                            onPress={() => navigation.navigate('Courses')}
                        >
                            <Text style={styles.optionText}>Khóa học</Text>
                            <FontAwesome name="chevron-right" size={24} color="#ddd" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.option, styles.optionWithBorder]}
                            onPress={() => navigation.navigate('DolphinDash')}
                        >
                            <Text style={styles.optionText}>DolphinDash for Schools</Text>
                            <FontAwesome name="chevron-right" size={24} color="#ddd" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.option, styles.optionWithBorder]}
                            onPress={() => navigation.navigate('Network')}
                        >
                            <Text style={styles.optionText}>Tài khoản mạng xã hội</Text>
                            <FontAwesome name="chevron-right" size={24} color="#ddd" />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.option, styles.optionWithBorder]}
                            onPress={() => navigation.navigate('Private')}
                        >
                            <Text style={styles.optionText}>Cài đặt quyền riêng tư</Text>
                            <FontAwesome name="chevron-right" size={24} color="#ddd" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Gói đăng ký</Text>
                    <View style={styles.singleOptionContainer}>
                        <TouchableOpacity 
                            style={[styles.option, styles.optionWithBorder]}
                            onPress={() => navigation.navigate('Subscription')}
                        >
                            <Text style={styles.optionText}>Chọn gói đăng ký</Text>
                            <FontAwesome name="chevron-right" size={24} color="#ddd" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.singleOptionContainer}>
                        <TouchableOpacity style={styles.restoreButton} onPress={handleRestoreSubscription}>
                            <Text style={styles.restoreText}>KHÔI PHỤC ĐĂNG KÝ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        position: 'relative',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    doneButton: {
        position: 'absolute',
        right: 16,
    },
    doneText: {
        fontSize: 18,
        color: '#007AFF',
        fontWeight: '500',
    },
    scrollContainer: {
        paddingHorizontal: 16,
    },
    section: {
        marginTop: 24,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#666',
        marginBottom: 12,
    },
    optionsContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        backgroundColor: '#fff',
        paddingVertical: 8,
    },
    option: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    optionWithBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    singleOptionContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        backgroundColor: '#fff',
        marginTop: 12,
    },
    restoreButton: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    restoreText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },
});

export default SettingsScreen;
