const CardAnimation = () => {
  return (
    <section className="text-gray-700 bg-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 p-1">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://ajssarimg.mediatriple.net/1110523.jpg" />
              <div className="px-8 py-10 relative z-10 w-full border border-gray-200 bg-white transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                <iframe className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.youtube.com/embed/eIGGKSHMQOM?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                <div className="h-40"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 p-1">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i1.wp.com/dokuz8haber.net/wp-content/uploads/2020/06/dark-dizisi.jpeg?fit=788%2C443&ssl=1" />
              <div className="px-8 py-10 relative z-10 w-full border border-gray-200 bg-white transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                <iframe className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.youtube.com/embed/cq2iTHoLrt0?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                <div className="h-40"></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 p-1">
            <div className="flex relative">
              <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.webtekno.com/images/editor/default/0001/98/6989608967a2f04b240670471d58b43757ec0b24.jpeg" />
                <div className="px-8 py-10 relative z-10 w-full border border-gray-200 bg-white transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                  <iframe className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.youtube.com/embed/qKqj85oo2wI?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                  <div className="h-40"></div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CardAnimation;