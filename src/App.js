import React from "react";
import Header from "./components/Header";
import FilesList from "./components/FileList";
import files from "./utils/api";

export default class App extends React.Component {
  state = {
    filesList: files,
  };

  render() {
    const { filesList } = this.state;
    console.log(this);
    return (
      <div className="container">
        <Header />
        <FilesList files={filesList} />
      </div>
    );
  }
}
