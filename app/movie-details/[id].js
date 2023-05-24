import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState, useEffect } from "react";
import MovieList from "../../components/MovieList";
import capitalize from "../../utils/capilatize";
import axios from "axios";

const MoviesDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    setLoading(true);
    try {
      let res = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?language=en-US&api_key=2f0504208b8b68dce9f789c80febfec7`
      );
      setMovie(res.data);
      setLoading(false);
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#f5f5f5" },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTitle: `${movie ? movie?.title : ""}`,
        }}
      />
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          {loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : (
            <View>
              <View>
                <Image
                  style={styles.backdrop}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${
                      movie ? movie.backdrop_path : ""
                    }`,
                  }}
                />
              </View>
              <View style={styles.posterContainer}>
                <Image
                  style={styles.posterImg}
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${
                      movie ? movie.poster_path : ""
                    }`,
                  }}
                />
                <View style={styles.dateRating}>
                  <Text style={{ color: "#d18700" }}>
                    <Text style={{ fontWeight: "bold", color: "#2c2f33" }}>
                      Release Date
                    </Text>
                    : {movie?.release_date}
                  </Text>
                  <Text style={{ color: "#d18700" }}>
                    <Text style={{ fontWeight: "bold", color: "#2c2f33" }}>
                      Rating
                    </Text>
                    : {movie?.vote_average}⭐
                  </Text>
                  <View>
                    <Text style={styles.genre}>
                      <Text style={{ fontWeight: "bold", color: "#2c2f33" }}>
                        Genre
                      </Text>
                      :{" "}
                      {movie?.genres
                        ?.map((genre) => capitalize(genre.name))
                        .join(", ")}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.overviewContainer}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#2c2f33" }}
                >
                  Overview
                </Text>
                <Text style={{ fontStyle: "italic" }}>{movie?.overview}</Text>
              </View>
              <View style={{ marginLeft: 10, marginRight: 10, padding: 10 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "#2c2f33" }}
                >
                  Useful links
                </Text>
                <View style={styles.usefulLinks}>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(movie?.homepage)}
                  >
                    <Text style={styles.usefulLinksText}>Homepage</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(
                        `https://www.imdb.com/title/${movie?.imdb_id}`
                      )
                    }
                  >
                    <Text style={styles.usefulLinksText}>IMDB</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default MoviesDetails;

const styles = StyleSheet.create({
  posterContainer: {
    position: "relative",
    bottom: 60,
    zIndex: 999,
    overflow: "visible",
    margin: 10,
    display: "flex",
    flexDirection: "row",
  },
  posterImg: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  backdrop: {
    width: "100%",
    height: 250,
  },
  dateRating: {
    marginTop: 60,
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  genre: {
    width: 200,
    color: "#d18700",
  },
  overviewContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -50,
    padding: 10,
  },
  usefulLinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  usefulLinksText: {
    backgroundColor: "#d1d100",
    padding: 10,
    borderRadius: 10,
  },
});
