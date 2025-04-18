/**
 * Este fichero contralara las funcionalidades que podrá realizar el usuario
 * dentro de mi página web con los posts publicados
 */
const express = require('express');
const { fetchContentPosts, fetchContentDetailsByName, fetchCategories, fetchPostsByCategorie, fetchContentPostsExercise, fetchCategoriesExercises } = require('../services/fetchContent');
const REQUEST = express.request;
const RESPONSE = express.response;
const {SuccesResponse} = require('../services/handlerResponses');
const PostController = {
    run : async function (req=REQUEST, res=RESPONSE) {
        const dataPosts = await fetchContentPosts();
        const jsonDataPosts = await dataPosts.json();
        res.send(new SuccesResponse(jsonDataPosts.data).getSuccess());
    },
    getPostsExercise : async function (req=REQUEST, res=RESPONSE) {
        const dataPostsExercise = await fetchContentPostsExercise();
        const jsonDataPostsExercise = await dataPostsExercise.json();
        res.send(new SuccesResponse(jsonDataPostsExercise?.data).getSuccess());
    },
    getPostsExerciseCategories : async function (req=REQUEST, res=RESPONSE) {
        const dataCategoryExercise = await fetchCategoriesExercises();
        const jsonDataCategories = await dataCategoryExercise.json();
        res.send(new SuccesResponse(jsonDataCategories?.data).getSuccess());
    },
    getById : async function (req=REQUEST, res=RESPONSE) {
        const id = req.params.id;
        const dataPost = await fetchContentDetailsByName(id);
        const jsonDataPost = await dataPost.json();
        res.send(new SuccesResponse(jsonDataPost.data.contentComponent).getSuccess())
    },
    getPostsByCategorie : async function (req=REQUEST, res=RESPONSE) {
        const categorie_slug = req.query.slug;
        const dataPosts = await fetchPostsByCategorie(categorie_slug);
        const jsonDataPost = await dataPosts.json();
        res.send(new SuccesResponse(jsonDataPost.data).getSuccess())
    },
    updateLikes : async function (req=REQUEST, res=RESPONSE) {
        
    },
    getCategories : async function (req=REQUEST, res=RESPONSE) {
        const dataCategories = await fetchCategories();
        const jsonDataCategories = await dataCategories.json();
        const dataRespond = jsonDataCategories?.data.categories;                
        res.send(new SuccesResponse(dataRespond).getSuccess())
    },
    getTopPosts : async function (req=REQUEST, res=RESPONSE) {
        
    },
    getCheckUserIsRegister : async function (req=REQUEST, response=RESPONSE) {
        
    }
}
module.exports = PostController;