/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

function Card({ item, setSelected }) {
  return (
    <div
      className="h-fit relative group overflow-hidden cursor-pointer"
      onClick={() => setSelected(item)}
    >
      <motion.img
        layoutId={`card-${item.id}`}
        className="w-full z-20   "
        src={require(item.url)}
      />

      <div className=" transition-all duration-300 group-hover:bottom-0  group-hover:opacity-100 flex absolute -bottom-32  w-full h-full  bg-black/50  opacity-0 justify-center items-center">
        <p className="text-white">Click for more</p>
      </div>
    </div>
  );
}

export default Card;
