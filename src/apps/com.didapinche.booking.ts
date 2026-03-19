import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.didapinche.booking',
  name: '嘀嗒出行',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      rules: [
        {
          key: 0, //我的首页
          fastQuery: true,
          activityIds:
            'com.didapinche.booking.tab.activity.DiDaTabMainActivity',
          matches:
            '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        },
        {
          key: 1, //我的--》钱包
          fastQuery: true,
          activityIds: 'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          matches: '[vid="beizi_interstitial_ad_close_iv"]',
        },
        {
          key: 2, //我的--》全部订单、接单记录
          fastQuery: true,
          activityIds: 'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          matches:
            '@ImageView <3 RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
        },
      ],
    },
  ],
});
