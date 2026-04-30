Garry's Mod loading screen

1. Upload all files from this folder to your web hosting:
   index.html
   style.css
   script.js
   assets/background.webm

2. Open the uploaded index.html in a browser and copy its public URL.
   Example:
   https://example.com/loading/index.html

3. Add this line to garrysmod/cfg/server.cfg:
   sv_loadingurl "https://example.com/loading/index.html"

4. Restart the server or change the map.

Important:
- The URL must be available through http:// or https://.
- A local file path or FTP path will not work for players.
- If the page is served through HTTPS, all files on the page must also load through HTTPS.
