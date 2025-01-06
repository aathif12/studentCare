import { useState } from "react";
import { students } from "../assets/data/StudentsDb";
import { ScrollView, View } from "react-native";
import { TextInput } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    if (username === "" && password === "") {
      setError(true);
      return;
    }
    const student = students.find(
      (student) => student.username == username && student.password == password
    );
    if (student) {
      navigation.navigate("Home", { student });
      setUsername("");
      setPassword("");
    } else {
      setError(true);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={banner} style={styles.image} resizeMode="contain" />
        <Text variant="headlineLarge" style={styles.title}>
          Student Login
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="Username"
            mode="outlined"
            value={userName}
            theme={{
              colors: {
                background: "#fff",
                outline: "#424242",
                primary: "#000000",
                placeholder: "#000000",
              },
            }}
            contentStyle={{ color: "#000000" }}
            style={styles.input}
            onChangeText={(text) => setUserName(text)}
          />
          <View>
            <TextInput
              label="Password"
              mode="outlined"
              value={password}
              secureTextEntry={showPassword ? false : true}
              theme={{
                colors: {
                  background: "#fff",
                  outline: "#424242",
                  primary: "#000000",
                  placeholder: "#000000",
                },
              }}
              contentStyle={{ color: "#000000" }}
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
            />
            {showPassword ? (
              <Ionicons
                name="eye-off"
                size={25}
                color="#000000"
                style={styles.eyeIcon}
                onPress={() => setShowPassword(false)}
              />
            ) : (
              <Ionicons
                name="eye"
                size={25}
                color="#000000"
                style={styles.eyeIcon}
                onPress={() => setShowPassword(true)}
              />
            )}
          </View>
          <Button
            mode="contained"
            buttonColor="#70116d"
            textColor="#fff"
            labelStyle={styles.buttonText}
            style={styles.button}
            onPress={handleLogin}
          >
            Login
          </Button>
          {error ? (
            <Error text="Please check your username and password" />
          ) : (
            <></>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 350,
    borderRadius: 10,
    marginTop: -25,
  },
  title: {
    color: "black",
    textTransform: "uppercase",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 50,
    width: 400,
    paddingHorizontal: 16,
    gap: 20,
  },
  input: {
    fontSize: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eyeIcon: {
    position: "absolute",
    top: 19,
    right: 20,
  },
});
