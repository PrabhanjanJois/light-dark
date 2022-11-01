import { StyleSheet, Text, View, useColorScheme, Switch } from "react-native";
import { useTheme } from "../components/ThemeProvider";
const Screen1 = () => {
  const { dark, colors, setScheme } = useTheme();
  const toogleTheme = () => {
    //@ts-ignore
    dark ? setScheme("light") : setScheme("dark");
  };
  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.primary }]}>
        <Text style={{ color: colors.text }}>
          Open up App.tsx to start working on your app!
        </Text>
        <Switch value={dark} onValueChange={toogleTheme} />
      </View>
    </>
  );
};
export default Screen1;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
