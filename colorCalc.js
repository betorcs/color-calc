(function(context) {

    function colorCalc(colorBase) {
    }

    colorCalc.calcTint = function calcTint(c) {
        return c * 1.2;
    }


    /**
     * Provides palette color based in color provided.
     * 
     * @public
     * @param {string} color Base color in hexa
     * @return {string} Lighten 20 color 
     */
    colorCalc.from = function from(color) {
        var tinycolor = require('tinycolor2');
        var base = tinycolor(color);
        var rgb = base.toRgb();

        var rt = this.calcTint(rgb.r);
        var gt = this.calcTint(rgb.g);
        var bt = this.calcTint(rgb.b);


        return tinycolor({r: rt, g: gt, b: bt})
            .toString("hex");
    }

    if (typeof module === 'object' && module && module.exports) {
        module.exports = colorCalc;
    } else {
        confirm.colorCalc = colorCalc;
    }

}(this));