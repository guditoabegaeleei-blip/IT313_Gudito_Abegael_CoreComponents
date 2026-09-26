import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const students = [
  { id: "s1", name: "Ana Cruz", course: "IT313", units: 21, isFullLoad: true },
  {
    id: "s2",
    name: "Bea Santos",
    course: "IT313",
    units: 15,
    isFullLoad: false,
  },
  { id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true },
  {
    id: "s4",
    name: "Dex Alonzo",
    course: "IT313",
    units: 12,
    isFullLoad: false,
  },
];

type StudentCardProps = {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

function StudentCard({ name, course, units, isFullLoad }: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text>Course: {course}</Text>
      <Text>Units Enrolled: {units}</Text>
      {isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
    </View>
  );
}

export default function StudentRoster() {
  const [roster, setRoster] = useState(students);

  const reverseRoster = () => {
    setRoster([...roster].reverse());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`${roster.length} Students`}</Text>

      <Button title="Reverse Roster" onPress={reverseRoster} />

      {roster.map((student) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    marginTop: 12,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  fullLoad: {
    marginTop: 8,
    fontWeight: "bold",
  },
});
