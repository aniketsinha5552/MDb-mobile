import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import trimString from '../utils/trim'

const MovieCard = ({movie}) => {
  const navigate = useRouter()
  return (
    <TouchableOpacity style= {styles.moiveCard} onPress={()=>navigate.push(`movie-details/${movie.id}`)}>
        <Image style={styles.poster} source={{uri:`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}}/>
        <View style={styles.movieCardRight}>
        <Text style={styles.movieName}>{movie.title}</Text>
        <View style={styles.dateRating}>
        <Text style={{color:"#d18700",fontSize:13}}>{movie.release_date}</Text>
        <Text style={{color:"#d18700",fontSize:13}}>{movie.vote_average}⭐</Text>
        </View>
        <Text style={styles.desc}>{trimString(movie.overview,200)}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default MovieCard

const styles = StyleSheet.create({
    moiveCard:{
        backgroundColor:"#fff",
        height: 200,
        width: 350,
        borderRadius: 10,
        margin: 10,
        display:"flex",
        flexDirection:"row",
    },
    poster :{
        width:150,
        height:200,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    movieName:{
        fontWeight:"bold",
        maxWidth:180,
        marginBottom:10,
    },
    movieCardRight:{
        marginLeft:10,
        marginTop:10,

    },
    dateRating:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginRight:5,
    },
    desc:{
        fontSize:12,
        marginTop:5,
        fontStyle:"italic",
        width:180,
    }
})