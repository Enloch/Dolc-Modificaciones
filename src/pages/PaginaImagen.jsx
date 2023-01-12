import React from 'react'
import imagen1 from '../assets/Dolker-Completo-01.webp';
import imagen2 from '../assets/Dolker-Completo-02.webp';
import imagen3 from '../assets/Dolker-Completo-03.webp';
import imagen4 from '../assets/Dolker-Completo-04.webp';
import imagen5 from '../assets/Dolker-Completo-05.webp';
const PaginaImagenes = () => {
  return (
    <>
      <div>
        <img src={imagen1} />
        <img src={imagen2} />
        <img src={imagen3} />
        <img src={imagen4} />
        <img src={imagen5} />
      </div>
    </>
  )
}

export default PaginaImagenes