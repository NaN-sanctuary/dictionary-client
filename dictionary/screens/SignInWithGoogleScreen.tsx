// web: 787020276670-pcd7dqjtsvvt7e655lelkr2tmaa67b15.apps.googleusercontent.com
import { default as React, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from 'react-native-elements';

WebBrowser.maybeCompleteAuthSession();

const SignInWithGoogleScreen: React.FC = () => {

  const [token, setToken] = useState<string>("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "",
    iosClientId: "",
    webClientId: "787020276670-pcd7dqjtsvvt7e655lelkr2tmaa67b15.apps.googleusercontent.com",
  });
  useEffect(() => {
    handleEffect();
  }, [response, token]);

  async function handleEffect() {
    const user = await getLocalUser();
    console.log("user", user);
    if (!user) {
      if (response?.type === "success") {
        setToken(response.authentication.accessToken);
        getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(user);
      console.log("loaded locally");
    }
  }

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem("@user");
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };


  return (
    <View style={styles.container}>

      {!userInfo ? (<Button title={"Sign in with google"} onPress={() => {
        promptAsync();
      }} />
      ) : (
        <View style={styles.card}>
          <Text style={styles.text}>Token: {token}</Text>
          <Text style={styles.text}>Email: {userInfo.email}</Text>
          <Text style={styles.text}>
            Verified: {userInfo.verified_email ? "yes" : "no"}
          </Text>
          <Text style={styles.text}>Name: {userInfo.name}</Text>
          <Button title="Log out" onPress={() => {
            AsyncStorage.removeItem("@user")
            setUserInfo(null);
          }} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default SignInWithGoogleScreen;
