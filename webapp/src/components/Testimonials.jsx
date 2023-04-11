import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import Carousel from "./Carousel/Carousel";


const Testimonials = () => (
  <section id="team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Qui sommes-nous ?
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        Chez Brainsight, nous sommes passionnés par l'IA et la santé. Notre équipe est composée d'un groupe de Data Scientists.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      <Carousel>
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </Carousel>
    </div>
  </section>
);

export default Testimonials;
