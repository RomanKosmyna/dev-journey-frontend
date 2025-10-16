"use client"

import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const states = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing'];
const emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];

function Robot(props: unknown) {
    const group = useRef();
    const { scene, animations } = useGLTF('/RobotExpressive.glb')
    const { actions, mixer } = useAnimations(animations, group)
    // console.log("group", group);
    // console.log("scene", scene);
    // console.log("animations", animations);
    // console.log("actions", actions);
    // console.log("mixer", mixer);
    useEffect(() => {
        actions['Idle']?.reset().fadeIn(3).play()

        return () => {
            actions['Idle']?.fadeOut(0.5)
        }
    }, [actions])

    // Optionally add rotation for fun
    // useFrame((_, delta) => {
    //     group.current.rotation.y += delta * 0.3
    // })

    return <primitive ref={group} object={scene} {...props} />
}

useGLTF.preload('/RobotExpressive.glb');

export default Robot;
