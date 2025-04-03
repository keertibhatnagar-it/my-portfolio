
import About from "@/components/About";
import Banner from "@/components/Banner";
import CursorShadow from "@/components/CursorShadow";
import Navbar from "@/components/Navbar";
import { cookies } from "next/headers";
const Home = async()=> {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";
  console.log("theme",theme)
  return (
    <>
    <CursorShadow theme={"dark"}/>
      <Navbar />
      <Banner/>
      <About/>
     
    </>
  );
}
export default Home
