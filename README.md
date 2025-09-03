# 📥 YouTube Playlist to MP3 Downloader

A simple Node.js tool that uses [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) to download entire YouTube playlists and convert each video to **MP3**.
Files are saved on your **Desktop** in a structured folder format:

```
Desktop/
 └── playlist/
      └── <Playlist Name>/
           ├── song1.mp3
           ├── song2.mp3
           └── ...
```

---

## 🚀 Features

* Downloads all videos from a YouTube playlist
* Converts audio to **MP3** (requires `ffmpeg`)
* Creates a folder for each playlist on your Desktop
* Shows progress and filenames in real time
* Accepts either a **playlist URL** or a **video URL from a playlist**

---

## ⚙️ Requirements

* [Node.js](https://nodejs.org/) (v16+ recommended)
* [Python](https://www.python.org/) (to run `yt-dlp`)
* [`yt-dlp`](https://github.com/yt-dlp/yt-dlp):

  ```bash
  pip install -U yt-dlp
  ```
* [`ffmpeg`](https://ffmpeg.org/download.html):

  * Windows: Download and add `ffmpeg/bin` to PATH
  * Linux: `sudo apt install ffmpeg`
  * macOS: `brew install ffmpeg`

---

## 📂 Setup

1. Clone or download this repository
2. Install dependencies:

   ```bash
   npm install
   ```
3. (Optional) Add `"type": "module"` to your `package.json` if not already set

---

## ▶️ Usage

Run the script from your project folder:

```bash
node ./src/main.js "https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
```

Or pass a **video link that belongs to a playlist**:

```bash
node ./src/main.js "https://www.youtube.com/watch?v=VIDEO_ID&list=YOUR_PLAYLIST_ID"
```

⚠️ Make sure you wrap the URL in **quotes** (`"`) when using PowerShell, because `&` is a special character.

---

## 📊 Example Output

```text
download:[ 45.3%] My Favorite Song
download:[100.0%] My Favorite Song
download:[ 23.1%] Another Song
...
✅ Finished with exit code 0
```

Resulting files:

```
Desktop/playlist/My Playlist Name/My Favorite Song.mp3
Desktop/playlist/My Playlist Name/Another Song.mp3
```

---

## ⚠️ Disclaimer

This project is for **personal use only**.
Downloading YouTube content may violate YouTube’s Terms of Service. Please make sure you only download content you have rights to.
