import { Image, ScrollView, StyleSheet, View } from "react-native";
import banner from "../assets/Logo.png";
import React from "react";
import { Divider, Text } from "react-native-paper";
import { courses, marks, subjects } from "../assets/data/StudentsDb";

const SubjectsScreen = ({ route }) => {
  const { student } = route.params;

  // Find the course associated with the student
  const course = courses.find((course) => course.id === student.course_id);

  // Filter subjects and marks based on the student
  const subjectList = subjects.filter(
    (subject) => subject.course_id === student.course_id
  );
  const marksList = marks.filter((mark) => mark.student_id === student.id);

  // Calculate total and average marks
  const totalMarks = marksList.reduce((sum, mark) => sum + mark.marks, 0);
  const average = subjectList.length ? totalMarks / subjectList.length : 0;

  // Map marks to their respective subjects
  const result = marksList.map((mark) => {
    const subject = subjectList.find(
      (subject) => subject.id === mark.subject_id
    );
    return {
      subjectName: subject?.name || "Unknown Subject",
      marks: mark.marks,
    };
  });

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.courseCard}>
          <Text variant="headlineMedium" style={styles.name}>
            {course?.name || "Unknown Course"}
          </Text>
          <Text variant="bodyMedium" style={styles.subDetails}>
            {subjectList.length} Subjects | Average: {Math.floor(average)}
          </Text>

          <Divider style={styles.divider} bold={true} />
          <Text variant="bodyMedium" style={styles.marksInfoHeader}>
            Marks Information
          </Text>
          <View style={styles.markDetailsContainer}>
            <View style={styles.tableHeader}>
              <Text variant="bodySmall">Subject</Text>
              <Text variant="bodySmall">Marks</Text>
            </View>
            <Divider style={styles.secondDivider} bold={true} />

            {result.map((item, index) => (
              <View key={index}>
                <View style={styles.tableData}>
                  <Text variant="bodyMedium" style={styles.tdText}>
                    {item.subjectName}
                  </Text>
                  <Text variant="bodyMedium" style={styles.tdText}>
                    {item.marks}
                  </Text>
                </View>
                <Divider style={styles.secondDivider} bold={true} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>UOV © 2024</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100, // Ensures space for footer on small screens
  },
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
    color: "#000",
  },
  subDetails: {
    fontSize: 17,
    marginTop: 10,
    textAlign: "center",
    color: "#000",
  },
  divider: {
    width: 300,
    height: 2,
    marginTop: 30,
  },
  marksInfoHeader: {
    width: "90%",
    fontSize: 17,
    marginTop: 20,
    fontWeight: "bold",
    color: "#000",
  },
  markDetailsContainer: {
    width: "90%",
    marginTop: 15,
  },
  tableHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  secondDivider: {
    width: "100%",
    height: 1,
    marginTop: 10,
    opacity: 0.35,
  },
  tableData: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  tdText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#000",
  },
  footer: {
    backgroundColor: "#70116d",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 8,
  },
  footerText: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },
});

export default SubjectsScreen;
