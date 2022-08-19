import React, { useEffect, useState } from "react";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([])

  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setRobotGallery(data))
  }, [])


  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.appLogo} />
        <h1>robot</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <span>{count}</span>
      <ShoppingCart />
      <div className={styles.robotList}>
          {robotGallery.map((r: { id: number; name: string; email: string; }, index: React.Key | null | undefined) => (
            <Robot id={r.id} name={r.name} email={r.email} key={index} />
          ))}
        </div>
    </div>
  );
};

export default App;
