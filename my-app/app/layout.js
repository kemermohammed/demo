import "@styles/globals.css";

import Nav from "@components/Nav";
import Footer from "@components/Footer";

 export const metadata = {
  title: "IMFECS",
  description: "Discover & Share AI Prompts",
};


export default function RootLayout ({ children }) {

  return(
  <html lang='en'>
    <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
          <Footer/>
        </main>
    </body>
  </html>
  )
  };


