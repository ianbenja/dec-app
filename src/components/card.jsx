import { useContext } from "react";
import { Card, CardHeader, CardFooter, Image, Button, Link } from "@nextui-org/react";
import card1 from "../assets/images/card1.jpg";
import card2 from "../assets/images/card2.jpg";
import card3 from "../assets/images/card3.jpg";
import card4 from "../assets/images/card4.jpg";
import card5 from "../assets/images/card5.jpg";
import card6 from "../assets/images/card6.jpg";
import { ActiveItemContext } from "../contexts/ActiveItemContext.jsx";

const CardComponent = () => {
  const { activeItem, setActiveItem } = useContext(ActiveItemContext);

  const handleMouseEnter = (path) => {
    setActiveItem(path);
  };

  const handleMouseLeave = () => {
    setActiveItem("#");
  };

  return (
    <div className="max-w-[1400px] gap-4 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Metodo</p>
          <h4 className="text-white font-medium text-large">Ponderacion Lineal</h4>
        </CardHeader>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Te ayudamos a decidir.</p>
            </div>
          </div>
          <Link href="#ponderacion">
            <Button
              radius="full"
              size="sm"
              className={
                activeItem === "#ponderacion"
                  ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white"
                  : "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white"
              }
              onMouseEnter={() => handleMouseEnter("#ponderacion")}
              onMouseLeave={handleMouseLeave}
            >
              Probar
            </Button>
          </Link>
        </CardFooter>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={card3}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Metodo</p>
          <h4 className="text-white font-medium text-large">Moora</h4>
        </CardHeader>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Te ayudamos a decidir.</p>
            </div>
          </div>
          <Link href="#moora">
            <Button
              radius="full"
              size="sm"
              className={
                activeItem === "#moora"
                  ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white"
                  : "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white"
              }
              onMouseEnter={() => handleMouseEnter("#moora")}
              onMouseLeave={handleMouseLeave}
            >
              Probar
            </Button>
          </Link>
        </CardFooter>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={card4}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Metodo</p>
          <h4 className="text-white font-medium text-large">Topsis</h4>
        </CardHeader>
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Te ayudamos a decidir.</p>
            </div>
          </div>
          <Link href="#topsis">
            <Button
              radius="full"
              size="sm"
              className={
                activeItem === "#topsis"
                  ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white"
                  : "hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white"
              }
              onMouseEnter={() => handleMouseEnter("#topsis")}
              onMouseLeave={handleMouseLeave}
            >
              Probar
            </Button>
          </Link>
        </CardFooter>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={card1}
        />
      </Card>
    </div>
  );
};

export default CardComponent;
