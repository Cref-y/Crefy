"use client"

import { Zap, Shield, Key, Brain, Globe, Music, FileText } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const features = [
  {
    name: "Identity Verification (KYC)",
    description: "Secure and compliant identity verification solutions with seamless user experience.",
    icon: Shield,
    link: "https://passports-eight.vercel.app/",
  },
  {
    name: "Programmable Credentials",
    description: "Create, issue, and verify credentials that can be programmed for specific use cases.",
    icon: FileText,
    link: "https://crefy-did.vercel.app/",
  },
  {
    name: "Zero Knowledge Proofs",
    description: "ZK-native verification allowing users to prove information without revealing sensitive data.",
    icon: Key,
    link: "#",
  },
  {
    name: "AI-Powered Verification",
    description: "Leverage artificial intelligence to enhance verification processes and detect fraud.",
    icon: Brain,
    link: "#",
  },
  {
    name: "Cross-Chain Attestations",
    description: "Seamlessly verify and attest identity across multiple blockchain ecosystems.",
    icon: Globe,
    link: "#",
  },
  {
    name: "Music & Media Credentials",
    description: "Specialized credential solutions for the music and media industries.",
    icon: Music,
    link: "#",
  },
  {
    name: "Decentralized Publications",
    description: "Enable verified authorship and attribution for digital publications.",
    icon: Zap,
    link: "#",
  },
]

export default function Features() {
  return (
    <div className="py-24 bg-background relative overflow-hidden" id="features">
      {/* Add background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-1/2 h-1/2 bg-primary-light rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -left-1/4 w-1/2 h-1/2 bg-secondary-light rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <motion.h2
            className="text-base text-primary font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Features
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Decentralized Identity & Credential Infrastructure
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            CREFY offers a comprehensive suite of tools for building secure, private, and interoperable identity
            solutions across ecosystems.
          </motion.p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <dt>
                  <Link href={feature.link} target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </motion.div>
                  </Link>
                  <Link
                    href={feature.link}
                    className="ml-16 text-lg leading-6 font-medium text-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {feature.name}
                  </Link>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

