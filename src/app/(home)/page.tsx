"use client"

import { Canvas } from '@react-three/fiber'
import Robot from "@/features/robot/components/robot";
import PageWrapper from "@/components/layouts/page-wrapper";
import styles from "./page.module.css";

export default function Home() {

  return (
    <>
      <PageWrapper>
        <main className={styles.main}>
          <div className={styles.canvas_wrapper}>
            <Canvas>
              <ambientLight intensity={Math.PI / 2} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
              <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
              <Robot position={[-0.4, -2, 0]} rotation={[0, 0.3, 0]} scale={0.6} />
            </Canvas>
          </div>
        </main>
      </PageWrapper>
      <footer className={styles.footer}>
      </footer>
    </>
  );
}
