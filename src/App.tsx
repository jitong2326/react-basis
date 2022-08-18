import React, { useState } from "react";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any[];
}
const App : React.FC = (props) => {
  const [count, setCount] = useState<number>(0)

    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>robot</h1>
        </div>
        <button onClick={() => {
          setCount(count+1)
        }}>click</button>
        <span>{count}</span>
        <ShoppingCart />
        {/* <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div> */}
      </div>
    )
}

export default App;
