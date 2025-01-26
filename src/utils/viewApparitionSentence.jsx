import { motion } from "framer-motion";

const ViewApparitionSentence = ({ style, delay, children }) => {
  const DURATION = 1;
  const STAGGER = 0.01;

  return (
    <motion.p
      initial="initial"
      whileInView="hovered"
      viewport={{ once: true }}
      transition={{ delay: delay }}
      className={`${style} relative block overflow-hidden whitespace-wrap leading-0.5`}
    >
      <div className="">
        {children.split(/(\s+)/).map((l, i) => {
          return l.trim() === "" ? (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <span key={i}>&nbsp;</span>
          ) : (
            <motion.span
              variants={{
                initial: { opacity:0, y: "100%" },
                hovered: { opacity:1, y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: [0.76, 0, 0.24, 1],
                delay: STAGGER * i + delay,
              }}
              className="inline-block "
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.p>
  );
};
export default ViewApparitionSentence;
