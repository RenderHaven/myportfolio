'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3b4df51f8f8f3229cb4b950d4f8b9175",
".git/config": "79b05dcdb5e6d58361afca1971ef2162",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "46470cc09dbe65b25c0cf08885646371",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ae950faf5d74883d6e074a65a9ff505c",
".git/logs/refs/heads/main": "1ef5d2e5270369d5f220af0e1b1634d1",
".git/logs/refs/heads/master": "de1f6f137c72b1c79995af206ca2de0c",
".git/logs/refs/remotes/origin/main": "768d1a5a245986fca306d279fbf204c4",
".git/objects/08/2ecad18fc1e8ddecfc34cdc8d0fa1842e0bf1b": "aa0b3bc2bad7c6b965ac0f35913b1ba2",
".git/objects/08/a181e36ec7d4f7d209a6818674d191b0b8ca9b": "336608e2f58da4e31a92685ab723800a",
".git/objects/0e/1c7c6cd6f70215b8fd88ae0d0942f1bd5302a7": "800567aa60a3c5e298d64d5608836ed2",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/feb4e098c49bbf63ffa944746659be33d1cce2": "71a116a7b876ad9352cc11879f7e50a2",
".git/objects/10/e16241bbb20218ce79edb9e3cd0522edb2e00b": "ed42cc508dc0889d869da5c10e1ea83c",
".git/objects/12/ae98337b98cc7b162af582e918e8c6c24cc2a9": "ad0c32c0759ef21167dbb07897d21b5c",
".git/objects/16/84266055773d050b3eca887f7b67caf6607b67": "ba4f7618417741808570f0a2bc6de249",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/8efcdc852f8904c4e58a3de5575e71d43c06b0": "73147c4d87f054c867dc833c8fa1ba67",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/d2fffd55ea5e31e5de1e8a46be679cde6e2598": "4d76f49f2286f3d15342d2315b26daf0",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/8d1d6b57afed54b18a0a57644bcd346e00826b": "e547660ef4b0c0ecf8f3e16e0730da5c",
".git/objects/27/d25fab044b2afddbd259493c55d4fcc58ee122": "ad4f7b6f50c8579c82c0e4dd35a2dd6a",
".git/objects/28/59e1104eaf0a6670c6210126c5e5bb2d0a4944": "a9a6e8988bcd5f77d3f33e08336fc67d",
".git/objects/29/dce674140cdc0c25b75934c959545d31f8fc0b": "54972ac0dccb7e967bef6a36119674fb",
".git/objects/2a/1c2936a83a2bc377218d7db0c71b26ea42c071": "0b54de24f724892ff2cd8acfa97fe33c",
".git/objects/2b/3b9abe15fbb99119334f03ad0bbc7e3f02cc51": "f277da2c3bdf44c6c5820823139de260",
".git/objects/2f/5b76519318d100d3476f87834e4bb85cdfdce6": "f7df40c9c5c813f2e07066e85d75865f",
".git/objects/32/9ede4c38c896c08d6380e49027e9012801a363": "e19df03463a6849573ca9229104de8ef",
".git/objects/33/6ddc2577b600fc5425f6af208769dfdc8bb8ab": "e3c92b5ea1e00a3e9d3f70eacf175028",
".git/objects/33/b87b1025138f1bee8aacfe3c1837e08ad40100": "b89bc56d9f49b7df04ed9f6958a313e3",
".git/objects/35/f402d81584c9cad8e63652a0f873a8e5877585": "8eb692ef18903305cf91c432e661e974",
".git/objects/36/942e52723de29c6d7849ed92f2f67361a7e5e6": "2d401c35fa8f20b4f2152b9ad20ca906",
".git/objects/38/d2c556ebb86ab64bdd7783e571d7f119cd4432": "b7e68fa6315c0cabddf99d81f9ef9429",
".git/objects/41/a0939afd3d9adbef806338ee619a342a13b7a8": "c15cd6faa38bae278e1bea6f8780d529",
".git/objects/42/61d3525fccbc33200a6bc29dcff699e1fb887b": "a76fe3533fa3d2538f564d40b8d8578d",
".git/objects/45/b7c8d442e12880a00f3538a7c098ee71375837": "4b9fcad9574fe2df19bec742ef832132",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/a92615b2f407674ec2644512870f3006d1bcf0": "8fc62ee8d3fc3c28af8da956b80dc287",
".git/objects/4b/fb38d3a0e1c436b3487ff17bc9c0deefa3766b": "f9fbe6629bab51e97d9c5e3d1a58c46a",
".git/objects/54/a7183d67cd90d7972594bef0e8d7ca80cff9b3": "c8869221abdb65805c5b549194b01947",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/55/f28493c2adc1bb75addd6cfa7ec3934982b221": "c18b826e3c98f469ab8088b1fc7afd95",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/a0f7f7426f3c5d764ee8981126e901d5b3c1e2": "efe5189310026bc762da2c00ff2fcfae",
".git/objects/5d/0e13c2f5ae02e7cfe1ce909b3be61bf7b36717": "7e776a46b21ec73507a7d914a7f1cd3a",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/64/f2a92667e8d6c8c6166d6f56599b899d212cd7": "615aacdaf632214803483c3ff2352c96",
".git/objects/66/8b7677f9afb7fbf20a5e6b56ce9defc112a47e": "0f1589f75f84b9e10115dcef89884213",
".git/objects/66/bf762f36d9d14464ee4dee9995607a63d70d88": "1c6fb78f6cdf59c7126347551e5dc92f",
".git/objects/6c/373279a499aff1f62851ed1f7664b253c523fd": "a81f14157363b4ebacc138c46ff0e513",
".git/objects/6d/c500198c3f9598913e9e9f831c1c547d139db2": "1c32adfd49e9fef37b38d021ee346dfa",
".git/objects/71/13f2c179a241c1311550da8551da9d27a333a8": "2f8d67fed81829c6bf06f3c2c63e0e9f",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7e/fd2412ec76724fea5b8645ccf067bf19905a29": "b9287a63bf860185de36c91dad21f4e6",
".git/objects/81/46715a64b085e934b9f1f50db8ad252d016d59": "ed5171e83fac02825964d2d1354a2821",
".git/objects/84/511752e023234980553bcb244b1e9a18fa266e": "3bf8eed09010b3a04232f3e69c224722",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/732d71e3f830abe5fb0e6e594748562e79d9c6": "bb4978570b3d30871550dd3d31bba0cb",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/f44485c0fc93d4785d392438905949d75eba97": "ef808667e4f6f26db99a2bd49302d91b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/11b453a29947eecf1d4a072fc369bd5116d3b8": "584b66e6504dcf48bf503208544fddb1",
".git/objects/8e/0b064d64982d3a5195a3b0d12a82e34fb57ce6": "66234cf55ed43c5f0f3b54c86ce23b1a",
".git/objects/90/42fbf9f046db071a1c8ecc366f4f30969c81ee": "f8d5aeab731651801435789e420262be",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/16a7a662dccadbaed17a016dca0b3cb80f783a": "c62d2593174a7cb4099715d6cdd816fe",
".git/objects/9f/a2a197750905ad88c9b5a8baa44dc5ef66c52b": "7aad54763e7bd55e222455c040953ce4",
".git/objects/a0/a1f03aa6bc6cee7046baa4e888af28b44280d6": "b137b1b35a359f9950d2078269dcb5b3",
".git/objects/a2/408b55d9b820082b007bd992532d0806c21c72": "c768e76086c4c67b896575c4f1ad1209",
".git/objects/a2/b58b9432577e3d14c3242c22d05bc8f44b8601": "2cc9fb0f1619be33c004030611a0afd5",
".git/objects/a3/d6c650bbe25aaa2603b0df439b4df4d02853e7": "08b82833858184f51b1866e1b5932adc",
".git/objects/a4/5bf35e90c4938d6247a1dd2a8135c7c076f8e9": "0f7302c163448bc419167f22362b9755",
".git/objects/a4/6d190a7e2bf89e55a216a82fa79894a34404ad": "409cce87d77ad9f20482ec3d323c4669",
".git/objects/a5/2ee9dfe5ada3e0c11221999cec2365cb455f9c": "a5e8f27468aa5944bfdc345518b583f2",
".git/objects/a6/59e00463e0ed62a497a207126495512bf62fee": "1b9c3a5403c57bd6db85d23b5ef8741a",
".git/objects/a7/0fe5ab7c82d412b68a0d0ee0084fab7a554ab3": "8b574da6767e642e3acbde3f0b60c79f",
".git/objects/a9/e1429504f6ea75a393632768cd80e29dacf3c6": "056eef6d17fab45d23b7ef8434f81d67",
".git/objects/ae/755ba9149f689e7102fbcff0b49a202bae23af": "dc2a47bac66d66125445e3dc534fce8c",
".git/objects/af/d324065f15d4b8421b17c763d502c8d6985002": "ace0a22caa75b3457b75cb9c480bc28e",
".git/objects/b1/a8b465f3c2f5a1f4225d042f2ac6333a4484eb": "f3391701c93b72cc325bd0def7cb5d0b",
".git/objects/b2/0d3a1cdc19de89655727c60996ea615834ff3b": "12b3e574163e4726f5ae988dbdb1de6a",
".git/objects/b3/5f30b9e297c7fbc47eea3c36381a00f9824682": "6ad6466eb4822bd93911206719792bc0",
".git/objects/b3/78207afbb0b593889ea962eb4eeac2be71a1ef": "77d1ec18ca18240d1b189b31c7b325d4",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/ed2db46c1c71abb18b74ed98a9ec06161ef2e5": "07b9551258357e9a56ecbd21c7a11a5a",
".git/objects/b7/0e68fae93792d698d72b8591d9a337150d75ff": "1e2f6cf62c6ffbeea866f90336cbf3d9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/80e10844d5ef26ebe0cc4778db2ee5085db267": "1555ecd923b8da2dab7f2737a9491a24",
".git/objects/b7/bf304e4fb65cd355879cdc3b5510ebdd0114a8": "c269ceb9af2b1522288d2c349e5058bc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/c6becea2ee840c66ef766a30ada7d3bfad3d33": "b84aab9ea389851c48745e0c041598cc",
".git/objects/be/5c94ddd6d8235bbdb96f0ce2cf07f2a98c89e0": "02d2ce1b82ab275c2af8da48b56a26dd",
".git/objects/bf/ffba435d0e2459562c7537bf236b917e497a51": "86a75f439cf07ffdaacc14d3642b66d4",
".git/objects/c2/8783baa82796bc1e8b37f03a0d4e63867a9872": "c178082777a653e791c5b9e910a9b0b6",
".git/objects/c3/6f964952df4d04ad201daf608b29bb2ff1c714": "eaca80cb05ed8333e075afa11cbd82a0",
".git/objects/c4/08c45740f3752131f785e4c06e6da5e25bf38a": "30777815e59e8aad935c93fc5514b136",
".git/objects/c4/0b6b37a0ba94497da33be264831c6c92e033e1": "4d36633909661884e8e6c9d0db73de79",
".git/objects/c6/25db844dd3ac5a59aebd0340e8d3d32c57a8be": "99ba6119e789891564bf7caab167c638",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/30c67d73aaec6777c1e233800b9c0b57f343b4": "8a4aa5f2bdb4c624908c2416bb40d99e",
".git/objects/ce/b08aaf19899bd17d18bef528901a02d3510c9f": "0f393ea1dd5aab3d4785cd56fab65622",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/64c9c55197444f2d1bc580a63f2acb5329e110": "b327627b80fa010f8f886d70c8784285",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b52f5ea9a2686c79a9b0801223981e2b8381d5": "7997b2bf1bd941ba1a41873f66b8ea6e",
".git/objects/d6/92133da06795e3f2ff37016611bf476cd48687": "f6f32a20e7ca0825ba87e45b8c6fc0c2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/aa36c2a60550adc3a9261c73791b2dbca15729": "5a08f41c4aee9fad4cc5b69454f9107c",
".git/objects/da/dad9d6c1730942e3058f08d6c144dc80c3de1b": "d9d77c00b4722dee95fb95f20acab908",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/e1/00aa1fefde9423e917c186ce6ea301e5e4d232": "2de88cb1745b9b533c452f60df4019f6",
".git/objects/e1/01f38e295e32fe2a53d48b37b7fe49422937f3": "a06b0e8c4f0e7a916ae5c3b40a5dc5f3",
".git/objects/e1/74931eb06893a513f383f54b13c4d233fd8d3c": "74e44dc3abafe5c5933328bc8f32c93b",
".git/objects/e3/7fee225fdf33b5810af417e56e68b91ac69a40": "99ffdf8ed397da646f602898af1f6e28",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7f09990cd0d5fc2aa585242da1af20080638c7": "1c97c65bd2ca57b67718b5c6d7843c6c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/97fc523703ddbde9bd687dddf09fe08cc7837b": "af312e6adbb80a7caa3d607efe9c4fb1",
".git/objects/f9/b713b025e47ea7a788a6d5747296709612d67b": "7e5aa5bc1aecbdd28b03d42572dd0d76",
".git/objects/fa/7c1f695bead2717dbeb1cb93ef855643683d61": "3dabad6249929b5bcb281bfdb0699078",
".git/objects/fb/d9f22a0e59fae3b28da67240e9710d45aca3c2": "96749c10ee9ab0ca59480d06ac0af926",
".git/objects/fd/e984360e7312beb092ac6d5ee7fe3aa1721ff7": "f2f0ef9c3984a60a95d751a5ea3ada28",
".git/objects/fe/20f6ff52be6f9e09978edf8b8106944e5a4e96": "a105a1e23a73a200550deb33acb5d9cc",
".git/objects/fe/f454fb4629efaefb0b651b0d01201ee0d7b6a1": "a696542972fbb894e772ab00b10f259b",
".git/objects/ff/c713883491fb15870d8a8c6e5c1d242a112f1d": "80fab4bd1bfc67b19999ebcbc1c3490c",
".git/refs/heads/main": "00dcedc74a33e88a459a6e4b1d7262a7",
".git/refs/heads/master": "407f3ba906d85e9d4b360753458f3232",
".git/refs/remotes/origin/main": "00dcedc74a33e88a459a6e4b1d7262a7",
"assets/AssetManifest.bin": "528df427bdd86bb2d7a6a28b933e6632",
"assets/AssetManifest.bin.json": "57d7e721773231cacfca6c27d4fae605",
"assets/AssetManifest.json": "a7542a016a1e9ca5fc03d3a91692703e",
"assets/assets/banner.png": "5e061667d9591c613f1685daa284586d",
"assets/assets/certificate1.png": "d3baea8690c2900eb7a0cd26a96ab687",
"assets/assets/Certificate2.png": "1fb006f7842c71066d5d7594d890aa4e",
"assets/assets/facebook.png": "14955f77faa7dcc492daf87b97d17755",
"assets/assets/github.png": "b1dd376647549c8aa32f18564466eb99",
"assets/assets/hackerrank.png": "f588b5970e45ab1f5baf7afb9cb1e49c",
"assets/assets/insta.png": "b3c9ce60dd1d75ed3f597202c82c05e7",
"assets/assets/linkedin.png": "a8c88457d36dda46bef819853f70f6df",
"assets/assets/mypic.png": "981d94d9cc4b8b3a8568b1a6126a4d8c",
"assets/assets/project1.png": "84aa7b2f73b742d78f6e79b10c6f5d5f",
"assets/assets/project2.png": "4e334ea4504b2125672a6dac0c37aef2",
"assets/assets/project3.png": "52a9bd16eccec0fa00e63d395a1ed4ae",
"assets/assets/project4.png": "1770fda79f31c0e931318ed4dfd65910",
"assets/assets/project5.png": "2b80c3107d6c9dbd1c4ccedc92877815",
"assets/assets/project6.png": "0a1bacec84a58f29104f5192358eae28",
"assets/assets/project7.png": "be9cae5cf3e304d56ee738e49cf25431",
"assets/assets/skills.png": "78a365ef7b77e2f12f515a362d6cc6d5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "d7b7e213934e59a68a2b1acdaf56134e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ef640e4f23ed892c3b5043404e7f7021",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cfb4845c5c11e28caaa8417bdae43c05",
"/": "cfb4845c5c11e28caaa8417bdae43c05",
"main.dart.js": "1263c99017386a0cff97996b1904477f",
"manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
