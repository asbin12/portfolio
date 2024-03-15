const About = () => {
  return (
    <>
      <div
        name="about"
        className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white sms:pt-1 md:pt-0"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col md:justify-center w-full h-full ">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
          <p className="text-xl ">
            In the realm of development, I am a fervent, dedicated individual
            propelled by an insatiable passion for innovation and progress.
            Fuelled by an unwavering commitment to excellence, I navigate the
            intricate landscape of coding with relentless enthusiasm and
            diligence. Every line of code represents an opportunity for growth,
            an avenue to craft solutions that transcend conventional boundaries.
            Driven by a profound sense of excitement, I embark on each project
            with an unwavering determination to push the boundaries of what's
            possible, embracing challenges as stepping stones towards greater
            achievements. In this dynamic field, I find not just a profession,
            but a calling—a calling to shape the future, one line of code at a
            time.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
