import Screen1 from "./screens/screen1";
import { ThemeProivder } from "./components/ThemeProvider";
export default function App() {
  return (
    <ThemeProivder>
      <Screen1 />
    </ThemeProivder>
  );
}
