import React, { useState } from 'react'; // Import useState from React
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NotificationScreen = () => {
    const [notifications, setNotifications] = useState([
        // Follow notifications
        {
            type: 'follow',
            name: 'Sung Sam',
            time: '1 ngày',
            message: 'vừa bắt đầu theo dõi bạn!',
            actionText: 'THEO DÕI LẠI',
            icon: require('../assets/User_add_alt_fill.png'),
            followedBack: false,
            avatar: require('../assets/Sungsam.png'),
        },
        {
            type: 'follow',
            name: 'Nguyễn Văn A',
            time: '3 ngày',
            message: 'vừa theo dõi bạn!',
            actionText: 'THEO DÕI LẠI',
            icon: require('../assets/User_add_alt_fill.png'),
            followedBack: false,
            avatar: require('../assets/a.png')
        },

        // Achievement notifications
        {
            type: 'achievement',
            name: 'Đoàn Thị Thắm',
            time: '4 ngày',
            message: 'Đã đạt 105 điểm Tiếng Anh!',
            actionText: 'CHÚC MỪNG',
            icon: require('../assets/pháo hoa 1.png'),
            bagIcon: require('../assets/pháo hoa 1.png'),
            bagCount: 3,
            avatar: require('../assets/tham.png'),
            comments: [
                {
                    name: 'MarcioMatsuoka',
                    message: 'Fantastic performance.    Congrats',
                   
                },
            ],
        },
        {
            type: 'achievement',
            name: 'Lê Minh B',
            time: '2 ngày',
            message: 'Đã đạt top 3 giải đấu Hồng Ngọc!',
            actionText: 'CHÚC MỪNG',
            icon: require('../assets/pháo hoa 1.png'),
            bagIcon: require('../assets/pháo hoa 1.png'),
            bagCount: 2,
            avatar: require('../assets/ban.png'),
            comments: [
                {
                    name: 'Anna Smith',
                    message: 'Great job!',
                    
                },
            ],
        },

        // Streak notifications
        {
            type: 'streak',
            name: 'Bạn',
            time: '4 ngày',
            message: 'Đã hoàn thành 100 ngày streak!',
            actionText: 'CHIA SẺ',
            icon: require('../assets/Export.png'),
            avatar: require('../assets/b.png'),
        },
        {
            type: 'streak',
            name: 'Bạn',
            time: '1 ngày',
            message: 'Đã hoàn thành 50 ngày liên tiếp!',
            actionText: 'CHIA SẺ',
            icon: require('../assets/Export.png'),
            avatar: require('../assets/b.png'),
        },
    ]
    );
    const handleFollowBack = (index) => {
        setNotifications((prevNotifications) => {
            const updatedNotifications = [...prevNotifications];
            const notification = updatedNotifications[index];

            if (!notification.followedBack) {
                notification.followedBack = true;
            }

            return updatedNotifications;
        });
    };
    const addComment = (index, newComment) => {
        setNotifications((prevNotifications) => {
            const updatedNotifications = [...prevNotifications];
            const notification = updatedNotifications[index];
    
            // Thêm bình luận mới vào mảng comments
            if (notification.comments) {
                notification.comments.push({
                    name: 'You',
                    message: newComment,
                    icon: require('../assets/comment_duotone_line.png'),
                });
            } else {
                notification.comments = [
                    {
                        name: 'You',
                        message: newComment,
                        icon: require('../assets/comment_duotone_line.png'),
                    },
                ];
            }
    
            // Tăng `commentCount` nếu đã tồn tại, hoặc khởi tạo nếu chưa có
            notification.commentCount = (notification.commentCount || 0) + 1;
    
            return updatedNotifications;
        });
    };
    
   

    const handleCongratulate = (index) => {
        setNotifications((prevNotifications) => {
            const updatedNotifications = [...prevNotifications];
            updatedNotifications[index].congratulated = true;
            updatedNotifications[index].bagCount += 1;
            return updatedNotifications;
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bảng tin</Text>
            <ScrollView>
                {notifications.map((notification, index) => {
                    if (notification.type === 'follow') {
                        return (
                            <FollowNotification
                                key={index}
                                notification={notification}
                                onFollowBack={() => handleFollowBack(index)}
                            />
                        );
                    } else if (notification.type === 'achievement') {
                        return (
                            <AchievementNotification
                                key={index}
                                notification={notification}
                                onCongratulate={() => handleCongratulate(index)}
                                onAddComment={(newComment) => addComment(index, newComment)}
                            />
                        );
                    } else if (notification.type === 'streak') {
                        return <StreakNotification key={index} notification={notification} />;
                    }
                    return null;
                })}
            </ScrollView>
        </View>
    );
};

const FollowNotification = ({ notification, onFollowBack }) => (
    <View style={stylesFollow.notificationBox}>
        <View style={stylesFollow.userInfo}>
            <Image source={notification.avatar} style={stylesFollow.avatar} />
            <View style={stylesFollow.textContainer}>
                <Text style={stylesFollow.name}>
                    {notification.name} <Text style={stylesFollow.inlineMessage}>{notification.message}</Text>
                </Text>
                <Text style={stylesFollow.time}>{notification.time}</Text>
            </View>
        </View>
        <TouchableOpacity
            style={[stylesFollow.actionButton, notification.followedBack && { backgroundColor: '#E0F0FF' }]}
            onPress={onFollowBack}
        >
            <Image source={notification.icon} style={stylesFollow.actionIcon} />
            <Text style={stylesFollow.actionText}>
                {notification.followedBack ? 'BẠN BÈ' : notification.actionText}
            </Text>
        </TouchableOpacity>
    </View>
);

const AchievementNotification = ({ notification, onAddComment, onCongratulate }) => {
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (newComment.trim()) {
            onAddComment(newComment);
            setNewComment('');
        }
    };

    return (
        <View style={stylesAchievement.notificationBox}>
            <View style={stylesAchievement.userInfo}>
                <Image source={notification.avatar} style={stylesAchievement.avatar} />
                <View style={stylesAchievement.textContainer}>
                    <Text style={stylesAchievement.name}>{notification.name}</Text>
                    <Text style={stylesAchievement.time}>{notification.time}</Text>
                </View>
            </View>
            <Text style={stylesAchievement.message}>{notification.message}</Text>

            <View style={stylesAchievement.iconContainer}>
                <TouchableOpacity
                    style={[stylesAchievement.actionButton, notification.congratulated && { backgroundColor: '#E0F0FF' }]}
                    onPress={onCongratulate}
                    disabled={notification.congratulated}
                >
                    <Image source={notification.icon} style={stylesAchievement.actionIcon} />
                    <Text style={stylesAchievement.actionText}>
                        {notification.congratulated ? 'ĐÃ CHÚC MỪNG' : notification.actionText}
                    </Text>
                </TouchableOpacity>

                <View style={stylesAchievement.badgeContainer}>
                    <Image source={notification.bagIcon} style={stylesAchievement.bagIcon} />
                    <Text style={stylesAchievement.bagCount}>{notification.bagCount}</Text>
                </View>
            </View>

            {notification.comments.map((comment, index) => (
                <View key={index} style={stylesAchievement.commentBox}>
                    <Text>
                        <Text style={stylesAchievement.commentName}>{comment.name}</Text>
                        <Text style={stylesAchievement.commentMessage}>: {comment.message}</Text>
                    </Text>
                </View>
            ))}

            <View style={stylesAchievement.commentInputContainer}>
                <TextInput
                    style={stylesAchievement.commentInput}
                    placeholder="Thêm một bình luận..."
                    placeholderTextColor="gray"
                    value={newComment}
                    onChangeText={setNewComment}
                />
                <TouchableOpacity onPress={handleAddComment} style={stylesAchievement.addButton}>
                    <Text style={stylesAchievement.addButtonText}>Đăng</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const StreakNotification = ({ notification }) => (
    <View style={stylesStreak.notificationBox}>
        <View style={stylesStreak.userInfo}>
            <Image source={notification.avatar} style={stylesStreak.avatar} />
            <View style={stylesStreak.textContainer}>
                <Text style={stylesStreak.name}>{notification.name}</Text>
                <Text style={stylesStreak.time}>{notification.time}</Text>
            </View>
        </View>
        <Text style={stylesStreak.message}>{notification.message}</Text>
        <TouchableOpacity style={stylesStreak.actionButton}>
            <Image source={notification.icon} style={stylesStreak.actionIcon} />
            <Text style={stylesStreak.actionText}>{notification.actionText}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: wp('4%') },
    title: { fontSize: wp('6%'), fontWeight: 'bold', marginBottom: hp('2%'), alignSelf: 'center' },
});

const stylesFollow = StyleSheet.create({
    notificationBox: { backgroundColor: '#fff', padding: wp('4%'), borderRadius: wp('3%'), marginBottom: hp('2%'), borderWidth: 1, borderColor: '#e0e0e0', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 2 },
    userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: hp('1%') },
    avatar: { width: wp('10%'), height: wp('10%'), borderRadius: wp('5%'), marginRight: wp('3%') },
    textContainer: { flex: 1 },
    name: { fontWeight: 'bold', fontSize: wp('4%'), color: '#000' },
    inlineMessage: { fontSize: wp('3.5%'), color: '#333', fontWeight: 'regular'},
    time: { color: 'gray', fontSize: wp('3.5%') },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: hp('0.8%'),
        borderRadius: wp('2%'),
        backgroundColor: '#FFF',
        borderColor: '#e0e0e0',
        borderWidth: 1,
        marginTop: hp('1%'),
        width: wp('30%'), // Set specific width to make it narrower
        justifyContent: 'center', // Center text and icon
    },
    actionIcon: { width: wp('4%'), height: wp('4%'), marginRight: wp('1%'), tintColor: '#007BFF' },
    actionText: { fontSize: wp('3.8%'), fontWeight: '500', color: '#333' },
});

