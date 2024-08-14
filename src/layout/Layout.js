import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import About from "src/components/About/About";
import Portfolio from "src/components/Portfolio/Portfolio";
import Contact from "src/components/Contact/Contact";
import Resume from "@/components/Resume/Resume";

export const Layout = ({ children }) => {
  return (
  <>
      <Head>
        <title>Brent Götte</title>
        <meta name="description" content=".." />
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Navbar />
        <div>
          <About/>
          <Portfolio/> 
          <div >{children}</div>
        </div>
        <div className="mt-40">
        <Resume />

        </div>
        {/* <Contact/> */}
        <Footer />
      </div>
    </>
  );
};