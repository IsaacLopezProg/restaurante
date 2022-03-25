import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';

export default function casa(){

    return(
        <>

            <Head>


            </Head>

            {/* SECTION HEADER */}

            <div className="u-body u-xl-mode">

            <header className="u-clearfix u-header u-header" id="sec-ee4a"><div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                <a href="https://nicepage.com" className="u-image u-logo u-image-1">
                <Image width={64} height={64} src="/images/default-logo.png" className="u-logo-image u-logo-image-1"/>
                </a>
                <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                <div className="menu-collapse" style={{fontSize:'1rem', letterSpacing:'0px'}}>
                    <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
                    {/* <svg className="u-svg-link" viewBox="0 0 24 24"><use xlink:href="#menu-hamburger"></use></svg> */}
                    {/* <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect></g></svg> */}
                    </a>
                </div>
                <div className="u-custom-menu u-nav-container">
                    <ul className="u-nav u-unstyled u-nav-1"><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="//Casa.html" style={{padding:'10px 20px'}}>Casa</a>
        </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="//About.html" style={{padding:'10px 20px'}}>About</a>
        </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="//Contact.html"style={{padding:'10px 20px'}}>Contact</a>
        </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="//Página-1.html"style={{padding:'10px 20px'}}>Página 1</a>
        </li><li className="u-nav-item"><a className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"style={{padding:'10px 20px'}}>ejemplo</a>
        </li></ul>
                </div>
                <div className="u-custom-menu u-nav-container-collapse">
                    <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                    <div className="u-inner-container-layout u-sidenav-overflow">
                        <div className="u-menu-close"></div>
                        <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li className="u-nav-item"><a className="u-button-style u-nav-link" href="//Casa.html">Casa</a>
        </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="//About.html">About</a>
        </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="//Contact.html">Contact</a>
        </li><li className="u-nav-item"><a className="u-button-style u-nav-link" href="//Página-1.html">Página 1</a>
        </li><li className="u-nav-item"><a className="u-button-style u-nav-link">ejemplo</a>
        </li></ul>
                    </div>
                    </div>
                    <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                </div>
                </nav>
            </div>
            </header>

            {/* SECTION */}

            <section className="u-carousel u-slide u-block-564b-1" id="carousel_6451" data-interval="5000" data-u-ride="carousel">
                <ol className="u-absolute-hcenter u-carousel-indicators u-block-564b-2">
                    <li data-u-target="#carousel_6451" data-u-slide-to="0" className="u-active u-grey-30"></li>
                    <li data-u-target="#carousel_6451" className="u-grey-30" data-u-slide-to="1"></li>
                </ol>
                <div className="u-carousel-inner" role="listbox">
                    <div className="skrollable skrollable-between u-active u-align-center u-carousel-item u-clearfix u-image u-shading u-section-1-1" src="">
                    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <h1 className="u-text u-text-default u-text-1">Coaching Services</h1>
                        <p className="u-large-text u-text u-text-variant u-text-2">Simple Text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum.</p>
                        <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
                        <div className="u-layout">
                            <div className="u-layout-row">
                            <div className="u-align-center-sm u-align-center-xs u-align-right-lg u-align-right-md u-align-right-xl u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                                <div className="u-container-layout u-valign-middle u-container-layout-1">
                                <a href="#" className="u-border-2 u-border-palette-2-base u-btn u-btn-round u-button-style u-palette-2-base u-radius-50 u-btn-1">Learn More</a>
                                </div>
                            </div>
                            <div className="u-align-center-sm u-align-center-xs u-align-left-lg u-align-left-md u-align-left-xl u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                                <div className="u-container-layout u-valign-middle u-container-layout-2">
                                <a href="#" className="u-border-2 u-border-white u-btn u-btn-round u-button-style u-radius-50 u-btn-2">Live Demo</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <a className="u-absolute-vcenter u-carousel-control u-carousel-control-prev u-text-grey-30 u-block-564b-3" href="#carousel_6451" role="button" data-u-slide="prev">
                    <span aria-hidden="true">
                    <svg viewBox="0 0 477.175 477.175"><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
                                c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"></path></svg>
                    </span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="u-absolute-vcenter u-carousel-control u-carousel-control-next u-text-grey-30 u-block-564b-4" href="#carousel_6451" role="button" data-u-slide="next">
                    <span aria-hidden="true">
                    <svg viewBox="0 0 477.175 477.175"><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                                c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"></path></svg>
                    </span>
                    <span className="sr-only">Next</span>
                </a>
                </section>


                {/* SECTION */}


                <section className="u-align-center u-clearfix u-section-2" id="sec-7a00">
                    <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                        <h2 className="u-text u-text-default u-text-1">Sample Headline</h2>
                        <p className="u-text u-text-2">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                        <div className="u-expanded-width u-gallery u-layout-grid u-lightbox u-show-text-on-hover u-gallery-1">
                        <div className="u-gallery-inner u-gallery-inner-1">
                            <div className="u-effect-fade u-gallery-item">
                            <div className="u-back-slide">
                                <Image width={328} height={227} className="u-back-image u-expanded" src="/images/3.svg"/>
                            </div>
                            <div className="u-over-slide u-shading u-over-slide-1">
                                <h3 className="u-gallery-heading"></h3>
                                <p className="u-gallery-text"></p>
                            </div>
                            </div>
                            <div className="u-effect-fade u-gallery-item">
                            <div className="u-back-slide">
                            <Image width={328} height={227} className="u-back-image u-expanded" src="/images/3.svg"/>
                            </div>
                            <div className="u-over-slide u-shading u-over-slide-2">
                                <h3 className="u-gallery-heading"></h3>
                                <p className="u-gallery-text"></p>
                            </div>
                            </div>
                            <div className="u-effect-fade u-gallery-item">
                            <div className="u-back-slide">
                            <Image width={328} height={227} className="u-back-image u-expanded" src="/images/3.svg"/>
                            </div>
                            <div className="u-over-slide u-shading u-over-slide-3">
                                <h3 className="u-gallery-heading"></h3>
                                <p className="u-gallery-text"></p>
                            </div>
                            </div>
                            <div className="u-effect-fade u-gallery-item">
                            <div className="u-back-slide">
                            <Image width={328} height={227} className="u-back-image u-expanded" src="/images/3.svg"/>
                            </div>
                            <div className="u-over-slide u-shading u-over-slide-4">
                                <h3 className="u-gallery-heading"></h3>
                                <p className="u-gallery-text"></p>
                            </div>
                            </div>
                            <div className="u-effect-fade u-gallery-item">
                            <div className="u-back-slide">
                            <Image width={328} height={227} className="u-back-image u-expanded" src="/images/3.svg"/>
                            </div>
                            <div className="u-over-slide u-shading u-over-slide-5">
                                <h3 className="u-gallery-heading"></h3>
                                <p className="u-gallery-text"></p>
                            </div>
                            </div>
                            <div className="u-effect-fade u-gallery-item">
                            <div className="u-back-slide">
                            <Image width={328} height={227} className="u-back-image u-expanded" src="/images/3.svg"/>
                            </div>
                            <div className="u-over-slide u-shading u-over-slide-6">
                                <h3 className="u-gallery-heading"></h3>
                                <p className="u-gallery-text"></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>

                    {/* SECTION FOOTER */}

                        <footer className="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-d386"><div className="u-clearfix u-sheet u-sheet-1">
                            <p className="u-small-text u-text u-text-variant u-text-1">Texto de ejemplo. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                        </div></footer>
                        <section className="u-backlink u-clearfix u-grey-80">
                        <a className="u-link" href="https://nicepage.com/website-templates" target="_blank">
                            <span>Website Templates</span>
                        </a>
                        <p className="u-text">
                            <span>created with</span>
                        </p>
                        <a className="u-link" href="" target="_blank">
                            <span>Website Builder Software</span>
                        </a>. 
                        </section>

            </div>

        </>
    )
}