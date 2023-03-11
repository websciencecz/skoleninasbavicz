<template>
    <div>
        <a href="#" id="myBtn"><i title="Nahoru" class="fas fa-chevron-circle-up" aria-hidden="true"></i></a>

        <div id="navbar">
            <div class="container">
                <div class="row">

                        <nav id="header" class="navbar navbar-expand-lg navbar-light ">

                            <NuxtLink to="/" id="web-title" class="navbar-brand"><img src="/img/logo.svg"></NuxtLink>

                            <button id="hamburger" class="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="collapse_target">
                                <ul id="menu" class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="/skoleni">VEŘEJNÁ ŠKOLENÍ</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/firemni-skoleni">FIREMNÍ ŠKOLENÍ</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/lektori">LEKTOŘI</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/kontakt">KONTAKT</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                </div>
            </div>
        </div>
        <nuxt />
        <div class="footer-box">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="footer-contact">
                            <table>
                                <tr>
                                    <td style="padding-bottom: 15px">
                                        <img src="/img/logo_ws.png" width="150">
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        E-Mail: <a href="mailto:info@skoleninasbavi.cz" class="white-link">info@skoleninasbavi.cz</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tel.: <a href="tel:+420733348366" class="white-link">+420 733 348 366</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        IČO: 088 99 541
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-4 right">
                        <div class="social-icons">
                            <a href="https://www.facebook.com/skoleninasbavi/" target="_blank" class="white-link"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/skoleninasbavi"  target="_blank" class="white-link"><i class="fab fa-twitter"></i></a>
                        </div>
                        <br>
                        <ul class="important-links">
                            <li><a href="https://www.webscience.cz/docs/obchodni_podminky.pdf" target="_blank">Obchodní podmínky</a></li>

                        </ul>
                    </div>
                </div>
                <hr style="color: white;">
                <div class="footer-copyright">
                    <div class="copyright-space">
                        <span class="copyright">&copy; 2023 - Školení nás baví</span>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>