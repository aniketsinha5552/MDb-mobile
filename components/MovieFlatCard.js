import { Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import trimString from '../utils/trim'

const MovieFlatCard = ({movie}) => {
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
        <Text style={styles.desc}>{trimString(movie.overview,150)}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default MovieFlatCard

const styles = StyleSheet.create({
    moiveCard:{
        backgroundColor:"#fff",
        height: 310,
        width: 200,
        borderRadius: 10,
        margin: 10,
        display:"flex",
        flexDirection:"column",
    },
    poster :{
        width:200,
        height:150,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    movieName:{
        fontWeight:"bold",
        width:170,
        marginBottom:5,
    },
    movieCardRight:{
        marginLeft:5,
        marginTop:5,
        padding:5,
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
    }
})