import Feedbacks from "../components/feedbacks/feedbacks";
import About from "../components/about/about";
import Header from "../components/header/header";
import HomePage from "../components/home/homePage";
import Services from "../components/services/services";
import Contact from "../components/contact/contact";

export default function Home() {
  return (
   <>
    <Header />
    <HomePage />
    <Services />
    <About />
    <Feedbacks />
    <Contact />
   </>
  );
}
