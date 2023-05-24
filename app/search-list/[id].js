import { StyleSheet, Text, View ,SafeAreaView,ScrollView,ActivityIndicator} from "react-native";
import React,{useState,useEffect} from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import MovieList from "../../components/MovieList";
import capitalize from "../../utils/capilatize";
import axios from "axios";
import { set } from "react-native-reanimated";
import MovieCard from "../../components/MovieCard";

const SearchPage = () => {
  const params = useSearchParams();
  const router = useRouter();
  
  const [searchResults,setSearchResults]=useState([])
  const [loading,setLoading]=useState(false)
  const searchMovie=async()=>{
    setLoading(true)
    try{
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${params.id}&include_adult=false&language=en-US&page=1&api_key=2f0504208b8b68dce9f789c80febfec7`)
        setSearchResults(res.data.results)
        setLoading(false)
    }catch (error){
        alert("Something went wrong")
    }finally{
        setLoading(false)
    }
    
  }
  useEffect(()=>{
    searchMovie()
  },[])

  return (
    <SafeAreaView>
         <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#f5f5f5" },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTitle: `Search Results for ${params.id}`,
        }}
      />
      <>
        <ScrollView  showsVerticalScrollIndicator={false}>
            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ):(
                searchResults?.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))
            )
            }
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({});
