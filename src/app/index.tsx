import { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Student = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
};

type StudentCardProps = {
  id: string;
  name: string;
  year: string;
  photoUrl: string;
  flagged: boolean;
  onToggleFlag: (id: string) => void;
};

const initialStudents: Student[] = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/100?img=2",
    flagged: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/100?img=3",
    flagged: false,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/100?img=4",
    flagged: false,
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=5",
    flagged: false,
  },
];

function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photoUrl }} style={styles.photo} />

      <View style={styles.studentInfo}>
        <Text style={styles.studentName}>{name}</Text>
        <Text style={styles.studentYear}>{year}</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${
          flagged ? "Remove flag for" : "Flag for advising"
        } ${name}`}
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.flagButton,
          flagged && styles.flaggedButton,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={[styles.flagText, flagged && styles.flaggedText]}>
          {flagged ? "★ Flagged" : "☆ Flag"}
        </Text>
      </Pressable>
    </View>
  );
}

export default function StudentDirectory() {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [query, setQuery] = useState("");

  const toggleFlag = (id: string) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === id ? { ...student, flagged: !student.flagged } : student,
      ),
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#201B50" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Student Directory</Text>
        <Text style={styles.headerSubtitle}>
          {students.length} students this term
        </Text>
      </View>

      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="⌕  Search students..."
          placeholderTextColor="#8B89A8"
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
          accessibilityLabel="Search students"
        />

        <ScrollView
          style={styles.list}
          contentContainerStyle={styles.listContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                year={student.year}
                photoUrl={student.photoUrl}
                flagged={student.flagged}
                onToggleFlag={toggleFlag}
              />
            ))
          ) : (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>No students found</Text>
              <Text style={styles.emptySubtitle}>
                Try searching another name.
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F5F4FB",
  },
  header: {
    backgroundColor: "#201B50",
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#FFFFFF",
    letterSpacing: 0.2,
  },
  headerSubtitle: {
    fontSize: 13,
    color: "#D2CFEA",
    marginTop: 5,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  searchInput: {
    height: 48,
    borderRadius: 12,
    backgroundColor: "#EDEBF7",
    borderWidth: 1,
    borderColor: "#E2DFF1",
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#201B50",
    marginBottom: 12,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingTop: 1,
    paddingBottom: 24,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E8E5F2",
    padding: 11,
    marginBottom: 10,
    minHeight: 76,
  },
  photo: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#E5E1F2",
  },
  studentInfo: {
    flex: 1,
    marginLeft: 11,
    marginRight: 5,
  },
  studentName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#292641",
  },
  studentYear: {
    fontSize: 12,
    color: "#85819F",
    marginTop: 4,
  },
  flagButton: {
    borderWidth: 1,
    borderColor: "#A6A0C0",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  flaggedButton: {
    backgroundColor: "#D49300",
    borderColor: "#D49300",
  },
  buttonPressed: {
    opacity: 0.65,
    transform: [{ scale: 0.96 }],
  },
  flagText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#777194",
  },
  flaggedText: {
    color: "#FFFFFF",
  },
  emptyContainer: {
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#292641",
  },
  emptySubtitle: {
    fontSize: 13,
    color: "#85819F",
    marginTop: 6,
    textAlign: "center",
  },
});
