# For Daraemoon ♡

A soft pink, interactive birthday website for Jinn Darae — lovingly nicknamed Daraemoon. It's a plain static site, so there's no build step or dependencies to install.

## Preview it locally

Open `index.html` in a browser, or serve the folder with any static file server. For example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add your own photos and video

Create an `images` folder next to `index.html`, then add:

- `memory-1.jpg`
- `memory-2.jpg`
- `memory-3.mp4` (short video)
- `memory-4.jpg`
- `memory-5.jpg`
- `memory-6.jpg`

The gallery already points to those names. You can change the captions and filenames in `index.html`. Use photos and clips you have permission to share, and remember that anyone who can visit a public GitHub Pages site can view its files. Don't commit private media unless you're comfortable with it being public.

## Publish with GitHub Pages

In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save. GitHub Pages will provide the published URL once deployment finishes.

The envelope, memory viewer, 18 tap-to-reveal notes, compliment button, and birthday wish button work without any extra libraries. The typography loads from Google Fonts when online and falls back to system fonts otherwise.
