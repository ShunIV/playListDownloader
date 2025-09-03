import { spawn } from "child_process";
import os from 'os';
import path from 'path';


const playlistUrl = "https://youtube.com/playlist?list=PL_nUhPfMOdacbmxUn0m8bZf0Gu6SIsTgg";

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
