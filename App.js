import { StyleSheet, SafeAreaView, Text, Button, Pressable } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import SongList from "./components/SongList";
import Header from "./components/header";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks={tracks}/>
  } else {
    contentDisplayed = (
    <SpotifyAuthButton style={styles.button} authenticationFunction={getSpotifyAuth}/>
    );
  }

  console.log("tracks", tracks);
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
      {/* <Text onPress={getSpotifyAuth}>Fetch</Text> */}
      {/* <Text style={{ color: "white" }}>Welcome to Assignment 3 - Spotify!</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: Themes.colors.background,
    alignItems: "center",
    // justifyContent: "center",
    flex: 1,
  },
  authbutton: {
    backgroundColor: Themes.colors.spotify,
    borderRadius: 100,
    padding: 15,

  },
  authtext: {
    color: "white",
    fontSize: 20,
  },
  button:{
    justifyContent: "center",
  },
});
