"use client"

import { useRef, useEffect, useContext } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { LoopOnce } from 'three';
import { HomeContext } from '@/features/home/context/home-provider';

const states = ['Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing'];
const emotes = ['Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp'];

function Robot(props: unknown) {
    const group = useRef(null);
    const { scene, animations } = useGLTF('/RobotExpressive.glb')
    const { actions, mixer } = useAnimations(animations, group);
    const { hoveredLink, setHoveredLink } = useContext(HomeContext);

    useEffect(() => {
        actions['Wave']?.reset().fadeIn(1).play();
        actions['Wave']?.setLoop(LoopOnce, 1);
        actions['Idle']?.reset().fadeIn(1).play();
        return () => {
            actions['Wave']?.fadeOut(1);
            actions['Idle']?.fadeOut(1);
        }
    }, []);

    // useEffect(() => {
    //     // console.log("action", actions['Idle']?.getMixer())
    //     // console.log("clip", mixer.clipAction('Wave'))

    //     if (hoveredLink === "home_nav_link") {
    //         mixer.stopAllAction();
    //         actions["Jump"]?.reset().fadeIn(1).play();
    //         mixer.addEventListener("finished", (e) => {
    //             console.log("e", e);
    //         });
    //     }

    //     if (hoveredLink === null) {
    //         // actions['Jump']?.stop();
    //         // actions['Jump']?.halt(1);
    //         actions['Jump']?.setLoop(LoopOnce, 1);
    //         // console.log("getRoot", mixer.getRoot())
    //         // mixer.addEventListener("finished", function (e) {
    //         //     mixer.stopAllAction();
    //         //     actions['Idle']?.reset().fadeIn(1).play()
    //         // })

    //         mixer.addEventListener("loop", function (e) {
    //             // mixer.stopAllAction();
    //             // actions['Idle']?.reset().fadeIn(1).play()
    //             console.log("loop")
    //         })

    //         mixer.addEventListener("finished", function (e) {
    //             // mixer.stopAllAction();
    //             // actions['Idle']?.reset().fadeIn(1).play()
    //             console.log("finished")
    //         })
    //     }
    // }, [actions, mixer, hoveredLink]);

    // useEffect(() => {
    //     actions['Wave']?.reset().fadeIn(1).play()
    //     actions['Wave']?.setLoop(LoopOnce, 1);
    //     actions['Idle']?.reset().fadeIn(1).play()
    //     // return () => {
    //     // actions['Wave']?.fadeOut(0.5)
    //     // }
    //     if (state === "home_nav_link") {
    //         // console.log("animations", animations);
    //         // console.log("group", group);
    //         // // console.log("mixer", mixer);
    //         // console.log("scene", scene);
    //         mixer.addEventListener("finished", function (e) {
    //             console.log("e", e)
    //             mixer.stopAllAction();
    //             actions['Idle']?.reset().fadeIn(1).play()
    //         })
    //         console.log("actions", actions)
    //         mixer.stopAllAction();
    //         actions['Dance']?.reset().fadeIn(1).play();
    //     }
    //     if (state === null) {
    // mixer.addEventListener("finished", function (e) {
    //     mixer.stopAllAction();
    //     actions['Idle']?.reset().fadeIn(1).play()
    // })
    //     }
    //     console.log("state changed", state)
    // }, [actions, state])
    // Optionally add rotation for fun
    // useFrame((_, delta) => {
    //     group.current.rotation.y += delta * 0.3
    // })

    return <primitive ref={group} object={scene} {...props} />
}

useGLTF.preload('/RobotExpressive.glb');

export default Robot;
