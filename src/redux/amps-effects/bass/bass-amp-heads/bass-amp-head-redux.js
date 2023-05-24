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
const BASS_GUITAR_AMP_HEADS_CATALOG_BY_PAGINATION = "BASS_GUITAR_AMP_HEADS_CATALOG_BY_PAGINATION";
const BASS_GUITAR_AMP_HEADS_COUNT_TABLE = "BASS_GUITAR_AMP_HEADS_COUNT_TABLE";
const BASS_GUITAR_AMP_HEADS_CATALOG_BY_BRAND = "BASS_GUITAR_AMP_HEADS_CATALOG_BY_BRAND";
const BASS_GUITAR_AMP_HEADS_BRAND_BY_IDS = "BASS_GUITAR_AMP_HEADS_BRAND_BY_IDS";
const BASS_GUITAR_AMP_HEADS_BRAND_LIST = "BASS_GUITAR_AMP_HEADS_BRAND_LIST";

// Reducer
export default function bassAmpHeadReducer(state = initData, action) {
    switch (action.type) {
        case BASS_GUITAR_AMP_HEADS_CATALOG_BY_PAGINATION:
            return {
                ...state,
                items: action.catalogResponse
            };
        case BASS_GUITAR_AMP_HEADS_COUNT_TABLE:
            return {
                ...state,
                totalSizeCatalog: action.countTable
            };
        case BASS_GUITAR_AMP_HEADS_CATALOG_BY_BRAND:
            return {
                ...state,
                sizeCatalogByBrand: action.size,
                items: action.catalogBrand
            };
        case BASS_GUITAR_AMP_HEADS_BRAND_BY_IDS:
            return {
                ...state,
                brands: action.brands
            };
        case BASS_GUITAR_AMP_HEADS_BRAND_LIST:
            return {
                ...state,
                brandList: action.list
            };
        default:
            return state;
    }
}

// Actions
export const getBassAmpHeadCatalogByPagination = (offset, limit) => async (dispatch) => {
    try {
        await axios.get(`/bass-amp-head/list/pagination?offset=${offset}&limit=${limit}`)
            .then((response) => {
                getResponseBassAmpHeadCatalog(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassAmpHeadCatalogByBrand = (brand, size, page) => async (dispatch) => {
    try {
        await axios.get(`/bass-amp-head/brands/search-by?brands=${brand}&size=${size}&page=${page}`)
            .then((response) => {
                getResponseBassAmpHeadCatalogbyBrand(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassAmpHeadBrandsByIds = (ids) => async (dispatch) => {
    try {
        await axios.get(`/brands/get-brands-by?ids=${ids}`)
            .then((response) => {
                getResponseBassAmpHeadBrandsByIds(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassAmpHeadTableCount = () => async (dispatch) => {
    try {
        await axios.get("/bass-amp-head/get-count")
            .then((response) => {
                getTotalCountTable(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

export const getBassAmpHeadBrandList = () => async (dispatch) => {
    try {
        await axios.get("/bass-amp-head/get-brand-list")
            .then((response) => {
                getResponseBassAmpHeadBrandList(response, dispatch);
            })
    } catch (error) {
        console.log(error);
    }
}

function getResponseBassAmpHeadCatalog(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_HEADS_CATALOG_BY_PAGINATION,
        catalogResponse: response.data.content,
    });
}

function getTotalCountTable(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_HEADS_COUNT_TABLE,
        countTable: response.data
    });
}

function getResponseBassAmpHeadCatalogbyBrand(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_HEADS_CATALOG_BY_BRAND,
        size: response.data.totalElements,
        catalogBrand: response.data.content
    });
}

function getResponseBassAmpHeadBrandsByIds(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_HEADS_BRAND_BY_IDS,
        brands: response.data
    })
}

function getResponseBassAmpHeadBrandList(response, dispatch) {
    dispatch({
        type: BASS_GUITAR_AMP_HEADS_BRAND_LIST,
        list: response.data
    });
}