import "@/assets/styles/globals.css"
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Layout } from "@/components/common/layout";


export default function Home() {
  return (
    <main className="main">
      <Header />
      <Layout />
      <Footer />
    </main>
  );
}
