import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView, Image, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window'); // Base width and height for additional calculations

const ProfilesScreen = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                {/* Nút Back và Tiêu đề */}
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <FontAwesome name="chevron-left" size={wp('6%')} color="#A9A9A9" />
                    </TouchableOpacity>
                    <Text style={styles.header}>Hồ sơ</Text>
                </View>

                {/* Nội dung Hồ sơ với ScrollView */}
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.profileContainer}>
                        <TouchableOpacity style={styles.avatar}>
                            <Image 
                                source={require('../assets/avatar.webp')} // Update with the correct path
                                style={styles.avatarImage} 
                            />
                        </TouchableOpacity>
                        <Text style={styles.changeAvatarText}>THAY ẢNH ĐẠI DIỆN</Text>

                        <Text style={styles.label}>Tên</Text>
                        <TextInput style={styles.input} defaultValue="Ánh" />

                        <Text style={styles.label}>Tên đăng nhập</Text>
                        <TextInput style={styles.input} defaultValue="nhmszm" />

                        <Text style={styles.label}>Mật khẩu</Text>
                        <TextInput style={styles.input} secureTextEntry={true} />

                        <Text style={styles.label}>Email</Text>
                        <TextInput style={styles.input} defaultValue="atu86113@gmail.com" />

                        <Text style={styles.label}>Số điện thoại</Text>
                        <TextInput style={styles.input} defaultValue="XXXX XX4 604" />
                    </View>

                    {/* Nút Xóa tài khoản */}
                    <TouchableOpacity style={styles.deleteAccountButton}>
                        <Text style={styles.deleteAccountText}>XÓA TÀI KHOẢN</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: hp('1.5%'),
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    backButton: {
        position: 'absolute',
        left: wp('4%'),
    },
    header: {
        fontSize: width * 0.05, // Based on screen width
        fontWeight: 'bold',
        color: '#333',
    },
    scrollContainer: {
        paddingHorizontal: wp('4%'),
        paddingBottom: hp('3%'),
    },
    profileContainer: {
        alignItems: 'center',
        marginTop: hp('3%'),
    },
    avatar: {
        marginBottom: hp('1%'),
    },
    avatarImage: {
        width: width * 0.3, // Adjusted size based on screen width
        height: width * 0.3, // Equal width and height for circle
        borderRadius: (width * 0.3) / 2, // Make it circular
        borderWidth: 1,
        borderColor: '#ddd',
    },
    changeAvatarText: {
        color: '#007AFF',
        fontWeight: 'bold',
        fontSize: wp('4%'),
        marginBottom: hp('2%'),
    },
    label: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: wp('4%'),
        color: '#333',
        marginBottom: hp('0.5%'),
        marginTop: hp('1%'),
    },
    input: {
        width: '100%',
        padding: hp('1.5%'),
        backgroundColor: '#F2F2F2',
        borderRadius: wp('2%'),
        marginBottom: hp('2%'),
        borderColor: '#ddd',
        borderWidth: 1,
        fontSize: width * 0.04, // Adjust font size based on screen width
    },
    deleteAccountButton: {
        backgroundColor: '#FFFFFF',
        borderColor: '#A9A9A9',
        borderWidth: 1,
        borderRadius: wp('2%'),
        paddingVertical: hp('1.5%'),
        alignItems: 'center',
        marginTop: hp('3%'),
        width: '100%',
    },
    deleteAccountText: {
        color: '#FF3B30',
        fontWeight: 'bold',
        fontSize: wp('4%'),
    },
});

export default ProfilesScreen;
