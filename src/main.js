import { spawn } from "child_process";
import os from 'os';
import path from 'path';


const playlistUrl = process.argv[2];

if (!playlistUrl) {
  console.error(" Please provide a playlist URL. Example:");
  console.error('   node download.js "https://youtube.com/playlist?list=ID"');
  process.exit(1);
}

if (!playlistUrl.includes("youtube") || !playlistUrl.includes("list")) {
  console.error("Invalid URL: the tool work only with youtube links");
  console.error(" Please provide a valid YouTube playlist URL or video URL from that playlist");
  process.exit(1);
}

if (playlistUrl.includes("watch") && !playlistUrl.includes("list=")) {
  const url = new URL(playlistUrl);
  const listId = url.searchParams.get("list");
  if (!listId) {
    console.error("No playlist ID found in the URL.");
    process.exit(1);
  }
  console.log("Extracted playlist ID:", listId);
  playlistUrl = `https://youtube.com/playlist?list=${listId}`;
}

const downloadsDir = path.join(os.homedir(), "desktop", "playlist");

const ytDlp = spawn("py", [
  "-m", "yt_dlp",
  "-x", "--audio-format", "mp3",
  "-o", path.join(downloadsDir, "%(playlist_title)s", "%(title)s.%(ext)s"),
  "--progress-template", "download:[%(progress._percent_str)s] %(info.title)s",
  playlistUrl
]);


ytDlp.stdout.on("data", (data) => {
  console.log(data.toString());
});

ytDlp.stderr.on("data", (data) => {
  console.error("ERR:", data.toString());
});

ytDlp.on("close", (code) => {
  console.log(`Process exited with code ${code}`);
});
