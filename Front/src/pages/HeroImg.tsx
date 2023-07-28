function HeroImg() {
  return (
    <div className="flex flex-col lg:flex-row items-center">
  <div className="p-6 lg:self-start">
    <h1 className="text-xl font-medium text-right text-sky-900">Uknow</h1>
  </div>
  <div className="p-6 lg:w-1/2">
    <img src="hero.png" alt="" />
  </div>
  <div className="p-6 lg:w-1/2">
    <h1 className="text-xl mt-5 font-medium text-center lg:text-right">
      Choose your <br />
      <span className="text-orange-500">learning </span>path
    </h1>
    <h6 className="mt-4 text-center lg:text-right">
      Explore all the most exciting job roles based <br /> on your interest and study major.
    </h6>
    <div className="lg:flex lg:justify-end mt-4">
      <button className="">
        <img className="p-6" src="button.png" alt="" />
      </button>
    </div>
  </div>
</div>

  
  );
}

export default HeroImg;
