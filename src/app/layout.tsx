import React from "react";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Main } from "@/components/common/main";
import "@/assets/styles/globals.css"


export default function RootLayout() {
  return (
    <html>
      <body>
        <Header/>
        <Main/>
        <Footer/>
      </body>
    </html>
  )
}
