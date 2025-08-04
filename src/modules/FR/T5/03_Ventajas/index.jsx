import ImageWithCaption from "@components/ImageWithCaption";
import { Titulo } from "@components/Titulos";
import StyledVentajas from "./styles";
import img1 from "@assets/images/T5/Ventajas/catalogo3-1-8.jpg";
import Text from "@components/Text";
import { COLORS } from "@global/GlobalStyles";
import Listado from "@components/Listado";

const Ventajas = ({ id }) => {
	return (
		<StyledVentajas id={id} backgroundColor={COLORS.gray02}>
			<Titulo>Avantages du système Dolcker T5 XL</Titulo>
			<ImageWithCaption
				src={img1}
				alt="Imagen de Ventajas 1"
				caption="Système T5"
				columnSpan="6"
			/>
			<Text>
				Avantages du système de façade ventilée et du T5 avec revêtement en grès
				cérame grand format
				<br />
				<br />
				Les façades ventilées avec revêtement en grès cérame grand format
				offrent une solution innovante et très efficace pour la construction et
				la rénovation des bâtiments. La combinaison avec des systèmes de
				fixation chimique optimise l'installation et la performance du système,
				apportant des avantages clés en termes de durabilité, d'efficacité
				énergétique et de design.
			</Text>
			<Listado>
				<strong>Durabilité maximale</strong>
				<br />
				<br />
				Le grès cérame grand format, combiné à un système de fixation chimique,
				garantit une résistance supérieure aux impacts, aux agents chimiques et
				aux conditions climatiques extrêmes. Grâce à sa faible porosité, le
				matériau est hautement résistant à l'humidité, au rayonnement UV et aux
				variations brusques de température, évitant ainsi la dégradation, les
				fissures ou les décollements au fil du temps.
				<br />
				<br />
				<li>
					Immunité contre les produits chimiques agressifs et la pollution
					environnementale.
				</li>
				<li>
					Comportement optimal dans les zones à climat extrême (hautes
					températures, gel, pluies acides, etc.).
				</li>
			</Listado>
			<Listado>
				<strong>Efficacité énergétique</strong>
				<br />
				<br />
				Le système de façade ventilée crée une lame d'air qui améliore
				l'isolation thermique et acoustique du bâtiment. Cet effet réduit la
				transmission de chaleur en été et minimise les pertes thermiques en
				hiver, optimisant ainsi la consommation d'énergie et améliorant le
				confort intérieur.
				<br />
				<br />
				<li>
					Contribution à la durabilité et à l'efficacité du bâtiment, en accord
					avec les normes de construction écologique.
				</li>
			</Listado>
			<Listado>
				<strong>Polyvalence du design</strong>
				<br />
				<br />
				Le grès cérame grand format est disponible dans une large gamme de
				finitions, de couleurs et de textures, permettant de concevoir des
				façades modernes et sophistiquées. Sa capacité à imiter des matériaux
				naturels tels que la pierre, le bois ou le marbre offre une esthétique
				haut de gamme sans compromettre la durabilité et l'entretien.
				<br />
				<br />
				<li>
					Diversité de formats et d'épaisseurs adaptés à différentes solutions
					architecturales.
				</li>
				<li>Possibilité de personnalisation selon les exigences du projet.</li>
				<li>
					Finitions haut de gamme avec un impact visuel attrayant et élégant.
				</li>
			</Listado>
			<Listado>
				<strong>Montage rapide et sûr</strong>
				<br />
				<br />
				La fixation chimique permet une installation efficace, sans perçage et
				réduit les temps de montage. Elle garantit également une adhérence
				homogène et sûre, minimisant les risques de décollement et offrant une
				solution structurelle stable.
				<br />
				<br />
				<li>Systèmes de fixation adaptés à chaque besoin et type de projet.</li>
				<li>
					Temps d'installation réduit par rapport aux systèmes traditionnels.
				</li>
			</Listado>
			<Listado>
				<strong>Entretien minimal</strong>
				<br />
				<br />
				Le grès cérame est un matériau facile à nettoyer et très résistant au
				temps. Il ne nécessite pas de traitements spéciaux ni de repeints
				périodiques, ce qui réduit les coûts d'entretien à long terme.
				<br />
				<br />
				<li>
					Surface non poreuse qui évite l'accumulation de saleté et de
					moisissures.
				</li>
				<li>Nettoyage facile à l'eau et aux détergents neutres.</li>
				<li>
					Entretien pratiquement nul, conservant son esthétique et sa
					fonctionnalité pendant des décennies.
				</li>
			</Listado>
		</StyledVentajas>
	);
};

export default Ventajas;
