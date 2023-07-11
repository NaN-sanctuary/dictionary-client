// web: 787020276670-pcd7dqjtsvvt7e655lelkr2tmaa67b15.apps.googleusercontent.com
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as Crypto from 'expo-crypto';
import * as WebBrowser from "expo-web-browser";
import { default as React, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';



WebBrowser.maybeCompleteAuthSession();

const SignInWithGoogleScreen: React.FC = () => {

  const [id_token, setIdToken] = useState<string>("");
  const [access_token, setAccessToken] = useState<string>("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "",
    iosClientId: "",
    webClientId: "787020276670-pcd7dqjtsvvt7e655lelkr2tmaa67b15.apps.googleusercontent.com",
    responseType: "id_token token",
    extraParams: {
      nonce: Crypto.getRandomBytesAsync(16).toString()
    },
    usePKCE: false,
  });

  useEffect(() => {
    handleUserLogin();
  }, [response]);

  useEffect(() => {
    getUserInfo();
  }, [access_token]);

  async function handleUserLogin() {
    await saveUserLoginData();
  }

  async function saveUserLoginData() {
    const user = await getLocalUser();
    if (!user) {
      if (response?.type === "success") {
        setIdToken(response.params.id_token);
        setAccessToken(response.params.access_token);
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


  const getUserInfo = async () => {
    if (!access_token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
    }
  };

  const verifyUser = async () => {
    if (!id_token) return;
    try {
      const response = await fetch(
        "http://localhost:5005/api/User/verify",
        {
          method: 'POST',
          headers: { Authorization: `Bearer ${id_token}` },
        }
      );
      console.log(response);
    } catch (error) {
      // Add your own error handler here
    }
  }

  const revokeToken = async () => {
    await AuthSession.revokeAsync({ token: access_token, clientId: "787020276670-pcd7dqjtsvvt7e655lelkr2tmaa67b15.apps.googleusercontent.com" }, Google.discovery)
  }


  return (
    <View style={styles.container}>

      {!userInfo ? (<Button title={"Sign in with google"} onPress={() => {
        promptAsync();
      }} />
      ) : (
        <View style={styles.card}>
          <Text style={styles.text}>Token: {access_token}</Text>
          <Text style={styles.text}>Email: {userInfo.email}</Text>
          <Text style={styles.text}>
            Verified: {userInfo.verified_email ? "yes" : "no"}
          </Text>
          <Text style={styles.text}>Name: {userInfo.name}</Text>
          <Button title="Log out" onPress={() => {
            revokeToken()
            AsyncStorage.removeItem("@user")
            setUserInfo(null);
          }} />
          <Button title={'VERIFY'} onPress={verifyUser} />
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
    maxWidth: 400,
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
