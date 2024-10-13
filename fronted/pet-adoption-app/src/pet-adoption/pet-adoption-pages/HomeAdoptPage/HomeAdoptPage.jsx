import ContainerCardsAnimals from "../../components/ContainerCardsAnimals/ContainerCardsAnimals";
import Navbar from "../../components/Navbar/Navbar";
import './HomeAdoptPage.css';

const HomeAdoptPage = () => {
  return (
    <div className="bg-[#F4F0EF]">
      <Navbar />
      <ContainerCardsAnimals />
    </div>
  );
};

export default HomeAdoptPage;