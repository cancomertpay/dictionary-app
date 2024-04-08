import ThemeSwitcher from "./theme-switcher";
import Image from "next/image";
import brand_logo from "/public/images/logo.svg";

function MainHeader() {
  return (
    <header>
      <div>
        <Image src={brand_logo} alt="logo" priority />
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default MainHeader;
