import styles from "./styles/App.module.css";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const main = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sections: HTMLElement[] = gsap.utils.toArray("#about");
      const totalSections = sections.length;

      const lastSection = sections[totalSections - 1];
      const spacingBetweenCards = 8; //in percentage of vh
      sections.forEach((section: HTMLElement, index: number) => {
        ScrollTrigger.create({
          trigger: section,
          start: `top ${5 + index * spacingBetweenCards}%`,
          end: () => lastSection.offsetTop,
          pin: true,
          pinSpacing: false,
          markers: true,
        });
      });
    },
    { scope: main }
  );

  return (
    <div>
      <div className="h-screen"></div>
      <div
        className="border rounded-xl min-h-screen w-full p-8 box-border"
        ref={main}
      >
        <div className={`${styles.card} bg-black`} id="about">
          qwdlmqw;ldk
        </div>
        <div className={`${styles.card} bg-white`} id="about"></div>
        <div className={`${styles.card} bg-black`} id="about"></div>
        <div className={`${styles.card} bg-white`} id="about"></div>
        <div className={`${styles.card} bg-black`} id="about"></div>
      </div>
      <div className="h-[200vh]"></div>
      <div></div>
    </div>
  );
}

export default App;
