import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import CourseScreen from "./CourseScreen";
import SubjectsScreen from "./SubjectScreen";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
  const { student } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Profile") {
            return <Ionicons name="person" size={size} color={color} />;
          } else if (route.name === "Course") {
            return <Ionicons name="school" size={size} color={color} />;
          } else if (route.name === "Subjects") {
            return (
              <MaterialCommunityIcons
                name="book-open"
                size={size}
                color={color}
              />
            );
          }
        },
        headerShown: false,
        tabBarActiveTintColor: "#70116d",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          backgroundColor: "#fff",
        },
      })}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ student }}
      />
      <Tab.Screen
        name="Course"
        component={CourseScreen}
        initialParams={{ student }}
      />
      <Tab.Screen
        name="Subjects"
        component={SubjectsScreen}
        initialParams={{ student }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
