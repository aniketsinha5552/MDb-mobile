import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from "react-native";
import React from "react";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import MovieList from "../../components/MovieList";
import capitalize from "../../utils/capilatize";

const MoviesList = () => {
  const params = useSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView>
         <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#f5f5f5" },
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          headerTitle: `${capitalize(params.id)} Movies`,
        }}
      />
      <>
        <ScrollView  showsVerticalScrollIndicator={false}>
            <MovieList type={params.id}/>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default MoviesList;

const styles = StyleSheet.create({});
