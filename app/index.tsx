import Colors from "@/constants/Colors";
import { defaultStyles } from "@/constants/Styles";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Page = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          isMuted
          isLooping
          shouldPlay
          resizeMode={ResizeMode.COVER}
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>
      <View style={styles.buttons}>
        <Link href='/login' style={[defaultStyles.pillButton, { flex: 1, backgroundColor: Colors.dark }]} asChild>
            <TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>Login</Text>
            </TouchableOpacity>
        </Link>
        <Link href='/signup' style={[defaultStyles.pillButton, { flex: 1, backgroundColor: '#fff' }]} asChild>
            <TouchableOpacity>
                <Text style={{ fontSize: 22, fontWeight: '500' }}>Sign up</Text>
            </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    position: "absolute",
    top: "5%", // Adjust as needed
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    position: 'absolute',
    bottom: '5%',
    width: '100%',
    paddingHorizontal: 20
  }
});

export default Page;