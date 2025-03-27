import { useState } from 'react'
import { Titulo2 } from '../../../../components/Titulos'
import { COLORS } from '../../../../global/GlobalStyles'
import StyledIndiceSeries from './styles'
import Modal from '../../../../components/Modal'
import SeriesCard from './SeriesCard'

// Import images
import atlantisSilk from '../../../../assets/images/T5/Series/atlantissilk.webp'
import atlantisGold from '../../../../assets/images/T5/Series/atlantisgold.webp'
import brazilSw from '../../../../assets/images/T5/Series/brazilsw.webp'
import calacattaGold from '../../../../assets/images/T5/Series/calacattagold.webp'
import calacattaPaonazzo from '../../../../assets/images/T5/Series/calacattapaonazzo.webp'
import estatuario from '../../../../assets/images/T5/Series/estatuario.webp'
import melbourne from '../../../../assets/images/T5/Series/melbourne.webp'
import negroMarquina from '../../../../assets/images/T5/Series/negromarquina.webp'
import tundraBeige from '../../../../assets/images/T5/Series/Tundra-Beige_1.jpg'
import tundraGreige from '../../../../assets/images/T5/Series/Tundra-Greige_1.jpg'
import pureSw from '../../../../assets/images/T5/Series/puresw.webp'
import saharaNoir from '../../../../assets/images/T5/Series/saharanoir.webp'
import syrac from '../../../../assets/images/T5/Series/syrac.webp'
import allureAnthracite from '../../../../assets/images/T5/Series/allureanthracite.webp'
import allureLightGrey from '../../../../assets/images/T5/Series/allurelightgrey.webp'
import basicBlanco from '../../../../assets/images/T5/Series/basicblanco.webp'
import beraice from '../../../../assets/images/T5/Series/beraice.webp'
import berenLightGrey from '../../../../assets/images/T5/Series/berenlightgrey.webp'
import bahiaBlack from '../../../../assets/images/T5/Series/BAHIA-BLACK_1.jpg'
import bericiBeige from '../../../../assets/images/T5/Series/BERICI-BEIGE_1.jpg'
import bericiBianco from '../../../../assets/images/T5/Series/BERICI-BIANCO_1.jpg'
import blancBorghini from '../../../../assets/images/T5/Series/blancborghini.webp'
import blancCalacatta from '../../../../assets/images/T5/Series/blanccalacatta.webp'
import blancCalacattaGold from '../../../../assets/images/T5/Series/blanccalacattagold.webp'
import blancStatuarioGold from '../../../../assets/images/T5/Series/blancstatuariogold.webp'
import blueRoma from '../../../../assets/images/T5/Series/BLUE-ROMA.jpg'
import brecciaImperiale from '../../../../assets/images/T5/Series/BRECCIA-IMPERIALE_1.jpg'
import calacatta from '../../../../assets/images/T5/Series/calacatta_1.webp'
import calacattaSupreme from '../../../../assets/images/T5/Series/CALACATTA-SUPREME_1.jpg'
import camargueArena from '../../../../assets/images/T5/Series/camarguearena.webp'
import camargueBlanco from '../../../../assets/images/T5/Series/camargueblanco.webp'
import canelaRoma from '../../../../assets/images/T5/Series/CANELA-ROMA.jpg'
import capraia from '../../../../assets/images/T5/Series/CAPRAIA.jpg'
import corinto from '../../../../assets/images/T5/Series/corinto_1.webp'
import cuarzoReno from '../../../../assets/images/T5/Series/cuarzoreno.webp'
import distritoAluminio from '../../../../assets/images/T5/Series/distritoaluminio.webp'
import distritoMarfil from '../../../../assets/images/T5/Series/distritomarfil.webp'
import dualWhite from '../../../../assets/images/T5/Series/dualwhite.webp'
import edenSand from '../../../../assets/images/T5/Series/EDEN_Sand_1.jpg'
import edraLight from '../../../../assets/images/T5/Series/edralight.webp'
import emeLightGrey from '../../../../assets/images/T5/Series/emelightgrey.webp'
import eraDeepBlack from '../../../../assets/images/T5/Series/eradeepblack.webp'
import eraInfinityWhite from '../../../../assets/images/T5/Series/erainfinitywhite.webp'
import estatuarioBook from '../../../../assets/images/T5/Series/estatuariobook.webp'
import goldenWhite from '../../../../assets/images/T5/Series/GOLDEN-WHITE_1.jpg'
import iceberg from '../../../../assets/images/T5/Series/iceberg_1.webp'
import junglaRoble from '../../../../assets/images/T5/Series/JUNGLA-ROBLE.jpg'
import junglaCipres from '../../../../assets/images/T5/Series/junglacipres.webp'
import kendoLight from '../../../../assets/images/T5/Series/kendolight.webp'
import limestoneIvory from '../../../../assets/images/T5/Series/LIMESTONE-IVORY-SATIN_1.jpg'
import limestoneSand from '../../../../assets/images/T5/Series/LIMESTONE-SAND_1.jpg'
import linenCloud from '../../../../assets/images/T5/Series/LINEN_CLOUD_1.jpg'
import linen from '../../../../assets/images/T5/Series/linen.webp'
import macchiaVecchia from '../../../../assets/images/T5/Series/macchiavecchia.webp'
import neroArdi from '../../../../assets/images/T5/Series/neroardi.webp'
import noonGrey from '../../../../assets/images/T5/Series/noongrey.webp'
import noonSand from '../../../../assets/images/T5/Series/noonsand.webp'
import oakSatin from '../../../../assets/images/T5/Series/OAK-SATIN_1.jpg'
import paladio from '../../../../assets/images/T5/Series/paladio_1.webp'
import porfidoSand from '../../../../assets/images/T5/Series/porfidosand.webp'
import silverRoot from '../../../../assets/images/T5/Series/SILVER-ROOT_1.jpg'
import sublimeIceberg from '../../../../assets/images/T5/Series/sublimeiceberg.webp'
import supreme from '../../../../assets/images/T5/Series/supreme.webp'
import tajMahal from '../../../../assets/images/T5/Series/tajmahal.webp'
import titanAntracita from '../../../../assets/images/T5/Series/titanantracita.webp'
import titanCemento from '../../../../assets/images/T5/Series/titancemento.webp'
import travertinoClassico from '../../../../assets/images/T5/Series/TRAVERTINO-CLASSICO_1.jpg'
import versoCrosscutClassic from '../../../../assets/images/T5/Series/VERSO_CROSSCUT_CLASSIC_NATURAL_1.jpg'
import versoVeincutLight from '../../../../assets/images/T5/Series/VERSO_VEINCUT_LIGHT_HONED_1.jpg'
import vonn from '../../../../assets/images/T5/Series/vonn_1.webp'
import wegaBlack from '../../../../assets/images/T5/Series/wegablack.webp'

