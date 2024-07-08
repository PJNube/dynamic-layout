import LayoutView from "./components/Layout";
import { Provider } from "inversify-react";
import container from "./common/conainer";
import "./style/index.scss";

export default function App() {
  return (
    <Provider container={container}>
      <LayoutView />
    </Provider>
  );
}
