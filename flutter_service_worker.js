'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "cb08445bdb882fd0291054245fef50b0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b7e376ef79507318a3301d490510ba5d",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "90a4d9679f0a4167b5fee2055da522c3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b5bfbfe4589670c7ddfee548b0c5feb3",
".git/logs/refs/heads/main": "dd82e63b04040d955c3e7c07e37dd150",
".git/logs/refs/remotes/origin/main": "5f83dd60c1409748588ed92c4ed8115b",
".git/objects/00/c33de484a24b3f5455110d9f1f4eff466cca33": "b97deac9981b5bd411d5c37a71f6dce6",
".git/objects/03/9ce6ca0c4597bad11d9f9d8d0261e4c7144a4f": "449629e8fda00d8d66378e3240c9b9fa",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/cd46fb96f84e4853b3dda718639edc61828bbb": "1222cee08dadfb4a4035327b7855fa7a",
".git/objects/04/cff038723238af4656185d7814f56a9d1f90dc": "c1797a9438a4a20a0c788885248b3621",
".git/objects/05/66b416fee6c640f0246d1b8d70841f64bec052": "ed778e365db7dc2c4ca1cd464df51786",
".git/objects/09/38d1e7d9b842f90cebc1c1bb190cbb9287b47c": "4ef986af030bff3bec2013859065d9bf",
".git/objects/0a/ef6d6d0378202157dcf273c13ad90d3a415909": "87c494e4ff0120281b8791a2c923e7b7",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/b9067f94c24c4cd3ad77e0e1e0aa470f535eb2": "222471c65355b2b540b88d0caaaffc50",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/10/69bf723043c13b2099e7a0a62c3ca0faca81a5": "80330a98779da282bb4078b624343ed9",
".git/objects/12/1ff81d6bce4c58db03e380f795eab04d358c55": "14e1f4a4a343160ac9df4575c1524dbc",
".git/objects/14/cf611427f371962accf3c739b48261d73a46b2": "b6581144af31cf74c0560ddada2b7936",
".git/objects/17/90bde0056c66944a8c4b2da06c0fbb8267ef22": "c29d0a108e9dfef99bd9ea1152a801da",
".git/objects/19/3f455f54fb854b032ce28185b0e229364830ef": "78b3e872f24c071ca0c507c028e3b2d0",
".git/objects/1b/5de230a52df4c68ee3386069336d9e3bd58bd0": "9a9040532029849d76e61a69f978df16",
".git/objects/1d/288911c27e94bdd83449b17952a120cdf37feb": "01072e4723a3dccf9ab84a9c718d0466",
".git/objects/1f/31340fd50bb68593119c6d4e49db6c41615f84": "4d8e850af83375adf542a071c9ffd8a6",
".git/objects/21/b14ff9d89d0cccef89ddd237509c650c047eb7": "6ca08cef0942170094d9272ee9c41950",
".git/objects/21/b41634ee3880972c6120d1c535100fab190d4b": "da28a6969350202cae44564d5adae805",
".git/objects/24/38ff2bfcf623e44bafd602612e4b78581ac9ed": "2dd11ab6cd6e4a34c42e763bd0ab9359",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/f516fd369a5380e93250b0f3e1650760d1ae69": "2010b37b4c9ee4ac0f7705c728c4386c",
".git/objects/27/97bf92a8d0a7f77f1b0fd02cc9cb7d57c0778b": "00d9dc587f45dd736173497b76a04301",
".git/objects/29/0c0e40cba5f38eda961c6948d8c06c24c1a783": "b852f98966e44809de3f949ee4aec760",
".git/objects/2b/4725df54462b40cdf9cfdd11bac0ff971689f4": "6bad4bebacfc7f7ff5b4d34e2fbbe4bd",
".git/objects/2b/97558d7c913a724cb2df6149ff648b4ded8eac": "061981deba040379f50badc0d401ebf1",
".git/objects/2b/a19f52279dbfd7551c80e1ff9fd462d6201fe4": "bdce5e914f55ba331ef304d13869f945",
".git/objects/2d/28db97ff483c3cc1df9cb491f29c6d15f9067b": "9768933070a18e3f2a0d25741066baa5",
".git/objects/2d/6a54efd8abfda46a0dfa0a4103ecaf9b8fa37d": "647ef9fe88bcc030dc6096807017b571",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/cfe90743f3176b826405b6ea7998edc56d3bfe": "15be7a8e7f8871cb51242464e296e9a0",
".git/objects/2f/45b95b2004cfc15597c2a763944a4e5be25e72": "32c650176b3a8048a569b53315a757e5",
".git/objects/31/ee6a40299963f2157e652ce78b5e90cf121f9f": "145915a4af518a0c0c942de4b489c65e",
".git/objects/32/2c7308d0cb348035a53c41a734bb2162aaeb59": "9b01d89e36b6dce7a779832bd713cccb",
".git/objects/32/bc07847bd4269e57569b95845fbefb4d28a6e2": "ee107fc6f20dbc94fb963a84e5f4625e",
".git/objects/33/11e98f9a916677e0ea88b1e7cf4af5c091837f": "7068025f3f464e3335ce80e28097aa05",
".git/objects/3a/1dcb5af0d88e3e188bbc067e20e62d288e9bac": "cc1326066c6f2905cb0a65189c9c9808",
".git/objects/3a/c6579f51c6527dcdaaa09b41a3e9a844b92288": "b292aac771f6a68fbe6bfe4827d23e5b",
".git/objects/3b/9d00ab050e3e8a878533fd44fa93d9c678d2cd": "ab1db2b4d25d2c30d771223c23276930",
".git/objects/3c/2a30e8bcfa89f1e1c5776ac59c4b0d72b96da9": "a5d9d79fa3b6f820b48f7150d0cde4f9",
".git/objects/3c/7672b4bc985f936849d9facaec8759936c9d96": "37ad78cb55a342d6ca008f03f7e5d044",
".git/objects/3d/a8ad9e19a6b14b1a9e72b6003391b8adfacde3": "45858c1ff1f8c70386d8f367c8a20eb0",
".git/objects/3e/9680f51ab646c03bb2d78328050978cf613269": "710f1954f6b94df115d330fe6370f9f7",
".git/objects/41/b3658b98f8c03a0826c12070fb9b463295f8c1": "fa8d88e401b8c083df81fa4a2bf81e45",
".git/objects/43/f2154fefd28dd491fdf5ac1760b0fd1ffa4751": "31f13ba6c74f1b787c88a32706770e58",
".git/objects/44/cabc61304dc796e18ce332a512bf4c938e0af6": "9594902fb7541a5791bf780043210abd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4955337bcc6b6a0f2c25ced303b43de4bede58": "23fa5a6637f0ef949a9187cf6d5e4828",
".git/objects/48/275ec433e34e5328cb07b4d1cab2c70437673f": "f7fb7a89f34b9a9884374e14476a2d86",
".git/objects/4b/ae627d4c0003c2dd142811d38eb06516e95a0f": "fe7154534f8e257369b007c74d354064",
".git/objects/4c/52ee576b342467540c6f44c441798f416be5f8": "eca07b1c3a9d494fce4fa40408431c29",
".git/objects/4c/9686249bf55841a092be2964522fe65becb28d": "b02cda95efd4eeeb946edaa6b8ee8adc",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/58d8a3e8c82cb922e6fdf116bc342f322ce5d9": "70c7e45ccf11e976ce61b662a231531b",
".git/objects/50/8789226287495bc52cdbad103eec712dc4c6e6": "76b224d4dc2b27992d4f32814cbe5721",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/17f19448f57ea2b932a568bc6de74f8bb40f9f": "f3ed8497d6bf8c2358fd9dc781eb139e",
".git/objects/53/f4d3f37130eb0e9848c468d76afdebf4798c6a": "07a470befee8c81e51a01c1f0d6d5995",
".git/objects/54/2421de4d8c0e809e8b08d49121f337fa9c529e": "51fbab5a92f50378bbc5bb8cbff6bb57",
".git/objects/54/ccc236184ff8c3feb7829f8fd9f76c9f5f5392": "e01dda5626401a472c61987ae2e83ebe",
".git/objects/57/c42ade8a5ea29640b8dd49bd766cd33186f9b8": "0dcc097a6c9662287ebebddb8738d09d",
".git/objects/58/8c9ea2dfa49db9e3ad562563085f9886823c7b": "81f909931f17b09631427e06f91ee373",
".git/objects/59/a6c05ee40a19b25802a159e0433afeade1ebf3": "d3fcda12b08f10dd7677fa34e8a22205",
".git/objects/5a/ea2cfdc3f625b8b879fd68c19665b27cbba2d6": "1231b8384d62474039dd8447786b2a3c",
".git/objects/61/ac30adf9eba115b16b6994089257a5ea4eae95": "e5aa891c690fa5f0fbe16dbebde2efb4",
".git/objects/62/5b156ba69e466a0145ae2a7d3574951781ae8c": "b004b4dbaf6242d795c793d158dbac98",
".git/objects/62/e2cfdf79b58840fe03580150207bc3dd46b405": "9c019765ae494e250ef1dccfa430aa51",
".git/objects/67/56fdc510e5a9be1fdc0bc1cdd3edcda27b74de": "aaf68295f9aebf0fc39068fea1a24b24",
".git/objects/68/8a635935d17ddf230a574dbc3a1a74595f7d3f": "2dd23baccc8e1c87a7f215bc248f2304",
".git/objects/6f/2cebb82f6b4373fa45076801a3ef157d342e09": "15ca8f777dd8fb3e6a6b855939347489",
".git/objects/72/71f90b8d4980ee844ea714099aa4c998dbdf22": "c2b77912fe2d626ee268aa3e4f21e888",
".git/objects/72/8320820eb8160b366b1b7a7b31ce6afae204da": "1b38e193261a2b46175b76329d0325a2",
".git/objects/73/5783f23e069b48320fb470d61e62e94b6f5719": "5392b44ffc1f808118116e7d9cf7c8a3",
".git/objects/73/e35cbc614746ac91feb6f47e8cd4e8ab4af2bf": "e6f80d32a8fd94be7e8a8aea1504df0c",
".git/objects/74/3a3b29a10823adcbcacb6701159a26c9f334d4": "45a86db8a039922b674b81bbb814113c",
".git/objects/76/13ba279530b7a4bc87d43f433bd28f8a3dd37c": "9f1409481452a93c9fe8de8d33896638",
".git/objects/76/2fe92662dc9296f3ed1aaebd6e1e52f5b0113e": "d464e5446fa52c5173ca839798b78f39",
".git/objects/76/68b0c89b837cd967ab8803a0597c4d565ad4d7": "8865360a6c20174dc9597572208e886f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/72b6e8aef4630f7c7ccbf36336d070493ad6dc": "5485e18a0fb96c6c4be2761aff4cf5d1",
".git/objects/7b/321222a10a09a6fc166cd6421e083b001053f1": "82f3ca8d8616e438a077d6dc074e642e",
".git/objects/7d/496cc380ba78b3d6b6aa3475ccd7d66b70f5f5": "af7bddda638745de72fbf6ba24468e6c",
".git/objects/7d/81fef77b4798aa4bee6e3631d9283010e0f520": "b2f751e196abe71dd93d402e76baf6ff",
".git/objects/7d/f1ce00a8fa10c2842b00864bef6a9bf226b244": "058cb5c9f258b2e1a9adc3e34dc8f7ec",
".git/objects/82/d9094fdf27cf0102182531425289ac2e548a6f": "454f00c762932f7a7069762c8a4ebed2",
".git/objects/83/ea6e2657d8b4d3f1970a0b3285e005301f35ac": "0311284f5f476915ac67f1b67f70e698",
".git/objects/86/1444d56a3012eeb8d567d992e2ccbc4e000609": "b0f3e9eaa60ced9e48e6a82f63cea144",
".git/objects/87/3b990761e3eb43636793d419a9515b3c979f66": "de2cb976bd48a3811ab883ea8670bab2",
".git/objects/87/ceb512fd0171994a825558849b448393bdd6fa": "567aa0c197dc0127424fab629aac3a5a",
".git/objects/88/7b38ee20bfc3eb2fa30d2cd8810da629dcd975": "716146ca93c99cad685a7ec62a3ee85d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2e91d26c64818583147d5ebfcc21aca2ad45c3": "7d29e2f6a7b3c449ef86542b4f6c6e53",
".git/objects/8b/84b32681b3501eb053f120592c090015830c06": "d822e9b44281b8213bcf863fb966a095",
".git/objects/8f/910c031b831eb29ec76299e625c2e1c23a15d2": "e6a943b47c3d391821e115b5efde8635",
".git/objects/92/b32c483af3a75bd13e716129cafcf224e7c565": "48a1a52bebdc1a90a5c5658e298254ee",
".git/objects/93/19c0dd0a51cae630447abd10e6111207ef5bf8": "873eb4b4f382728e1c69bd0501b0a98e",
".git/objects/94/b58b919c8f0ab5f1198a1c5858089284d6a0f0": "38efacd6ece905d026039acbe88f8744",
".git/objects/9a/3fb0761d273042e2dd2b03992df13342a68730": "fba5810d54091e4c50bdeec4b05abd93",
".git/objects/9c/bf6ee6186920463ae01635348849d83768bed2": "e9e771d57a8d42bd61a8acfe0e10b7d3",
".git/objects/9c/cf1c51c2acb88af2f3f15f147d5d7dd19380ad": "e6a73f3664dbe4357b106251cc94c695",
".git/objects/9f/76800bb747c99a26fea2b247fc85f273bf4a1d": "20e3e86bc5b6d8e21ad46dab34fc0ee2",
".git/objects/a0/2e5eaf9b7375cc8bb2208c83bc9092fbd8487b": "ecb754b0617669dd9786b980c4589800",
".git/objects/a0/4921ef06b41eddf0ee9cd46cef57cc06662685": "005528b65e6dcba0e9b810a788911e02",
".git/objects/a0/8dc507ae842c220c10cda53a74734f8264ac0e": "5388d4c8379197768d5c8df10175effd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/c5a0edaaf15ec80a7e7f3f70e94ff7f5a78abc": "8d36b3ab51595848ac429ffe39298e50",
".git/objects/a6/d8d2729dc1c5d9b9642f211c126ee9c5105b05": "aa1a3ae20e16657c4684ca922564048d",
".git/objects/a6/ff69c638955dda9fb07b332975f92e44bceba2": "b267fda7e3bbc309805d9b4b46a10c12",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/268c5b07a68c35bf16a28042a2a29d4e2f3be2": "60d1530a77ba111dddc43d44c6db187f",
".git/objects/af/e64391c64ee2ae0b4e3d8605088d59ca422cd5": "64ea2dd5d132d9337038d8c0dd69aa37",
".git/objects/b1/bdbc29d40041c4c15170cdfb670cd65d6757cd": "efc996cd983eee36125f0a622600adcd",
".git/objects/b3/650fdbd38211c3789f9fa4fc6b891ffb8f5b36": "5002a2fde21e9bf6c248eb2fe712849b",
".git/objects/b6/72b4160a616c1695e3370c7c1278fc8d788a95": "eb103531d488a7a48dd101d279b3f369",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6b808cd44043b65ff6b5b41004a3a164c2ab90": "b7e707e7316737fac302fbf92ca535d0",
".git/objects/b7/bd13b13f17c4e1530a4a55778dc45f9d821f86": "d99ed2c0b78c41668d27b47867cc44e3",
".git/objects/b9/1cb19561ad023003c5008d5d27b7805f33351a": "750c90011ac57cdf4a73b982d90fc349",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ac6e77501a1293278048ef284b90df9a228d69": "744603e3fb4c945db1aaa07aedb32a05",
".git/objects/b9/c89fdf99b146dbca6c0f9655300f29a1100f32": "823f688a92cabf329c5ecaf8954bacb1",
".git/objects/bb/0fda7e8b6dac3521d2938c7b74d779cec3ce17": "9861ad3610ddd30a2624a82926ffbedc",
".git/objects/bd/7fc0bec088ff8c6e7fb951674b78c4fbd36e90": "6d34b55bdd6eafba5e3f9c20fb08f64d",
".git/objects/c2/eb4e6932582b2107bdfd2b8d82cb5505e49e0a": "fe54ebf1bd0380770b1aeb547220bb01",
".git/objects/c3/44a7ae8a2407c976c2fd19ab56d122fd8c046c": "e6627d4ce9e8e75719b9f2d05a1da692",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c9/6505bd3fe012fd3140d85b085b0bfe7b2d02df": "b2ce72acf492c06b4cf8caf30a2b0690",
".git/objects/cc/dbdc277238bb66dc174ce384cec705a0a9a504": "a637b1a878bd2d4f934b5f4e239f4865",
".git/objects/cf/9c0832e95d17041b7a711ad16877f6b0af8d0d": "9675f259cd8aee4444e5044e735835e9",
".git/objects/cf/a80541620fc79886180e7454b66d95a49d8861": "226a2edece41de045912469b8a290a93",
".git/objects/d0/723a9be59a07ca874a49484341faf9515e78ca": "c1db3f4d5e354ed8d6faf6754c363c1c",
".git/objects/d5/5855365e9242d922258c3b54859a8a0f3cd5f7": "97b1a8e2381bfed1eb9070a3fb6c6142",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/7d8f344dbb2eba8cf7defdfb2b5630e3d05708": "82119a479de369c3f291c2197a3d6835",
".git/objects/df/93e51013fde931abda50d643d6dff75add0d8b": "6b5051e7614d59e900dc3f3c0917a404",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/bc03d59367975c5012b0f4bb251345a91099d0": "3c5fade3c53b93f06619be845eb230c1",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/ae62464185e95879e2cf0d0b8058345215bfe4": "3d3e917d323d183b916125f82a6da4ba",
".git/objects/eb/c8f8f30dd3bc13cce5dbf1ba010c35074034ab": "d054a5f31f9dcfbf1acdcea2da9492cd",
".git/objects/ed/d0c68eda4ffc64dbd4625add9432934aa31618": "a2c989d4a130247175efd1102392d471",
".git/objects/ef/b658301972d92911d14fb37088e74a4e78dc6a": "4d837520a364cf92dfb13279754e4c86",
".git/objects/f0/007ff2394e9644c4b56d8fc7c149607dea3312": "7b36fa94b37a54c15a4cff2f9a1356cc",
".git/objects/f0/7d636c9b0737eaeec535419302c9160e6e8326": "5a0d2f8764dd0b118fe1389bf0aa551f",
".git/objects/f9/3ec6f372fb9c00e21b43e50e5236e77aeeed6a": "7eb7ddee7db4f8fc56137ccdf117ad6c",
".git/objects/f9/9809d8fe17ee0064140366588bfdf84cea3638": "f35938d168171cc15f0ab234e47199dc",
".git/objects/fa/d7e63b0d2b906ade983ee0b2c8b23e95211f33": "8a668c9ac770cc6560487e6e75118c91",
".git/objects/fe/673a7dd21581c4094b3e0b1642c0ddd7a0556b": "0decdaf4bb7dd7ff281e1c59207e1424",
".git/ORIG_HEAD": "b107981ae1ce283669ace493e449d5ce",
".git/refs/heads/main": "74a33a4ed9a1cb653b32d55faa1fcb68",
".git/refs/remotes/origin/main": "74a33a4ed9a1cb653b32d55faa1fcb68",
"assets/AssetManifest.json": "9d45d6bbf3ef832ff99549980673ded4",
"assets/assets/audios/benarSound.mp3": "80e05ff22058e95b5e69ce37e1ee75f3",
"assets/assets/audios/jawaban_anda_benar.mp3": "cdede899db2e9e202588abe43a2ab598",
"assets/assets/audios/kimochi.mp3": "1ad2a28196c84c8df02f78f012daf00a",
"assets/assets/images/background.png": "1945db4f926f047a7ab00eda06d6a189",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "d7a8f7a64d032a90acd96cae2e2d5323",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0a4edf43779429450b6114a31b392b32",
"/": "0a4edf43779429450b6114a31b392b32",
"main.dart.js": "aff1c458b5972c4d370a34df5c63c764",
"manifest.json": "6c2fcbcd74d85ce9d73356c72befa1e0",
"README.md": "817ddfaca76f0e55a6efc5cfb975a5f7",
"version.json": "9cbd1b53f5570dc147e9c7b3dc2c7203"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
