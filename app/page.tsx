import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <Image src={"/panaverse.png"} width={80} height={80} alt="music" />
      </div>
      <div>
        <h1>Welcome to Panaverse</h1>
        <h2>A Community of Web 3 and Metaverse Developers</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
}
