const params = new URLSearchParams(window.location.search);

const values = {
  serverName: params.get("servername") || params.get("server") || "Loading server",
  mapName: params.get("mapname") || params.get("map") || "...",
  steamId: params.get("steamid") || "..."
};

document.getElementById("server-name").textContent = values.serverName;
document.getElementById("map-name").textContent = values.mapName;
document.getElementById("steam-id").textContent = values.steamId;
