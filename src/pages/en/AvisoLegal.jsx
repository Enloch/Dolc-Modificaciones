import { Link } from "react-router-dom";
import MenuLanzadera from "../../components/ListaContenidos/MenuLanzadera";
import Seccion from "../../components/Seccion";
import Text from "../../components/Text";
import { Titulo2 } from "../../components/Titulos";
import useMenuDesplegable from "../../hooks/useMenuDesplegable";
import Final from "../../modules/ES/System/10_Final";

//English
const EnglishMenu = ({ isMenuDesplegable }) => {
	return <MenuLanzadera en={true} isMenuDesplegable={isMenuDesplegable} />;
};
const AvisoLegalEn = ({ lang = "" }) => {
	const { menuDesplegable, btnIndice } = useMenuDesplegable(EnglishMenu, <Link to={`/${lang}`}>Dolcker</Link>);
	return (
		<>
			{menuDesplegable}
			{btnIndice}
			<Seccion>
				<Titulo2>Legal Notice</Titulo2>
				<Text>
					<strong>IDENTIFYING DATA:</strong>
					<br />
					Law 34/2002, of July 11, on Information Society Services and Electronic Commerce Company name: DOLCKER SISTEMAS, S.L. VAT:
					B-09710724 Address: Calle Los Herrán, 28 1º Ofic.3 portal A 5ª. 28051 Madrid (Spain) Email: dolcker@dolcker.es Phone: +34 913 851
					480 hereinafter referred to as THE OWNER.
					<br />
					<br />
					<strong>PURPOSE</strong>
					<br />
					The purpose of THE WEBSITE is to provide information about our services and news. If you wish to contact us, you can do so through
					the following means:
					<br />
					<br />
					<ul style={{ listStyle: "initial", paddingLeft: "40px" }}>
						<li>By postal mail, at the address indicated above through email to the address dolcker@dolcker.es</li>
						<li>By phone: +34 913 851 480</li>
					</ul>
					<br />
					Access to the website is free, except for the cost of the connection through the telecommunications network provided by the access
					provider contracted by THE USER.
					<br />
					The Terms of Use are intended to define the conditions under which sales of the products offered on the OWNER's website are
					carried out.
					<br />
					<br />
					<strong>WEBSITE USE</strong>
					<br />
					www.dolcker.es provides access to a multitude of information and services (hereinafter, "the content") belonging to THE OWNER. The
					user assumes the responsibility for the use of the website. Such responsibility extends to the records that may be necessary to
					access certain services or content. In such records, the user will be responsible for providing truthful and lawful information.
					The user undertakes to make adequate use of the content and services that THE OWNER offers through its website and, by way of
					example but not limited to, not to use them for (I) engaging in illicit, illegal or contrary to good faith and public order
					activities; (II) spreading content or propaganda of a racist, xenophobic, pornographic-illegal, apology of terrorism or against
					human rights; (III) causing damage to the physical and logical systems of THE OWNER, its suppliers or third parties, introducing
					or spreading in the network computer viruses or any other physical or logical systems that are susceptible to causing the
					aforementioned damages; (IV) attempting to access and, in its case, using the email accounts of other users and modifying or
					manipulating their messages. THE OWNER reserves the right to withdraw all those comments and contributions that violate the
					respect for the dignity of the person, that are discriminatory, xenophobic, racist, pornographic, that attack youth or childhood,
					order or public safety or that, in its judgment, are not suitable for publication because they are not related to the objective.
					In any case, THE OWNER, as administrator of its website, will act diligently as soon as it has knowledge of acts committed against
					ethics, image and prestige of THE OWNER, as well as these Terms of Use or its Privacy Policy. THE OWNER reserves the right to
					deny, at any time and without prior notice, access to this website or part of it to any user.
					<br />
					<br />
					<strong>LINK POLICY</strong>
					<br />
					The linked websites are not controlled by THE OWNER and THE OWNER is not responsible for the content of any linked website or any
					link contained in a linked website, or any changes or updates to such websites. THE OWNER is only providing these links to you for
					your convenience, and the inclusion of any link does not imply the approval of the website by THE OWNER.
					<br />
					<br />
					<strong>INTELLECTUAL PROPERTY RIGHTS</strong>
					<br />
					The website www.dolcker.es, its source code, design, navigation structure, databases and the different elements contained in it
					(texts, graphics, images, photographs, samples and materials that appear in them, industrial technologies, files, logos, color
					combinations and any other element susceptible to protection) are protected by intellectual and industrial property rights owned
					by DOLCKER SISTEMAS, S.L. THE USER is authorized to reproduce, view, print, link and/or download part of the content of THE
					WEBSITE only and exclusively under the following conditions:
					<br />
					<br />
					<ul style={{ listStyle: "initial", paddingLeft: "40px" }}>
						<li>That it is compatible with the purpose of THE WEBSITE</li>
						<li>That it is not used for commercial purposes alien to THE OWNER.</li>
						<li>That none of the content of THE WEBSITE is altered in any way.</li>
						<li>
							That no graphic, photograph or image available on THE WEBSITE is used, copied or distributed separately from the text or the
							rest of the images that accompany it.
						</li>
						<li>
							That the URL address (or link) of the website from which it has been extracted or, failing that, to www.dolcker.es is always
							included.
						</li>
					</ul>
					<br />
					<br />
					THE USER of THE WEBSITE must refrain from suppressing, altering, eluding or manipulating any protection devices or security
					systems that may be installed in the different elements that make up THE WEBSITE (graphics, images, photographs, samples and
					materials that appear in them, files, logos, etc.).
					<br />
					<br />
					Access to THE WEBSITE does not imply the transfer, transmission or any other type of waiver, total or partial, of the intellectual
					and industrial property rights. The use of distinctive signs (trademarks, trade names) is not allowed, except with the express
					authorization of the legitimate owners.
					<br />
					<br />
					THE OWNER reserves the right to modify, delete and/or update the information and elements contained in THE WEBSITE, its
					configuration and/or presentation, at any time and without prior notice.
					<br />
					<br />
					<strong>LIMITATION OF LIABILITY</strong>
					<br />
					THE USER undertakes not to use the website and the services that are offered in it for the realization of activities contrary to
					the law and to respect at all times the present general conditions, refraining from using the website www.dolcker.es, in any way
					that may prevent, damage or deteriorate the normal functioning of it, the goods or rights of THE OWNER, the rest of the Users or
					in general of any third party.
					<br />
					<br />
					In particular, and without implying any restriction to the obligation assumed by THE USER with a general character in accordance
					with the previous section, THE USER undertakes, in the use of THE WEBSITE, to:
					<br />
					<br />
					<ul style={{ listStyle: "initial", paddingLeft: "40px" }}>
						<li>
							Not to introduce, store or disseminate in or from the website, content or propaganda of a racist, xenophobic, pornographic,
							sexist, apology of terrorism or against human rights, or act in prejudice of the rights to intimacy, honor, own image or
							against the dignity of the people.
						</li>
						<li>
							Not to introduce, store or disseminate through the website computer viruses or any other physical or logical systems that are
							susceptible to causing the aforementioned damages.
						</li>
						<li>
							Not to introduce, store or disseminate in or from the website, manifestations or references false, incorrect or inaccurate
							about the pages, products and/or services of THE OWNER.
						</li>
					</ul>
					<br />
					<br />
					THE OWNER will not be responsible:
					<br />
					<br />
					<ul style={{ listStyle: "initial", paddingLeft: "40px" }}>
						<li>
							Regarding the inadequate use of the service.- THE USER must make an adequate use of the service made available to him, without
							any responsibility being able to be imputed to THE OWNER for the undue use.
						</li>
						<li>
							Regarding opinions or content.- THE OWNER is not directly or subsidiarily responsible for the opinions or contents emitted in
							the messages.
						</li>
						<li>
							Regarding possible technical deficiencies.- THE COMPANY will not be responsible in any case for alterations in the service
							that are produced by failures in the electrical network, in the data connection network, in the server or in the services
							provided by the same.
						</li>
						<li>
							Regarding the content of third-party pages. THE OWNER is not responsible for the information and other content integrated in
							spaces or web pages of third parties accessible from THE WEBSITE.
						</li>
					</ul>
					<br />
					<br />
					THE OWNER constantly invests in technological devices that try to minimize the risk of viruses and similar software, as well as
					unauthorized content in its information systems. However, THE USER must be aware that they must adopt their own measures aimed at
					minimizing the damages caused by said unauthorized software, viruses, Trojans and any type of software called malware, exempting
					THE OWNER from any responsibility that may arise from the containment of malware in the files enabled in this web.
					<br />
					<br />
					As the use of THE WEBSITE may involve the processing of personal data, please read our privacy policy carefully. THE OWNER
					reserves the right to modify, at any time and without prior notice, these General Conditions, as well as the Particular Conditions
					that, if applicable, are included, by publishing said modifications in the website with the purpose that they can be known by the
					Users. In the event that any clause of this document is declared null, the remaining clauses will remain in force and will be
					interpreted taking into account the will of the parties and the purpose itself of these conditions.
					<br />
					<br />
					THE OWNER will not be responsible if it does not have effective knowledge that the activity or information to which it refers or
					recommends is illegal or that it damages property or rights of a third party susceptible to compensation, or if it has it, acts
					diligently to suppress or disable the corresponding link.
					<br />
					<br />
					<strong>JURISDICTION AND APPLICABLE LAWS</strong>
					<br />
					The applicable law to this contract will be Spanish law. For the controversies that could arise with occasion of the present
					contract, the parts, with resignation of their own jurisdiction, are submitted expressly to the Courts and Tribunals of Madrid.
					<br />
					<br />
					<strong>GENERALITIES</strong>
					<br />
					THE OWNER will pursue the breach of these conditions as well as any improper use of its website exercising all civil and penal
					actions that may correspond to it in law.
					<br />
					<br />
					These Terms of Use may be reviewed in order to update changes in current legislation, update our data collection and use
					procedures, the appearance of new services or the exclusion of others. These changes will be effective from their publication on
					the website, so it is important that you regularly review this Legal Notice in order to stay informed about the changes made.
				</Text>
			</Seccion>
			<Final />
		</>
	);
};

export default AvisoLegalEn;
