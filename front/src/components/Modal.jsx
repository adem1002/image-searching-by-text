/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
function Modal({ selected, setSelected }) {
  const handleGoToWebsite = (id, url, title) => {
    // if (!title) {
    window.open(url, "_blank");
    // } else {
    //   const stringWithUnderscores = title.replace(/ /g, "-");
    //   window.open(url+"/", "_blank");
    // }
  };

  if (selected == null) {
    return <></>;
  } else {
    return (
      <div
        onClick={() => setSelected(null)}
        className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-[700px] mx-auto my-8 px-8 cursor-default"
        >
          <motion.div layoutId={`card-${selected.id}`} className="w-full">
            <motion.img src={selected.url} className="w-full" />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="bg-white p-4"
          >
            <h3 className="text-lg font-semibold mb-2">{selected.title}</h3>

            <button
              className="btn btn-primary btn-block"
              onClick={(e) => {
                handleGoToWebsite(
                  selected.id,
                  selected.website,
                  selected.title
                );
              }}
            >
              check on website
            </button>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Modal;
