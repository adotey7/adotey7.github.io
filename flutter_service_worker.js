'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3c7a496467bef7ca04251256b2fe7be6",
".git/config": "213a4b4b44586afac8df541bf047cf97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2fb4caa11072f65a1162750683b968b9",
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
".git/index": "fd66c78ac4482f4b6a39d5a999826703",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9c7708fd08d904d6d358017558db3aff",
".git/logs/refs/heads/main": "77fccd6ca20e4bd4415a4a3db73ee07b",
".git/logs/refs/remotes/origin/main": "f9fe72b1051108860256922ebe1ca32b",
".git/objects/0e/7dac5986268aba78014cc9889442404092e501": "bae7ccc576e423aae63d94d7bc71ab2e",
".git/objects/0e/ca61c055b9b8a7768c03ce42a4bd873368b887": "e04f45609570259558a700735d5f451a",
".git/objects/30/c6901fa45a4083d97b4bfc9963d7e11671badc": "09118059d3dd35e3e3cf738092c92202",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/679e123520a44683517c86d7e48ad083132268": "f25843406b8207c6084c167ead8a6cab",
".git/objects/37/806cfb2544dbaec21fbccc85e87f2bae83e09b": "bd465888650e5daf40c99b63c8ef8249",
".git/objects/3a/5d6723e2b7a4ce23bd5290c650d78c518870e1": "01c18b7a61a6642b82fb72f729226ad9",
".git/objects/3d/aef288566c387e7a3f6e3c500fac4503e74282": "ee64a9bec8df7cd7317b4135262d5eda",
".git/objects/3e/d2447a3bfca9c1a7975fc3ef83aa1740ae5980": "b932db61e17cc89408b187732d2c5e02",
".git/objects/42/422f3fb991b057a392890c622d9b1ee1561093": "14ce1de3c27367de87eda9e16c80066c",
".git/objects/43/da14d84ecb949ca5f5e8ecca3a514aa7fe1c7d": "d970b955bbe605c4f81533fde279992d",
".git/objects/46/f7e63d96d0aa3a4d71256b4a4e8612faedbd27": "7f9242959222cf03386937ee305d7e9b",
".git/objects/49/efab434f172cde71a64a495403c1710c5b9e6f": "cb41403b16ab502682046d9bc3f94214",
".git/objects/4c/001930f08a8975fd2b0703d04d11a79083cef9": "7d4e55b7bbdc5ce14abbd9b1d75fab9d",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/58/68e718668fb200304713909b32c0376bb08df2": "f00ba11b53fdfd35f31ea7e2f31c0931",
".git/objects/5a/12e8338bd72fee56ca22c45b6b0ca411d63090": "a203876134aa79977b115dfc9159f3dc",
".git/objects/5f/9de066084db8f01e35cfc5dca4dc212d22ceaa": "33b194ef0b3e5a2089bfd98de8b1e16a",
".git/objects/62/7b0ef1dc8c0978016194ccaf1035858d90501b": "19f9edfd0bbdb7621cf07309783db132",
".git/objects/65/37410217f0036dddceaff5c1f7e1dc01a94a4a": "f4660145c73f5a6f1e9ca51ec11a73d2",
".git/objects/69/520d66554819c867c013999ee50f39073d224f": "28f7cf028a428c41a2b388a9c2377628",
".git/objects/74/fc5a5f2f43579beee0491f844d2d78fa1e1fa1": "a82142b9fa5025522df95b7f1760e970",
".git/objects/7a/573603eeecb8a450b778eb12624f0600284e07": "32b4b8336359337ad6f000994f8e184f",
".git/objects/86/d12e519746b8ca9c17527d2a20f5d255326198": "fb76494f6cc2f915faf95d560ec4620f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/0d0d8cc26a4c92ae8b01f180df373d0f14caf6": "10b22e9099064a8c49b162a7162952d6",
".git/objects/98/1258f212602e619a7051495141bdb0a7290b40": "b7d3646326c1863065bd0939fa0d1ee9",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/ac/0f908b9c9c73da558b45d65cc5c6094874d3e8": "36f70284c45d845ee774c46e7288afe5",
".git/objects/b0/fb6e2d25e61b0a36758cef70d7b352e2ec0ae4": "4ce23e55ab1c5f21c7ec6ab18799cf79",
".git/objects/b2/e9ca3889b14aa90eb0bac2edf66debc935e1e3": "bde617bdbf615aef86bb5a985de1a298",
".git/objects/b2/fc68d65d53ddd83eb4e4c616bd134cededf42b": "b70854c0dc4d97964a32ffe0c9a035cf",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/e230fb3dda09f2cf56457a27591190acd9a83c": "ae0764ba6f3afdc69ee35cf6a06085b8",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c4/705ac006ca595a1ed55681377f0bc42ade4d4f": "4d2d4a00e148a2515207b62a9494c156",
".git/objects/c8/9991b6ee6ceea3c17c936357102abc469104bb": "fb332fd17912d9f686473a098ce9c901",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/35bc4a6f5c7c689dddff55bf3e3df86b03d2e6": "a8f8eebb7078e9cbf5d782d825ef11a0",
".git/objects/dd/b3e583571871f3a395b3bf8a74465a97f5a43f": "8294323e527695777922f8aab68c6abf",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/307e72c5e7bced5d36c776d0986bf71b605f15": "e493f8bfd12abe75c70dc4782e5beae0",
".git/objects/e9/7d694bc58978820769b1c53721dfe055975c21": "87d886ff30119b644dfaf2dd1d5dd822",
".git/objects/ee/e411a6c9f0c371045fab3885dcc425123ede47": "a0e60363b2993eafd601ab7a660a5a22",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "72355553df93fe7c834113bc80dbb6e5",
".git/refs/remotes/origin/main": "72355553df93fe7c834113bc80dbb6e5",
"assets/AssetManifest.bin": "e3924ca7d57d454e02c7ae93a953977f",
"assets/AssetManifest.json": "e37e53659fb1dcf36c8e814b1459a961",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Light.ttf": "881e150ab929e26d1f812c4342c15a7c",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/cloud.png": "5146f9c1d61c2fcb1d6966839f953fb7",
"assets/assets/images/clouds.png": "a1cb48a64eeb44046ffc25f9be1e4a8a",
"assets/assets/images/error.json": "c0f2dd414a4b672cda45f4a382550130",
"assets/assets/images/rainy.png": "b327616e9c76ea8fdb1da483e82b6e8d",
"assets/assets/images/snowflake.png": "bd967a244eda38cad88f04b5da932417",
"assets/assets/images/sun.png": "476249666a5d0fd39d4239627ec8fb27",
"assets/assets/images/thunderstorm.png": "89817a1f6abae5ee34d8e41166bc6db9",
"assets/assets/images/wind.png": "864b831dc16122cbbb0d59b58ae71531",
"assets/FontManifest.json": "df9f81965920214cc9bed384b3b77712",
"assets/fonts/MaterialIcons-Regular.otf": "25ff1d0056f27195c9bd42d5891f884c",
"assets/NOTICES": "d319dc8032bd8aa52e6e2b16ac5b7c4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"cloudy-day.png": "ef112ee1e360ac68fe114d2ce4958344",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"index.html": "81b04232ec760f6082850bd699fb4f08",
"/": "81b04232ec760f6082850bd699fb4f08",
"main.dart.js": "860b0cf30457517349e745f216d25eff",
"manifest.json": "7c6e3de4dcf15d457dad19adbcf47113",
"playstore.png": "14e347f31d277cba12bd66b8eb7fba26",
"version.json": "23e9d24d5b36279cbfede1d4ebb467c0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
