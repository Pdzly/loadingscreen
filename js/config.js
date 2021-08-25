// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "ROC";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Willkommen!",
  "Wir hoffen dir gefällt der Server!"
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "coolship.jpg";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;

/**
 * Sound Filename
 * DROP SOUNDS IN "music" FOLDER
 */
Config.music = "music.ogg";
/**
 * Music Volume
 * 0 = 0%, 1 = 100%
 */
Config.musicvolume = 0.01;