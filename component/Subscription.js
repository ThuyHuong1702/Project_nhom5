import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Animated } from 'react-native';

const SubscriptionScreen = ({ navigation }) => {
    const dolphinAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(dolphinAnimation, {
                    toValue: -10,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(dolphinAnimation, {
                    toValue: 10,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [dolphinAnimation]);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backText}>←</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>SUPER</Text>
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text style={styles.title}>
                    Người học Super sẽ có khả năng hoàn thành khóa học Tiếng Anh cao gấp <Text style={styles.highlight}>6,7 lần!</Text>
                </Text>

                {/* Animated Dolphin Image */}
                <Animated.Image 
                    source={require('../assets/dolphin.png')} 
                    style={[styles.dolphinImage, { transform: [{ translateY: dolphinAnimation }] }]} 
                />

                {/* Features List */}
                <View style={styles.featuresList}>
                    <View style={styles.featureItem}>
                        <Image source={require('../assets/tải xuống.png')} style={styles.icon} />
                        <Text style={styles.featureText}>Trái tim vô hạn</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Image source={require('../assets/tải xuống (1).png')} style={styles.icon} />
                        <Text style={styles.featureText}>Gỡ mọi quảng cáo</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Image source={require('../assets/tải xuống (2).png')} style={styles.icon} />
                        <Text style={styles.featureText}>Thoải mái luyện nghe và nói</Text>
                    </View>
                    <View style={styles.featureItem}>
                        <Image source={require('../assets/tải xuống (3).png')} style={styles.icon} />
                        <Text style={styles.featureText}>Ôn tập lỗi sai giúp khắc phục điểm yếu</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Bottom Buttons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.tryButton}>
                    <Text style={styles.tryButtonText}>DÙNG THỬ VỚI GIÁ 0 ₫</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>KHÔNG, CẢM ƠN</Text>
                </TouchableOpacity>
            </View>
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
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: '#003366',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        top: 20,
    },
    backText: {
        fontSize: 20,
        color: '#A9A9A9',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    contentContainer: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    highlight: {
        color: '#00CC66',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dolphinImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    featuresList: {
        width: '100%',
        marginTop: 20,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
        resizeMode: 'contain',
    },
    featureText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    buttonsContainer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    tryButton: {
        backgroundColor: '#0044FF',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 10,
    },
    tryButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    cancelButton: {
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#333',
        fontSize: 16,
    },
});

export default SubscriptionScreen;
