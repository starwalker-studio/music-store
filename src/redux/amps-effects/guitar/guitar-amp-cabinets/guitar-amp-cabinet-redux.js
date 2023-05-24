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
const GUITAR_AMP_CABINETS_CATALOG_BY_PAGINATION = "GUITAR_AMP_CABINETS_CATALOG_BY_PAGINATION";
const GUITAR_AMP_CABINETS_COUNT_TABLE = "GUITAR_AMP_CABINETS_COUNT_TABLE";
const GUITAR_AMP_CABINETS_CATALOG_BY_BRAND = "GUITAR_AMP_CABINETS_CATALOG_BY_BRAND";
const GUITAR_AMP_CABINETS_BRAND_BY_IDS = "GUITAR_AMP_CABINETS_BRAND_BY_IDS";
const GUITAR_AMP_CABINETS_BRAND_LIST = "GUITAR_AMP_CABINETS_BRAND_LIST";

// Reducer
export default function guitarAmpCabinetReducer(state = initData, action) {
    switch (action.type) {
        case GUITAR_AMP_CABINETS_CATALOG_BY_PAGINATION:
            return {
                ...state,
                items: action.catalogResponse
            };
        case GUITAR_AMP_CABINETS_COUNT_TABLE:
            return {
                ...state,
                totalSizeCatalog: action.countTable
            };
        case GUITAR_AMP_CABINETS_CATALOG_BY_BRAND:
            return {
                ...state,
                sizeCatalogByBrand: action.size,
                items: action.catalogBrand
            };
        case GUITAR_AMP_CABINETS_BRAND_BY_IDS:
            return {
                ...state,
                brands: action.brands
            };
        case GUITAR_AMP_CABINETS_BRAND_LIST:
            return {
                ...state,
                brandList: action.list
            };
        default:
            return state;
    }
}

// Actions
export const getGuitarAmpCabinetCatalogByPagination = (offset, limit) => async (dispatch) => {
    try {
        await axios.get(`/guitar-amp-cabinet/list/pagination?offset=${offset}&limit=${limit}`)
            .then((response) => {
                getResponseGuitarAmpCabinetCatalog(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getGuitarAmpCabinetCatalogByBrand = (brand, size, page) => async (dispatch) => {
    try {
        await axios.get(`/guitar-amp-cabinet/brands/search-by?brands=${brand}&size=${size}&page=${page}`)
            .then((response) => {
                getResponseGuitarAmpCabinetCatalogbyBrand(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getGuitarAmpCabinetBrandsByIds = (ids) => async (dispatch) => {
    try {
        await axios.get(`/brands/get-brands-by?ids=${ids}`)
            .then((response) => {
                getResponseGuitarAmpCabinetBrandsByIds(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getGuitarAmpCabinetTableCount = () => async (dispatch) => {
    try {
        await axios.get("/guitar-amp-cabinet/get-count")
            .then((response) => {
                getTotalCountTable(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getGuitarAmpCabinetBrandList = () => async (dispatch) => {
    try {
        await axios.get("/guitar-amp-cabinet/get-brand-list")
            .then((response) => {
                getResponseGuitarAmpCabinetBrandList(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

function getResponseGuitarAmpCabinetCatalog(response, dispatch) {
    dispatch({
        type: GUITAR_AMP_CABINETS_CATALOG_BY_PAGINATION,
        catalogResponse: response.data.content,
    });
}

function getTotalCountTable(response, dispatch) {
    dispatch({
        type: GUITAR_AMP_CABINETS_COUNT_TABLE,
        countTable: response.data
    });
}

function getResponseGuitarAmpCabinetCatalogbyBrand(response, dispatch) {
    dispatch({
        type: GUITAR_AMP_CABINETS_CATALOG_BY_BRAND,
        size: response.data.totalElements,
        catalogBrand: response.data.content
    });
}

function getResponseGuitarAmpCabinetBrandsByIds(response, dispatch) {
    dispatch({
        type: GUITAR_AMP_CABINETS_BRAND_BY_IDS,
        brands: response.data
    })
}

function getResponseGuitarAmpCabinetBrandList(response, dispatch) {
    dispatch({
        type: GUITAR_AMP_CABINETS_BRAND_LIST,
        list: response.data
    });
}