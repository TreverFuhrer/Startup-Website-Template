import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { LogosMarquee } from "./socialproof/LogosMarquee";

export const LogoTicker = () => {
  return(
    <MotionSection id="customers" variant="staggerChildren" className="section-block bg-(--ink) text-white">
      <Container>
        {/* Replace this with your social proof headline. */}
        <MotionItem>
          <h2 className="mb-16 text-center text-lg text-white/70">Title</h2>
        </MotionItem>
        <MotionItem variant="fadeIn">
          <LogosMarquee/>
        </MotionItem>
      </Container>
    </MotionSection>
  )
};
