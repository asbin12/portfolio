import expense from "../assets/portfolio/expense.jpg";
import quiz from "../assets/portfolio/quiz.png";
import shopping_carts from "../assets/portfolio/shopping_carts.jpg";
import tictac from "../assets/portfolio/tictac.png";
import weather from "../assets/portfolio/weather.jpg";
import todoimg from "../assets/portfolio/todoimg.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: expense,
      link: "https://github.com/asbin12/ExpenseSystem",
      demo: "https://emssystem.netlify.app/",
    },
    {
      id: 2,
      src: quiz,
      link: "https://github.com/asbin12/quizApp-v1",
      demo: "https://quiz-app-v1-rose.vercel.app/",
    },
    {
      id: 3,
      src: shopping_carts,
      link: "https://github.com/asbin12/shoppingCart",
      demo: "https://shopping-cart-virid-three.vercel.app/cart",
    },
    {
      id: 4,
      src: tictac,
      link: "https://github.com/asbin12/tic-tac-toe",
      demo: "https://tic-tac-toe-v2-nu.vercel.app/",
    },
    {
      id: 5,
      src: weather,
      link: "https://github.com/asbin12/weather-v1",
      demo: "https://weather-v1-dusky.vercel.app/",
    },
    {
      id: 6,
      src: todoimg,
      link: "https://github.com/asbin12/basicReact",
      demo: "https://todo-ruby-tau.vercel.app/",
    },
  ];

  const handleCodeButtonClick = (link) => {
    window.open(link, "_blank");
  };
  const handleButtonClick = (demo) => {
    window.open(demo, "_blank");
  };
  return (
    <>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full lg-h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col sm:justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-12 sm:px-0">
            {portfolio.map(({ id, src, link, demo }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 h-[200px] w-full "
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleButtonClick(demo)}
                  >
                    Demo
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleCodeButtonClick(link)}
                  >
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
