export const items = {
    ampeg: {
        PF500BH: {
            urlImglarge: '/img/items/amps/bass-amp-heads/ampeg/PF500BH-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/ampeg/PF500BH.png'
        },
        SVT3Pro: {
            urlImglarge: '/img/items/amps/bass-amp-heads/ampeg/SVT3Pro-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/ampeg/SVT3Pro.png'
        },
        SVT4Pro: {
            urlImglarge: '/img/items/amps/bass-amp-heads/ampeg/SVT4Pro-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/ampeg/SVT4Pro.png'
        },
        SVT7Pro: {
            urlImglarge: '/img/items/amps/bass-amp-heads/ampeg/SVT7Pro-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/ampeg/SVT7Pro.png'
        }
    },
    darkglass: {
        alpha500: {
            urlImglarge: '/img/items/amps/bass-amp-heads/darkglass/Alpha500-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/darkglass/Alpha500.png'
        },
        alpha900: {
            urlImglarge: '/img/items/amps/bass-amp-heads/darkglass/Alpha900-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/darkglass/Alpha900.png'
        },
        exponent500: {
            urlImglarge: '/img/items/amps/bass-amp-heads/darkglass/Exponent500-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/darkglass/Exponent500.png'
        },
        micro500V2: {
            urlImglarge: '/img/items/amps/bass-amp-heads/darkglass/Micro500V2-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/darkglass/Micro500V2.png'
        },
        mT900v2Bk: {
            urlImglarge: '/img/items/amps/bass-amp-heads/darkglass/MT900v2Bk-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/darkglass/MT900v2Bk.png'
        }
    },
    gallienKrueger: {
        fusionS1200: {
            urlImglarge: '/img/items/amps/bass-amp-heads/gallien-krueger/FusionS1200-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/gallien-krueger/FusionS1200.png'
        },
        legacy800: {
            urlImglarge: '/img/items/amps/bass-amp-heads/gallien-krueger/Legacy800-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/gallien-krueger/Legacy800.png'
        },
        legacy1200: {
            urlImglarge: '/img/items/amps/bass-amp-heads/gallien-krueger/Legacy1200-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/gallien-krueger/Legacy1200.png'
        }
    },
    hartke: {
        LH1000: {
            urlImglarge: '/img/items/amps/bass-amp-heads/hartke/LH1000-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/hartke/LH1000.png'
        },
        LX8500: {
            urlImglarge: '/img/items/amps/bass-amp-heads/hartke/LX8500-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/hartke/LX8500.png'
        },
        TX300: {
            urlImglarge: '/img/items/amps/bass-amp-heads/hartke/TX300-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/hartke/TX300.png'
        }
    },
    orange: {
        AD200BBlk: {
            urlImglarge: '/img/items/amps/bass-amp-heads/orange/AD200BBlk-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/orange/AD200BBlk.png'
        },
        bassTerrorH500: {
            urlImglarge: '/img/items/amps/bass-amp-heads/orange/BassTerrorH500-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/orange/BassTerrorH500.png'
        },
        OB1500: {
            urlImglarge: '/img/items/amps/bass-amp-heads/orange/OB1-500-large.png',
            urlImg: '/img/items/amps/bass-amp-heads/orange/OB1-500.png'
        }
    }
}

let imgItems = [{ img: items.ampeg.SVT3Pro.urlImg }];
imgItems = [...imgItems, { img: items.darkglass.exponent500.urlImg }];
imgItems = [...imgItems, { img: items.gallienKrueger.fusionS1200.urlImg }];
imgItems = [...imgItems, { img: items.hartke.TX300.urlImg }];
imgItems = [...imgItems, { img: items.orange.bassTerrorH500.urlImg }];

export const bassAmpHeads = imgItems;