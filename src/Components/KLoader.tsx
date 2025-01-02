// import IconCloud from "@/components/magicui/icon-cloud";
import { IconHexagonLetterK, IconMathGreater, IconMathLower } from "@tabler/icons-react";
import { slugs } from "../user";
import { IconCloud } from "./magicui/iconcloud";


export function KLoader() {
  return (
    <div className="relative flex animate-[ping_1.5s_ease-in-out_infinite_4s] size-full items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
      <div className="absolute text-2xl -z-10">
      <div className="text-primaryColor flex items-center">
            <IconMathLower size={30} stroke={2}/>
            <IconHexagonLetterK size={48} stroke={1.5}/>
            <IconMathGreater size={30} stroke={2}/>
        </div>
      </div>
    </div>
  );
}
