export const items = {
    marshall: {
        M1960A: {
            urlImglarge: '/img/items/amps/guitar-amp-cabinets/marshall/1960A-large.png',
            urlImg: '/img/items/amps/guitar-amp-cabinets/marshall/1960A.png'
        },
        M1960AHW: {
            urlImglarge: '/img/items/amps/guitar-amp-cabinets/marshall/1960AHW-large.png',
            urlImg: '/img/items/amps/guitar-amp-cabinets/marshall/1960AHW.png'
        },
        M1960AX: {
            urlImglarge: '/img/items/amps/guitar-amp-cabinets/marshall/1960AX-large.png',
            urlImg: '/img/items/amps/guitar-amp-cabinets/marshall/1960AX.png'
        },
        M2551BV: {
            urlImglarge: '/img/items/amps/guitar-amp-cabinets/marshall/2551BV-large.png',
            urlImg: '/img/items/amps/guitar-amp-cabinets/marshall/2551BV.png'
        },
        MX212AR: {
            urlImglarge: '/img/items/amps/guitar-amp-cabinets/marshall/MX212AR-large.png',
            urlImg: '/img/items/amps/guitar-amp-cabinets/marshall/MX212AR.png'
        }
    },
    orange: {
        Orange412A: {
            urlImglarge: '/img/items/amps/guitar-amp-cabinets/orange/Orange412A-large.png',
            urlImg: '/img/items/amps/guitar-amp-cabinets/orange/Orange412A.png'
        },
        Orange412ABK: {
            urlImglarge: '/img/items/amps/guitar-amp-cabinets/orange/Orange412ABK-large.png',
            urlImg: '/img/items/amps/guitar-amp-cabinets/orange/Orange412ABK.png'
        },
        PPC212V: {
            urlImglarge: '/img/items/amps/guitar-amp-cabinets/orange/PPC212V-large.png',
            urlImg: '/img/items/amps/guitar-amp-cabinets/orange/PPC212V.png'        
        },
        PPC212VBK: {
            urlImglarge: '/img/items/amps/guitar-amp-cabinets/orange/PPC212VBK-large.png',
            urlImg: '/img/items/amps/guitar-amp-cabinets/orange/PPC212VBK.png'
        }
    }
}

let imgItems = [{ img: items.marshall.M1960AX.urlImg }];
imgItems = [...imgItems, { img: items.marshall.M1960A.urlImg }];
imgItems = [...imgItems, { img: items.marshall.M2551BV.urlImg }];
imgItems = [...imgItems, { img: items.orange.Orange412A.urlImg }];
imgItems = [...imgItems, { img: items.orange.PPC212V.urlImg }];

export const guitarAmpCabinets = imgItems;