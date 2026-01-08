import PricingTable from './pricing';

export const Pricing = () => {
  return (

    <section id="pricing" className="section-block bg-(--ink) text-white bg-gradient-to-b from-(--ink) via-[#0b3a3a] to-(--ink) py-[72px] sm:py-24 ">

      <div className="container">
        {/* Pricing headline. */}
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Pricing</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
          Pricing body copy goes here.
        </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-0 py-[72px] sm:flex-row sm:px-6 sm:py-24 lg:px-24  ">
          <PricingTable/>
          

        </div>

      </div>


    </section>
  )
}
