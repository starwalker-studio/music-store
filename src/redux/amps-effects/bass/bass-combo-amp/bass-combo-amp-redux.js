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
const BASS_GUITAR_COMBO_AMP_CATALOG_BY_PAGINATION = "BASS_GUITAR_COMBO_AMP_CATALOG_BY_PAGINATION";
const BASS_GUITAR_COMBO_AMP_COUNT_TABLE = "BASS_GUITAR_COMBO_AMP_COUNT_TABLE";
const BASS_GUITAR_COMBO_AMP_CATALOG_BY_BRAND = "BASS_GUITAR_COMBO_AMP_CATALOG_BY_BRAND";
const BASS_GUITAR_COMBO_AMP_BRAND_BY_IDS = "BASS_GUITAR_COMBO_AMP_BRAND_BY_IDS";
const BASS_GUITAR_COMBO_AMP_BRAND_LIST = "BASS_GUITAR_COMBO_AMP_BRAND_LIST";

// Reducer
export default function bassComboAmpReducer(state = initData, action) {
    switch (action.type) {
        case BASS_GUITAR_COMBO_AMP_CATALOG_BY_PAGINATION:
            return {
                ...state,
                items: action.catalogResponse
            };
        case BASS_GUITAR_COMBO_AMP_COUNT_TABLE:
            return {
                ...state,
                totalSizeCatalog: action.countTable
            };
        case BASS_GUITAR_COMBO_AMP_CATALOG_BY_BRAND:
            return {
                ...state,
                sizeCatalogByBrand: action.size,
                items: action.catalogBrand
            };
        case BASS_GUITAR_COMBO_AMP_BRAND_BY_IDS:
            return {
                ...state,
                brands: action.brands
            };
        case BASS_GUITAR_COMBO_AMP_BRAND_LIST:
            return {
                ...state,
                brandList: action.list
            };
        default:
            return state;
    }
}

// Actions
export const getBassComboAmpCatalogByPagination = (offset, limit) => async (dispatch) => {
    try {
        await axios.get(`/bass-combo-amp/list/pagination?offset=${offset}&limit=${limit}`)
            .then((response) => {
                getResponseBassComboAmpCatalog(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassComboAmpCatalogByBrand = (brand, size, page) => async (dispatch) => {
    try {
        await axios.get(`/bass-combo-amp/brands/search-by?brands=${brand}&size=${size}&page=${page}`)
            .then((response) => {
                getResponseBassComboAmpCatalogbyBrand(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassComboAmpBrandsByIds = (ids) => async (dispatch) => {
    try {
        await axios.get(`/brands/get-brands-by?ids=${ids}`)
            .then((response) => {
                getResponseBassComboAmpBrandsByIds(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassComboAmpTableCount = () => async (dispatch) => {
    try {
        await axios.get("/bass-combo-amp/get-count")
            .then((response) => {
                getTotalCountTable(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassComboAmpBrandList = () => async (dispatch) => {
    try {
        await axios.get("/bass-combo-amp/get-brand-list")
            .then((response) => {
                getResponseBassComboAmpBrandList(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

function getResponseBassComboAmpCatalog(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_COMBO_AMP_CATALOG_BY_PAGINATION,
        catalogResponse: response.data.content,
    });
}

function getTotalCountTable(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_COMBO_AMP_COUNT_TABLE,
        countTable: response.data
    });
}

function getResponseBassComboAmpCatalogbyBrand(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_COMBO_AMP_CATALOG_BY_BRAND,
        size: response.data.totalElements,
        catalogBrand: response.data.content
    });
}

function getResponseBassComboAmpBrandsByIds(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_COMBO_AMP_BRAND_BY_IDS,
        brands: response.data
    })
}

function getResponseBassComboAmpBrandList(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_COMBO_AMP_BRAND_LIST,
        list: response.data
    });
}