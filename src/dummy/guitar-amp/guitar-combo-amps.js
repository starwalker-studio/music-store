export const items = {
    fender: {
        F65DeluxeRev: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/fender/65DeluxeRev-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/fender/65DeluxeRev.png'
        },
        F65DeluxeRVWR: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/fender/65DeluxeRVWR-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/fender/65DeluxeRVWR.png'
        },
        MustLT50: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/fender/MustLT50-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/fender/MustLT50.png'
        },
        TMDlxRevBld: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/fender/TMDlxRevBld-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/fender/TMDlxRevBld.png'
        },
        TMTwinRev: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/fender/TMTwinRev-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/fender/TMTwinRev.png'
        }
    },
    marshall: {
        M1962: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/marshall/1962-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/marshall/1962.png'
        },
        M2525C: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/marshall/2525C-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/marshall/2525C.png'
        },
        DSL40CR: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/marshall/DSL40CR-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/marshall/DSL40CR.png'
        },
        JVM205C: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/marshall/JVM205C-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/marshall/JVM205C.png'
        }
    },
    orange: {
        Rocker32: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/orange/Rocker32-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/orange/Rocker32.png'
        },
        SC100C: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/orange/SC100C-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/orange/SC100C.png'        
        },
        SC100CBlk: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/orange/SC100CBlk-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/orange/SC100CBlk.png'
        }
    },
    vox: {
        AC4C112: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/vox/AC4C112-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/vox/AC4C112.png'
        },
        AC15C1: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/vox/AC15C1-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/vox/AC15C1.png'
        },
        VT40X: {
            urlImglarge: '/img/items/amps/guitar-combo-amps/vox/VT40X-large.png',
            urlImg: '/img/items/amps/guitar-combo-amps/vox/VT40X.png'
        }
    }
}

let imgItems = [{ img: items.fender.TMDlxRevBld.urlImg }];
imgItems = [...imgItems, { img: items.marshall.M2525C.urlImg }];
imgItems = [...imgItems, { img: items.orange.SC100C.urlImg }];
imgItems = [...imgItems, { img: items.vox.AC4C112.urlImg }];
imgItems = [...imgItems, { img: items.vox.VT40X.urlImg }];

export const guitarComboAmps = imgItems;