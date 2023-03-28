import jss from 'jss';
import preset from 'jss-preset-default';
import { SheetsRegistry } from 'react-jss';
import { Border, BoxSizing, Cursor, TextDecoration } from '@virketrang/jss';
import Colors from '@virketrang/colors';

const setupJss = () => {
    jss.setup(preset());

    const sheetsRegistry = new SheetsRegistry();

    const globalStyleSheet = jss
        .createStyleSheet({
            '@global': {
                '@import': [
                    "url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap')",
                    "url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')",
                ],
                '*, *::before, *::after': {
                    margin: 0,
                    padding: 0,
                    boxSizing: BoxSizing.borderBox,
                },
                'html, body': {
                    height: (100.0).percentage(),
                },
                'body': {
                    fontFamily: 'Montserrat, sans-serif',
                },
                '#root': {
                    minHeight: (100.0).percentage(),
                },
                'a': {
                    textDecoration: TextDecoration.none,
                    color: Colors.inherit,
                },
                'ul, menu': {
                    listStyleType: 'none',
                },
                'button': {
                    border: Border.none,
                    backgroundColor: Colors.inherit,
                    cursor: Cursor.pointer,
                    outlineColor: Colors.transparent,
                    color: Colors.inherit,
                },
                'dialog': {
                    border: Border.none,
                },
            },
        })
        .attach();

    sheetsRegistry.add(globalStyleSheet);

    return sheetsRegistry;
};

const sheets = setupJss();

export default sheets;
