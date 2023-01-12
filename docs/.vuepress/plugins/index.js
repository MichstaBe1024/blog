module.exports = {
  "vuepress-plugin-nuggets-style-copy": {
    copyText: "复制代码",
    tip: {
      content: "复制成功"
    }
  },
  '@vuepress-reco/vuepress-plugin-bgm-player': {
    audios: [
      {
        name: 'LOSER',
        artist: '米津玄師',
        url: 'https://www.ytmp3.cn/down/73654.mp3',
        cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
      }
    ],
    // 是否默认缩小
    autoShrink: true,
    // 缩小时缩为哪种模式
    shrinkMode: 'float',
    // 悬浮窗样式
    floatStyle: { bottom: '10px', 'z-index': '999999' }
  },
  'cursor-effects': {
    size: 2, // size of the particle, default: 2
    shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
  }
}