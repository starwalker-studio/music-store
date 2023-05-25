export const items = {
    marshall: {
        M2555XBLK: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/marshall/2555XBLK-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/marshall/2555XBLK.png'
        },
        MJCM900: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/marshall/JCM900-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/marshall/JCM900.png'
        },
        MJVM410H: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/marshall/JVM410H-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/marshall/JVM410H.png'
        },
        MORI50H: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/marshall/ORI50H-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/marshall/ORI50H.png'
        },
        MSC20H: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/marshall/SC20H-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/marshall/SC20H.png'
        }
    },
    orange: {
        DualTerror: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/orange/DualTerror-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/orange/DualTerror.png'
        },
        Rockerv503H: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/orange/Rockerv503H-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/orange/Rockerv503H.png'
        },
        Rockerv1003HB: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/orange/Rockerv1003HB-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/orange/Rockerv1003HB.png'        
        },
        SC100H: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/orange/SC100H-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/orange/SC100H.png'
        },
        TerrorStamp: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/orange/TerrorStamp-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/orange/TerrorStamp.png'
        }
    },
    peavey: {
        InvectiveH: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/peavey/InvectiveH-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/peavey/InvectiveH.png'
        },
        InvectiveMH: {
            urlImglarge: '/img/items/amps/guitar-amp-heads/peavey/InvectiveMH-large.png',
            urlImg: '/img/items/amps/guitar-amp-heads/peavey/InvectiveMH.png'
        }
    }
}

let imgItems = [{ img: items.marshall.M2555XBLK.urlImg }];
imgItems = [...imgItems, { img: items.marshall.MJCM900.urlImg }];
imgItems = [...imgItems, { img: items.orange.DualTerror.urlImg }];
imgItems = [...imgItems, { img: items.orange.SC100H.urlImg }];
imgItems = [...imgItems, { img: items.peavey.InvectiveH.urlImg }];

export const guitarAmpHeads = imgItems;