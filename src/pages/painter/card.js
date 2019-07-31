// 名片分享样式
export default class LastMayday {
  cardInfo = {}

  do(cardInfo) {
    this.cardInfo = JSON.parse(JSON.stringify(cardInfo))
    return this._template()
  }

  TEXT_SMALL = {
    fontSize: '24rpx'
  }

  _template() {
    return ({
      background: this.cardInfo.avatar,
      width: '654rpx',
      height: '1000rpx',
      borderRadius: '20rpx',
      views: [{
        type: 'qrcode',
        content: 'weixin.gstyun.cn',
        css: {
          right: '40rpx',
          bottom: '40rpx',
          borderWidth: '2rpx',
          borderColor: 'white',
          background: "white",
          width: '120rpx',
          height: '120rpx'
        }
      },
      {
        type: 'text',
        text: '你的海报',
        css: {
          left: '50rpx',
          top: '48rpx',
          fontSize: '40rpx',
          align: 'left'
        }
      }
      ]
    })
  }
}
