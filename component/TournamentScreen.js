import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const rankingData = [
  { id: '1', name: 'Phùng Văn Vũ', score: 672, medal: '🥇', rankColor: '#f44336', letter: 'V' },
  { id: '2', name: 'Đoàn Thư Ánh', score: 600, medal: '🥈', rankColor: '#ff9800', letter: 'D' },
  { id: '3', name: 'Đỗ Thúy Hường', score: 500, medal: '🥉', rankColor: '#e91e63', letter: 'D' },
  { id: '4', name: 'Harry Luu', score: 444, medal: '', rankColor: '#4caf50', letter: 'H' },
  { id: '5', name: 'Sara Sara', score: 350, medal: '', rankColor: '#ff5733', letter: 'S' },
  { id: '6', name: 'Jenni Kim', score: 300, medal: '', rankColor: '#33ff57', letter: 'J' },
  { id: '7', name: 'Lisa', score: 250, medal: '', rankColor: '#5733ff', letter: 'L' },
  { id: '8', name: 'Roses', score: 200, medal: '', rankColor: '#ff33a1', letter: 'R' },
  { id: '9', name: 'Sara Sara', score: 150, medal: '', rankColor: '#a133ff', letter: 'S' },
  { id: '10', name: 'Lee Hee', score: 100, medal: '', rankColor: '#f4a933', letter: 'H' },
  { id: '11', name: 'Mochi Kim', score: 50, medal: '', rankColor: '#33f4a9', letter: 'M' }
];

const TournamentScreen = ({ navigation }) => {
  const goToRanking = () => {
    navigation.navigate('Ranking');
  };

  const renderRankingItem = ({ item }) => (
    <View style={[styles.rankingItem, item.name === 'Đỗ Thúy Hường' && styles.highlightedItem]}>
      <View style={styles.rankingLeft}>
        <View style={[styles.rankCircle, { backgroundColor: item.rankColor }]}>
          <Text style={styles.rankLetter}>{item.letter}</Text>
        </View>
        <Text style={styles.medal}>{item.medal}</Text>
        <Text style={styles.rankText}>{item.name}</Text>
      </View>
      <Text style={styles.score}>{item.score} ⭐</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.tabs}>
          <Text style={[styles.tabButton, styles.activeTab]}>Giải đấu</Text>
          <TouchableOpacity onPress={goToRanking}>
            <Text style={styles.tabButton}>Xếp hạng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rankSection}>
          {/* Remove ScrollView, only display 4 images */}
          <View style={styles.shieldContainer}>
            <Image
              source={{ uri: 'https://img.icons8.com/?size=100&id=AMtwWjIHfDkt&format=png&color=FAB005' }}
              style={styles.rankImage}
            />
            <Image
              source={{ uri: 'https://img.icons8.com/?size=100&id=E3ZO548VMLFs&format=png&color=000000' }}
              style={styles.rankImage}
            />
            <Image
              source={{ uri: 'https://img.icons8.com/?size=100&id=Qc3cIYKbdKpL&format=png&color=FAB005' }}
              style={styles.rankImage}
            />
            <Image
              source={{ uri: 'https://img.icons8.com/?size=100&id=Qc3cIYKbdKpL&format=png&color=FAB005' }}
              style={styles.rankImage}
            />
          </View>
          <Text style={styles.rankTitle}>Bảng Bạc</Text>
          <Text style={styles.rankSubtitle}>Bảng đấu kết thúc: 4 ngày 13 tiếng 25 phút</Text>
        </View>
      </View>

      <View style={styles.rankingList}>
        <FlatList
          data={rankingData}
          renderItem={renderRankingItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aee2ff', // Toàn bộ nền màu xanh
  },
  header: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tabButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  activeTab: {
    color: 'black',
  },
  rankSection: {
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  shieldContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  rankImage: {
    width: 80,
    height: 80,
    marginRight: 10, // Add space between the images
  },
  rankTitle: {
    fontSize: 26,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  rankSubtitle: {
    color: '#666',
  },
  rankingList: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    margin: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  rankingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ececec',
  },
  highlightedItem: {
    borderWidth: 2,
    borderColor: 'pink', // Pink border for "Đỗ Thúy Hương"
    borderRadius: 10,
    padding: 5,
  },
  rankingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rankCircle: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  rankLetter: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  medal: {
    fontSize: 22,
    marginRight: 5,
    color: '#fbc02d',
  },
  rankText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 16,
    color: '#555',
  },
});

export default TournamentScreen;
