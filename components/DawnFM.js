import { View, FlatList, Text, Image, StyleSheet, Dimensions } from "react-native";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds.js/"

const windowWidth = Dimensions.get('window').width;


const DawnFM = ({title, image, album, time, idx, artist}) => {
    return (
        <View style={styles.songrow}>
            <Text style={styles.greytext}>{idx + 1}</Text>
            <Image style={styles.imagestyle} source={{ uri: image }}/>
            <View>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                <Text style={styles.greytext}>{artist}</Text>
            </View>
            <Text numberOfLines={1} style={styles.text}>{album}</Text>
            <Text style={styles.greytext}>{millisToMinutesAndSeconds(time)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "flex-start",
        // alignItems: "flex-start",
    },
    text: {
        color: "white",
        marginRight: 20,
        width: windowWidth * 0.27
        
    },
    title: {
        color: "white",
        marginRight: 10,
        width: windowWidth * 0.27
    },
    greytext: {
        color: "grey",
        marginRight: 20,
        
    },
    headerimage: {
        width: 20,
        height: 20,
    },
    songrow: {
        padding:15,
        flex: 1,
        flexDirection: "row",
        alignItems : "center",
        justifyContent: "space-between",
        marginRight: 10,
        // width: 'windowWidth',
    },
    imagestyle:{
        width: 50,
        height:50,
        marginRight: 10,
    },
});

export default DawnFM;