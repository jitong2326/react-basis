import React from "react";
import robots from "./mockData/robots.json";
import Robot from "./components/Robot";
import styles from "./App.module.css";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";

interface Props {}

interface State {
  robotGallery: any[];
}
class App extends React.Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props)
    this.state = {
      robotGallery: []
    }
  }

  componentDidMount(): void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.setState({ robotGallery: data }))
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>robot</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map((r) => (
            <Robot id={r.id} name={r.name} email={r.email} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
