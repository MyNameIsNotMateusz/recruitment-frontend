import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import AppFunctionality from "../components/AppFunctionality";
import Warning from "../components/Warning";
import LoadingSketelon from "../components/LoadingSketelon";

// I'm creating an object for all components to avoid importing each component individually every time, allowing referencing them through this object instead.
const Components = {
 Header: Header,
 Footer: Footer,
 Main: Main,
 AppFunctionality: AppFunctionality,
 Warning: Warning,
 LoadingSketelon: LoadingSketelon,
}

export default Components;