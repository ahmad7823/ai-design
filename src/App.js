// import React from "react";

// import Header from "./Components/Header";
// import "./assets/Header.css";
// import Banner from "./Components/Banner";
// import "./assets/Banner.css";
// import Content from "./Components/Content";
// import "./assets/Content.css";
// import Card from "./Components/Card";
// import "./assets/Card.css";
// import Footer from "./Components/Footer";
// import "./assets/Footer.css";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Banner />
//       <Content />
//       <Card />
//       <Footer />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/Header" element={<Header />} />
//           <Route path="/Banner" element={<Header />} />
//           <Route path="/Content" element={<Content />} />
//           <Route path="/Card" element={<Card />} />
//           <Route path="/Footer" element={<Footer />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App




import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import "./assets/Header.css";
import Banner from "./Components/Banner";
import "./assets/Banner.css";
import Content from "./Components/Content";
import "./assets/Content.css";
import Card from "./Components/Card";
import "./assets/Card.css";
import Footer from "./Components/Footer";
import "./assets/Footer.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Banner />
        <Content />
        <Card />
        <Footer />
        <Routes>
          <Route path="/Header" element={<Header />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/Content" element={<Content />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


