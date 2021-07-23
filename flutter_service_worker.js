'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fdffcc2cb24a2257793c6fc23197ad2e",
"splash/img/light-2x.png": "8014577bf4ce073f9372d4b7eae11fd5",
"splash/img/light-3x.png": "5b00965371e48b2990442f63055e044b",
"splash/img/dark-3x.png": "5b00965371e48b2990442f63055e044b",
"splash/img/dark-2x.png": "8014577bf4ce073f9372d4b7eae11fd5",
"splash/img/dark-1x.png": "88d8ce29753a73babcc3e28fffbab6e5",
"splash/img/light-1x.png": "88d8ce29753a73babcc3e28fffbab6e5",
"splash/style.css": "767d97f63ce0066390d0f4098a5ec353",
"index.html": "6299c13468f90cc7befd3cc5177fab8b",
"/": "6299c13468f90cc7befd3cc5177fab8b",
"main.dart.js": "24bdf0874c6980176e402b816601c95e",
"favicon.png": "fcd616538b7d6ab629a8e06df1574c17",
"icons/favicon-16x16.png": "151c481dee425af0002691a264118685",
"icons/favicon.ico": "c7aa2dd99c15376326944d2f8b705627",
"icons/apple-icon.png": "635f356b4ab1d6860ba08caa063e4e96",
"icons/apple-icon-144x144.png": "74d8dea47606f903c0958d452ad360ae",
"icons/android-icon-192x192.png": "4f262b708e57b8ec95e488731626de1f",
"icons/apple-icon-precomposed.png": "635f356b4ab1d6860ba08caa063e4e96",
"icons/apple-icon-114x114.png": "0ef7c8b4b0f1c01454b97289dd626257",
"icons/ms-icon-310x310.png": "fe849e11d80e8082087772b7a44752c3",
"icons/Icon-192.png": "ba8b6c4182864165627ddfff07255cd3",
"icons/ms-icon-144x144.png": "bacf72b6d9756084c20f3aa85431b587",
"icons/apple-icon-57x57.png": "cb576d2b9299ed9e24e57565b90f4dd9",
"icons/apple-icon-152x152.png": "8bfc815370845d2016e9eb316edca0eb",
"icons/ms-icon-150x150.png": "48b9f390de67578372c6b277c2aaa40d",
"icons/android-icon-72x72.png": "27f2ce5ba64ab6da20ef659c3530ec6a",
"icons/android-icon-96x96.png": "185edb56c6f3c866fa4a013b0d2601c5",
"icons/android-icon-36x36.png": "f27b8d3ff00132a0fa930e0aa7c8bb7a",
"icons/apple-icon-180x180.png": "ca480174270e7f9337f55265eb62de89",
"icons/favicon-96x96.png": "c1adcd43c090def40c44da4c319ec78a",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/android-icon-48x48.png": "84d1ee7d0b0155b86c874082151db132",
"icons/apple-icon-76x76.png": "a3dbd8f73db1b8201908e89acd561972",
"icons/apple-icon-60x60.png": "bfac7f5dfdf65e964d93d31c1e457606",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "74d8dea47606f903c0958d452ad360ae",
"icons/apple-icon-72x72.png": "27f2ce5ba64ab6da20ef659c3530ec6a",
"icons/apple-icon-120x120.png": "e62f973357784867f9f83817005e4cb2",
"icons/Icon-512.png": "810069f66cc5c8eb28de5c9252661ce9",
"icons/favicon-32x32.png": "833cbd197f2e246fe72f98a200cf6db3",
"icons/ms-icon-70x70.png": "7b6743b8768176b5c3038601b595fda1",
"manifest.json": "3cb34649939e0c930060cea15f59fb4d",
"assets/AssetManifest.json": "a1e378fd08d74719c8335bdbb1dbf8af",
"assets/NOTICES": "d9e04bca165db7fd7fa772cce97a8ae9",
"assets/FontManifest.json": "9bdb557c6b2f6cedd7a1dc0d926f5bd0",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/projects/followme.png": "c6f0c2667b4d9d44113d4ff656ce7342",
"assets/assets/projects/autismB.png": "9360614e67c3b82841e7d19f7b0e5ff5",
"assets/assets/projects/sadaqa.jpg": "38db544605b08263401db93f5bc4020f",
"assets/assets/projects/followmeB.png": "8cae474696559067c0fef53f0a5753a7",
"assets/assets/projects/vts.png": "d34045c68bdd1cd50b25d39664be03f9",
"assets/assets/projects/tfteesh.png": "720110f50f043e784a6608b687ad4d2d",
"assets/assets/projects/saudi_ridersB.png": "25dfe2ea6eae5c5f9ed5e726b5199236",
"assets/assets/projects/vtsB.png": "c2d9fdecf75659042010f133762bf015",
"assets/assets/projects/covantiB.jpg": "02f3a088371d81074dfefd7e9d086400",
"assets/assets/projects/efhamnyB.png": "c0140db64d0006042f14c67bbc237d12",
"assets/assets/projects/emrB.png": "84ba81d522271263806021726333139a",
"assets/assets/projects/emr.png": "4d50d62d4d0c359632c6d94514768b2e",
"assets/assets/projects/covanti.png": "bae97174b751e212796a8295333ad170",
"assets/assets/projects/afkar.png": "6f1857e1708ac2acdade358043f679c7",
"assets/assets/projects/tfteeshB.png": "3e2b686186f19f36ebcd83c840dbf27b",
"assets/assets/projects/saudi_riders.jpg": "c4a8ae76d9352574f16daad2b8a6c7cf",
"assets/assets/projects/afkarB.png": "dfbf6a5c3a205c806ff2bab81c2536ed",
"assets/assets/projects/autism.png": "4273b66e52d1c80ecb81f72aeb9b3da9",
"assets/assets/projects/smartattendance.png": "76504a052cc3faa20dd4add924e3c9d8",
"assets/assets/projects/sadaqaB.png": "7e0dcc23e82805be21d07edd2b06b9fe",
"assets/assets/projects/efhamny.jpg": "7269bbb1334cdd40450f11982ab5c05b",
"assets/assets/projects/smartattendanceB.png": "b63ef65aac4d7831a80e5ce53582c3aa",
"assets/assets/splash.png": "f0c198654998162b4bb19d3b6139d77f",
"assets/assets/mob.png": "188030a0d39e7f600032bf17ac199baa",
"assets/assets/ic_launcher.jpg": "e3c6508cd5ff2f753b5f511e7739815a",
"assets/assets/ic_launcher.png": "34b9b11147fc46786aa17f0496631d72",
"assets/assets/icons/gdg.png": "2ae80b9bc3bec862757dabc7d42190ad",
"assets/assets/icons/instagram.png": "e5ba7dd76e0bb07430a191da66ab6010",
"assets/assets/icons/github.png": "6a314787b380f80290e7d79cf46b3d9a",
"assets/assets/icons/twitter.png": "228f2d6886fef4501c4fa53c83ba9e20",
"assets/assets/icons/bsu.png": "eef25ce2b122e888cb32ede64cee8f53",
"assets/assets/icons/linkedin.png": "e6b594c8afb515bcb271a5073d56c836",
"assets/assets/icons/facebook.png": "45b7edeb6baf0972ce30632be5efec47",
"assets/assets/web.jpg": "90b3689f76a89546a1e05ec4ebc7bbe1",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/1.png": "ab8910b5511c60873ba8e24b75284db6"
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
