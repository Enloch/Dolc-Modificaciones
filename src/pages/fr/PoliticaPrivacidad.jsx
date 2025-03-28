import { Link } from 'react-router-dom'
import MenuLanzadera from '../../components/ListaContenidos/MenuLanzadera'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { Titulo2 } from '../../components/Titulos'
import useMenuDesplegableFr from '../../hooks/useMenuDesplegableFr'
import Final from '../../modules/FR/System/10_Final'

const PoliticaPrivacidadFr = ({ lang = 'fr' }) => {
    const { menuDesplegable, btnIndice } = useMenuDesplegableFr(
        MenuLanzadera,
        <Link to={`/${lang}`}>Dolcker</Link>
    )

    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion>
                <Titulo2>Politique de confidentialité</Titulo2>
                <Text>
                    <strong>
                        POLITIQUE DE CONFIDENTIALITÉ DE www.dolcker.es
                    </strong>
                    <br />
                    Dernière mise à jour : 20/06/2022
                    <br />
                    <br />
                    <strong>QUI EST RESPONSABLE DU TRAITEMENT ?</strong>
                    <br />
                    Identité du responsable : DOLCKER SISTEMAS, S.L.
                    (B-09710724) Adresse physique : Calle Talamanca del Jarama,
                    19 portal A 5ª. 28051 Madrid (Espagne) Adresse électronique
                    : dolcker@dolcker.es Téléphone : +34 913 851 480
                    <br />
                    <br />
                    <strong>
                        QUELLES DONNÉES PERSONNELLES TRAITONS-NOUS ?
                    </strong>
                    <br />
                    Dans le cadre des différents traitements d'activités
                    effectuées dans l'organisation, nous recueillons les types
                    de données personnelles suivants : Données d'identification.
                    <br />
                    <br />
                    <strong>
                        POUR QUELLES FINALITÉS ET DANS QUELS CAS SPÉCIFIQUES
                        TRAITONS-NOUS LES DONNÉES PERSONNELLES ?
                    </strong>
                    <br />
                    Sur www.dolcker.es, nous traitons les données personnelles
                    dans les buts suivants : Bulletin d'information : Envoi
                    d'informations via les moyens fournis sur les nouveautés,
                    actualités, produits et services liés à nous-mêmes ou à
                    notre secteur.
                    <br />
                    <br />
                    Contact : Répondre aux demandes d'information reçues sur les
                    produits et services proposés, ainsi que répondre à toute
                    autre question envoyée par les utilisateurs.
                    <br />
                    <br />
                    Les profils ne seront pas établis et aucune décision
                    automatisée ne sera prise sur la base des données
                    personnelles collectées.
                    <br />
                    <br />
                    <strong>
                        QUEL EST LE FONDEMENT JURIDIQUE DU TRAITEMENT DES
                        DONNÉES ?
                    </strong>
                    <br />
                    Dans l'organisation, des informations à caractère personnel
                    peuvent être traitées pour : Consentement : En accédant à
                    notre site web et en remplissant les formulaires ou en nous
                    envoyant des données via les moyens de contact électroniques
                    indiqués, vous acceptez cette Politique de confidentialité.
                    C'est pourquoi nous nous appuyons sur le consentement de
                    l'utilisateur pour le traitement de ses données. De plus,
                    nous vous informons que nous n'utiliserons les informations
                    à caractère personnel qu'en vertu de cette Politique de
                    confidentialité et, en général, nous demanderons votre
                    consentement pour des utilisations autres que celles pour
                    lesquelles vous les avez initialement accordées. Enfin, nous
                    vous informons que vous pouvez retirer votre consentement à
                    tout moment, il vous suffit de nous contacter via les moyens
                    indiqués dans cette politique de confidentialité.
                    <br />
                    <br />
                    Pour répondre aux demandes, la personne concernée doit
                    fournir les informations minimales demandées. Dans le cas
                    contraire, elles ne pourront pas être prises en compte.
                    <br />
                    <br />
                    <strong>
                        COMBIEN DE TEMPS CONSERVONS-NOUS LES DONNÉES
                        PERSONNELLES ?
                    </strong>
                    <br />
                    Sur www.dolcker.es, nous traitons les données personnelles
                    pendant les périodes suivantes : La période établie par la
                    loi.
                    <br />
                    <br />
                    La période nécessaire pour remplir les obligations
                    opérationnelles.
                    <br />
                    <br />
                    Les données seront conservées pendant le temps nécessaire
                    pour atteindre la finalité pour laquelle elles ont été
                    collectées et pour déterminer les éventuelles
                    responsabilités découlant de cette finalité et du traitement
                    des données, conformément aux réglementations précédemment
                    mentionnées, ainsi que les périodes établies par la
                    réglementation sur les archives et la documentation
                    applicable.
                    <br />
                    <br />
                    <strong>
                        AVEC QUI PARTAGEONS-NOUS LES DONNÉES PERSONNELLES ?
                    </strong>
                    <br />
                    Pour atteindre les finalités décrites ci-dessus, des données
                    personnelles peuvent être partagées avec : Des prestataires
                    de services qui effectuent des services en notre nom. Aucun
                    transfert international en dehors de l'Espace économique
                    européen n'est effectué.
                    <br />
                    <br />
                    <strong>
                        QUELS SONT VOS DROITS ET COMMENT LES EXERCER ?
                    </strong>
                    <br />
                    Conformément à la réglementation européenne, les droits qui
                    vous sont accordés sont les suivants : Accès : Droit de
                    demander au responsable d'un fichier si vos données
                    personnelles sont traitées.
                    <br />
                    <br />
                    Rectification : Droit de demander la modification des
                    données qui sont inexactes ou incomplètes.
                    <br />
                    <br />
                    Opposition : Droit de s'opposer au traitement de vos données
                    personnelles ou d'en demander la cessation.
                    <br />
                    <br />
                    Décisions individuelles automatisées : Droit de ne pas être
                    soumis à une décision fondée uniquement sur un traitement
                    automatisé, y compris la création de profils, qui produit
                    des effets juridiques sur vous ou qui vous affecte de
                    manière significative.
                    <br />
                    <br />
                    Limitation : Droit de suspendre le traitement de vos données
                    personnelles dans certains cas.
                    <br />
                    <br />
                    Suppression ou Oubli : Droit de demander la suppression de
                    vos données personnelles. Portabilité : Droit de demander au
                    responsable du traitement que vos données personnelles vous
                    soient fournies dans un format structuré et lisible, ou de
                    les transférer à un autre responsable. Le délai maximal pour
                    résoudre la demande est de 30 jours à compter de sa
                    réception, il peut être prolongé d'un maximum de 2 mois si
                    nécessaire.
                    <br />
                    <br />
                    Le demandeur peut exercer ses droits par les moyens suivants
                    : Email à recommander dolcker@dolcker.es, en fournissant des
                    documents justificatifs de l'identité du demandeur (copie
                    recto de la carte d'identité nationale ou équivalent).
                    <br />
                    <br />
                    Courrier postal à Calle Talamanca del Jarama, 19 portal A
                    5A. 28051, Madrid (Espagne), en fournissant des documents
                    justificatifs de l'identité du demandeur (copie recto de la
                    carte d'identité nationale ou équivalent).
                    <br />
                    <br />
                    Dans tous les cas, vous pouvez demander la protection de
                    l'Agence espagnole de protection des données via son site
                    web.
                    <br />
                    <br />
                    <strong>
                        MODIFICATIONS DE CETTE POLITIQUE DE CONFIDENTIALITÉ
                    </strong>
                    <br />
                    Cette Politique de confidentialité peut être révisée pour
                    tenir compte des changements dans la législation en vigueur,
                    des mises à jour des procédures de collecte et d'utilisation
                    des informations personnelles, de l'apparition de nouveaux
                    services ou de l'exclusion d'autres services. Ces
                    changements entreront en vigueur à partir de leur
                    publication sur le site web, il est donc important de
                    consulter régulièrement cette Politique de confidentialité
                    pour rester informé des changements apportés.
                </Text>
            </Seccion>
            <Final />
        </>
    )
}

export default PoliticaPrivacidadFr
