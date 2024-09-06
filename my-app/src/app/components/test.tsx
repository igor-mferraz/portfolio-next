import * as motion from "framer-motion/client"

export const Test = () => {
    return(
        <div>
            <motion.div 
                className="w-20 h-20 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} />

        </div>
    )
}