import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-green-600 p-4">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <img
          src="src/assets/img/rick-and-morty.png"
          alt="Rick & Morty"
          className="h-20"
        />
      </div>
    </header>
  );
};

export default Header;
