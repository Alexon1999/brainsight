import styles from "../style";
import { discount, robot, brain } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Outil <br className="sm:block hidden" />{" "}
            <span className="text-gradient">d'aide au diagnostic</span>{" "} des pathologies cérébrales
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Notre service d'IA utilise l'apprentissage profond pour détecter et diagnostiquer les pathologies cérébrales à partir d'images médicales. Notre technologie offre une grande précision et une détection précoce d'affections telles que l'alzheimer, les tumeurs.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={brain} alt="billing" className="h-[100%] relative z-[5]" style={{objectFit: 'contain'}} />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
