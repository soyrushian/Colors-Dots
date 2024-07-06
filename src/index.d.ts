import { getStyle } from "../src/libs/styles.js";

declare class Colors {
    constructor(text?: string);

    colors(text: string, style?: string): this;

    toString(): string;

    [Symbol.for('nodejs.util.inspect.custom')](): string;
}

/**
 * Aplica un estilo de color al texto proporcionado. **Documentacion:** https://saturnxp.com
 *
 * @param {string} text - El texto al que se aplicará el estilo de color. Ejemplo: `Hello World!`
 * @param {string} style - El estilo de color a aplicar. Ejemplo: `bg-cyan text-white font-bold`
 * @returns {string} Texto estilizado.
 * @example
 * console.log(colors("Hello","bg-cyan text-white font-bold").colors("World!","bg-red text-white font-bold"))
 */
declare function colors(text: string, style: string): Colors;

export default colors;
