import { Link } from 'react-router-dom'
import MenuLanzadera from '../../components/ListaContenidos/MenuLanzadera'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { Titulo2 } from '../../components/Titulos'
import useMenuDesplegableFr from '../../hooks/useMenuDesplegableFr'
import Final from '../../modules/FR/System/10_Final'

const AvisoLegal = ({ lang = '' }) => {
    const { menuDesplegable, btnIndice } = useMenuDesplegableFr(
        MenuLanzadera,
        <Link to={`/${lang}`}>Dolcker</Link>
    )
    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion>
                <Titulo2>Mentions légales</Titulo2>
                <Text>
                    <strong>INFORMATIONS D'IDENTIFICATION:</strong>
                    <br />
                    Loi 34/2002 du 11 juillet sur les services de la société de
                    l'information et du commerce électronique Raison sociale :
                    DOLCKER SISTEMAS, S.L. CIF : B-09710724 Adresse : Calle
                    Talamanca del Jarama, 19 portal A 5ª. 28051 Madrid (Espagne)
                    Courriel : dolcker@dolcker.es Téléphone : +34 913 851 480
                    ci-après dénommé LE TITULAIRE.
                    <br />
                    <br />
                    <strong>OBJET</strong>
                    <br />
                    L'objectif du SITE WEB est de fournir des informations sur
                    nos services et actualités. Si vous souhaitez nous
                    contacter, vous pouvez le faire via les moyens suivants :
                    <br />
                    <br />
                    <ul style={{ listStyle: 'initial', paddingLeft: '40px' }}>
                        <li>
                            Par courrier postal à l'adresse indiquée ci-dessus
                            ou par courrier électronique à l'adresse
                            dolcker@dolcker.es
                        </li>
                        <li>Par téléphone : +34 913 851 480</li>
                    </ul>
                    <br />
                    L'accès au site web est gratuit, sauf en ce qui concerne les
                    frais de connexion via le réseau de télécommunications
                    fourni par le fournisseur d'accès choisi par L'UTILISATEUR.
                    <br />
                    Les Conditions d'utilisation visent à définir les conditions
                    de vente des produits proposés sur le site web du TITULAIRE.
                    <br />
                    <br />
                    <strong>UTILISATION DU SITE WEB</strong>
                    <br />
                    www.dolcker.es donne accès à de nombreuses informations et
                    services (ci-après, "les contenus") appartenant au
                    TITULAIRE. L'utilisateur est responsable de l'utilisation du
                    site web. Cette responsabilité s'étend aux enregistrements
                    nécessaires pour accéder à certains services ou contenus.
                    Dans ces enregistrements, l'utilisateur est responsable de
                    fournir des informations véridiques et licites.
                    L'utilisateur s'engage à faire un usage approprié des
                    contenus et services offerts par LE TITULAIRE via son site
                    web et, à titre indicatif mais non limitatif, à ne pas les
                    utiliser pour (I) se livrer à des activités illicites,
                    illégales ou contraires à la bonne foi et à l'ordre public ;
                    (II) diffuser du contenu ou de la propagande à caractère
                    raciste, xénophobe, pornographique-illegal, faisant
                    l'apologie du terrorisme ou portant atteinte aux droits de
                    l'homme ; (III) causer des dommages aux systèmes physiques
                    et logiques du TITULAIRE, de ses fournisseurs ou de tiers,
                    introduire ou propager des virus informatiques ou tout autre
                    système physique ou logique susceptible de causer les
                    dommages mentionnés ci-dessus ; (IV) tenter d'accéder et, le
                    cas échéant, d'utiliser les comptes de messagerie
                    électronique d'autres utilisateurs et de modifier ou de
                    manipuler leurs messages. LE TITULAIRE se réserve le droit
                    de supprimer tous les commentaires et contributions qui
                    violent le respect de la dignité de la personne, qui sont
                    discriminatoires, xénophobes, racistes, pornographiques, qui
                    portent atteinte à la jeunesse ou à l'enfance, à l'ordre ou
                    à la sécurité publique, ou qui, à son avis, ne conviennent
                    pas à la publication car elles ne sont pas liées à
                    l'objectif. En tout état de cause, LE TITULAIRE, en tant
                    qu'administrateur de son site web, agira diligemment dès
                    qu'il aura connaissance d'actes commis contre l'éthique
                    professionnelle, l'image et le prestige du TITULAIRE, ainsi
                    que des présentes Conditions d'utilisation ou de sa
                    Politique de confidentialité. LE TITULAIRE se réserve le
                    droit de refuser discrétionnairement, à tout moment et sans
                    préavis, l'accès de tout utilisateur à cette page web ou à
                    une partie de celle-ci.
                    <br />
                    <br />
                    <strong>POLITIQUE DE LIENS</strong>
                    <br />
                    Les sites web liés ne sont pas contrôlés par LE TITULAIRE et
                    LE TITULAIRE n'est pas responsable du contenu de tout site
                    lié ni de tout lien se trouvant sur un site web lié, ni de
                    tout changement ou mise à jour de ces sites web. LE
                    TITULAIRE vous fournit uniquement ces liens pour votre
                    commodité, et l'inclusion de tout lien n'implique pas
                    l'approbation du site web par LE TITULAIRE.
                    <br />
                    <br />
                    <strong>DROITS DE PROPRIÉTÉ INTELLECTUELLE</strong>
                    <br />
                    Le site web www.dolcker.es, son code source, sa conception,
                    sa structure de navigation, ses bases de données et les
                    différents éléments qui y sont contenus (textes, graphiques,
                    images, photographies, échantillons et matériaux qui y
                    figurent, technologies industrielles, fichiers, logos,
                    combinaisons de couleurs et tout élément susceptible de
                    protection) sont protégés par des droits de propriété
                    intellectuelle et industrielle appartenant à DOLCKER
                    SISTEMAS, S.L. L'UTILISATEUR est autorisé à reproduire,
                    visualiser, imprimer, lier et/ou télécharger partiellement
                    le contenu du SITE WEB uniquement et exclusivement en
                    respectant TOUTES les conditions suivantes :
                    <br />
                    <br />
                    <ul style={{ listStyle: 'initial', paddingLeft: '40px' }}>
                        <li>
                            Il doit être compatible avec l'objectif du SITE WEB.
                        </li>
                        <li>
                            Il ne doit pas être utilisé à des fins commerciales
                            autres que celles du TITULAIRE.
                        </li>
                        <li>
                            Aucun des contenus du SITE WEB ne doit être modifié
                            de quelque manière que ce soit.
                        </li>
                        <li>
                            Aucun graphique, photographie ou image disponible
                            sur le SITE WEB ne doit être utilisé, copié ou
                            distribué séparément du texte ou des autres images
                            qui l'accompagnent.
                        </li>
                        <li>
                            Il doit inclure, en permanence et de manière
                            visible, des informations sur l'URL (ou le lien)
                            vers la page web d'où il a été extrait, ou à défaut,
                            vers www.dolcker.es
                        </li>
                    </ul>
                    <br />
                    <br />
                    L'UTILISATEUR du SITE WEB doit s'abstenir de supprimer,
                    altérer, contourner ou manipuler tout dispositif de
                    protection ou système de sécurité inclus dans les différents
                    éléments qui le composent (graphiques, images,
                    photographies, échantillons et matériaux qui y figurent,
                    fichiers, logos, etc.).
                    <br />
                    <br />
                    L'accès au SITE WEB ne confère aucun droit, en totalité ou
                    en partie, sur les droits de propriété intellectuelle ou
                    industrielle. L'utilisation de signes distinctifs (marques,
                    noms commerciaux) n'est pas autorisée sans l'autorisation
                    expresse des titulaires légitimes.
                    <br />
                    <br />
                    LE TITULAIRE se réserve le droit de modifier, supprimer
                    et/ou mettre à jour les informations et éléments contenus
                    sur le SITE WEB, sa configuration et/ou sa présentation, à
                    tout moment et sans préavis.
                    <br />
                    <br />
                    <strong>LIMITATION DE RESPONSABILITÉ</strong>
                    <br />
                    L'UTILISATEUR s'engage à ne pas utiliser le site web et les
                    services qui y sont offerts pour des activités contraires à
                    la loi et à respecter à tout moment les présentes conditions
                    générales, en s'abstenant d'utiliser le site web
                    www.dolcker.es de manière à pouvoir entraver, endommager ou
                    altérer son fonctionnement normal, les biens ou les droits
                    du TITULAIRE, des autres utilisateurs ou, en général, de
                    tout tiers.
                    <br />
                    <br />
                    En particulier, sans que cela limite l'obligation générale
                    assumée par L'UTILISATEUR conformément au paragraphe
                    précédent, L'UTILISATEUR s'engage, lors de l'utilisation du
                    SITE WEB, à :
                    <br />
                    <br />
                    <ul style={{ listStyle: 'initial', paddingLeft: '40px' }}>
                        <li>
                            Ne pas introduire, stocker ou diffuser via le site
                            web des contenus ou de la propagande à caractère
                            raciste, xénophobe, pornographique, sexiste, faisant
                            l'apologie du terrorisme ou portant atteinte aux
                            droits de l'homme, ou agir au détriment des droits à
                            la vie privée, à l'honneur, à l'image ou à la
                            dignité des personnes.
                        </li>
                        <li>
                            Ne pas introduire, stocker ou diffuser via le site
                            web des virus informatiques ou tout autre système
                            physique ou logique susceptible de causer des
                            dommages aux équipements informatiques du TITULAIRE
                            ou de tiers.
                        </li>
                        <li>
                            Ne pas introduire, stocker ou diffuser via le site
                            web des déclarations ou références fausses,
                            incorrectes ou inexactes concernant les pages, les
                            produits et/ou les services du TITULAIRE.
                        </li>
                    </ul>
                    <br />
                    <br />
                    LE TITULAIRE ne sera pas responsable :
                    <br />
                    <br />
                    <ul style={{ listStyle: 'initial', paddingLeft: '40px' }}>
                        <li>
                            En ce qui concerne l'utilisation abusive du service.
                            - L'UTILISATEUR doit faire un usage approprié du
                            service mis à sa disposition, et LE TITULAIRE ne
                            pourra être tenu responsable de l'utilisation
                            abusive qui en est faite.
                        </li>
                        <li>
                            En ce qui concerne les opinions ou contenus. - LE
                            TITULAIRE n'est pas responsable directement ou
                            indirectement des opinions ou contenus émis dans les
                            messages.
                        </li>
                        <li>
                            En ce qui concerne les éventuelles défaillances
                            techniques. - L'ENTREPRISE ne sera en aucun cas
                            responsable des altérations du service causées par
                            des défaillances du réseau électrique, du réseau de
                            connexion de données, du serveur ou des prestations
                            de ces derniers.
                        </li>
                        <li>
                            En ce qui concerne le contenu des sites web de
                            tiers. - LE TITULAIRE n'est pas responsable des
                            informations et autres contenus intégrés dans les
                            espaces ou les pages web de tiers accessibles à
                            partir du SITE WEB.
                        </li>
                    </ul>
                    <br />
                    <br />
                    LE TITULAIRE investit constamment dans des dispositifs
                    technologiques visant à minimiser le risque de virus et de
                    logiciels similaires, ainsi que de contenus non autorisés
                    dans ses systèmes d'information. Cependant, L'UTILISATEUR
                    doit être conscient qu'il doit prendre ses propres mesures
                    pour minimiser les dommages causés par de tels logiciels non
                    autorisés, virus, chevaux de Troie et tout autre type de
                    logiciel malveillant, en déchargeant LE TITULAIRE de toute
                    responsabilité découlant de la présence de logiciels
                    malveillants dans les fichiers mis à disposition sur le
                    présent site web.
                    <br />
                    <br />
                    Comme l'utilisation du SITE WEB peut impliquer un traitement
                    de données personnelles, nous vous demandons de lire
                    attentivement notre politique de confidentialité à cet
                    égard. LE TITULAIRE se réserve le droit de modifier à tout
                    moment et sans préavis les présentes Conditions générales,
                    ainsi que les Conditions particulières éventuellement
                    incluses, par la publication de ces modifications sur le
                    site web afin qu'elles puissent être connues des
                    utilisateurs. Si une clause du présent document est déclarée
                    nulle, les autres clauses resteront en vigueur et seront
                    interprétées en tenant compte de la volonté des parties et
                    de l'objet même des présentes conditions.
                    <br />
                    <br />
                    LE TITULAIRE ne sera pas responsable s'il n'a pas
                    connaissance effective que l'activité ou les informations
                    auxquelles il renvoie ou recommande sont illicites ou
                    portent atteinte à des biens ou droits de tiers susceptibles
                    d'indemnisation, ou s'il en a connaissance, s'il agit avec
                    diligence pour supprimer ou désactiver le lien
                    correspondant.
                    <br />
                    <br />
                    <strong>JURIDICTION ET LOIS APPLICABLES</strong>
                    <br />
                    La loi applicable au présent contrat est la loi espagnole.
                    Pour les litiges qui pourraient survenir à l'occasion du
                    présent contrat, les parties se soumettent expressément aux
                    tribunaux et aux juges de Madrid, renonçant à leur propre
                    juridiction.
                    <br />
                    <br />
                    <strong>GÉNÉRALITÉS</strong>
                    <br />
                    LE TITULAIRE poursuivra toute violation des présentes
                    conditions ainsi que toute utilisation abusive de son site
                    web en exerçant toutes les actions légales qui peuvent lui
                    correspondre en droit.
                    <br />
                    <br />
                    Éventuellement, ces Conditions d'utilisation peuvent être
                    révisées afin de mettre à jour les changements de la
                    législation en vigueur, de mettre à jour nos procédures de
                    collecte et d'utilisation des informations, d'introduire de
                    nouveaux services ou d'exclure d'autres services. Ces
                    modifications seront effectives dès leur publication sur le
                    site web, il est donc important de consulter régulièrement
                    cet Avis juridique pour rester informé des modifications
                    apportées.
                </Text>
            </Seccion>
            <Final />
        </>
    )
}

export default AvisoLegal
