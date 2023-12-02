import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <AnimatedCursor
    innerSize={10}
    outerSize={14}
    color='117, 251, 255'
    outerAlpha={0.5}
    innerScale={2}
    outerScale={10}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link'
    ]}
    
    />
  )
}
