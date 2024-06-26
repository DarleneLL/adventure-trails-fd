import "./BodyHome.css";
import { Button } from "@mui/material";
// import NavPagTrilhas from "../../Navegação/navPagTrilhas";
import { useNavigate } from "react-router-dom";

function BodyHome() {
 const navigate = useNavigate();

 const handleNavigateTrilhas = () => {
  navigate("/trilhas");
 };

 const handleNavigateCadastro = () => {
  navigate("/Cadastro");
 };
 return (
  <div className="container">
   <div className="container1">
    <h1>Explore Trilhas Incríveis</h1>
    <p>
     O "Adventure Trails FD" é seu portal para explorar e compartilhar as
     melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra rotas
     deslumbrantes, desde caminhos tranquilos por florestas exuberantes até
     trilhas desafiadoras em montanhas majestosas. Encontre informações
     detalhadas sobre cada trilha, incluindo distância, dificuldade, pontos de
     interesse naturais e dicas úteis para uma experiência eco-friendly.
    </p>
    <Button
     variant="contained"
     href="#retTrilhas"
     color="success"
     sx={{ ml: 20 }}
     onClick={handleNavigateTrilhas}>
     Explore Trilhas
    </Button>
   </div>
   <div className="container2">
    <div>
     <p>Compartilhe fotos, dicas e localização das suas trilhas favoritas</p>
     <Button
      variant="contained"
      href="#pagCadastro"
      color="success"
      sx={{ ml: 20 }}
      onClick={handleNavigateCadastro}>
      Cadastra Trilha
     </Button>
    </div>

    <img
     width={400}
     src={
      "https://media.istockphoto.com/id/473954724/pt/foto/trilho-na-floresta.jpg?s=1024x1024&w=is&k=20&c=aVhCWCErLf-q_KIoaBsFalh1KgRVtA7vuoCO-qpiAeU="
     }
     alt="imagem trilha"
    />
   </div>
  </div>
 );
}

export default BodyHome;
