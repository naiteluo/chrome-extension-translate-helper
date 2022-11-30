chrome.runtime.onInstalled.addListener(async () => {
  chrome.contextMenus.create({
    id: "translate-helper-en-to-cn",
    title: "翻譯：%s",
    type: "normal",
    contexts: ["selection"],
  });
//   chrome.contextMenus.create({
//     id: "translate-helper-cn-to-en",
//     title: "翻譯(en)：%s",
//     type: "normal",
//     contexts: ["selection"],
//   });
});

chrome.contextMenus.onClicked.addListener((item, tab) => {
  console.log(item);
  let targetLanguage = 'auto';
  if (item.menuItemId === 'translate-helper-en-to-cn') {
    targetLanguage = 'zh-CN';
  } else if (item.menuItemIdent === 'translate-helper-cn-to-en') {
    targetLanguage = 'en';
  }
  chrome.tabs.create({
    url: `https://translate.google.com/?sl=auto&tl=${targetLanguage}&text=${item.selectionText}&op=translate`,
  });
});
