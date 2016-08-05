# 📱 Progressive Web App (PWA) Technology Workshop
## 🛅 An Exemplary Travel App

An exemplary Progressive Web App ([PWA](https://developers.google.com/web/progressive-web-apps/))
that showcases **amazing PWA features** like [offline support](https://developers.google.com/web/fundamentals/getting-started/your-first-offline-web-app/?hl=en),
[push notifications](https://developers.google.com/web/fundamentals/getting-started/push-notifications/?hl=en),
and [add to homescreen](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android),
all from the comfort of your ```localhost```, because there is no place like ```127.0.0.1```.

![Screenshot](/screenshot.png?raw=true "Screenshot")

## 🏃 Installation and Getting Started

Check out (```git clone```) the project as usual, then, on the command line, navigate to the folder ```/step-0-static-app```
and run a local Web server there. *Pro-tip:* add an alias to your ```~/.bash_profile``` file like so: ```alias server='python -m SimpleHTTPServer 8000'```.
This allows you to just start the app with a simple ```server``` command right from the folder.

Finally, on your Web browser, navigate to [http://localhost:8000](http://localhost:8000) and play with the app,
ideally with the Chrome Developer Tools console open, so you can see the many log messages.
Repeat the same for steps 1–3. From step to step, pay particular attention to changes in the ```main.js``` and ```service-workers.js``` files,
and, for step 3, the ```manifest.json``` file. On a Mac, you can use Xcode's [FileMerge](https://developer.apple.com/xcode/features/) program
to compare file differences from step to step.

## 🐛 Debugging

Service Workers can be a bit nasty to debug, so be sure to read the
[Debugging Progressive Web Apps](https://developers.google.com/web/tools/chrome-devtools/debug/progressive-web-apps/?hl=en) guide;
your best friends are [clear storage](https://developers.google.com/web/tools/chrome-devtools/debug/progressive-web-apps/?hl=en#clear-storage),
Chrome's [incognito mode](https://support.google.com/chrome/answer/95464?hl=en) (except for steps 2 and 3),
and the occasional closing and reopening the tab… The app simulates slow loading, so be sure to also play with
[network throttling](https://developers.google.com/web/tools/chrome-devtools/profile/network-performance/network-conditions?hl=en),
and obviously, going entirely offline.

## 📂 Project Organization

The application is organized in four folders:

- **Step 0:** This step contains the entirely static baseline version, because you got to start from somewhere.
- **Step 1:** This step brings the first Service Worker integration with support for [static app shell caching](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/step-04?hl=en)
and [dynamic resource caching](https://developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/step-05?hl=en).
- **Step 2:** This step demonstrates the first push notification. The ```/step-2-push-notification``` folder
contains a simple bash script called ```send-notification.sh``` that you need to customize by adding your
[API key](https://developers.google.com/web/fundamentals/getting-started/push-notifications/step-04?hl=en).
Likewise, in the ```manifest.json```, you need to  change the ```"gcm_sender_id"``` for the one
from your [project](https://developers.google.com/web/fundamentals/getting-started/push-notifications/step-05?hl=en)
that you have created earlier. 
Finally, adapt the [subscription ID](https://developers.google.com/web/fundamentals/getting-started/push-notifications/step-07?hl=en)
in the bash script ```send-notification.sh``` for the one that the app logs to the console when you run it for the first time.
- **Step 3:** This step introduces the [add to homescreen](https://developers.google.com/web/updates/2015/03/increasing-engagement-with-app-install-banners-in-chrome-for-android) functionality.
You can simulate it on the desktop by opening the Chrome Developer Tools, navigating to the Application tab, and then on the Manifest section, clicking on the "Add to homescreen" link.

## 📄 License

Copyright 2016 Thomas Steiner (@tomac@google.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
