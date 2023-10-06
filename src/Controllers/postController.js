const express = require('express');
const { fetchContentPosts, fetchContentDetailsByName } = require('../services/fetchContent');
const REQUEST = express.request;
const RESPONSE = express.response;
const {SuccesResponse} = require('../services/handlerResponses');
const PostController = {
    run : async function (req=REQUEST, res=RESPONSE) {
        const dataPosts = await fetchContentPosts();
        const jsonDataPosts = await dataPosts.json();
        res.send(new SuccesResponse(jsonDataPosts).getSuccess());
    },
    getById : async function (req=REQUEST, res=RESPONSE) {
        const id = req.params.id;
        const dataPost = await fetchContentDetailsByName(id);
        const jsonDataPost = await dataPost.json();
        res.send(new SuccesResponse(jsonDataPost).getSuccess())
    }
}
module.exports = PostController;