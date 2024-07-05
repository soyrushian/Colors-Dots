import getStyle from "../src/libs/styles.js"

class Colors {
    constructor(text = '') {
        this.text = text;
    }

    colors(text, style = "reset") {
        const cleanStyles = style.toLowerCase().trim();
        const styleList = cleanStyles.split(' ');
        const finalStyle = styleList.map(getStyle).join('');
        const resetStyle = getStyle("reset");
        const styledText = [finalStyle,text,resetStyle].join('');
        this.text += styledText;

        return this;
    }

    toString() {
        return this.text;
    }
    
    [Symbol.for('nodejs.util.inspect.custom')]() {
        return this.toString();
    }
}

/**
 * Aplica un estilo de color al texto proporcionado. **Documentacion:** https://saturnxp.com
 *
 * 
 * @param {string} text - El texto al que se aplicará el estilo de color. Ejemplo: `Hello World!`
 * @param {string} style - El estilo de color a aplicar. Ejemplo: `bg-cyan text-white font-bold`
 * @returns {string} Texto estilizado.
 * @type {(text : string, style: string) => string}
 * 
 * @example
 * console.log(colors("Hello","bg-cyan text-white font-bold").colors("World!","bg-red text-white font-bold") ) 
 */
const colors = (text, style) => new Colors().colors(text, style);

module.exports = colors