// importing react components
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

// jsx allows us to put javascript in html.
// parent component
function App() {

  return (
    <div className="App">
      {/* children component */}
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

// to make the App component exportable.
export default App;
