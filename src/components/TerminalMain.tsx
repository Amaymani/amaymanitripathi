import React from 'react'
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";


const TerminalMain = () => {
  return (
    <Terminal>
            <TypingAnimation>&gt; npm install visitor-came-to-website</TypingAnimation>
    
            <AnimatedSpan delay={1500} className="text-green-500">
              <span>✔ Visitor detected. </span>
            </AnimatedSpan>
    
            <AnimatedSpan delay={2000} className="text-green-500">
              <span>✔ Scanning eyeball for signs of interest...</span>
            </AnimatedSpan>
    
            <AnimatedSpan delay={2500} className="text-green-500">
              <span>✔ Running Amay’s algorithm... Result: They love it.</span>
            </AnimatedSpan>
    
            <AnimatedSpan delay={3000} className="text-green-500">
              <span>✔ Encrypting admiration (key lost forever).</span>
            </AnimatedSpan>
    
            <AnimatedSpan delay={3500} className="text-green-500">
              <span>✔ Injecting urge to hire Amay.  </span>
            </AnimatedSpan>
    
            <AnimatedSpan delay={4000} className="text-green-500">
              <span>✔ Injecting 60FPS animations for extra smoothness.</span>
            </AnimatedSpan>
    
            <AnimatedSpan delay={4500} className="text-green-500">
              <span>✔ Fetching virtual coffee... done. </span>
            </AnimatedSpan>
    
            <AnimatedSpan delay={5000} className="text-green-500">
              <span>✔ Warning: Closing this tab may cause Amay-related dreams.</span>
            </AnimatedSpan>
    
            <AnimatedSpan delay={5500} className="text-green-500">
              <span>✔ Preparing exit script… Wait, scroll down.  </span>
            </AnimatedSpan>
    
            <AnimatedSpan delay={6000} className="text-blue-500">
              <span>ℹ Updated 1 file:</span>
              <span className="pl-2">- lib/you-love-me.ts</span>
            </AnimatedSpan>
    
            <TypingAnimation delay={6500} className="text-muted-foreground">
            Success! Visitor trapped in Amay’s portfolio vortex.
            </TypingAnimation>
    
            <TypingAnimation delay={7000} className="text-muted-foreground">
              You may now scroll down.
            </TypingAnimation>
          </Terminal>
  )
}

export default TerminalMain