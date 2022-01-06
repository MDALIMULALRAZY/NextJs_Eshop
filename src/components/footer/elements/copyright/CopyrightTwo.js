import PropTypes from "prop-types";
import Logo from "@components/logo";
import {Container} from "react-bootstrap";

const CopyrightOne = ({className, dark, logo}) => {
    return (
        <div className={`tt-footer-custom ${className ? className : ''} ${dark ? 'tt-color-scheme-04' : ''}`}>
            <Container>
                <div className="tt-row">
                    <div className="tt-col-left">
                        <div className="tt-col-item tt-logo-col">
                            {dark ? (
                                <Logo src="/assets/images/no-placeholder/logo-white.png"/>
                            ) : (
                                <Logo src={logo}/>
                            )}
                        </div>
                        <div className="tt-col-item">
                            <div className="tt-box-copyright ht-copy">
                                &copy; Happy & Ambitious {new Date().getFullYear()}.
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

CopyrightOne.propTypes = {
    className: PropTypes.string,
    dark: PropTypes.bool,
    logo: PropTypes.string.isRequired
}

export default CopyrightOne;