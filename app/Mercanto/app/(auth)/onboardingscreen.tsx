import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  image: React.ReactNode;
}

const onboardingData: OnboardingItem[] = [
  {
    id: "1",
    title: "Welcome to Mercato!",
    description: "An online store that makes your modern life way easier.",
    image: <AntDesign name="shoppingcart" size={150} color="blue" />,
  },
  {
    id: "2",
    title: "Your number one Online Store",
    description: "Enjoy a wonderful shopping experience.",
    image: <Entypo name="shop" size={150} color="#FF3B30" />,
  },
  {
    id: "3",
    title: "sign up Today",
    description:
      "Join today and feel the unimaginable power of online shopping.",
    image: <Ionicons name="filter" size={150} color="#4CD964" />,
  },
];

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const router = useRouter();

  const isAuthenticated = async () => {
    try {
      const hasCompletedOnboarding = await AsyncStorage.getItem(
        "hasCompletedOnboarding"
      );
      return hasCompletedOnboarding === "true";
    } catch (error) {
      console.error("Error checking onboarding status:", error);
      return false;
    }
  };

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    flatListRef.current?.scrollToIndex({
      index: onboardingData.length - 1,
      animated: true,
    });
    setCurrentIndex(onboardingData.length - 1);
  };

  const handleDone = async () => {
    try {
      await AsyncStorage.setItem("hasCompletedOnboarding", "true");
      if (await isAuthenticated()) {
        router.replace("/tabs");
      } else {
        router.replace("/auth/login");
      }
    } catch (error) {
      console.error("Error updating onboarding status:", error);
    }
  };

  return (
    <LinearGradient colors={["#fff", "#222", "black"]} style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={styles.imageContainer}>{item.image}</View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        {currentIndex === onboardingData.length - 1 ? (
          <TouchableOpacity onPress={handleDone}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.dotsContainer}>
        {onboardingData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#09090B",
  },
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "semibold",
    marginBottom: 10,
    color: "#ffff",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#ffff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 15,
    color: "BEF264",
    zIndex: 1,
  },
  buttonCover: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },
  dot: {
    width: 8,
    height: 6,
    borderRadius: 4,
    backgroundColor: "#333",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#fff",
  },
});
export default OnboardingScreen;
