import Header from "./components/Header"
import Container from "./components/Container";
import './App.css'


const siteProps = {
    name: "Subramanya_rao",
    email: "subramanya11rao@gmail.com",
    github: "Subramanyarao11",
    linkedIn: "subramanya-m-rao-67b935213",
    instagram: "ig_subramnya11",
    twitter: "Subramanya11rao",
  };

function App() {

    return (
        <div className="main-container">
            <Header />
            <Container {...siteProps}/>
        </div>


    )
}

export default App
