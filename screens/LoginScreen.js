import React, { useState } from "react";
import { students } from "../assets/data/StudentsDb";
import {
  ScrollView,
  View,
  StyleSheet,
  Button,
  Image,
  Text,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === "" || password === "") {
      setError(true);
      return;
    }
    const student = students.find(
      (student) =>
        student.username === username && student.password === password
    );
    if (student) {
      navigation.navigate("Home", { student });
      setUsername("");
      setPassword("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../assets/Logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Student Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            value={username}
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
          />
          <View>
            <TextInput
              placeholder="Password"
              value={password}
              secureTextEntry={!showPassword}
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
            />
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={25}
              color="#000000"
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            />
          </View>
          <Button title="Login" color="#70116d" onPress={handleLogin} />
          {err && (
            <Text style={{ color: "red", marginTop: 10 }}>
              Please check your username and password
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#424242",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
  },
  eyeIcon: {
    position: "absolute",
    top: 12,
    right: 10,
  },
});
