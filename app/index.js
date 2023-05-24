import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { HeaderTitle } from "@react-navigation/elements";
import MovieList from "../components/MovieList";
import MovieFlatList from "../components/MovieFlatList";
import logo from "../images/logo.png";

const Home = () => {
  const navigate = useRouter();
  const [searchItem, setSearchItem] = useState("");
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#f5f5f5",
          },
          headerShadowVisible: false,
          headerTitle: () => (
            <View style={styles.logoContainer}>
              <Image style={styles.logo} resizeMode="contain" source={logo} />
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Text style={styles.opt}>...</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search For A Movie 🔎"
            value={searchItem}
            onChangeText={(text) => setSearchItem(text)}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text
              style={styles.searchBtnText}
              onPress={() => navigate.push(`search-list/${searchItem}`)}
            >
              Go
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <MovieFlatList type="popular" />
          <MovieFlatList type="upcoming" />
          <MovieFlatList type="top_rated" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    height: 50,
    width: 50,
  },
  logo: {
    height: 50,
    width: 50,
  },
  opt: {
    fontSize: 30,
    marginBottom: 10,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    height: 70,
    width: "100%",
    padding: 5,
  },
  searchInput: {
    flex: 0.8,
    borderBottomColor: "darkgray",
    borderBottomWidth: 1,
    borderRadius: 10,
    borderTopColor: "darkgray",
    borderTopWidth: 1,
    borderLeftColor: "darkgray",
    borderLeftWidth: 1,
    borderRightColor: "darkgray",
    borderRightWidth: 1,
    marginLeft: 10,
    width: "100%",
    height: "100%",
    padding: 10,
  },
  searchButton: {
    flex: 0.2,
    width: "100%",
    height: "100%",
    backgroundColor: "#d1d100",
    borderRadius: 20,
    marginLeft: 10,
  },
  searchBtnText: {
    textAlign: "center",
    marginTop: 18,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Home;
