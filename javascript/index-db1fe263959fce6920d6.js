(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{74327:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(30266),i=n(809),s=n.n(i),r=n(67294),o=n(9008),l=n(41664),u=(n(25675),n(73108)),p=n(89583),c=n(3283),d=n.n(c),y=n(86455),m=n.n(y),h=n(30381),f=n.n(h),b="0xaAaeD28a447c6D458E621B37AE676aB01952Ee26",w=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"_licenseText",type:"string"}],name:"licenseisLocked",type:"event"},{inputs:[],name:"DUCKS_PROVENANCE",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"LICENSE_TEXT",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_DUCKS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAX_DUCK_FOR_SEED_AROUND",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"attemptETHTransfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_license",type:"string"}],name:"changeLicense",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"currentStep",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"duckPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"duckReserve",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"flipSaleState",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockLicense",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"maxDuckPurchase",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"numberOfTokens",type:"uint256"}],name:"mintDuck",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_reserveAmount",type:"uint256"}],name:"reserveDucks",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"saleIsActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"secondSaleActive",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"newPrice",type:"uint256"}],name:"setDuckPrice",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newAmount",type:"uint256"}],name:"setMaxSeedAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"provenanceHash",type:"string"}],name:"setProvenanceHash",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"setSecondSaleActive",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenLicense",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"tokensOfOwner",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"}],g=n(64476),x=n.n(g),v=n(85893);function T(){var e=(0,r.useState)(null),t=e[0],n=e[1],i=(0,r.useState)(null),c=i[0],y=i[1],h=(0,r.useState)(1),g=h[0],T=h[1],_=(0,r.useState)(null),k=_[0],j=_[1],D=(0,r.useState)(0),N=D[0],M=D[1],H=(0,r.useState)(0),A=H[0],S=H[1],E=(0,r.useState)(1e4),P=(E[0],E[1]),I=(0,r.useState)(60),O=I[0],C=I[1],F=(0,r.useState)(!1),U=F[0],B=F[1],R=(0,r.useState)(!1),W=R[0],X=R[1],L=(0,r.useState)(0),q=L[0],G=L[1],Z=(0,r.useState)(0),Y=Z[0],z=Z[1],K=(0,r.useState)(0),V=K[0],J=K[1],$=(0,r.useState)(0),Q=$[0],ee=$[1],te=function(){var e=window.ethereum;return Boolean(e&&e.isMetaMask)};function ne(){return(ne=(0,a.Z)(s().mark((function e(){var t,n,a,i,r,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.web3=new(d())(window.ethereum),t=new window.web3.eth.Contract(w,b),j(t),e.next=5,t.methods.totalSupply().call();case 5:return n=e.sent,console.log(n),M(n),e.next=10,t.methods.duckPrice().call();case 10:return a=e.sent,S(a),e.next=14,t.methods.MAX_DUCKS().call();case 14:return i=e.sent,P(i),e.next=18,t.methods.MAX_DUCK_FOR_SEED_AROUND().call();case 18:return r=e.sent,C(r),e.next=22,t.methods.saleIsActive().call();case 22:o=e.sent,X(o);case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(0,r.useEffect)((function(){!function(){ne.apply(this,arguments)}(),function(){var e=f()("2021-11-10T14:00:00-07:00"),t=f()(),n=f().duration(e.diff(t));setInterval((function(){t=f()(),n=f().duration(e.diff(t)),G(n.days()),z(n.hours()),J(n.minutes()),ee(n.seconds())}),1e3)}()}),[]),t&&window.web3.eth.getBalance(t).then((function(e){y(parseFloat(window.web3.utils.fromWei(e,"ether")).toFixed(2))}));var ae=function(){var e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:te?("undefined"!==typeof window.web3?window.web3=new(d())(window.ethereum):alert("No Ethereum interface injected into browser. Read-only access"),t=window,t.ethereum.request({method:"eth_requestAccounts"}).then((function(e){window.web3.eth.net.getNetworkType().then((function(e){"main"===e||alert("You are on "+e+" network. Change network to mainnet or you won't be able to do anything here")}));var t=e[0];n(t)})).catch((function(e){console.error(e),window.alert("User Rejected to connect metamask")}))):window.alert("Please install Metamask extension");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function ie(){return(ie=(0,a.Z)(s().mark((function e(){var n,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!U){e.next=2;break}return e.abrupt("return");case 2:if(t){e.next=5;break}return alert("Wallet not connected"),e.abrupt("return");case 5:if(!k){e.next=14;break}return n=Number(A)*g,e.next=9,k.methods.mintDuck(g).estimateGas({from:t,value:n});case 9:i=e.sent,B(!0);try{k.methods.mintDuck(g).send({from:t,value:n,gas:String(i)}).on("transactionHash",(function(e){console.log("transactionHash",e)})).on("receipt",function(){var e=(0,a.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m().fire({icon:"success",title:"Congratulation!",html:"".concat(g," duck(s) minted successfully")+'<a href="https://twitter.com/DorkyDucks" target="_blank" rel="noreferrer" style="font-weight: bold; color: #7367f0;">  TWITTER</a> '}),B(!1),e.next=4,k.methods.totalSupply().call();case 4:n=e.sent,M(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).on("error",(function(e,t){B(!1),m().fire("Oops...","Something went wrong!","error")}))}catch(r){console.log(r)}e.next=15;break;case 14:console.log("Wallet not connected");case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,v.jsxs)("div",{className:x().container,children:[(0,v.jsxs)(o.default,{children:[(0,v.jsx)("title",{children:"Dorky Ducks"}),(0,v.jsx)("meta",{name:"description",content:"DorkyDucks is 10,000 randomly generated and unique pieces of art, carefully designed and crafted by a couple of talented quacks."}),(0,v.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,v.jsxs)("main",{className:x().main,children:[(0,v.jsx)("div",{className:x().preHeader,children:(0,v.jsxs)("div",{className:x().counter,children:[q," days ",Y," hours ",V," minutes ",Q," seconds"]})}),(0,v.jsxs)("div",{className:x().header,children:[!t&&(0,v.jsx)("button",{className:x().walletButton,type:"button",onClick:ae,children:"Connect Wallet"}),t&&(0,v.jsx)("p",{children:t.slice(0,6)+"..."+t.slice(-4)})]}),(0,v.jsxs)("div",{className:x().bannerWrap,children:[(0,v.jsx)("h1",{className:x().title,children:"Dorky Ducks"}),(0,v.jsx)("h2",{className:x().soon,children:"NFT Presale begins November 10th at 2pm PDT!"}),(0,v.jsx)("img",{src:"../images/banner.png",className:x().bannerImage,alt:"banner"})]}),(0,v.jsx)("div",{className:x().mintArea,children:(0,v.jsxs)("div",{className:x().mintDetail,children:[(0,v.jsxs)("div",{className:x().balanceProgress,children:[(0,v.jsxs)("div",{className:x().balance,children:[(0,v.jsx)("p",{children:"My ETH Balance"}),(0,v.jsxs)("p",{children:[c," ETH"]})]}),(0,v.jsxs)("div",{className:x().progress,children:[(0,v.jsx)("p",{children:"Progress"}),(0,v.jsx)(u.Z,{completed:(N/O*100).toFixed(2),height:"5px",width:"100%",labelSize:"0px",className:x().progressBar}),(0,v.jsxs)("p",{children:[(N/O*100).toFixed(2),"%"]})]})]}),(0,v.jsxs)("div",{className:x().quantity,children:[(0,v.jsx)("input",{type:"text",placeholder:"0",value:g,onChange:function(e){return T(e.target.value)}}),(0,v.jsx)("button",{type:"button",onClick:function(){return T(5)},children:"Max"})]}),(0,v.jsxs)("div",{className:x().totalPrice,children:["TOTAL PRICE: ",(.05*g).toFixed(2)," ETH"]}),(0,v.jsx)("div",{children:(0,v.jsxs)("button",{className:x().mintButton,type:"button",onClick:function(){return ie.apply(this,arguments)},disabled:U||!W,children:[!U&&(0,v.jsx)("span",{children:"Mint Your Dorky Ducks"}),U&&(0,v.jsxs)("div",{className:x().minting,children:[(0,v.jsx)("span",{children:"Minting..."}),(0,v.jsx)("img",{src:"../images/loading.gif",className:x().loading,alt:"minting"})]})]})})]})}),(0,v.jsxs)("div",{className:x().aboutUs,children:[(0,v.jsx)("p",{className:x().sectionTitle,children:"Who we are"}),(0,v.jsx)("p",{children:"DorkyDucks is 10,000 randomly generated and unique pieces of art, carefully designed and crafted by a couple of talented quacks from California."}),(0,v.jsx)("p",{className:x().sectionTitle,children:"Launch details"}),(0,v.jsx)("p",{children:"Presale date: November 10, 2021 2pm PDT (9pm UTC)"}),(0,v.jsx)("p",{children:"Public sale: November 13, 2021 2pm PDT (9pm UTC)"}),(0,v.jsx)("p",{children:"Presale Mint price: 0.05 ETH (-30%)"}),(0,v.jsx)("p",{children:"Public Mint price: 0.07 ETH"}),(0,v.jsx)("p",{children:"Presale will be limited to 2,000 DorkyDucks, for max of 5 per member at once. To be whitelisted, all you need to do is achieve Level 2 (Lucky Ducky) status in our Discord, which you can do simply by hanging out and chatting with the community. To help keep gas prices lower, the presale will run for 2 full days, through Nov 12th at 5pm PDT."}),(0,v.jsx)("p",{children:"During our public launch, anyone can mint as many DorkyDucks as they\u2019d like, up to 5 per transaction."}),(0,v.jsx)("div",{className:x().gifWrap,children:(0,v.jsx)("img",{className:x().logo,src:"../images/newlogo.gif",alt:"logo"})}),(0,v.jsx)("p",{className:x().sectionTitle,children:"Roadmap"}),(0,v.jsx)("p",{children:"Each milestone in our roadmap unlocks as the % of DorkyDucks minted goes up. Additional future developments will be decided and voted upon by the DorkyDucks community as a whole."}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:"10% - 1 ETH in rewards will be given out. Plus, we will be airdropping 10 ducks to whitelisted members."}),(0,v.jsx)("li",{children:"20% - A community wallet will be established. This wallet will be used for a variety of purposes focused on ensuring longevity of the ducks and their dorky successors."}),(0,v.jsx)("li",{children:"30% - 10 DorkyDucks NFTs will be randomly airdropped to whitelisted members."}),(0,v.jsx)("li",{children:"40% - 40 winners of $20,000 total will be chosen for various giveaways, based on level of engagement in the community - e.g., inviting friends, leveling up to higher roles, etc. Engagement measurement is already in effect, so start chatting it up with your DD peers!"}),(0,v.jsx)("li",{children:"60% - 50+ DorkyDucks NFTs will be randomly airdropped to our first 1,200 Discord members."}),(0,v.jsx)("li",{children:"90% - A grant fund of $25,000 will be deposited into the community wallet, where YOU the community can help us design, develop, and create the things you value most - e.g., new artwork, additional utility, upcoming collections, etc. In addition, 1% of secondary market fees (OpenSea) will go into the community grant forever! Wallet address TBA."}),(0,v.jsx)("li",{children:"100% - Within 3 days of launch, we will buy up a handful of ducks at floor price, in order to help stabilize the price of DorkyDucks NFTs in the secondary market."})]}),(0,v.jsx)("p",{className:x().sectionTitle,children:"Utility and Next Up"}),(0,v.jsx)("p",{children:"DorkyDucks NFTs have utility! All holders will be able to mint 1 NFT from our next collection (TBA)... for FREE. (All you pay is gas.) This collection will be available to mint  4-8 weeks after the DorkyDucks public launch."}),(0,v.jsx)("p",{className:x().sectionTitle,children:"Metaverse"}),(0,v.jsx)("p",{children:"In the future, we will be allowing holders to import their DorkyDucks as skins into virtual worlds and existing video games. We are working hard to make this happen, and with help from the community. WAGMI. \ud83d\ude80"}),(0,v.jsx)("p",{className:x().sectionTitle,children:"Team"}),(0,v.jsxs)("div",{className:x().teamGroup,children:[(0,v.jsxs)("div",{className:x().team,children:[(0,v.jsx)(l.default,{href:"https://twitter.com/GiovanniRegalo",target:"_blank",children:(0,v.jsx)("a",{children:(0,v.jsx)("img",{src:"../images/admin.png",alt:"admin"})})}),(0,v.jsx)("div",{className:x().discord,children:"Giovanni.Regalo#4783"}),(0,v.jsx)("div",{children:"Creator of Ducks"})]}),(0,v.jsxs)("div",{className:x().team,children:[(0,v.jsx)(l.default,{href:"https://twitter.com/ZacLHarding",target:"_blank",children:(0,v.jsx)("a",{children:(0,v.jsx)("img",{src:"../images/social.png",alt:"social"})})}),(0,v.jsx)("div",{className:x().discord,children:"Zac Harding#7454"}),(0,v.jsx)("div",{children:"Social and Community"})]}),(0,v.jsxs)("div",{className:x().team,children:[(0,v.jsx)("img",{src:"../images/dev.png",alt:"dev"}),(0,v.jsx)("div",{className:x().discord,children:"miracle#5298"}),(0,v.jsx)("div",{children:"Development"})]})]}),(0,v.jsx)("p",{className:x().sectionTitle,children:"Join us for prelaunch giveaways and more!"}),(0,v.jsxs)("div",{className:x().social,children:[(0,v.jsx)("a",{href:"https://discord.gg/wGjwTbaumc",target:"_blank",rel:"noreferrer",children:(0,v.jsx)(p.j2d,{})}),(0,v.jsx)("a",{href:"https://twitter.com/DorkyDucks",target:"_blank",rel:"noreferrer",children:(0,v.jsx)(p.fWC,{})}),(0,v.jsx)("a",{href:"https://www.instagram.com/dorkyducksnft",target:"_blank",rel:"noreferrer",children:(0,v.jsx)(p.Zf_,{})})]}),(0,v.jsx)("p",{className:x().copyright,children:"Copyright \xa9 2021 Dorky Ducks - All Rights Reserved."})]})]}),(0,v.jsx)("footer",{className:x().footer})]})}},78581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(74327)}])},64476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",preHeader:"Home_preHeader__Fe7Ou",counter:"Home_counter__-9O5H",header:"Home_header__3vlZW",logo:"Home_logo__1YbrH",walletButton:"Home_walletButton__DYll2",bannerWrap:"Home_bannerWrap__2LvgO",title:"Home_title__3DjR7",soon:"Home_soon__1Dad-",bannerImage:"Home_bannerImage__HXx44",mintArea:"Home_mintArea__kvAvg",mintDetail:"Home_mintDetail__1xuc7",balanceProgress:"Home_balanceProgress__2HYg0",quantity:"Home_quantity__n4XVT",totalPrice:"Home_totalPrice__1fbvs",balance:"Home_balance__2cDyP",progress:"Home_progress__IezBs",progressBar:"Home_progressBar__2zO1u",minting:"Home_minting__21_ao",loading:"Home_loading__2A0vF",mintButton:"Home_mintButton__oJPz6",glowing:"Home_glowing__2Uuka",aboutUs:"Home_aboutUs__2dCnX",sectionTitle:"Home_sectionTitle__2vjNb",social:"Home_social__2vdT0",copyright:"Home_copyright__1VXTg",teamGroup:"Home_teamGroup__XGklk",team:"Home_team__1iQB_",discord:"Home_discord__37SPs"}},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){}},function(e){e.O(0,[774,482,445,885,584,888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
