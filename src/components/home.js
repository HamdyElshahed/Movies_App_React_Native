import * as React from "react";
import { FlatList, Image, Center } from "native-base";
import { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { getMovies } from "../state_mang/action/movie";
import { MovieContext } from "../state_mang/context/context";
const Home = ({ navigation }) => {
  const { state, dispatch } = useContext(MovieContext);
  useEffect(() => {
    async function actionpromise() {
      dispatch(await getMovies());
    }
    actionpromise();
  }, []);
  console.log(state);

  return (
    <FlatList
      data={state.movies ? state.movies.movies.results : []}
      renderItem={({ item }) => (
        <>
          <View style={{ backgroundColor: "#2B1A1A" }}>
            <Center flex={1} px="3">
              <Image
                size={"2xl"}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                }}
                style={{ width: "90%", height: 350 }}
              />
              <Text
                style={{ fontSize: 20, color: "white" }}
                onPress={() => {
                  navigation.navigate("details", { id: item.id });
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{ fontSize: 20, color: "white"  , textAlign: "right"}}
              >
              Rate :  {item.vote_average}
              </Text>
            </Center>
          </View>
        </>
      )}
    ></FlatList>
  );
};
export default Home;
