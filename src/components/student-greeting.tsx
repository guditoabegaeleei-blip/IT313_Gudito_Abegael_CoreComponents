import { Text } from "react-native";

interface StudentGreetingProps {
  name: string;
}

export function StudentGreeting({ name }: StudentGreetingProps) {
  return <Text>Hello, {name}!</Text>;
}
