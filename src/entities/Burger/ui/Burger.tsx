"use client"
import { motion } from "framer-motion";
import { routes } from "@/features/burger/routes/routes";
import './Burger.scss'

interface InsideBurger {
  onClick?: (prev: boolean) => void;
}

export default function InsideBurger({ onClick }: InsideBurger) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-brown burger left-0 shadow-4xl right-0 p-5 border-b border-b-white/20"
    >
      <ul className="grid gap-2">
        {routes.map((route, idx) => (
          <motion.li
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 + idx / 10,
            }}
            key={route.title}
            className="w-full p-[0.08rem] rounded-xl bg-brown from-neutral-800 via-neutral-950 to-neutral-700"
          >
            <a
              onClick={() => onClick}
              className={
                "bg-brown font-obrazec text-center flex items-center justify-center w-full p-5 rounded-xl bg-primary"
              }
              href={route.href}
            >
              <span className="text-link text-center flex gap-1 text-lg">{route.title}</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}