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
const GUITAR_COMBO_AMP_CATALOG_BY_PAGINATION = "GUITAR_COMBO_AMP_CATALOG_BY_PAGINATION";
const GUITAR_COMBO_AMP_COUNT_TABLE = "GUITAR_COMBO_AMP_COUNT_TABLE";
const GUITAR_COMBO_AMP_CATALOG_BY_BRAND = "GUITAR_COMBO_AMP_CATALOG_BY_BRAND";
const GUITAR_COMBO_AMP_BRAND_BY_IDS = "GUITAR_COMBO_AMP_BRAND_BY_IDS";
const GUITAR_COMBO_AMP_BRAND_LIST = "GUITAR_COMBO_AMP_BRAND_LIST";

// Reducer
export default function guitarComboAmpReducer(state = initData, action) {
    switch (action.type) {
        case GUITAR_COMBO_AMP_CATALOG_BY_PAGINATION:
            return {
                ...state,
                items: action.catalogResponse
            };
        case GUITAR_COMBO_AMP_COUNT_TABLE:
            return {
                ...state,
                totalSizeCatalog: action.countTable
            };
        case GUITAR_COMBO_AMP_CATALOG_BY_BRAND:
            return {
                ...state,
                sizeCatalogByBrand: action.size,
                items: action.catalogBrand
            };
        case GUITAR_COMBO_AMP_BRAND_BY_IDS:
            return {
                ...state,
                brands: action.brands
            };
        case GUITAR_COMBO_AMP_BRAND_LIST:
            return {
                ...state,
                brandList: action.list
            };
        default:
            return state;
    }
}

// Actions
export const getGuitarComboAmpCatalogByPagination = (offset, limit) => async (dispatch) => {
    try {
        await axios.get(`/guitar-combo-amp/list/pagination?offset=${offset}&limit=${limit}`)
            .then((response) => {
                getResponseGuitarComboAmpCatalog(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getGuitarComboAmpCatalogByBrand = (brand, size, page) => async (dispatch) => {
    try {
        await axios.get(`/guitar-combo-amp/brands/search-by?brands=${brand}&size=${size}&page=${page}`)
            .then((response) => {
                getResponseGuitarComboAmpCatalogbyBrand(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getGuitarComboAmpBrandsByIds = (ids) => async (dispatch) => {
    try {
        await axios.get(`/brands/get-brands-by?ids=${ids}`)
            .then((response) => {
                getResponseGuitarComboAmpBrandsByIds(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getGuitarComboAmpTableCount = () => async (dispatch) => {
    try {
        await axios.get("/guitar-combo-amp/get-count")
            .then((response) => {
                getTotalCountTable(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getGuitarComboAmpBrandList = () => async (dispatch) => {
    try {
        await axios.get("/guitar-combo-amp/get-brand-list")
            .then((response) => {
                getResponseGuitarComboAmpBrandList(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

function getResponseGuitarComboAmpCatalog(response, dispatch) {
    dispatch({
        type: GUITAR_COMBO_AMP_CATALOG_BY_PAGINATION,
        catalogResponse: response.data.content,
    });
}

function getTotalCountTable(response, dispatch) {
    dispatch({
        type: GUITAR_COMBO_AMP_COUNT_TABLE,
        countTable: response.data
    });
}

function getResponseGuitarComboAmpCatalogbyBrand(response, dispatch) {
    dispatch({
        type: GUITAR_COMBO_AMP_CATALOG_BY_BRAND,
        size: response.data.totalElements,
        catalogBrand: response.data.content
    });
}

function getResponseGuitarComboAmpBrandsByIds(response, dispatch) {
    dispatch({
        type: GUITAR_COMBO_AMP_BRAND_BY_IDS,
        brands: response.data
    })
}

function getResponseGuitarComboAmpBrandList(response, dispatch) {
    dispatch({
        type: GUITAR_COMBO_AMP_BRAND_LIST,
        list: response.data
    });
}