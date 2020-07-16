import React from "react";
import Header from "./components/Header";
import FilesList from "./components/FileList";
import {
  ESCAPE_CODE,
  HOTKEY_CODE,
  DOWN_ARROW_CODE,
  UP_ARROW_CODE,
} from "./utils/keyCodes";
import files from "./utils/api";
import SearchView from "./components/SearchView";
import InfoMessage from "./components/InfoMessage";

export default class App extends React.Component {
  state = {
    isSearchView: false,
    filesList: files,
    counter: 0,
  };
  // add event listeners for adding and removing keydown event handler
  componentDidMount() {
    window.addEventListener("keydown", this.handleEvent);
  }
  componentWillMount() {
    window.removeEventListener("keydown", this.handleEvent);
  }

  handleEvent = (event) => {
    const keyCode = event.keyCode || event.which;
    const { filesList, counter } = this.state;
    // check which key is pressed by user
    switch (keyCode) {
      case HOTKEY_CODE:
        // if user press 't' , set isSearchView to true
        this.setState((prevState) => ({
          isSearchView: true,
          // update file list
          filesList: prevState.filesList.filter((file) => file.type === "file"),
        }));
        break;
      // if user press 'esc' , set isSearchView to false
      case ESCAPE_CODE:
        // set file list to original
        this.setState({ isSearchView: false, filesList: files });
        break;
      case UP_ARROW_CODE:
        if (counter > 0) {
          this.setState({ counter: counter - 1 });
        }
        break;
      case DOWN_ARROW_CODE:
        if (counter < filesList.length - 1) {
          this.setState({ counter: counter + 1 });
        }
        break;
      default:
        break;
    }
  };

  handleSearch = (searchTerm) => {
    let list;
    // check if user has entered something in input field
    if (searchTerm) {
      // filter out matchig files
      list = files.filter(
        (file) =>
          file.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 &&
          file.type === "file"
      );
    } else {
      list = files.filter((file) => file.type === "file");
    }
    // update state
    this.setState({
      filesList: list,
      counter: 0,
    });
  };

  render() {
    const { isSearchView, filesList, counter } = this.state;

    return (
      <div className="container">
        <Header />
        <InfoMessage />
        {isSearchView ? (
          <div className="search-view">
            {/* display file list view or search view */}
            <SearchView onSearch={this.handleSearch} />
            <FilesList
              files={filesList}
              isSearchView={isSearchView}
              counter={counter}
            />
          </div>
        ) : (
          <FilesList files={filesList} />
        )}
      </div>
    );
  }
}
