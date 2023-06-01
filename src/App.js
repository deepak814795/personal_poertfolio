import React from "react";

import "./app.scss";

import Blogs from "./components/blogs";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import About from "./components/about";

const App = () => {
    return (
        <div>
            <Intro />
            <About />
            <Portfolio />
            <Skills />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
