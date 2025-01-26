import { motion } from "framer-motion";

const TextAppear = ({ children }) => {

    const DURATION = 0.5;
    const STAGGER = 0.025;

    return (
        <motion.p 
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap leading-0.5">
            <div>
                {children.split("").map((l,i) => {
                    return <motion.span
                    variants={{
                        initial: {
                            y:0,
                        },
                        hovered: {
                            y: "-100%",
                            opacity:0

                        }
                    }}
                    transition={{ duration: DURATION, ease: [0.76, 0, 0.24, 1], delay: STAGGER * i  }}
                    className="inline-block"
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={i}>{l}</motion.span>
                })}
            </div>
            <div className="absolute inset-0">
                {children.split("").map((l,i) => {
                    return <motion.span
                    variants={{
                        initial:{
                            opacity:0,
                            y:"100%"
                        },
                        hovered: {
                            opacity:1,
                            y: 0
                        }
                    }}
                    transition={{ duration: DURATION, ease: [0.76, 0, 0.24, 1], delay: STAGGER * i  }}
                    className="inline-block"
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    key={i}>{l}</motion.span>
                })}
            </div>
        </motion.p>
    )
}
export default TextAppear