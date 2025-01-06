import { Image, ScrollView, StyleSheet, View } from "react-native";
import banner from "../assets/Logo.png";
import React from "react";
import { Divider, Text } from "react-native-paper";
import { marks, subjects } from "../assets/data/StudentsDb";

const SubjectsScreen = ({ route }) => {
  const { student } = route.params;
  const subjectList = subjects.filter(
    (subject) => subject.course_id === student.course_id
  );

  const marksList = marks.filter((mark) => mark.student_id === student.id);

  let sum = 0;

  marksList.forEach((mark) => {
    sum += mark.marks;
  });

  const average = sum / subjectList.length;

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
      <ScrollView>
        <View style={styles.bannerContainer}>
          <Image source={banner} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.courseCard}>
          <Text variant="headlineMedium" style={styles.name}>
            Computer Science
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

            {result &&
              result.map((result) => (
                <View key={result.subjectName}>
                  <View style={styles.tableData}>
                    <Text variant="bodyMedium" style={styles.tdText}>
                      {result.subjectName}
                    </Text>
                    <Text variant="bodyMedium" style={styles.tdText}>
                      {result.marks}
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
  profileImage: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  subDetails: {
    fontSize: 17,
    marginTop: 10,
    textAlign: "center",
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
  },
  markDetailsContainer: {
    width: "90%",
    marginTop: 15,
    gap: 2,
  },
  markDetails: {
    fontSize: 14,
    lineHeight: 21,
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
  tableHeader: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    gap: 150,
  },
  secondDivider: {
    width: 300,
    height: 2,
    marginTop: 10,
    opacity: 0.35,
  },
  tableData: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  tdText: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 10,
  },
});

export default SubjectsScreen;
