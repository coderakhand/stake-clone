import Image from "next/image";

export default function TopBar() {
  return (
    <div className="realtive h-[60px] w-full bg-background shadow-md sticky top-0 flex items-center  px-4 z-1000">
      <Image height={40} width={70} src='/stake_logo.tiff' alt="" className="max-smd:w-16 smd:ml-4"></Image>
      <div className="absolute right-2 smd:right-10 flex gap-3">
        <button className="bg-foreground hover:bg-[#425c6e] text-white font-semibold h-10 py-2 px-4 rounded-sm text-sm cursor-pointer">
          Login
        </button>
        <button className="bg-[#1375E1] hover:bg-[#0F5EB4] text-white font-semibold h-10 py-2 px-4 rounded-sm text-sm cursor-pointer">
          Register
        </button>
      </div>
    </div>
  );
}
