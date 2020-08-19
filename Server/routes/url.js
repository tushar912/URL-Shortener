const validUrl = require('valid-url');

const URLShort  = require('../models/url');
const shortCode = require('../middleware/urlShort');
const express= require('express')
const URL = express.Router();

URL.route('/:code').get((req,res)=>{
    const urlshort = req.params.code;
    URLShort.findOne({urlCode:urlshort}).then((item)=>{
        return res.redirect(item.originalUrl);
    }).catch((err)=>{
        console.log(err);
    })
})

URL.route('/').post((req,res)=>{
    const { shortBaseUrl, originalUrl } = req.body;
    if (validUrl.isUri(shortBaseUrl)) {
    } else {
      return res.status(404).json('Invalid Base Url format');
    }

    if (validUrl.isUri(originalUrl)){
        URLShort.findOne({originalUrl}).then((url)=>{
            if(url){
                res.status(200).json(url);
            }
            else {
                const urlCode = shortCode.generate();
                const shortUrl = shortBaseUrl + '/' + urlCode;
                const itemToBeSaved = { originalUrl, urlCode,shortUrl };
                const url= new URLShort(itemToBeSaved);
                return url.save();
            }
        }).then((item)=>{
            res.status(200).json(item);
        }).catch((err)=>{
            console.log(err);
        })
    }
    else {
        return res.status(401).json('Invalid Original Url.');
    }
})
module.exports = URL;