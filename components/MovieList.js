import { StyleSheet, Text, View ,FlatList, ActivityIndicator} from "react-native";
import React,{useState,useEffect} from "react";
import MovieCard from "./MovieCard";
import useFetch from "../hooks/useFetch";


const MovieList = ({type}) => {
  const {data,loading,error} = useFetch(type)

  return (
    <View style={styles.cardArray}>
      {/* <Text style={styles.popularText}>{type} Movies</Text> */}
       {loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) 
        : (
          data?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
             />
          ))
        )}
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  popularText: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
    alignSelf:"center",
    marginBottom: 10,
  },
  cardArray:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  }
});
