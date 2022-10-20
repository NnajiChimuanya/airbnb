import {
  MdOutlineTune,
  MdOutlineCabin,
  MdOutlineDirectionsBoat,
  MdOutlineDownhillSkiing,
  MdSurfing,
} from "react-icons/md";
import { HiOutlineUserGroup, HiOutlineHome } from "react-icons/hi";
import {
  GiInterceptorShip,
  GiGreenhouse,
  GiSpookyHouse,
  GiMountainCave,
  GiPalmTree,
  GiIsland,
  GiGrandPiano,
  GiFarmTractor,
  GiGolfFlag,
  GiMountains,
  GiPaintRoller,
  GiCampingTent,
  GiElvenCastle,
  GiCurlingVines,
  GiTreehouse,
  GiDesert,
  GiWaterMill,
  GiLightningDome,
  GiKitchenKnives,
  GiDogHouse,
  GiWatchtower,
  GiBarn,
  GiPaperWindmill,
} from "react-icons/gi";
import {
  FaUmbrellaBeach,
  FaHandHolding,
  FaCity,
  FaRegBuilding,
} from "react-icons/fa";
import { SiForestry } from "react-icons/si";
import {
  TbSnowflake,
  TbPool,
  TbBuildingSkyscraper,
  TbBeach,
} from "react-icons/tb";
import { AiOutlineCoffee, AiOutlineContainer } from "react-icons/ai";
import { IconType } from "react-icons";

interface IFilter {
  name: string;
  Icon: IconType;
}

export const filterList: IFilter[] = [
  {
    name: "Shared homes",
    Icon: HiOutlineUserGroup,
  },
  {
    name: "OMG!",
    Icon: GiInterceptorShip,
  },
  {
    name: "Beach",
    Icon: FaUmbrellaBeach,
  },
  {
    name: "Arctic",
    Icon: TbSnowflake,
  },
  {
    name: "Luxe",
    Icon: FaHandHolding,
  },
  {
    name: "Iconic cities",
    Icon: FaCity,
  },
  {
    name: "Amazing pools",
    Icon: TbPool,
  },

  {
    name: "Design",
    Icon: GiGreenhouse,
  },
  {
    name: "Bed & breakfast",
    Icon: AiOutlineCoffee,
  },
  {
    name: "Mansions",
    Icon: GiSpookyHouse,
  },
  {
    name: "Caves",
    Icon: GiMountainCave,
  },
  {
    name: "Tropical",
    Icon: GiPalmTree,
  },
  {
    name: "Islands",
    Icon: GiIsland,
  },
  {
    name: "Tiny homes",
    Icon: HiOutlineHome,
  },
  {
    name: "National parks",
    Icon: SiForestry,
  },
  {
    name: "Cycladic homes",
    Icon: TbBuildingSkyscraper,
  },
  {
    name: "Cabins",
    Icon: MdOutlineCabin,
  },
  {
    name: "Boats",
    Icon: MdOutlineDirectionsBoat,
  },
  {
    name: "Lakesfront",
    Icon: MdOutlineTune,
  },
  {
    name: "Amazing views",
    Icon: TbBeach,
  },

  {
    name: "Riads",
    Icon: FaRegBuilding,
  },
  {
    name: "Grand pianos",
    Icon: GiGrandPiano,
  },
  {
    name: "Farms",
    Icon: GiFarmTractor,
  },
  {
    name: "Golfing",
    Icon: GiGolfFlag,
  },
  {
    name: "Houseboats",
    Icon: MdOutlineDirectionsBoat,
  },
  {
    name: "Countryside",
    Icon: GiMountains,
  },
  {
    name: "Earth homes",
    Icon: HiOutlineHome,
  },

  {
    name: "Creative spaces",
    Icon: GiPaintRoller,
  },
  {
    name: "Yurts",
    Icon: HiOutlineHome,
  },
  {
    name: "Historical homes",
    Icon: HiOutlineHome,
  },
  {
    name: "Containers",
    Icon: AiOutlineContainer,
  },
  {
    name: "Campers",
    Icon: GiCampingTent,
  },
  {
    name: "Minsus",
    Icon: HiOutlineHome,
  },
  {
    name: "Castles",
    Icon: GiElvenCastle,
  },
  {
    name: "Lake",
    Icon: GiWaterMill,
  },
  {
    name: "A-frames",
    Icon: GiLightningDome,
  },
  {
    name: "Chef's kitchens",
    Icon: GiKitchenKnives,
  },
  {
    name: "Off-the-grid",
    Icon: GiMountainCave,
  },
  {
    name: "Surfing",
    Icon: MdSurfing,
  },
  {
    name: "Desert",
    Icon: GiDesert,
  },
  {
    name: "Treehouses",
    Icon: GiTreehouse,
  },
  {
    name: "Skiing",
    Icon: MdOutlineDownhillSkiing,
  },
  {
    name: "Vineyards",
    Icon: GiCurlingVines,
  },
  {
    name: "Camping",
    Icon: GiCampingTent,
  },
  {
    name: "Dammusi",
    Icon: MdOutlineTune,
  },
  {
    name: "Windmilss",
    Icon: GiPaperWindmill,
  },
  {
    name: "Ryokans",
    Icon: MdOutlineTune,
  },
  {
    name: "Barns",
    Icon: GiBarn,
  },
  {
    name: "Casas particulares",
    Icon: HiOutlineHome,
  },
  {
    name: "Domes",
    Icon: GiLightningDome,
  },
  {
    name: "Towers",
    Icon: GiWatchtower,
  },
  {
    name: "Shepherd's huts",
    Icon: GiDogHouse,
  },
  {
    name: "Ski-in/out",
    Icon: MdOutlineDownhillSkiing,
  },
  {
    name: "Trulli",
    Icon: GiDogHouse,
  },
];
