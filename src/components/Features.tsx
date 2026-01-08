import BentoDemo from "./bentogrid";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";

export const Features = () => {
  return (

    <MotionSection id="about" variant="staggerChildren" className="section-block bg-(--ink) text-white">

      <Container>
        {/* About section headline. */}
        <MotionItem>
          <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Title</h2>
        </MotionItem>
        <MotionItem className='max-w-xl mx-auto'>
          {/* About section body copy. */}
          <p className="text-center mt-5 text-xl text-white/70">
            About body copy goes here. Keep it short and punchy.
          </p>
        </MotionItem>
        <MotionItem variant="fadeIn" className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <BentoDemo />
        </MotionItem>

      </Container>
    </MotionSection>
  )
}
