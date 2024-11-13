import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CoursesScreen = ({ navigation }) => {
    const courses = [
        {
            title: 'English',
            icon: require('../assets/my.png'), // replace with your actual icon path
        },
        
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <FontAwesome name="chevron-left" size={24} color="#A9A9A9" />
                </TouchableOpacity>
                <Text style={styles.header}>Khóa học</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.coursesContainer}>
                    {courses.map((course, index) => (
                        <View key={index} style={[styles.courseBox, index < courses.length - 1 && styles.withSeparator]}>
                            <Image source={course.icon} style={styles.courseIcon} />
                            <Text style={styles.courseTitle}>{course.title}</Text>
                            <TouchableOpacity style={styles.removeButton}>
                                <FontAwesome name="minus-circle" size={24} color="red" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </ScrollView>
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
    scrollContainer: {
        paddingTop: 16,
    },
    coursesContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        backgroundColor: '#fff',
    },
    courseBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    withSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    courseIcon: {
        width: 40,
        height: 40,
        marginRight: 20,
    },
    courseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },
    removeButton: {
        marginLeft: 10,
    },
});

export default CoursesScreen;
