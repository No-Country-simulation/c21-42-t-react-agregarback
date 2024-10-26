import ContainerCardsAnimals from "../../components/ContainerCardsAnimals/ContainerCardsAnimals";
import Navbar from "../../components/Navbar/Navbar";
import './HomeAdoptPage.css';
import Chatbot from "../../components/Chatbot/Chatbot";

const HomeAdoptPage = () => {
  return (
    <div className="bg-[#F4F0EF]">
      <Navbar />
      <ContainerCardsAnimals />
      <Chatbot />
    </div>
  );
};

export default HomeAdoptPage;