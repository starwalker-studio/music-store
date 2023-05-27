import axios from "axios";

// Constants
const initData = {
    brands: [],
    items: [],
    totalSizeCatalog: 0,
    sizeCatalogByBrand: 0,
    brandList: []
};

// Types
const BASS_GUITAR_AMP_CABINETS_CATALOG_BY_PAGINATION = "BASS_GUITAR_AMP_CABINETS_CATALOG_BY_PAGINATION";
const BASS_GUITAR_AMP_CABINETS_COUNT_TABLE = "BASS_GUITAR_AMP_CABINETS_COUNT_TABLE";
const BASS_GUITAR_AMP_CABINETS_CATALOG_BY_BRAND = "BASS_GUITAR_AMP_CABINETS_CATALOG_BY_BRAND";
const BASS_GUITAR_AMP_CABINETS_BRAND_BY_IDS = "BASS_GUITAR_AMP_CABINETS_BRAND_BY_IDS";
const BASS_GUITAR_AMP_CABINETS_BRAND_LIST = "BASS_GUITAR_AMP_CABINETS_BRAND_LIST";

// Reducer
export default function bassAmpCabinetReducer(state = initData, action) {
    switch (action.type) {
        case BASS_GUITAR_AMP_CABINETS_CATALOG_BY_PAGINATION:
            return {
                ...state,
                items: action.catalogResponse
            };
        case BASS_GUITAR_AMP_CABINETS_COUNT_TABLE:
            return {
                ...state,
                totalSizeCatalog: action.countTable
            };
        case BASS_GUITAR_AMP_CABINETS_CATALOG_BY_BRAND:
            return {
                ...state,
                sizeCatalogByBrand: action.size,
                items: action.catalogBrand
            };
        case BASS_GUITAR_AMP_CABINETS_BRAND_BY_IDS:
            return {
                ...state,
                brands: action.brands
            };
        case BASS_GUITAR_AMP_CABINETS_BRAND_LIST:
            return {
                ...state,
                brandList: action.list
            };
        default:
            return state;
    }
}

// Actions
export const getBassAmpCabinetCatalogByPagination = (offset, limit) => async (dispatch) => {
    try {
        await axios.get(`http://192.168.1.75:8042/bass-amp-cabinet/list/pagination?offset=${offset}&limit=${limit}`)
            .then((response) => {
                getResponseBassAmpCabinetCatalog(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassAmpCabinetCatalogByBrand = (brand, size, page) => async (dispatch) => {
    try {
        await axios.get(`http://192.168.1.75:8042/bass-amp-cabinet/brands/search-by?brands=${brand}&size=${size}&page=${page}`)
            .then((response) => {
                getResponseBassAmpCabinetCatalogbyBrand(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassAmpCabinetBrandsByIds = (ids) => async (dispatch) => {
    try {
        await axios.get(`http://192.168.1.75:8042/brands/get-brands-by?ids=${ids}`)
            .then((response) => {
                getResponseBassAmpCabinetBrandsByIds(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassAmpCabinetTableCount = () => async (dispatch) => {
    try {
        await axios.get("http://192.168.1.75:8042/bass-amp-cabinet/get-count")
            .then((response) => {
                getTotalCountTable(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassAmpCabinetBrandList = () => async (dispatch) => {
    try {
        await axios.get("http://192.168.1.75:8042/bass-amp-cabinet/get-brand-list")
            .then((response) => {
                getResponseBassAmpCabinetBrandList(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

function getResponseBassAmpCabinetCatalog(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_CABINETS_CATALOG_BY_PAGINATION,
        catalogResponse: response.data.content,
    });
}

function getTotalCountTable(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_CABINETS_COUNT_TABLE,
        countTable: response.data
    });
}

function getResponseBassAmpCabinetCatalogbyBrand(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_CABINETS_CATALOG_BY_BRAND,
        size: response.data.totalElements,
        catalogBrand: response.data.content
    });
}

function getResponseBassAmpCabinetBrandsByIds(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_CABINETS_BRAND_BY_IDS,
        brands: response.data
    });
}

function getResponseBassAmpCabinetBrandList(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_CABINETS_BRAND_LIST,
        list: response.data
    });
}