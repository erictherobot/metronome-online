import Metronome from "@/components/Metronome";
import Header from "@/components/Header";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Metronome Online</title>
        <meta
          name="description"
          content="Metronome Online is a simple and intuitive metronome app that provides an animated metronome and sound to help you keep time while practicing music. With an adjustable BPM, it's perfect for musicians of all levels."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="flex items-center justify-center min-h-screen">
        <Metronome />
      </div>
    </>
  );
};

export default Home;
