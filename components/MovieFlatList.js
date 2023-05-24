import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import MovieFlatCard from "./MovieFlatCard";
import useFetch from "../hooks/useFetch";
import { useRouter } from "expo-router";
import capitalize from "../utils/capilatize";

const MovieFlatList = ({ type }) => {
  const { data, loading, error } = useFetch(type);
  const navigate = useRouter();
  return (
    <View style={styles.cardArray}>
      <View style={styles.moiveListHeader}>
        <Text style={styles.popularText}>{capitalize(type)} Movies</Text>
        <TouchableOpacity onPress={()=>navigate.push(`movie-list/${type}`)}>
          <Text style={styles.viewAll}>view all</Text>
        </TouchableOpacity>
      </View>

      <FlatList></FlatList>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <MovieFlatCard movie={item} />}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{ columnGap: 10 }}
          horizontal
        />
      )}
    </View>
  );
};

export default MovieFlatList;

const styles = StyleSheet.create({
  popularText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
    // alignSelf:"center",
  },
  cardArray: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop:20,
  },
  moiveListHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  viewAll: {
    color: "darkblue",
  }
});
