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
          content: '13268296729',
          css: {
            left: '250rpx',
            bottom: '85rpx',
            width: '160rpx',
            height: '160rpx'
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
