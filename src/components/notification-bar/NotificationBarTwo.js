import Link from "next/link";
import {Container} from "react-bootstrap";
import SocialIcons from "@components/newsletter/elements/Icons";

const NotificationBarTwo = ({className, containerFluid, dark}) => {
    return (
        <div className={`${dark ? 'tt-color-scheme-01' : ''} ${className ? className : ''}`}>
            <Container fluid={containerFluid}>
                <div className="tt-header-row tt-top-row">
                    <div className="tt-col-left">
                        <div className="tt-box-info">
                            <ul>
                                <li>
                                    <i className="icon-f-93"/>
                                    <Link href="tel:+223622717">+223 93 62 27 17</Link>
                                </li>

                                <li>
                                    <i className="icon-f-92"/>
                                    <Link href="tel:+22394177858">+94 17 78 58</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tt-col-right ml-auto">
                        <SocialIcons/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

NotificationBarTwo.defaultProps = {
    dark: true
}

export default NotificationBarTwo;