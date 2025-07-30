import Image from "next/image";

export default function Loader() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <Image
        height={10}
        width={100}
        src="/gif/stake.gif"
        alt=""
        className=""
      ></Image>
    </div>
  );
}
