"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <div className="bg-primary">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-primary-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="block">Ready to build with decentralized identity?</span>
          <span className="block mt-2">Let's discuss your project.</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg leading-6 text-primary-foreground/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Schedule a call to learn how CREFY can help you implement secure identity and credential solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-background text-primary hover:bg-secondary/90"
            onClick={() => window.open("https://calendly.com/mulinyafadhil/coffee-chat-s-with-fadhil", "_blank")}
          >
            Book a Call
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

