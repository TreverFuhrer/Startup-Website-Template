import BentoDemo from "./bentogrid";

export const Features = () => {
  return (

    <section id="about" className="section-block bg-(--ink) py-[72px] text-white sm:py-24">

      <div className="container">
        {/* About section headline. */}
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Title</h2>
        <div className='max-w-xl mx-auto'>
        {/* About section body copy. */}
        <p className="text-center mt-5 text-xl text-white/70">
          About body copy goes here. Keep it short and punchy.
        </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 mt-32">
          <BentoDemo />
          

        </div>

      </div>


    </section>
  )
}
