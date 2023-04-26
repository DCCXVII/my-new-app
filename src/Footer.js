import React from "react";
import './Footer.css'



function Footer(props){
    return(
        <div>
            <footer className="footer">
                <ul className="footer-menu">
                    <li>
                    <a href="" className="footer-links">
                        Contactez-Nous
                    </a>
                    </li>
                    <li>
                    <a href="" className="footer-links">
                        Nos Événements
                    </a>
                    </li>
                    <li>
                    <a href="" className="footer-links">
                        Les Coures
                    </a>
                    </li>
                    <li>
                    <a href="" className="footer-links">
                        Nos Instructeurs
                    </a>
                    </li>
                    <li>
                    <a href="" className="footer-links">
                        Rejoignez les lives
                    </a>
                    </li>
                    <li>
                    <a href="" className="footer-links">
                        À propos de nous
                    </a>
                    </li>
                </ul>
                <div className="social-icons">
                    <a href="#">
                    <i className="fa fa-facebook" />
                    </a>
                    <a href="#">
                    <i className="fa fa-instagram" />
                    </a>
                    <a href="#">
                    <i className="fa fa-twitter" />
                    </a>
                    <a href="#">
                    <i className="fa fa-youtube" />
                    </a>
                </div>
                <p className="copyrights">© 2023 Yogamar. All Rights Reserved.</p>
            </footer>
        </div>


    )
}

export default Footer ;