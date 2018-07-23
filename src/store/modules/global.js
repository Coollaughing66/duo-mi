import * as types from '../types'
import tool from '../../lib/tool'

const state = {
    current_active : 0,
    requestApiFlag : true,
    MovieHotList : [],
    MovieTopList : []
}

const actions = {
    setCurrentActive ({commit}, active) {
        commit(types.SET_CURRENT_ACTIVE, active)
    },

    changeRequestApi ({commit}, values) {
        commit(types.CHANGE_REQUEST_API, values)
    },

    setMovieHotList ({commit}, JsonData) {
        commit(types.SET_HOT_MOVIE_LIST, {data: JsonData})
    },

    setMovieTopList ({commit}, JsonData) {
        commit(types.SET_TOP_MOVIE_LIST, {data: JsonData})
    }
}

const mutations = {
    [types.SET_CURRENT_ACTIVE] (state, active) {
        state.current_active = active
    },
    
    [types.CHANGE_REQUEST_API] (state, values) {
        state.requestApiFlag = values
    },

    [types.SET_HOT_MOVIE_LIST] (state, payload) {
        payload.data.map((item, index) => {
            state.MovieHotList.push({
                id : item.id,
                directors : item.directors,
                genres : item.genres,
                m_id : item.m_id,
                original_title : item.original_title,
                pic : item.pic,
                score : item.score,
                count : tool.MarkScoreToStar(item.score),
                summary :item.summary,
                talk : item.talk,
                title : item.title,
                type : item.tpye,
                year : item.year
            })
        })
    },

    [types.SET_TOP_MOVIE_LIST] (state, payload) {
        payload.data.map((item, index) => {
            state.MovieTopList.push({
                id : item.id,
                directors : item.directors,
                genres : item.genres,
                m_id : item.m_id,
                original_title : item.original_title,
                pic : item.pic,
                score : item.score,
                count : tool.MarkScoreToStar(item.score),
                summary :item.summary,
                talk : item.talk,
                title : item.title,
                type : item.tpye,
                year : item.year
            })
        })
    }
}

export default {
    state,
    actions,
    mutations
}