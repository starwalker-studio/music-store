export const items = {
    ampeg: {
        HSVT410HLF: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/ampeg/HSVT410HLF-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/ampeg/HSVT410HLF.png'
        },
        HSVT810AV: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/ampeg/HSVT810AV-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/ampeg/HSVT810AV.png'
        },
        microCL: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/ampeg/MicroCL-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/ampeg/MicroCL.png'
        },
        PF410HLF: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/ampeg/PF410HLF-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/ampeg/PF410HLF.png'
        },
        SVT210AV: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/ampeg/SVT210AV-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/ampeg/SVT210AV.png'
        },
        SVT410HE: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/ampeg/SVT410HE-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/ampeg/SVT410HE.png'
        }
    },
    fender: {
        bassman410N: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/fender/Bassman410N-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/fender/Bassman410N.png'
        },
        bassman610N: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/fender/Bassman610N-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/fender/Bassman610N.png'
        },
        bassman810N: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/fender/Bassman810N-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/fender/Bassman810N.png'
        },
        rum410: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/fender/Rum410-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/fender/Rum410.png'
        }
    },
    hartke: {
        h210XLV2: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/hartke/210XLV2-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/hartke/210XLV2.png'
        },
        h410XLV2: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/hartke/410XLV2-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/hartke/410XLV2.png'
        },
        hyDriveHD112: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/hartke/HyDriveHD112-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/hartke/HyDriveHD112.png'
        },
        hyDriveHL410: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/hartke/HyDriveHL410-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/hartke/HyDriveHL410.png'
        }
    },
    orange: {
        OBC115: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/orange/OBC115-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/orange/OBC115.png'
        },
        OBC410Blk: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/orange/OBC410Blk-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/orange/OBC410Blk.png'
        },
        OBC810: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/orange/OBC810-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/orange/OBC810.png'
        },
        OrangeBC410: {
            urlImglarge: '/img/items/amps/bass-amp-cabinets/orange/OrangeBC410-large.png',
            urlImg: '/img/items/amps/bass-amp-cabinets/orange/OrangeBC410.png'
        }
    }

}

let imgItmes = [{ img: items.ampeg.SVT210AV.urlImg}];
imgItmes = [...imgItmes, { img: items.fender.bassman810N.urlImg }];
imgItmes = [...imgItmes, { img: items.hartke.hyDriveHD112.urlImg }];
imgItmes = [...imgItmes, { img: items.orange.OBC115.urlImg }];
imgItmes = [...imgItmes, { img: items.ampeg.HSVT810AV.urlImg }];
imgItmes = [...imgItmes, { img: items.hartke.hyDriveHL410.urlImg }];
imgItmes = [...imgItmes, { img: items.fender.rum410.urlImg }];

export const bassAmpCabinets = imgItmes;