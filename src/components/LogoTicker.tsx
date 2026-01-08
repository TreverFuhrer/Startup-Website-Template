import LogoCarousel from "./companylogos";

export const LogoTicker = () => {
  return(
    <section id="customers" className="bg-(--ink) py-[72px] text-white sm:py-24">
      <div className="container">
        {/* Replace this with your social proof headline. */}
        <h2 className="mb-16 text-center text-lg text-white/70">Title</h2>
        <LogoCarousel/>
      </div>
    </section>
  )
};