// Series data with image information
const seriesData = [
    { id: 1, name: 'Allure anthracite soft textured', size: '1600x3240 / 6 mm', image: allureAnthracite },
    { id: 2, name: 'Allure light grey soft textured', size: '1600x3240 / 6 mm', image: allureLightGrey },
    { id: 3, name: 'Atlantis gold silk', size: '1600x3200 / 6 mm', image: atlantisGold },
    { id: 4, name: 'Atlantis silk', size: '1600x3200 / 6 mm', image: atlantisSilk },
    { id: 5, name: 'Bahia black satin', size: '1600x3200 / 6 mm', image: bahiaBlack },
    { id: 6, name: 'Basic blanco natural', size: '1620x3240 / 6 mm', image: basicBlanco },
    { id: 7, name: 'Bera ice soft', size: '1600x3240 / 6 mm', image: beraice },
    { id: 8, name: 'Beren light grey soft', size: '1600x3240 / 6 mm', image: berenLightGrey },
    { id: 9, name: 'Berici beige satin', size: '1600x3200 / 6 mm', image: bericiBeige },
    { id: 10, name: 'Berici bianco satin', size: '1600x3200 / 6 mm', image: bericiBianco },
    { id: 11, name: 'Blanc borghini soft textured', size: '1600x3240 / 6 mm', image: blancBorghini },
    { id: 12, name: 'Blanc calacatta soft textured', size: '1600x3240 / 6 mm', image: blancCalacatta },
    { id: 13, name: 'Blanc calacatta gold soft', size: '1600x3240 / 6 mm', image: blancCalacattaGold },
    { id: 14, name: 'Blanc statuario gold soft', size: '1600x3240 / 6 mm', image: blancStatuarioGold },
    { id: 15, name: 'Blue roma natural', size: '1620x3240 / 6 mm', image: blueRoma },
    { id: 16, name: 'Brazil superwhite hond', size: '1600x3200 / 6 mm', image: brazilSw },
    { id: 17, name: 'Breccia imperiale satin', size: '1600x3200 / 6 mm', image: brecciaImperiale },
    { id: 18, name: 'Calacatta natural', size: '1620x3240 / 6 mm', image: calacatta },
    { id: 19, name: 'Calacata gold hond', size: '1600x3200 / 6 mm', image: calacattaGold },
    { id: 20, name: 'Calacata paonazzo pulido o hond', size: '1600x3200 / 6 mm', image: calacattaPaonazzo },
    { id: 21, name: 'Calacatta suprem satin puro 3d ink', size: '1600x3200 / 6 mm', image: calacattaSupreme },
    { id: 22, name: 'Camargue arena natural', size: '1620x3240 / 6 mm', image: camargueArena },
    { id: 23, name: 'Camargue blanco natural', size: '1620x3240 / 6 mm', image: camargueBlanco },
    { id: 24, name: 'Canela roma natural', size: '1620x3240 / 6 mm', image: canelaRoma },
    { id: 25, name: 'Capraia natural', size: '1620x3240 / 6 mm', image: capraia },
    { id: 26, name: 'Corinto natural', size: '1620x3240 / 6 mm', image: corinto },
    { id: 27, name: 'Cuarzo reno natural o pulido', size: '1620x3240 / 6 mm', image: cuarzoReno },
    { id: 28, name: 'Distrito aluminio natural', size: '1620x3240 / 6 mm', image: distritoAluminio },
    { id: 29, name: 'Distrito marfil natural', size: '1620x3240 / 6 mm', image: distritoMarfil },
    { id: 30, name: 'Dual white', size: '1500x3200 / 6 mm', image: dualWhite },
    { id: 31, name: 'Eden sand', size: '1500x3200 / 6 mm', image: edenSand },
    { id: 32, name: 'Edra light soft', size: '1600x3240 / 6 mm', image: edraLight },
    { id: 33, name: 'Eme light grey soft textured', size: '1600x3240 / 6 mm', image: emeLightGrey },
    { id: 34, name: 'Era deep black soft', size: '1600x3240 / 6 mm', image: eraDeepBlack },
    { id: 35, name: 'Era infinity white soft', size: '1600x3240 / 6 mm', image: eraInfinityWhite },
    { id: 36, name: 'Estatuario hond o pulido', size: '1600x3200 / 6 mm', image: estatuario },
    { id: 37, name: 'Estatuario book natural o pulido', size: '1620x3240 / 6 mm', image: estatuarioBook },
    { id: 38, name: 'Golden white', size: '1600x3200 / 6 mm', image: goldenWhite },
    { id: 39, name: 'Iceberg natural', size: '1620x3240 / 6 mm', image: iceberg },
    { id: 40, name: 'Jungla ciprés natural', size: '1620x3240 / 6 mm', image: junglaCipres },
    { id: 41, name: 'Jungla roble natural', size: '1620x3240 / 6 mm', image: junglaRoble },
    { id: 42, name: 'Kendo light soft textured', size: '1600x3240 / 6 mm', image: kendoLight },
    { id: 43, name: 'Limestone ivory satin', size: '1600x3200 / 6 mm', image: limestoneIvory },
    { id: 44, name: 'Limestone sand', size: '1600x3200 / 6 mm', image: limestoneSand },
    { id: 45, name: 'Linen desert', size: '1500x3200 / 6 mm', image: linen },
    { id: 46, name: 'Linen cloud', size: '1500x3200 / 6 mm', image: linenCloud },
    { id: 47, name: 'Macchia vecchia natural', size: '1620x3240 / 6 mm', image: macchiaVecchia },
    { id: 48, name: 'Melbourne hond', size: '1600x3200 / 6 mm', image: melbourne },
    { id: 49, name: 'Negro marquina silk', size: '1600x3200 / 6 mm', image: negroMarquina },
    { id: 50, name: 'Nero ardi natural', size: '1620x3240 / 6 mm', image: neroArdi },
    { id: 51, name: 'Noon grey soft textured', size: '1600x3240 / 6 mm', image: noonGrey },
    { id: 52, name: 'Noon sand soft textured', size: '1600x3240 / 6 mm', image: noonSand },
    { id: 53, name: 'Wood oak satin', size: '1600x3200 / 6 mm', image: oakSatin },
    { id: 54, name: 'Paladio natural', size: '1620x3240 / 6 mm', image: paladio },
    { id: 55, name: 'Pórfido sand natural', size: '1600x3200 / 6 mm', image: porfidoSand },
    { id: 56, name: 'Pure superwhite hond o pulido', size: '1600x3200 / 6 mm', image: pureSw },
    { id: 57, name: 'Sahara noir hond', size: '1600x3200 / 6 mm', image: saharaNoir },
    { id: 58, name: 'Silver root satin', size: '1600x3200 / 6 mm', image: silverRoot },
    { id: 59, name: 'Sublime iceberg', size: '1500x3200 / 6 mm', image: sublimeIceberg },
    { id: 60, name: 'Supreme', size: '1500x3200 / 6 mm', image: supreme },
    { id: 61, name: 'Syrac hond', size: '1600x3200 / 6 mm', image: syrac },
    { id: 62, name: 'Taj mahal natural', size: '1620x3240 / 6 mm', image: tajMahal },
    { id: 63, name: 'Titán antracita natural', size: '1620x3240 / 6 mm', image: titanAntracita },
    { id: 64, name: 'Titán cemento natural', size: '1620x3240 / 6 mm', image: titanCemento },
    { id: 65, name: 'Travertini classico puro 3d ink', size: '1600x3200 / 6 mm', image: travertinoClassico },
    { id: 66, name: 'Tundra beige natural', size: '1600x3200 / 6 mm', image: tundraBeige },
    { id: 67, name: 'Tundra greige natural', size: '1600x3200 / 6 mm', image: tundraGreige },
    { id: 68, name: 'Verso cross cut classic natural', size: '1600x3240 / 6 mm', image: versoCrosscutClassic },
    { id: 69, name: 'Verso vein cut light honed', size: '1600x3240 / 6 mm', image: versoVeincutLight },
    { id: 70, name: 'Vonn light soft', size: '1600x3240 / 6 mm', image: vonn },
    { id: 71, name: 'Wega black soft textured', size: '1600x3240 / 6 mm', image: wegaBlack },
];

const IndiceSeries = ({ id }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <StyledIndiceSeries id={id} backgroundColor={COLORS.gray02}>
            <Titulo2>SERIES</Titulo2>
            
            <div className="series-grid">
                {seriesData.sort((a, b) => a.name.localeCompare(b.name)).map((series) => (
                    <SeriesCard 
                        key={series.id}
                        name={series.name}
                        size={series.size}
                        image={series.image}
                        onClick={() => openModal(series)}
                    />
                ))}
            </div>

            <Modal 
                isOpen={modalOpen} 
                onClose={closeModal}
                caption={selectedImage ? `${selectedImage.name} - ${selectedImage.size}` : ''}
            >
                {selectedImage && (
                    <img 
                        src={selectedImage.image} 
                        alt={selectedImage.name} 
                    />
                )}
            </Modal>
        </StyledIndiceSeries>
    )
}

export default IndiceSeries
