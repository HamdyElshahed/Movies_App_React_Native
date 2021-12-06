// @flow 
import * as React from 'react';
import { useContext , useEffect } from 'react';
import { Text, View } from "react-native";
import { FlatList, Image , Container} from 'native-base';
import { getDetails } from '../state_mang/action/movie';
import { MovieContext } from '../state_mang/context/context';
const Details = (props) => {
    const {state , dispatch}= useContext(MovieContext);
    useEffect(()=>{
        async function actionpromise() {
            dispatch(await getDetails(props.route.params.id))
        }
        actionpromise();
    },[])
    console.log(state.movies.details)
    if (state.movies.details)
    return (
        <>
        <View style={{paddingHorizontal:10 }}>
         {/* <Container flex={1} px="3"> */}
            <Image source={{uri:`https://image.tmdb.org/t/p/w500/${state.movies.details.poster_path}`}} style={{width:"100%" , height:350}}></Image> 
            <Text style={{fontSize:18}}> Title : {state.movies.details.title}</Text>  
            <Text style={{fontSize:18}}> Rate : {state.movies.details.vote_average}</Text>  
            <Text> Overview : {state.movies.details.overview}</Text>  
         {/* </Container> */}
        </View>
        </>

    );
    return (<Text>No Details</Text>)
};
export default Details;