'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "25a9b838e698aefb41e1a09462c6393b",
"assets/FontManifest.json": "bb39dbada7551ed56998d4d7dd6169a4",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Roboto/Roboto-Light.ttf": "6090d256d88dcd7f0244eaa4a3eafbba",
"assets/fonts/Roboto/Roboto-Regular.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts%255CPoppins%255CPoppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts%255CPoppins%255CPoppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts%255CPoppins%255CPoppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/images/fpro.png": "d36259478ea5b6808206ea33c7fc6e93",
"assets/images/gh.png": "b69b6407e437305ff3444c8dbfe55fdf",
"assets/images/github.png": "2d067d725a8c885ab9eef81ea820ef62",
"assets/images/greenhouse.png": "54598e84ac3dc9c3609abcd408b91008",
"assets/images/greenhouse2.png": "0ab49518db19f2d03ac5abff9cc2a695",
"assets/images/linkedin.png": "137b408eded7bb29d454d5f9f23937c0",
"assets/images/memo.png": "b82d044b5825810fcf15b190ba6f167b",
"assets/images/pro1.png": "b9d1480429e6efc1868f74f696ae5bbe",
"assets/images/pro2.png": "0bb71c2785be4fd511af3e98f4cce74e",
"assets/images/pro3.png": "9dab6626663ff35647c38787782f603b",
"assets/images/pro4.png": "e67d2df15dd3d29c0f6d88748f368b23",
"assets/images/pro5.png": "d8bc6df6f23fcdcd173ab9973a5f1941",
"assets/images/pro6.png": "9e1609ba0a95edb49585ca22480cc927",
"assets/images/raghad.png": "27f4872dfeef601bf69807de6df954f9",
"assets/images/raghad2.png": "1206cb2ad26e0e0bef282dd1cdc6e8d8",
"assets/images/ralmestadi.png": "2f3623275a7dee67144c6444a5883319",
"assets/images/skills.png": "0fbcf887c5575523be0f1ee2d0f4f86c",
"assets/images/sof.png": "bd204a5b27a2daa85084c03033dc05b1",
"assets/images/st2.png": "35c402086cc0c210f8594cf0c45275f6",
"assets/images/st3.png": "65e9ae994fa101b996afb1c2589f20ba",
"assets/images/st4.png": "62f69bb7baf7da16ad543c10dc2fdf90",
"assets/images/Startup.png": "990d5ef451f748e26529cc85034bf15a",
"assets/images/Startup2.png": "82f49e582a5483feb4bf9522c6341189",
"assets/images/stf.png": "022f8fee57679d0f36c47bb4e2af0239",
"assets/images/stg.png": "e357d43c7e347d6702b2d91af6bd0419",
"assets/images/sveaction.png": "58e3f4d3b0fc32be08826e747fb93dcd",
"assets/images/vacation.png": "c1770b842cb7374168c291eeb2cabff3",
"assets/images/veaction.png": "c1770b842cb7374168c291eeb2cabff3",
"assets/images/weather.png": "088bd043bc1ca4018796338d9b2dcc23",
"assets/NOTICES": "824672ab525e772ea9ca5f4f2af5d352",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "fa5926534f2c7e716da0754abd97012b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4c9411889d6900625f938be4a5852363",
"/": "4c9411889d6900625f938be4a5852363",
"main.dart.js": "44b305350de12f3a573a1c67a4ed9fe5",
"manifest.json": "1e423b1aeee19b65664320a77f3d0df1",
"version.json": "a783bb40ba205f3b2336bfdc92ccc0cf"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
