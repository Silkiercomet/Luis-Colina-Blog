const Hero = () => {
  return (
    <div className="bg-black grid min-w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <div className="bg-soft-orange p-6 shadow-md col-span-1 row-span-3 md:row-span-2 md:col-span-3 lg:col-span-2 lg:row-span-3">
        Main Item
      </div>
      <div className="bg-soft-orange p-6 shadow-md md:col-start-1 md:row-start-3 lg:row-start-1 lg:col-start-3">
        Item 1
      </div>
      <div className="bg-soft-orange p-6 shadow-md md:col-start-2 md:row-start-3 lg:row-start-2 lg:col-start-3">
        Item 2
      </div>
      <div className="bg-soft-orange p-6 shadow-md md:col-start-3 md:row-start-3 lg:row-start-3 lg:col-start-3">
        Item 3
      </div>
    </div>
  );
};

export default Hero;