const stylesAchievement = StyleSheet.create({
    notificationBox: { backgroundColor: '#fff', padding: wp('4%'), borderRadius: 15, marginBottom: hp('2%'), borderWidth: 1, borderColor: '#dcdcdc' },
    userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: hp('1%') },
    avatar: { width: wp('10%'), height: wp('10%'), borderRadius: wp('5%'), marginRight: wp('3%') },
    textContainer: { flex: 1 },
    name: { fontWeight: 'bold', fontSize: wp('4%'), color: '#000' },
    time: { color: 'gray', fontSize: wp('3.5%') },
    message: { fontSize: wp('4.5%'), marginTop: hp('1%'), marginBottom: hp('1%'), color: '#333' },
    iconContainer: { flexDirection: 'row', alignItems: 'center' },
    actionButton: { flexDirection: 'row', alignItems: 'center', borderColor: '#C7C7C7', borderWidth: 1, borderRadius: 10, paddingVertical: hp('0.8%'), paddingHorizontal: wp('3%'), backgroundColor: '#FFF' },
    actionIcon: { width: wp('4%'), height: wp('4%') },
    actionText: { color: '#333', fontWeight: '600', marginLeft: wp('1%'), fontSize: wp('3.8%') },
    badgeContainer: { flexDirection: 'row', alignItems: 'center', marginLeft: wp('33%') },
    bagIcon: { width: wp('6%'), height: wp('6%') },
    bagCount: { fontSize: wp('4%'), color: 'gray', marginLeft: wp('1%') },
    commentBox: { flexDirection: 'row', alignItems: 'center', marginTop: hp('1%') },
    commentName: { fontWeight: 'bold', fontSize: wp('3.8%'), color: '#000' },
    commentMessage: { fontSize: wp('3.8%'), color: '#333', marginLeft: wp('1%') },
    commentInputContainer: { flexDirection: 'row', alignItems: 'center', marginTop: hp('1%') },
    commentInput: { flex: 1, borderColor: '#e0e0e0', borderWidth: 1, borderRadius: wp('5%'), padding: hp('1%'), paddingHorizontal: wp('4%'), fontSize: wp('3.8%'), color: '#333' },
    addButton: { paddingHorizontal: wp('2%') },
    addButtonText: { color: '#007BFF', fontSize: wp('4%') },
});

const stylesStreak = StyleSheet.create({
    notificationBox: { backgroundColor: '#fff', padding: wp('4%'), borderRadius: 15, marginBottom: hp('2%'), borderWidth: 1, borderColor: '#dcdcdc' },
    userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: hp('1%') },
    avatar: { width: wp('10%'), height: wp('10%'), borderRadius: wp('5%'), marginRight: wp('3%') },
    textContainer: { flex: 1 },
    name: { fontWeight: 'bold', fontSize: wp('4%'), color: '#000' },
    time: { color: 'gray', fontSize: wp('3.5%') },
    message: { fontSize: wp('4.5%'), marginTop: hp('1%'), color: '#333' },
    actionButton: { flexDirection: 'row', alignItems: 'center', borderColor: '#C7C7C7', borderWidth: 1, borderRadius: 10, paddingVertical: hp('0.8%'), paddingHorizontal: wp('3%'), alignSelf: 'flex-start', marginTop: hp('1%'), backgroundColor: '#FFF' },
    actionIcon: { width: wp('4%'), height: wp('4%') },
    actionText: { color: '#333', fontWeight: '600', marginLeft: wp('1%'), fontSize: wp('3.8%') },
});

export default NotificationScreen;