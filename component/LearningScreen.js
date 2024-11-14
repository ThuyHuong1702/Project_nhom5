import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Image, Dimensions } from 'react-native';

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/dophinthanhtoan.jpg')}
          style={styles.logo}
        />
        <View style={styles.title}>
          <Text style={styles.titleText}>DolphinDash</Text>
          <View style={styles.plusBadge}>
            <Text style={styles.plusText}>PLUS</Text>
          </View>
        </View>
      </View>

      <Text style={styles.description}>
        Tận hưởng tất cả nội dung trong app DolphinDash vô giới hạn!
      </Text>

      {/* Subscription Plans */}
      <TouchableOpacity
        style={[styles.plan, selectedPlan === 1 && styles.selectedPlan]}
        onPress={() => handleSelectPlan(1)}
      >
        <Text style={styles.planText}>1 tháng</Text>
        <Text style={styles.planPrice}>199.000đ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.plan, selectedPlan === 2 && styles.selectedPlan]}
        onPress={() => handleSelectPlan(2)}
      >
        <View style={styles.badge}>
          <Text style={styles.badgeText}>TỐT NHẤT • Sản phẩm giảm giá</Text>
        </View>
        <Text style={styles.planText}>12 tháng</Text>
        <View style={styles.planPriceGroup}>
          <Text style={styles.oldPrice}>2.748.000 đ</Text>
          <Text style={styles.newPrice}>1.149.000 đ</Text>
          <Text style={styles.monthlyPrice}>95.750 đ/tháng</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.plan, selectedPlan === 3 && styles.selectedPlan]}
        onPress={() => handleSelectPlan(3)}
      >
        <View style={styles.familyBadgeContainer}>
          <Text style={styles.familyBadge}>Tối đa 6 người</Text>
        </View>
        <View style={styles.planContent}>
          <Text style={styles.planText}>Gói Gia đình</Text>
          <Text style={styles.planPrice}>2.399.000đ</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.paymentButtonsContainer}>
        <TouchableOpacity
          style={[styles.paymentButton, styles.momoButton]}
          onPress={() => Linking.openURL('https://momo.vn')}
        >
          <Image
            source={require('../assets/momo.jpg')}
            style={styles.paymentLogo}
          />
          <Text style={styles.paymentButtonText}>Thanh toán qua MoMo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.paymentButton, styles.vnpButton]}
          onPress={() => Linking.openURL('https://www.vnpay.vn')}
        >
          <Image
            source={require('../assets/vnp.jpg')}
            style={styles.paymentLogo}
          />
          <Text style={styles.paymentButtonText}>Thanh toán qua VNP</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.note}>
        *Hủy đăng ký bất cứ khi nào tại 
        <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com/store/account/subscriptions')}>
          <Text style={styles.link}> Google Play</Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Allow the container to take the full available space
    padding: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 55,
    height: 55,
    marginRight: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0089CC',
  },
  plusBadge: {
    backgroundColor: '#00B7FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    marginLeft: 5,
  },
  plusText: {
    color: '#fff',
    fontSize: 16,
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 25,
  },
  plan: {
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  selectedPlan: {
    borderColor: '#00B7FF',
  },
  badge: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#00B7FF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
  planText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  planPriceGroup: {
    alignItems: 'flex-end',
  },
  oldPrice: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    color: '#ff4500',
    fontSize: 16,
    fontWeight: 'bold',
  },
  monthlyPrice: {
    fontSize: 12,
    color: 'gray',
  },
  familyBadgeContainer: {
    position: 'absolute',
    top: -10,
    left: 10,
    backgroundColor: '#00B7FF',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  familyBadge: {
    color: 'white',
    fontSize: 12,
  },
  planContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  paymentButtonsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  paymentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    width: '90%',
    justifyContent: 'center',
  },
  momoButton: {
    backgroundColor: '#D500F9', 
  },
  vnpButton: {
    backgroundColor: '#00A8E8', 
  },
  paymentLogo: {
    width: 35,
    height: 35,
    marginRight: 10,
    borderRadius: 5,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  note: {
    color: '#777',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#00B7FF',
    fontWeight: 'bold',
  },
});

export default App;
