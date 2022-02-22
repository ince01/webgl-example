import { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, useAnimations, OrbitControls, Environment } from '@react-three/drei'

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls />
        <LittlestTokyo scale={0.015} position={[0, 0, 0]} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}

function LittlestTokyo({ ...props }) {
  const group = useRef()
  const { scene, nodes, animations } = useGLTF('/LittlestTokyo-transformed.glb')
  console.log(nodes)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions['Take 001'].play()
  })

  return (
    <group ref={group}>
      <primitive object={scene} {...props} />
    </group>
  )
}

/*
author: glenatron (https://sketchfab.com/glenatron)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/94b24a60dc1b48248de50bf087c0f042
title: Littlest Tokyo */
useGLTF.preload('/LittlestTokyo-transformed.glb')
