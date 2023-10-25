import logo from "./logo.svg";
import "./App.scss";
import { useRoutes } from "react-router-dom";
import appRouter from "./routes/appRouter";
// import { OverlayProvider } from "../../my-app/src/contexts/OverlayContext";
// import { useOverlay } from "../../my-app/src/contexts/OverlayContext";
function App() {
  // const { state } = useOverlay();
  // const { isOverlayVisible } = state;
  const router = useRoutes(appRouter);
  return <>{router}</>;
}

export default App;
