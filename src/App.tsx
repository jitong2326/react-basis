import React, { useEffect, useState } from "react";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";

const App: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setRobotGallery(data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

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
      { (!error || error !== "") && <div>{error}</div> }
      {!loading ? (
        <div className={styles.robotList}>
          {robotGallery.map(
            (
              r: { id: number; name: string; email: string },
              index: React.Key | null | undefined
            ) => (
              <Robot id={r.id} name={r.name} email={r.email} key={index} />
            )
          )}
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
};

export default App;
