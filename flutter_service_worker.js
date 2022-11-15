'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ec5bb896fa5acb2a5f7a04a566cc7f69",
"index.html": "0496e0ea071b3075584bd1c4a1d81ef2",
"/": "0496e0ea071b3075584bd1c4a1d81ef2",
"main.dart.js": "c761f12518c0635006459baaa4af7a87",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "0c40822a531d067e573f2ba659dbdc97",
"icons/Icon-192.png": "b9e83f7506fc1a346d37ace77a910742",
"icons/Icon-maskable-192.png": "b9e83f7506fc1a346d37ace77a910742",
"icons/Icon-maskable-512.png": "e19f42c4993ea73963cc905779a8b639",
"icons/Icon-512.png": "e19f42c4993ea73963cc905779a8b639",
"manifest.json": "0288b8f4581a1f633d468018b4d931a7",
"assets/AssetManifest.json": "d1c50e3390ca14f6c960a5bcef1abd70",
"assets/NOTICES": "c146d2953ffd4abd2eaab8c845eeb49b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "cf06e6b180af965645fe030b2ab94c99",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/great_football_icon.png": "d0ad0f2b20edc0d6a6e79ee8a2c8355c",
"assets/assets/images/great_football_icon_round.png": "30039b74cea401e809caf7c8d9296ef4",
"assets/assets/images/football_icon_round.png": "4b8f3f35e4003f6c3de0035f9e30448d",
"assets/assets/images/grey_placeholder.png": "e798bcd38175914a9b0bd2fba70e33b7",
"assets/assets/images/football_icon.png": "7cdfb72f2239ed6af2c642077a72e684",
"assets/assets/images/grey_placeholder_old.png": "795de63284fc755511fe82abc8bf7c44",
"assets/assets/json/country_teams.json": "be21802f03f2621429631014e83184f8",
"assets/assets/json/country_leagues_info.json": "6660042232cc653aa62c03c5922d9ab2",
"assets/assets/json/bundesliga_top_assists.json": "21c00cb2f7b236fbbe5cca1b938eb4a1",
"assets/assets/json/fixtures_lineups.json": "0ec84498f3f4548b70ee10d67c43fece",
"assets/assets/json/league_teams_info.json": "e4eb6cf8bd3cd765d5f7dd86c24e162c",
"assets/assets/json/bayern_bundesliga_statistics.json": "e1345c800b0c42bedc9447505bf960fd",
"assets/assets/json/laliga_standings.json": "4b5210d942e6536a7a505170bc5df19e",
"assets/assets/json/uefa_champions_league_standings.json": "ee3afe4d48c74ea756e43f2b77a72577",
"assets/assets/json/fixtures_statistics.json": "d2c9a8d6cbe16074288aa99eea0aeb5b",
"assets/assets/json/bayern_transfers.json": "eade07597d24960c24dedc75fbff07b5",
"assets/assets/json/bayern_players_squad.json": "549785a732c188ac1f17bafcd89136f5",
"assets/assets/json/bundesliga_fixtures.json": "0b79a5a25922c5905e05933fe6226aa9",
"assets/assets/json/league_standings.json": "491a4b7206e3516981cff2b0ada6658e",
"assets/assets/json/bundesliga_top_yellow_cards.json": "49ceccc7798700b35766cebcf7a7418d",
"assets/assets/json/serie_a_standings.json": "b65915684dca1e73785dd4581a863deb",
"assets/assets/json/bayern_bundesliga_last_3_fixtures.json": "62b92c34268d3a2be914615e78dc7012",
"assets/assets/json/player_statistics.json": "7a6f61f1a8407d901c2ba58668a8f369",
"assets/assets/json/bundesliga_standings.json": "471b26fc01531134154087b20152189a",
"assets/assets/json/bundesliga_top_scorers.json": "c443f65e123437d8d7b07b5cffa98a91",
"assets/assets/json/bundesliga_teams.json": "5d07b3e63fc36621fab7a92b419ec10a",
"assets/assets/json/countries.json": "d980235819a629065af81eb259ccfbce",
"assets/assets/json/single_fixture.json": "8b946f3ea3c95779caf6d1d592b10fda",
"assets/assets/json/ligue_1_standings.json": "1dd7471f89dbb27d5ec460dca6e05653",
"assets/assets/json/world_cup_teams.json": "f55a80642262de734c6af865f3c3697e",
"assets/assets/json/premier_league_standings.json": "3940a7613b7d31869c10b81110124127",
"assets/assets/json/bayern_leagues.json": "ae52d4161beca43ec35710bfff1b2881",
"assets/assets/json/bundesliga_next_50_fixtures.json": "2ac429e7106a5087be18eccfb77b3bc1",
"assets/assets/json/bundesliga_last_50_fixtures.json": "e4ceb6f7d2fe175045c02416c26e52c8",
"assets/assets/json/bundesliga_top_red_cards.json": "1ea9e9cc1c69ac37a235df5ff5fa134b",
"assets/assets/json/bayern_bundesliga_fixtures.json": "f7053ef57513c9a5c1884f9e2ca5c3da",
"assets/assets/json/germany_leagues.json": "23ec74d0f990c1d34ae284f924858282",
"assets/assets/json/player_transfers.json": "7222201fd9027e8d09b47375e4b798f4",
"assets/assets/json/bayern_player_statistics.json": "75750299c70e11ca9ff1d07b35070135",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
