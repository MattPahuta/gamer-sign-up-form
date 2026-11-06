import "./styles/global.css";
import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
