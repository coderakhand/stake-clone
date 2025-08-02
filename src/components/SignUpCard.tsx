import { FcGoogle } from "react-icons/fc";
import RegisterButton from "./RegisterButton";
import Image from "next/image";

export default function SignUpCard() {
  return (
    <div className="flex flex-col gap-6 md:gap-10 h-full py-4 max-md:items-center">
      <p className="text-white font-bold text-2xl md:text-3xl flex flex-wrap max-md:text-center max-w-80 md:max-w-100">
        {"World's"} Largest Online Casino and Sportsbook
      </p>
      <RegisterButton />
      <div className="flex flex-col gap-3 max-md:items-center">
        <p className="text-muted font-bold text-xs">or sign up with</p>
        <SocialMediaButtons />
      </div>
    </div>
  );
}

function SocialMediaButtons() {
  return (
    <div className="sm:w-full flex gap-2 max-md:justify-center">
      <SocialButton>
        <Image src="/social/facebook.svg" alt="" height={20} width={20} />
      </SocialButton>

      <SocialButton>
        <FcGoogle className="h-5 w-5" />
      </SocialButton>

      <SocialButton>
        <Image src="/social/line.svg" alt="" height={20} width={20} />
      </SocialButton>

      <SocialButton>
        <Image src="/social/twitch.svg" alt="" height={20} width={20} />
      </SocialButton>
    </div>
  );
}

function SocialButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="flex justify-center items-center rounded-sm h-8 w-8 bg-[#2F4453] hover:bg-[#557086] cursor-pointer">
      {children}
    </button>
  );
}
