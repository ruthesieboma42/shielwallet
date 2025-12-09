import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const onboardingData = [
  {
    id: 1,
    // from src/Onboarding.js to project assets folder: ../assets/...
    image: require('./assets/images/Onboarding_1.png'),
    title: 'Welcome to Shield Wallet!',
    description:
      'Your all-in-one digital wallet for secure transactions, bill payments, savings, and exciting rewards. Simplify your financial management and enjoy convenience at your fingertips.',
  },
  {
    id: 2,
    image: require('./assets/images/Onboarding_2.png'),
    title: 'Set Your Financial Goals',
    description:
      'Achieve your dreams by setting financial goals in Shield Wallet. Define targets, track your progress, and receive personalized insights to stay motivated.',
  },
  {
    id: 3,
    image: require('./assets/images/Onboarding_3.png'),
    title: 'Save and Get Rewarded',
    description:
      'Saving is now rewarding with Shield Wallet. Grow your savings effortlessly, earn interest, and enjoy exclusive incentives and discounts. Start saving today and unlock a brighter financial future.',
  },
];

export default function Onboarding() {
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // debug log to confirm effect runs
    console.log('Onboarding mounted, starting auto-advance interval');

    intervalRef.current = setInterval(() => {
      setCurrentScreen(prev => {
        const next = (prev + 1) % onboardingData.length;
        console.log('advancing onboarding to', next);
        return next;
      });
    }, 4000); // change every 4s

    return () => {
      console.log('clearing onboarding interval');
      clearInterval(intervalRef.current);
    };
  }, []);

  const data = onboardingData[currentScreen];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={data.image}
          resizeMode="contain"
          style={styles.image}
        />

        <View style={styles.indicatorRow}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentScreen ? styles.indicatorActive : styles.indicatorInactive,
                index === currentScreen ? { width: 60 } : { width: 7 }
              ]}
            />
          ))}
        </View>

        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>

    <TouchableOpacity 
                    style={{
                        backgroundColor: "#3B28CC",
                        paddingVertical: 24,
						width: 395,
                        borderRadius: 8,
                        marginBottom: 20,
                        marginHorizontal: 40,
                        alignSelf: "center",
                    }}
                    onPress={() => navigation.navigate("Signup")}
                >
                    <Text style={{ color: "#FFFFFF", textAlign: "center", fontSize: 16, fontWeight: "600" }}>
                        Get Started
                    </Text>
                </TouchableOpacity>

				<View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Text 
                            style={{
                                color: "#B3B3B3",
                                fontSize: 16,
                                marginRight: 10,
                            }}>
                            {"Already have an account? "}
                        </Text>
						
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text 
                            style={{
                                color: "#3B28CC",
                                fontSize: 16,
                                fontWeight: "bold",
                            }}>
                            {"Login Here"}
                        </Text>
						</TouchableOpacity>
                    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
	alignItems: "center",
  },
  image: {
    width: '60%',
    height: undefined,
    aspectRatio: 346 / 266,
    alignSelf: "center",
    marginBottom: 24,
  },
  indicatorRow: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "center",
    marginBottom: 24,
  },
  indicator: {
    height: 6,
    borderRadius: 50,
    marginRight: 8,
  },
  indicatorActive: { backgroundColor: "#3B28CC", borderRadius: 2 },
  indicatorInactive: { backgroundColor: "#7DDE9280" },
  title: {
    color: "#000000",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 12,
  },
  description: {
    color: "#797979",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 36,
  },
  button: {
    backgroundColor: "#3B28CC",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
});