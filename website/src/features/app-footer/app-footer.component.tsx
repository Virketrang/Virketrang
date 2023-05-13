import { AppFooterComponent, styles } from '.'

const AppFooter: AppFooterComponent = () => {
    return (
        <footer className={`${styles.footer}`}>
            <ul></ul>
            <div>
                <span>Copyright © {new Date().getFullYear()} | All rights reserved</span>
                <span>Powered by Virketrang</span>
            </div>
        </footer>
    )
}

/* <li>
<h4 className={styles.title}>Virksomheden</h4>
</li>
<li>Virksomhedsnavn: Virketrang PMV</li>
<li>CVR.NR: 41 25 52 50</li>
<li>P-nummer: 1025687953</li>
<li>Adresse: Banegårdsvej 8, 1. th., 8660 Skanderborg</li>
<li>E-mail: virketrang@virketrang.com</li>
<li>Tlf.nr. (+45) 30 28 82 55</li>
<li>Ejere: Sigfred Frey Nørgaard Knudsen og Isabella Liedecke Mørck</li>
<li>Åbningstider: 08:00-16:00</li> */

export default AppFooter
