import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

// I'm creating an object for all components to avoid importing each component individually every time, allowing referencing them through this object instead.
const Components = {
 Header: Header,
 Footer: Footer,
 Main: Main,
}

export default Components;