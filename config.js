//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349164718113";
global.owner = process.env.OWNER_NUMBER || "2349028312020";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0p6RkhKMzFubVUyY0JEem1rZGVaUHVrSWxHR2xvdDBkYmtrQSs4Sk9IZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTZVV24zS24wM0pwSDBobEx3ZkJXR0FZWTY2RDAyczdtbXg4dGF0MVlGQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3QUx3cVZoYkxHYXFHdUJnRlJPbG91b21kdkJucVFBZnplUi9EdVo3eUc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwQWRkbjZvNU1GRCtqL2gyNXBrUFBzT0lzbC9YZklGWTVWemVPWnRnc0Q0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVNUC8wUmZGRXVDSU5FRWsyd2QzYm1Tc1F3RjI4RzVRWTdEVnlORWRvR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJXWnFXUmtQVDl6eTU3aTdKQ3YvTnRQaDR3b2wwc3pCWThSUkluS1M1MmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NzMlQrcks3VUpIbjl1SWZEOFU2VWxvdWJ5NU9CdzJzdjQrWGM3QmlYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicCtvVkg1UXEzeFlPdU0yUWUzR3JDNUlKSzlFcFVwSjVxY0hGNENrVkQwST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhZaHcrWm9uSzEyMUF6WUQxWktCNkZRWWR1azFma2xQRVlheXREbzFGU0YyVzg2T2JWTnF4Ui9PQTJnSDBMYXJoV0JaQmlRb2p6c0xHWU16YzZ1cEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6Imt0NW9kWEZCZTUxYTRMdy9mWXA1djFUejkwVGhyS0NwZGI5Qmh1MHJ4dXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InFyTEltTlhDUzRHYWtOaWVuQmJRUFEiLCJwaG9uZUlkIjoiZjk3M2U1YzMtNmI3NS00M2MxLTk4OTQtNzdhMWY1YTFlMWI1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkEyQ0djTVQ1bXJnWW9mc2xKUUV5OVg1SXNNMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUmlkWHFRcmMzVlIyYjFZeDl6aE95VVpNVXM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQjVUNlJLV0giLCJtZSI6eyJpZCI6IjIzNDkwMjgzMTIwMjA6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJEw68gVnp5In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMSzZnK0lIRU0zOHNMa0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3MWh0aC9oNS9PSklRTStQcU11Y3plVklPTVhnTzVKc0gzS0Vvd0U0OEY0PSIsImFjY291bnRTaWduYXR1cmUiOiJ6NmtDbXBCQ20wSFlwMC9tT1NvNDBYcjNjVlVMRGx4OVM0U1FJb0EwUkl2aUNqdVVEUitqN09YVVR4SEx6UExJSmtsRTJEN1dFMjd6MGpHSlBKWXhBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibUdYY09pRUV6VTZRcUdKQkZxMEFaNE12cVJzL3VTdzhWcW9pZ0t4Mld1VXJIanJWNVZsZmxYT1Q1OW1zRlpDdCtkZHFFejNwRmxCck81bFlWZ3Q5Qmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDI4MzEyMDIwOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTlZYllmNGVmemlTRURQajZqTG5NM2xTRGpGNER1U2JCOXloS01CT1BCZSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDk1Mjc5NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEN2gifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`☯︎Big D✌︎💨`",
  author: process.env.PACK_AUTHER || "☯︎Big D✌︎💨",
  packname: process.env.PACK_NAME || "☯︎Big D✌︎💨",
  botname: process.env.BOT_NAME || "☯︎Big D✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎Big D✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎Big D✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
