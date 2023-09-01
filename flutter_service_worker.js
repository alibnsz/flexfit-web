'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "28291812b0e539c515bbb51e0d1b5364",
"assets/AssetManifest.json": "d6c1e4ce1d1c70bae064ef2973b56cb1",
"assets/assets/account/camera.png": "7c95eb305eef4be66b9bf457c38381ee",
"assets/assets/account/cj.png": "3251e361ec8938c0baec0651a3e2a14e",
"assets/assets/account/feedback.png": "24a23cce5c41372cbd99ab779406518d",
"assets/assets/account/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/account/help.png": "41349b20dcade9a639847b531d507e3a",
"assets/assets/account/instagram.png": "0634a5babf36db50e415356b348e3f30",
"assets/assets/account/logout.png": "508c820b89f3f5d82a7274f10020cc5d",
"assets/assets/account/me.png": "45000b334be5509e1a9d4ffef88b5b68",
"assets/assets/account/notification.png": "569782bf061d9de98c2eb5f72ac29d93",
"assets/assets/account/settings.png": "56d72ea8c895e4b2dcdffc0b6f492088",
"assets/assets/account/share.png": "73eeb137f1f9139456688be26b1a01af",
"assets/assets/account/twitter.png": "c228a51f52d262f60b78c320bb8fb782",
"assets/assets/exerciseNavBar/Calories.png": "303ff836c7acbe6db4fa1d5513a08653",
"assets/assets/exerciseNavBar/hamburger.png": "cdee21dfe2a7940043da11af0562fd60",
"assets/assets/exerciseNavBar/home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/exerciseNavBar/stopwatch.png": "10f6a85ea2837cbb1a7c0c6bd3153668",
"assets/assets/fitness/abs.jpg": "f2331dc1030da1371ee363dd9d92d444",
"assets/assets/fitness/anaEkran.jpg": "7ed8143be4e43d3dbedda2600c2f7e2a",
"assets/assets/fitness/arms.jpg": "49f0d9b91bd40f128422becd79a92366",
"assets/assets/fitness/back.jpg": "f39531f8cc24ea2541b6b0c7bc07ee91",
"assets/assets/fitness/bmi.jpg": "dc5efde565304164fc10ebd7b9e706f8",
"assets/assets/fitness/bmi.png": "9754326caf4354e27e3250a2a0353986",
"assets/assets/fitness/chest.jpg": "ef563f3cf59617b3e866b3f671a19128",
"assets/assets/fitness/dumbell.png": "2c2d495ac3f95284b20014f7a9cad5d1",
"assets/assets/fitness/fitgirl.jpg": "dd08e9f671e464a35087f9e865e66743",
"assets/assets/fitness/fruit.jpg": "d0300e02185a8dcaa7bf25de6f207277",
"assets/assets/fitness/intro.jpg": "f2f94226044c469fd21f2d21debef1eb",
"assets/assets/fitness/legs.jpg": "f1a4c89e90603a3d96f97e81c6865010",
"assets/assets/fitness/shoulders.jpg": "985854f9efe4dff678f6ec3eadba8df4",
"assets/assets/fitness/spor.jpg": "68810d5786f5c4beaf52640346a7ba26",
"assets/assets/fonts/BebasNeue-Regular.ttf": "895af0d79aebb4ef2279d7f691dc8b92",
"assets/assets/fonts/BrunoAce-Regular.ttf": "62f62c8025fd7e88f0caea7235b950a1",
"assets/assets/fonts/Bungee-Regular.ttf": "5eae7e3db643f2ee5bf10a658977fbe6",
"assets/assets/fonts/FugazOne-Regular.ttf": "85bbe8170968523579ff2d8a53675677",
"assets/assets/login/apple.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/login/google.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/login/logo.png": "ff5a10e4d6f61bb3bbe81f0c31a5c179",
"assets/assets/steps/distance.png": "ef4a894bea18b69bf8fc50169af31d7a",
"assets/assets/steps/fire.png": "e690edd6434e1ed3175aacc429b98a66",
"assets/assets/steps/flame.png": "965fefb3628d68d757b3cdff22f42d7e",
"assets/assets/steps/heart.png": "96dc99268fab5b84f9acf4b104dd9301",
"assets/assets/steps/littlewater.png": "4f529a5ab85b0a67209385002eb2cce2",
"assets/assets/steps/moon.png": "62be9c00d9b41d1458ac63d2f2633fa4",
"assets/assets/steps/play.png": "baa0c8a2eac1addbc1edd2d70ad5eb8a",
"assets/assets/steps/refresh.png": "fdfa81ce73b6b729da5f678c65c3e3b8",
"assets/assets/steps/running.png": "16410b1cd78c2a238935695f3baf412b",
"assets/assets/steps/stop.png": "066172f527890809b8c9d1e32c64056e",
"assets/assets/steps/stopwatch.png": "450ceaff6974ef5e66b03894d5835f39",
"assets/assets/steps/womans.png": "9adb778ebea8cfe61b5260c9c8841d59",
"assets/assets/tabbar/bmi.png": "e7d57df72d3dcce6f006e1c30059c8a9",
"assets/assets/tabbar/gym.png": "282254d5cd355887d0fa54a4ce16b331",
"assets/FontManifest.json": "d3667b6aba9190b8210228617279ba0e",
"assets/fonts/MaterialIcons-Regular.otf": "a4317b6856ba43cfc9d31d3efa9565cb",
"assets/NOTICES": "4652736ae61a0c41b3d6150873d2a988",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "840c28c2b5048baff3b76e86d9280855",
"/": "840c28c2b5048baff3b76e86d9280855",
"main.dart.js": "3ca91afc1dd614a05ffbf8982da7730d",
"manifest.json": "14d1dc8ac39dd6ed81e9cd98a9f0e775",
"version.json": "6eea04bcd39968c6b3c5e1d2087c2a10"};
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
