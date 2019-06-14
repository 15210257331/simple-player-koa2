const Router = require('koa-router')
const UserController = require('../controllers/user')
const ViewController = require('../controllers/view')
const MusicController = require('../controllers/music');
const HeroController = require('../controllers/hero');
const ArticleController = require('../controllers/article');

const router = new Router({
    prefix: '/api'
})

/**
 * view
 */
// index
router.get('/index', ViewController.index);
// doc
router.get('/doc', ViewController.doc);


/**
 * 用户
 */
// 用户注册
router.post('/user/register', UserController.register);
// 用户登录
router.post('/user/login', UserController.login);
// 用户登出
router.delete('/user/logout', UserController.logout);
// 删除用户
router.delete('/user/delete/:id', UserController.delete);
// 获取用户信息
router.get('/user/info', UserController.getUserInfo);
// 修改用户信息
router.patch('/user/info', UserController.uploadImg, UserController.updateUserInfo);

// add article
router.post('/article/add', ArticleController.addArticle);
router.post('/article/list', ArticleController.getArticle);
router.get('/article/:id', ArticleController.getArticleDetailById);

/**
 * 音乐
 */
// banner
router.get('/music/banner', MusicController.banner);
// 搜索
router.post('/music/search', MusicController.search);
// 音乐详情
router.get('/musci/detail', MusicController.detail);
// 音乐url
router.get('/musci/url', MusicController.url);
// 音乐歌词
router.get('/musci/lyric', MusicController.lyric);

/**
 * hero
 */
//分页获取英雄列表
router.post('/heros/list', HeroController.getHerosList);
// 根据id获取英雄详情
router.get('/hero/:heroId', HeroController.getHeroById);


module.exports = router