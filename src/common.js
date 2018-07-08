/**
 * Created by Zhongyi on 3/26/16.
 */
'use strict';
class Common {

}
Common.ELECTRON = 'Electron';
Common.ELECTRONIC_QQ = 'Electronic QQ';
Common.DEBUG_MODE = false;
Common.WINDOW_SIZE = {
  width: 800,
  height: 600,
};
Common.WINDOW_SIZE_LOGIN = {
  width: 380,
  height: 540,
};
Common.WINDOW_SIZE_LOADING = {
  width: 380,
  height: 120,
};
Common.USER_AGENT = {
  'freebsd': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
  'sunos': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
  'win32': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
  'linux': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
  'darwin': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36'
}

Common.WEB_QQ= 'http://web2.qq.com/';
Common.GITHUB = 'https://github.com/arthurkiller/electronic-QQ';
Common.GITHUB_RELEASES = 'https://github.com/arthurkliller/electronic-QQ/releases';
Common.GITHUB_ISSUES = 'https://github.com/arthurkliller/electronic-QQ/issues';
Common.GITHUB_API_HOST = 'api.github.com';
Common.GITHUB_API_RELEASE_LATEST_PATH = '/repos/arthurkliller/electronic-QQ/releases/latest';

Common.UPDATE_ERROR_ELECTRON = 'Failed to get the local version. If you are using debug mode(by `npm start`), this error would happen. Use packed app instead or manually check for updates.\n\n' + Common.GITHUB_RELEASES;
Common.UPDATE_ERROR_EMPTY_RESPONSE = 'Failed to fetch release info.';
Common.UPDATE_ERROR_UNKNOWN = 'Something went wrong.';
Common.UPDATE_NA_TITLE = 'No Update Available';
Common.UPDATE_ERROR_NETWORK = 'Connection hang up unexpectedly. Check your network settings.';
Common.UPDATE_ERROR_LATEST = (version) => {
  return `You are using the latest version(${version}).`;
};

Common.MENTION_MENU_INITIAL_X = 300;
Common.MENTION_MENU_OFFSET_X = 30;
Common.MENTION_MENU_INITIAL_Y = 140;
Common.MENTION_MENU_OFFSET_Y = 45;
Common.MENTION_MENU_WIDTH = 120;
Common.MENTION_MENU_OPTION_HEIGHT = 30;
Common.MENTION_MENU_OPTION_DEFAULT_NUM = 4;
Common.MENTION_MENU_HINT_TEXT = 'Mention:';
Common.MENTION_MENU_HINT_TEXT_CN = '选择回复的人:';

Common.MESSAGE_PREVENT_RECALL = 'Blocked a message recall.';
Common.MESSAGE_PREVENT_RECALL_CN = '阻止了一次撤回';
Common.EMOJI_MAXIUM_SIZE = 120;

module.exports = Common;
