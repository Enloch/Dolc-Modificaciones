import { Link } from 'react-router-dom'
import MenuLanzadera from '../../components/ListaContenidos/MenuLanzadera'
import Seccion from '../../components/Seccion'
import Text from '../../components/Text'
import { Titulo2 } from '../../components/Titulos'
import useMenuDesplegable from '../../hooks/useMenuDesplegable'
import Final from '../../modules/ES/System/10_Final'

//English
const EnglishMenu = ({ isMenuDesplegable }) => {
    return <MenuLanzadera en={true} isMenuDesplegable={isMenuDesplegable} />
}
const PoliticaPrivacidadEn = ({ lang = '' }) => {
    const { menuDesplegable, btnIndice } = useMenuDesplegable(
        EnglishMenu,
        <Link to={`/${lang}`}>Dolcker</Link>
    )

    return (
        <>
            {menuDesplegable}
            {btnIndice}
            <Seccion>
                <Titulo2>Privacy Policy</Titulo2>
                <Text>
                    <strong>PRIVACY POLICY OF www.dolcker.es</strong>
                    <br />
                    Last updated: 20/06/2022
                    <br />
                    <br />
                    <strong>Who is the responsible for the treatment?</strong>
                    <br />
                    Identity of the responsible. DOLCKER SISTEMAS, S.L.
                    (B-09710724) Physical address. Calle Talamanca del Jarama,
                    19 portal A 5ª. 28051 Madrid (Spain) Email.
                    dolcker@dolcker.es Phone. +34 913 851 480
                    <br />
                    <br />
                    <strong>WHAT PERSONAL DATA DO WE PROCESS?</strong>
                    <br />
                    In the framework of the different treatments of activities
                    performed in the organization, the following types are
                    collected: Personal data of an identifying nature.
                    <br />
                    <br />
                    <strong>
                        WHAT IS THE PURPOSE AND SPECIFIC CASES FOR WHICH WE PROCESS PERSONAL DATA?
                    </strong>
                    <br />
                    On www.dolcker.es we process personal data for the
                    following purposes: Newsletter: To send information through
                    the means provided about new developments, news, products
                    and services related to us or our sector.
                    <br />
                    <br />
                    Contact: to respond to information requests received about
                    the products and services offered, as well as to respond to
                    any other type of question that users send.
                    <br />
                    <br />
                    No profiles will be created with the personal data collected
                    nor will automated decisions be made.
                    <br />
                    <br />
                    <strong>
                        WHAT IS THE LEGITIMIZATION FOR THE PROCESSING OF PERSONAL DATA?
                    </strong>
                    <br />
                    In the organization, personal data can be processed for:
                    Consent: When accessing our website, in case of filling out
                    forms or sending us data through the indicated electronic
                    contact means, you accept this Privacy Policy. It is for
                    this reason that we base ourselves on the user's consent for
                    the processing of their data. Additionally, we inform you
                    that we will only use personal data in accordance with this
                    Privacy Policy and, in general, we will request your
                    consent for uses with different purposes than those for
                    which they were initially provided. Finally, we inform you
                    that you can withdraw your consent at any time, you just
                    need to contact us through the means indicated in this
                    privacy policy.
                    <br />
                    <br />
                    To respond to requests, the interested party must provide
                    the minimum requested information. In case of a contract,
                    they cannot be attended to.
                    <br />
                    <br />
                    <strong>
                        HOW LONG DO WE PROCESS PERSONAL DATA?
                    </strong>
                    <br />
                    On www.dolcker.es we process personal data for the
                    following periods: The period established by law.
                    <br />
                    <br />
                    The period necessary to comply with operational obligations.
                    <br />
                    <br />
                    The data will be kept for as long as necessary to fulfill
                    the purpose for which they were collected and to determine
                    any possible liabilities that may arise from said purpose
                    and the processing of the data, in accordance with the
                    previously mentioned regulations, in addition to the periods
                    established in the applicable records and documentation
                    regulations.
                    <br />
                    <br />
                    <strong>
                        WITH WHOM DO WE SHARE PERSONAL DATA?
                    </strong>
                    <br />
                    To fulfill the purposes described above, personal data may
                    be shared with: Service providers who perform services on
                    our behalf. No international transfers outside the European
                    Economic Area are made.
                    <br />
                    <br />
                    <strong>WHAT RIGHTS CAN YOU EXERCISE?</strong>
                    <br />
                    According to European regulations, the rights that assist
                    you are the following: Access, the right to request
                    information from the person responsible for a file about
                    whether your personal data is being processed.
                    <br />
                    <br />
                    Rectification, the right that allows the affected person to
                    request the modification of data that is inaccurate or
                    incomplete.
                    <br />
                    <br />
                    Opposition, the right of a person to oppose the processing
                    of their personal data or the cessation of these.
                    <br />
                    <br />
                    Individual automated decisions, the right not to be the
                    subject of a decision based solely on automated processing,
                    including profiling, that produces legal effects on you or
                    affects you significantly in a similar way.
                    <br />
                    <br />
                    Limitation, the right to suspend the processing of your
                    personal data in certain circumstances.
                    <br />
                    <br />
                    Deletion or Forgetfulness, the right to deletion of your
                    personal data. Portability, the right to request that the
                    person responsible for the processing provide you with your
                    personal data in a structured and clear format to another
                    person responsible. The maximum period for resolving the
                    request is 30 days from its receipt, and it may be extended
                    by a maximum period of 2 months if necessary.
                    <br />
                    <br />
                    The applicant can exercise their rights through the
                    following means: Email to dolcker@dolcker.es, providing
                    documentation that proves the identity of the applicant
                    (copy of the front of the National Identity Document, or
                    equivalent).
                    <br />
                    <br />
                    Postal mail to Calle Talamanca del Jarama, 19 portal A 5A.
                    28051, Madrid (Spain), providing documentation that proves
                    the identity of the applicant (copy of the front of the
                    National Identity Document, or equivalent).
                    <br />
                    <br />
                    In any case, you can request the protection of the Spanish
                    Data Protection Agency through its website.
                    <br />
                    <br />
                    <strong>CHANGES TO THIS PRIVACY POLICY</strong>
                    <br />
                    Eventually, this Privacy Policy may be reviewed in order to
                    update changes in current legislation, update the procedures
                    for collecting and using personal data, the appearance of new
                    services or the exclusion of others. These changes will be
                    effective from their publication on the website, so it is
                    important that you regularly review this Privacy Policy in
                    order to remain informed about the changes made.
                </Text>
            </Seccion>
            <Final />
        </>
    )
}

export default PoliticaPrivacidadEn
