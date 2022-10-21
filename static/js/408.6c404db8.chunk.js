"use strict";(self.webpackChunkmd_token=self.webpackChunkmd_token||[]).push([[408],{6596:function(e,n,t){t.d(n,{Z:function(){return d}});var a,i=t(168),o=t(6444),s=t(1666),r=t(1503),l=t(184),c=o.ZP.div(a||(a=(0,i.Z)(["\n  width: ",";\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  margin-bottom: 30px;\n  .image-panel {\n    width: 100%;\n    padding-top: 100%;\n    position: relative;\n  }\n  video,\n  img {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 300px;\n    height: 300px;\n    border-radius: 25px;\n    margin-bottom: 30px;\n    &.md-license-image {\n      object-fit: cover;\n    }\n    @media screen and (max-width: 768px) {\n      width: 100%;\n      height: 100%;\n      margin-bottom: 0px;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    margin-bottom: 0;\n    width: 100%;\n    h5 {\n      text-align: center;\n      font-size: 24px;\n      height: 60px;\n    }\n  }\n  @media screen and (max-width: 550px) {\n    h5 {\n      font-size: 16px;\n      height: 40px;\n      font-weight: 700;\n      margin-bottom: 10px !important;\n    }\n  }\n"])),(function(e){return e.width})),d=function(e){var n=e.src,t=e.title,a=e.isVideoCard,i=void 0!==a&&a,o=e.width,d=void 0===o?"327px":o;(0,r.Z)("(max-width: 425px)");return(0,l.jsxs)(c,{className:"asset-card",width:d,children:[(0,l.jsx)("div",{className:"image-panel",children:i?(0,l.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,children:[(0,l.jsx)("source",{src:n,type:"video/mp4"}),"Your browser does not support the video tag."]}):(0,l.jsx)("img",{className:"card-img "+("MD License"===t?"md-license-image":""),src:n,alt:t})}),(0,l.jsx)(s.H5,{fontWeight:700,className:"card-name my-4",children:t})]})}},8362:function(e,n,t){var a,i,o,s=t(168),r=t(6444),l=t(5316),c=t(1666),d=t(3540),u=t(2791),m=t(184),g=(0,r.ZP)(l.Z)(a||(a=(0,s.Z)(["\n  padding: 0 !important;\n  .modal-dialog {\n    max-width: 985px;\n    padding: 0 20px;\n  }\n\n  .connect-success-content {\n    background: #fff;\n    border-radius: 10px;\n    width: 100%;\n    overflow: hidden;\n    border: none;\n  }\n\n  .modal-header {\n    height: 112px;\n    background: #e2ae39;\n    padding: 21px;\n    @media screen and (max-width: 991px) {\n      height: 70px;\n    }\n    @media screen and (max-width: 550px) {\n      height: 50px;\n      padding: 13px;\n    }\n  }\n\n  .modal-text {\n    color: #000;\n    margin-bottom: 32px;\n  }\n\n  .modal-title {\n    line-height: 1.2;\n    @media screen and (max-width: 768px) {\n      font-size: 40px;\n    }\n    @media screen and (max-width: 550px) {\n      font-size: 24px;\n    }\n  }\n\n  .font-italic {\n    font-style: italic;\n  }\n\n  .close-btn {\n    margin: 0;\n    opacity: 1;\n    background-color: rgba(255, 255, 255, 0.14);\n    color: #ffffff;\n    border-radius: 50%;\n    width: 70px;\n    height: 70px;\n    padding: 0;\n    border: 0;\n    img {\n      width: 100%;\n    }\n    @media screen and (max-width: 991px) {\n      width: 49px;\n      height: 49px;\n    }\n    @media screen and (max-width: 550px) {\n      width: 37px;\n      height: 37px;\n    }\n  }\n"]))),x=r.ZP.div(i||(i=(0,s.Z)(["\n  background: white;\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  padding: 48px 46px 48px 46px;\n  p {\n    line-height: 1.2;\n  }\n  @media screen and (max-width: 991px) {\n    padding: 48px;\n  }\n  @media screen and (max-width: 550px) {\n    padding: 20px;\n    p {\n      font-size: 12px;\n    }\n  }\n"]))),p=r.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  flex-flow: column;\n  max-width: 750px;\n  margin: auto;\n  letter-spacing: 1px;\n  .add-images {\n    margin-top: 90px;\n    margin-bottom: 62px;\n    width: 100%;\n  }\n  img {\n    /* height: 419px; */\n    border-radius: 25px;\n  }\n  .mdc-club-image {\n    width: 100%;\n  }\n  .mdc-collection-image {\n    img {\n      border-radius: 10px;\n    }\n  }\n  @media screen and (max-width: 991px) {\n    .mdc-club-image {\n      img {\n        width: 45%;\n      }\n    }\n    .add-images {\n      .add-image {\n        width: 25%;\n        border-radius: 25px;\n      }\n      .plus-icon {\n        width: 40px;\n      }\n    }\n  }\n  @media screen and (max-width: 768px) {\n    .add-images {\n      margin: 0px;\n      .plus-icon {\n        width: 25px;\n      }\n    }\n    img {\n      width: 350px;\n    }\n  }\n  @media screen and (max-width: 425px) {\n    img {\n      width: 250px;\n    }\n  }\n"])));n.Z=function(e){var n,t,a,i=e.show,o=e.onClose,s=e.data;return(0,m.jsxs)(g,{show:i,onHide:o,centered:!0,contentClassName:"connect-success-content",children:[(0,m.jsx)(l.Z.Header,{children:(0,m.jsx)("button",{className:"close-btn",onClick:o,children:(0,m.jsx)("img",{src:"/assets/images/closeBtn.svg",alt:"close-btn"})})}),(0,m.jsx)(l.Z.Body,{children:(0,m.jsxs)(x,{children:[(0,m.jsx)(c.H2,{className:"modal-text modal-title text-center",fontWeight:700,children:(0,d.ZP)(s.title)}),(0,m.jsxs)(p,{children:[null===(n=s.mainText)||void 0===n?void 0:n.map((function(e,n){return(0,m.jsx)(c.P,{className:"modal-text text-center "+(0===n?"font-italic":""),fontSize:"24px",children:(0,d.ZP)(e)},n)})),null===(t=s.listText)||void 0===t?void 0:t.map((function(e,n){var t;return(0,m.jsxs)(u.Fragment,{children:[(0,m.jsx)(c.P,{fontWeight:700,fontSize:"24px",className:"modal-text text-center mb-0",children:(0,d.ZP)(e.title)}),null===(t=e.text)||void 0===t?void 0:t.map((function(n,t){return(0,m.jsx)(c.P,{fontSize:"24px",className:"modal-text text-center "+(t+1===e.text.length?"":"mb-0"),children:n},t)}))]},n)})),s.addImages?(0,m.jsx)("div",{className:"add-images d-flex align-items-center justify-content-between",children:s.addImages.map((function(e,n){return(0,m.jsxs)(u.Fragment,{children:[0!=n?(0,m.jsx)("img",{src:"/assets/images/plus_icon.svg",className:"plus-icon",alt:"plus-icon"}):"",(0,m.jsx)("img",{src:e,className:"add-image",alt:"add-image-"+n})]},n)}))}):"",(0,m.jsx)("div",{className:"d-flex "+("MAD DOG CAR CLUB"===s.title?"mdc-club-image justify-content-between":"MAD DOG<br/>CAR COLLECTION"===s.title?"mdc-collection-image justify-content-center":"MD License"===s.title?"mdc-license-image justify-content-center":"justify-content-center"),children:null===(a=s.images)||void 0===a?void 0:a.map((function(e,n){return(0,m.jsx)("img",{src:e,alt:s.title,className:"mt-5"},n)}))})]})]})})]})}},8885:function(e,n,t){t.d(n,{OQ:function(){return p},W2:function(){return g},im:function(){return m},vw:function(){return x},zx:function(){return h}});var a,i,o,s,r,l,c=t(168),d=t(6444),u=t(1666),m=d.ZP.div(a||(a=(0,c.Z)(["\n  padding-top: 275px;\n  @media screen and (max-width: 991px) {\n    padding: 142px 35px 40px 35px;\n  }\n  @media screen and (max-width: 550px) {\n    padding: 142px 15px 80px 15px;\n    h2 {\n      font-size: 24px;\n      margin-bottom: 0px;\n    }\n  }\n"]))),g=d.ZP.div(i||(i=(0,c.Z)(["\n  max-width: 1188px;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  @media screen and (max-width: 550px) {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n"]))),x=d.ZP.div(o||(o=(0,c.Z)(["\n  max-width: ",";\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  margin-bottom: ",";\n  justify-content: ",";\n  .partner-card {\n    margin-bottom: 103px;\n  }\n  &.first-assets-list {\n    margin-top: 157px;\n    margin-bottom: 80px;\n  }\n  &.assets-list-btn {\n    margin-top: 78px;\n  }\n  @media screen and (max-width: 1440px) {\n    &.first-assets-list {\n      margin-bottom: 140px;\n    }\n  }\n  @media screen and (max-width: 768px) {\n    justify-content: space-between;\n    .partner-card {\n      width: 45%;\n    }\n    &.first-assets-list {\n      margin-bottom: 40px;\n      margin-top: 0px;\n    }\n    &.assets-list-btn {\n      margin-top: 40px;\n      margin-bottom: 100px;\n    }\n  }\n  @media screen and (max-width: 550px) {\n    &.first-assets-list {\n      margin-bottom: 0px;\n    }\n    &.assets-list-btn {\n      margin-top: 32px;\n      margin-bottom: 32px;\n    }\n    .partner-card {\n      margin-bottom: 50px;\n    }\n  }\n"])),(function(e){return e.maxWidth||"750px"}),(function(e){return e.marginBottom}),(function(e){return e.justifyContent||"space-between"})),p=(0,d.ZP)(u.H6)(s||(s=(0,c.Z)(["\n  margin: 0 auto;\n  max-width: 947px;\n  &.font-italic {\n    font-style: italic;\n  }\n  .font-italic {\n    font-style: italic;\n    font-weight: 500;\n  }\n  .text-yellow {\n    color: #e2ae39;\n  }\n  @media screen and (max-width: 550px) {\n    font-size: 14px;\n    &.text-click {\n      margin-top: -12px;\n    }\n  }\n"]))),h=d.ZP.button(r||(r=(0,c.Z)(["\n  padding: ",";\n  width: ",";\n  margin: auto;\n  background: #8f8f8f;\n  border-radius: 25px;\n  text-align: center;\n  font-size: ",";\n  font-weight: 700;\n  color: #ffffff;\n  border: none;\n  line-height: 'inherit';\n  transition: all 0.3s ease-in;\n\n  &:hover {\n    background: #e2ae39;\n    color: #000000;\n  }\n\n  @media screen and (max-width: 768px) {\n    font-size: 18px;\n    border-radius: 6px;\n    padding: 15px 30px;\n    &.btn-card {\n      width: 100%;\n    }\n  }\n  @media screen and (max-width: 425px) {\n    width: 101px;\n    font-size: 12px;\n    padding: 10px 5px;\n    &.btn-top {\n      width: 159px;\n    }\n  }\n"])),(function(e){return e.padding||"10px 20px"}),(function(e){return e.width||"100%"}),(function(e){return e.fontSize||"24px"}));d.ZP.div(l||(l=(0,c.Z)(["\n  max-width: 1033px;\n  margin: 64px auto;\n  padding-top: 114px;\n\n  .coming-soon {\n    color: #ff0000;\n  }\n\n  ul {\n    padding-left: 2.5rem;\n  }\n\n  ul li {\n    font-size: 24px;\n  }\n"])))},825:function(e,n,t){t.a(e,(async function(e,a){try{var i=t(4165),o=t(5861),s=t(885),r=t(2791),l=t(1503),c=t(6707),d=t(2076),u=t(8885),m=t(1666),g=t(6596),x=t(8362),p=t(4569),h=t.n(p),y=t(184),k=e([c,d]);[c,d]=k.then?(await k)():k;var T=[{title:"Baby Alien Club",image:"/assets/images/partner (1).png",modalText:{title:"BABY ALIEN CLUB",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","Seven Hundred Million Years ago, there were a species of adorable, extra-terrestrial beings roaming the universe. The <strong>Baby Alien Club</strong> is a 2-part CNFT series where you can FUSE Series 1 with Series 2 to form 1 unique CNFT."],listText:[{title:"Baby Alien Club Rank # 1 -1000",text:["0.007 Tokens Per Hour","0.179 Tokens Per Day","1.25 Tokens Per Week"]},{title:"Baby Alien Club Rank #1001-7000",text:["0.002 Tokens Per Hour","0.055 Tokens Per Day","0.382 Tokens Per Week"]},{title:"Baby Alien Club Rank #7001-10000",text:["0.002 Tokens Per Hour","0.040 Tokens Per Day","0.278 Tokens Per Week"]}],images:["/assets/images/BabyAlenClub.png"]}},{title:"Bad Fox Motorcycle Club",image:"/assets/images/partner (2).png",modalText:{title:"BAD FOX MOTORCYCLE CLUB",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","Bad Fox Motorcycle Club is a large collective of NFT fans who are working to innovate on what is possible with a PFP project, currently planning diverse forms of fund redistribution to the community and integrations into various metaverse projects such as Cornucopias."],listText:[{title:"Bad Fox Motorcycle Club Rank # 1 -1000",text:["0.011 Tokens Per Hour","0.265 Tokens Per Day","1.854 Tokens Per Week"]},{title:"Bad Fox Motorcycle Club Rank #1001-6000",text:["0.003 Tokens Per Hour","0.072 Tokens Per Day","0.504 Tokens Per Week"]}],images:["/assets/images/BadFox.png"]}},{title:"ThoseAMAs",image:"/assets/images/partner (3).png",modalText:{title:"THOSEAMAS",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","ThoseAMA\u2019s is a Tribute to Charles Hoskinson and Cardano. The entire mission of this project is to give back. The Mission is to take care of our holders and to help increase and strengthen the decentralization of Cardano."],listText:[{title:"ThoseAMAs Flaming Mic Trait",text:["0.034 Tokens Per Hour","0.818 Tokens Per Day","5.723 Tokens Per Week"]},{title:"ThoseAMAs Golden Mic Trait",text:["0.023 Tokens Per Hour","0.563 Tokens Per Day","3.941 Tokens Per Week"]},{title:"ThoseAMAs Silver Mic Trait",text:["0.017 Tokens Per Hour","0.397 Tokens Per Day","2.778 Tokens Per Week"]},{title:"ThoseAMAs No Mic Trait",text:["0.004 Tokens Per Hour","0.095 Tokens Per Day","0.666 Tokens Per Week"]}],images:["/assets/images/partner (3).png"]}},{title:"KWIC",image:"/assets/images/partner (4).png",modalText:{title:"KEYBOARD WARRIORS INTERNET CAFE",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","The Keyboard Warriors which are the OG collection of 8,888 NFTs drawn by commercial street artist JESWRI who has over 26k followers on instagram and has worked with some of the biggest brands in the world like adidas, converse, Sony and much more!","These nfts will be your entry point into our club houses aka the Internet Cafes! The Internet Cafes are the ultimate hang out spots in the metaverse we are building multiple Internet Cafes in multiple metaverses these will be massive \u201cclub houses\u201d where our holders can come to and do heaps of cool stuff such as network, play games, shop, go to our art galleries and so much more!","Mint date: 26-27th Nov. 2022","Mint price: 55 ADA Pre-Sale 65 ADA Public-Sale","Website: http://keyboardwarriorsinternetcafe.io/"],images:["/assets/images/KWIC.png"]}},{title:"Claypez",image:"/assets/images/partner (5).png",modalText:{title:"CLAYPEZ",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","Claypez are a family of 6000 hand crafted and uniquely generated clay apes with additional utility, stored on the Cardano Blockchain. The idea of Claypez came to life as we combined the two things we love: Clay and apes."],listText:[{title:"Claypez Rank # 1-60",text:["0.056 Tokens Per Hour","1.339 Tokens Per Day","9.375 Tokens Per Week"]},{title:"Claypez Rank # 61-300",text:["0.028 Tokens Per Hour","0.670 Tokens Per Day","4.688 Tokens Per Week"]},{title:"Claypez Rank # 301-600",text:["0.024 Tokens Per Hour","0.575 Tokens Per Day","4.028 Tokens Per Week"]},{title:"Claypez Rank # 601-1200",text:["0.007 Tokens Per Hour","0.179 Tokens Per Day","1.25 Tokens Per Week"]},{title:"Claypez Rank # 1201-6000",text:["0.001 Tokens Per Hour","0.022 Tokens Per Day","0.152 Tokens Per Week"]}],images:["/assets/images/partner (5).png"]}},{title:"Ape Nation",image:"/assets/images/partner (6).png",modalText:{title:"Ape Nation",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","Ape Nation is a collection of 9999 of the sexiest Apes in the jungle. They are all unique but share one thing in common, they're all apart of the best community on Cardano!"],listText:[{title:"Ape Nation Rank # 1-1000",text:["0.008 Tokens Per Hour","0.193 Tokens Per Day","1.354 Tokens Per Week"]},{title:"Ape Nation Rank # 1001-5000",text:["0.003 Tokens Per Hour","0.063 Tokens Per Day","0.443 Tokens Per Week"]},{title:"Ape Nation Rank # 5001-9999",text:["0.001 Tokens Per Hour","0.036 Tokens Per Day","0.250 Tokens Per Week"]}],images:["/assets/images/ApeNation.png"]}},{title:"Space Alien Club",image:"/assets/images/partner (7).png",modalText:{title:"SPACE APE CLUB",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","The Space Ape Club is a collection of 10,000 Space Ape NFTs- unique digital collectibles living on the Cardano Blockchain. Your Space Ape acts as your ticket for SACT Utility Token redemption and grants access to members only benefits within the discord."],listText:[{title:"Ape Nation Rank # 1-10000",text:["0.003 Tokens Per Hour","0.063 Tokens Per Day","0.438 Tokens Per Week"]}],images:["/assets/images/SpaceApeClub.png"]}},{title:"Virtua",image:"/assets/images/virtua.png",modalText:{title:"VIRTUA",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","Virtua released Cardano Island Land Plots that represent specific plots of land on Cardano Island after allocation \u2013 the Cardano community\u2019s true home in the metaverse \u2013 including their specific coordinates. Cardano Island is the first crypto island on Virtua Prime where you can purchase land, interact, and explore."],listText:[{title:"Virtua Legendary Plots",text:["0.0165 Tokens Per Hour","0.397 Tokens Per Day","2.778 Tokens Per Week"]},{title:"Virtua Special Plots",text:["0.007 Tokens Per Hour","0.170 Tokens Per Day","1.190 Tokens Per Week"]},{title:"Virtua Rare Plots",text:["0.004 Tokens Per Hour","0.089 Tokens Per Day","0.625 Tokens Per Week"]},{title:"Virtua Uncommon Plots",text:["0.002 Tokens Per Hour","0.040 Tokens Per Day","0.278 Tokens Per Week"]},{title:"Virtua Common Plotst",text:["0.001 Tokens Per Hour","0.022 Tokens Per Day","0.156 Tokens Per Week"]}],images:["/assets/images/Rectangle 45.png"]}},{title:"Disco Solaris",image:"/assets/images/discoSolaris.png",modalText:{title:"Disco Solaris",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","<strong>Disco Solaris</strong> is a decentralised retrotopian universe on Cardano"],listText:[{title:"Disco Solaris #1-5777",text:["0.005 Tokens Per Hour","0.108 Tokens Per Day","0.757 Tokens Per Week"]}],images:["/assets/images/discoSolaris.png"]}},{title:"Salty Seagulls Society",image:"/assets/images/saltySeagulls.png",modalText:{title:"Salty Seagulls Society",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset.","<strong>The Salty Seagulls Society</strong> is a community-governed business on the Cardano Blockchain featuring 7,777 individually painted CNFTs in 11 Colonies."],listText:[{title:"Salty Seagulls Society Lvl 8 & To Be Revealed",text:["0.072 Tokens Per Hour","1.736 Tokens Per Day","12.152 Tokens Per Week"]},{title:"Salty Seagulls Society Lvl 7",text:["0.052 Tokens Per Hour","1.24 Tokens Per Day","8.681 Tokens Per Week"]},{title:"Salty Seagulls Society Lvl 6",text:["0.016 Tokens Per Hour","0.374 Tokens Per Day","2.621 Tokens Per Week"]},{title:"Salty Seagulls Society Lvl 5",text:["0.006 Tokens Per Hour","0.146 Tokens Per Day","1.021 Tokens Per Week"]},{title:"Salty Seagulls Society Lvl 4",text:["0.002 Tokens Per Hour","0.050 Tokens Per Day","0.353 Tokens Per Week"]},{title:"Salty Seagulls Society Lvl 3",text:["0.002 Tokens Per Hour","0.040 Tokens Per Day","0.280 Tokens Per Week"]},{title:"Salty Seagulls Society Lvl 2",text:["0.001 Tokens Per Hour","0.027 Tokens Per Day","0.187 Tokens Per Week"]}],images:["/assets/images/saltySeagulls.png"]}}],b=[{title:"Mad Dog Car Club",isVideo:!1,image:"/assets/images/assets/rank_1001_3000.png",modalText:{title:"MAD DOG CAR CLUB",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset."],listText:[{title:"Mad Dog Car Club Rank # 1 -1000",text:["0.042 Tokens Per Hour","1 Tokens Per Day","7 Tokens Per Week"]},{title:"Mad Dog Car Club Rank #1001-3000",text:["0.024 Tokens Per Hour","0.571 Tokens Per Day","4 Tokens Per Week"]},{title:"Mad Dog Car Club Rank #3001-7000",text:["0.012 Tokens Per Hour","0.286 Tokens Per Day","2 Tokens Per Week"]},{title:"Mad Dog Car Club Rank #7001-9999",text:["0.006 Tokens Per Hour","0.143 Tokens Per Day","1 Tokens Per Week"]},{title:'Mad Dog Car Club "Gold Bar" Trait',text:["0.042 Tokens Per Hour","1 Tokens Per Day","7 Tokens Per Week"]},{title:'Mad Dog Car Club "Cash" Trait',text:["0.033 Tokens Per Hour","0.8 Tokens Per Day","5.6 Tokens Per Week"]}],images:["/assets/images/Rectangle 47.png","/assets/images/Rectangle 46 (1).png"]}},{title:"Mad Dog Car Collection",isVideo:!0,image:"/assets/videos/car-rank.mp4",modalText:{title:"MAD DOG<br/>CAR COLLECTION",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset."],listText:[{title:"Mad Dog Car Collection Fully Assembled Cars",text:["0.097 Tokens Per Hour","2.333 Tokens Per Day","16.3 Tokens Per Week"]}],addImages:["/assets/images/Rectangle 46.png","/assets/images/Rectangle 48.png","/assets/images/Rectangle 49.png"],images:["/assets/images/Lagani_R_AdobeExpress.gif"]}},{title:"MD License",isVideo:!1,image:"/assets/images/MDCC-CARD.gif",modalText:{title:"MD License",mainText:["After you have started accumulating MD Tokens, you will be able to see how much you are able to collect in your wallet page. This will only be visible after connecting your wallet and beginning accumulation on your asset."],listText:[{title:"MD License",text:["0.174 Tokens Per Hour","4.167 Tokens Per Day","29.167 Tokens Per Week"]}],images:["/assets/images/MDCC-CARD.gif"]}},{title:"???",isVideo:!1,image:"/assets/images/image 5.png",modalText:{title:"Revealing on October 24th"}}];n.Z=function(){(0,l.Z)("(max-width: 768px)");var e=(0,c.rK)(),n=e.lucid,t=e.accumulating,a=e.myWalletAddress,p=(0,r.useState)(!1),k=(0,s.Z)(p,2),f=k[0],w=k[1],P=(0,r.useState)(""),v=(0,s.Z)(P,2),C=v[0],A=v[1],D=(0,r.useState)(!1),S=(0,s.Z)(D,2),j=S[0],M=S[1],W=(0,r.useState)(0),R=(0,s.Z)(W,2),N=R[0],H=R[1],Z=(0,r.useState)(!1),z=(0,s.Z)(Z,2),L=z[0],B=z[1],E=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(){var o,s,r,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=36;break}return e.next=3,h().get("https://jn6eig5lc8.execute-api.eu-west-2.amazonaws.com/default/hasNFTsPartners?address=".concat(a));case 3:if(o=e.sent,!t){e.next=9;break}A("You are already accumulating!"),w(!0),e.next=34;break;case 9:if(o.data.rewards){e.next=14;break}A("You do not have any assets that are applicable"),w(!0),e.next=34;break;case 14:if(!n){e.next=34;break}return e.prev=15,e.next=18,n.newTx().payToAddress("addr1vxcv899n9w76ca6s83kfkxw2yadeha7rqh3vwzzyu5004lqng6snf",{lovelace:5000000n}).complete();case 18:return s=e.sent,e.next=21,s.sign().complete();case 21:return r=e.sent,e.next=24,r.submit();case 24:l=e.sent,A("Transaction was successful"),w(!0),console.log(l),e.next=34;break;case 30:e.prev=30,e.t0=e.catch(15),A("Transaction was unsuccessful"),w(!0);case 34:e.next=38;break;case 36:A("Please connect your wallet first!"),w(!0);case 38:case"end":return e.stop()}}),e,null,[[15,30]])})));return function(){return e.apply(this,arguments)}}();return(0,y.jsxs)(u.im,{className:"page",children:[(0,y.jsxs)(u.W2,{children:[(0,y.jsxs)(m.H2,{fontWeight:700,textAlign:"center",children:["ACCUMULATE REWARDS ",(0,y.jsx)("br",{}),"FROM YOUR ASSETS"]}),(0,y.jsxs)(u.OQ,{textAlign:"center",children:[(0,y.jsx)("br",{}),"When you accumulate from your assets, you will be able to collect rewards. You will"," ",(0,y.jsx)("span",{className:"text-yellow",children:"NOT "}),"be able to collect your rewards if you have not clicked",(0,y.jsx)("br",{}),"\u201c",(0,y.jsx)("span",{className:"text-yellow",children:"Start Accumulating Rewards"}),"\u201d.",(0,y.jsx)("br",{}),(0,y.jsx)("span",{className:"font-italic",children:"Click each project to learn more."})]}),(0,y.jsx)(u.vw,{className:"assets-list-btn",marginBottom:"150px",children:(0,y.jsx)(u.zx,{onClick:E,className:"btn-top",width:"auto",padding:"20px 40px",fontSize:"32px",children:"ACCUMULATE REWARDS"})}),(0,y.jsx)(u.vw,{className:"first-assets-list",children:b.map((function(e,n){return(0,y.jsxs)("div",{className:"partner-card d-flex flex-column align-item-center",children:[(0,y.jsx)(g.Z,{src:e.image,isVideoCard:e.isVideo,title:e.title,width:"347px"}),(0,y.jsx)(u.zx,{width:"auto",padding:"20px 58px",fontSize:"32px",className:"btn-card",onClick:function(){M(!0),H(n),B(!0)},children:"LEARN MORE"})]},n)}))}),(0,y.jsx)(m.H2,{textAlign:"center",fontWeight:700,className:"mb-4",children:"PARTNERS"}),(0,y.jsx)(u.OQ,{textAlign:"center",className:"text-click font-italic",children:"Click each project to learn more."}),(0,y.jsx)("br",{}),(0,y.jsx)("br",{}),(0,y.jsx)(u.vw,{maxWidth:"900px",marginBottom:"50px",children:T.map((function(e,n){return(0,y.jsxs)("div",{className:"partner-card d-flex flex-column align-item-center",children:[(0,y.jsx)(g.Z,{src:e.image,title:e.title,width:"347px"}),(0,y.jsx)(u.zx,{width:"auto",className:"btn-card",padding:"20px 58px",fontSize:"32px",onClick:function(){M(!0),H(n),B(!1)},children:"LEARN MORE"})]},n)}))})]}),(0,y.jsx)(d.Z,{show:f,onClose:function(){return w(!1)},message:C}),(0,y.jsx)(x.Z,{show:j,onClose:function(){return M(!1)},data:L?b[N].modalText:T[N].modalText})]})},a()}catch(f){a(f)}}))},8408:function(e,n,t){t.a(e,(async function(e,a){try{t.r(n),t.d(n,{default:function(){return i.Z}});var i=t(825),o=e([i]);i=(o.then?(await o)():o)[0],a()}catch(s){a(s)}}))}}]);
//# sourceMappingURL=408.6c404db8.chunk.js.map