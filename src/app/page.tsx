"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonComponent from "./components/ButtonComponent"
import ImageComponent from "./components/ImageComponent"
import MyComponent from "./components/MyComponent"
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import books from "./books/fantasy.json";
import BookList from "./components/BookList";
export default function Home() {

  return (

  <div className="App">
      {/* <header className="App-header">
        <ButtonComponent nome_button="Bottone" />
        <ImageComponent src="https://placedog.net/400" alt="dog" />
        <MyComponent />
      </header> */}
      
      <MyNav />
      <Welcome />
      {/* <AllTheBooks genre={books} /> */}
      <BookList genre={books} />
      <MyFooter />
    
    </div>)

}
