import Image from "next/image";
import logo from "./wb-icon.png";

export const Logo = () => {
  return (
    <Image src={logo} alt={'Логотип'} width={100} height={30} />
  )
}