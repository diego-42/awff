import Intro from "../components/Intro/index.js";
import Header from "../components/Header/index.js";
import Started from "../components/Started/index.js";
import Functions from "../components/Functions/index.js";


export default function Home() {
  return div(
    Header(),
    Intro(),
    Started(),
    Functions()
  );
}