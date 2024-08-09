import { Card1, card2, card3, Card4, storage, transection, transport } from ".";
import { FaBoxesPacking } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";
import { MdOutlineDataSaverOff } from "react-icons/md";

export const ServicesCard = [
  {
    title: "Packing Services",
    description: 
      "We offer professional packing services that will ensure your belongings are securely packed and stored.",
    image: Card4,
    icon: <FaBoxesPacking size={50}/>,
  },
  {
    title: "Loading Unloading Services",
    description:
      "Packers and movers offer reliable services for loading and unloading household goods, electronic goods and other industrial or corporate.",
    image: card3,
    icon: <FaTruckLoading size={50}/>,
  },
  {
    title: "Bike and Car Transportation",
    description:
      "D group Packers And Movers to safely transport your bike from one city to another, at an affordable cost. We transport your two-wheelers in a specialized vehicle.",
    image: Card1,
    icon: <MdOutlineEmojiTransportation size={50}/>,
  },
 
];

export const ServicesCard1=[
  {
    title: "Storag Service",
    description:
      "Easy, Affordable, Secured Storage Space Available For Rent. Enquire For best price! Available Rent space to deposit your goods with .",
    image: storage,
    icon: <FaWarehouse size={50}/>,
  },
  {
    title: "Transaction Service",
    description:
      "Our company provides best class transportation services all over India including container and open trucks..",
    image: Card4,
    icon: <MdEmojiTransportation size={50}/>,
  },
  {
    title: "Transit Insurance",
    description:
      "Transit Insurance or Transport Insurance Policy for Cargo Covers a Number of Risks Like Damage To Goods Due To Untoward Perils Such Us compensates for the loss.",
    image: transport,
    icon: <MdOutlineDataSaverOff size={50}/>,
  }
]
export  const choose = [
  {
    title: "Experienced Manpower",
    description:
      "Skilled Manpower. A good moving and packing company hires only trained and skilled workers who have the required skills to perform the",
  },
  {
    title: "Reliable Packers and Movers Services",
    description:
      "We provide harmless, well-protected and trustworthy packaging and relocation services for your valuable household goods and residential goods.",
  },
  {
    title: "24/7 Customer Support",
    description:
      " 24/7 Customer support over Email, Phone and Whatsapp chat. Fast & safe delivery. Fast Delivey. Get a fast & safe delivery of your household goods at your",
  },
];