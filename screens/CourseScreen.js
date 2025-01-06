import { Image, ScrollView, StyleSheet, View } from "react-native";
import banner from "../assets/Logo.png";
import React from "react";
import { Divider, Text } from "react-native-paper";
import { courses } from "../assets/data/StudentsDb";

const CourseScreen = ({ route }) => {
  const { student } = route.params;
  const course = courses.find((course) => course.id === student.course_id);

  return (
    <>
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.courseCard}>
          <Text variant="headlineMedium" style={styles.name}>
            {course.name}
          </Text>
          <Text variant="bodyMedium" style={styles.subDetails}>
            Code: {course.course_code} | Dept: {course.department}
          </Text>

          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.courseInfoHeader}>
            Course Information
          </Text>
          <View style={styles.courseDetailsContainer}>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Code: {course.course_code}
            </Text>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Department: {course.department}
            </Text>
            <Text variant="bodySmall" style={styles.courseDetails}>
              Duration: {course.duration}
            </Text>
            <Text variant="bodySmall" style={styles.courseDetails}>
              {course.description}
            </Text>
          </View>

          <Divider style={styles.divider} bold={true} />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>UOV © 2024</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: "center",
  },
  image: {
    width: 350,
    borderRadius: 10,
    marginTop: -25,
  },
  courseCard: {
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 30,
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 45,
    elevation: 5,
    marginTop: -25,
  },
  name: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    color: "#000", // Ensure text color is black
  },
  subDetails: {
    fontSize: 17,
    marginTop: 10,
    textAlign: "center",
    color: "#000", // Ensure text color is black
  },
  divider: {
    width: 300,
    height: 2,
    marginTop: 30,
  },
  courseInfoHeader: {
    width: "90%",
    fontSize: 17,
    marginTop: 20,
    fontWeight: "bold",
    color: "#000", // Ensure text color is black
  },
  courseDetailsContainer: {
    width: "90%",
    marginTop: 15,
    gap: 2,
  },
  courseDetails: {
    fontSize: 14,
    lineHeight: 21,
    color: "#000", // Ensure text color is black
  },
  footer: {
    backgroundColor: "#70116d",
    marginHorizontal: 15,
    position: "absolute",
    bottom: 0,
    paddingVertical: 8,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});

export default CourseScreen;
