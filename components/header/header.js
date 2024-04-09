import ThemeSwitcher from "./theme-switcher";
import Image from "next/image";
import brand_logo from "/public/images/logo.svg";
import FontSwitcher from "./font-switcher";
import HeeaderContainer from "./header-container";

function Header() {
  return (
    <HeeaderContainer>
      <div>
        <Image src={brand_logo} alt="logo" priority />
      </div>
      <div className="flex items-center justify-center gap-1">
        <FontSwitcher />
        <div className="border border-neutral-light-grey w-8 rotate-90 rounded-xl" />
        <ThemeSwitcher />
      </div>
    </HeeaderContainer>
  );
}

export default Header;
