import React from 'react';
import Menu from './componenents/Menu';
import BannerMain from './componenents/BannerMain';
import Carousel from './componenents/Carousel';
import Footer from './componenents/Footer';

import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu/>

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras. Mas o que eles fazem afinal? Descubra com a Vanessa!"}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Carousel 
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        category={dadosIniciais.categorias[5]}
      />

      <Footer/>
    </div>
  );
}

export default App;
