'use client'
import React from 'react'

const PearRing = ({
  centreX,
  centreY,
}: {
  centreX: number
  centreY: number
}) => {
  // Number of pears in the ring
  const numPears = 10
  // Radius of the ring
  const radius = 200

  // Calculate the angle between each pear
  const angleIncrement = (2 * Math.PI) / numPears

  // Function to calculate the position of each pear
  const calculatePosition = (index: number) => {
    const angle = index * angleIncrement
    const x = centreX + radius * Math.cos(angle)
    const y = centreY + radius * Math.sin(angle)
    return { x, y }
  }

  // Define rotation animation styles using the style prop
  const rotationStyle = {
    animation: `spin 15s linear infinite`,
    position: 'relative' as const,
    width: '100%',
    height: '100%',
  }

  return (
    <div className="absolute h-48">
      <div style={rotationStyle}>
        {Array.from({ length: numPears }).map((_, index) => {
          const { x, y } = calculatePosition(index)
          return (
            <div
              key={index}
              className="absolute w-8 h-8 text-3xl"
              style={{
                top: `${y}px`,
                left: `${x}px`,
                transformOrigin: `${centreX}px ${centreY}px`,
              }}
            >
              {index % 2 === 0 ? '🍐' : '🍷'}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="w-screen h-screen bg-pink-300 flex flex-col justify-center items-center font-mono overflow-hidden relative">
      <PearRing centreX={-20} centreY={80} />
      <div className="text-green-600 z-10 flex flex-col items-center font-extrabold text-center gap-3 overflow-hidden">
        <p>Dear Rosebankers,</p>
        <h1 className="text-7xl text-wrap">THANK YOU !!!</h1>
        <p>For such a lovely dinner</p>
        <p className="text-xs">It was really delicious</p>
      </div>
      {/* <PearRing centreX={0} centreY={125} /> */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
