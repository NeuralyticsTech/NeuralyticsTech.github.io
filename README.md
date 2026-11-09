# Neuralytics Tech

The company website for **Neuralytics Tech (Private) Limited**. A compact, responsive one-page company overview covering applied AI, software development, and decentralized AI and blockchain development focused on Bittensor. A separate privacy notice supports the company page.

## Run locally

No build step or package installation is required. From this repository:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory site
```

Open port 8000 in your local browser. Stop the server with Ctrl+C. The logo, typography, CSS, and JavaScript are local; the site does not require external fonts or services. JavaScript updates the footer year and enables the optional copy-email button.

## Files

- `site/index.html`: company introduction, four areas of expertise, and contact details.
- `site/privacy.html`: website-only privacy notice.
- `site/404.html`: custom missing-page response for GitHub Pages.
- `site/assets/`: styles, small script, and the company logo used in navigation and the favicon.
- `.github/workflows/pages.yml`: deploys only `site/` to GitHub Pages.
- `docs/LAUNCH.md`: publishing, company-domain DNS, and moving repositories.
- `docs/APPLE-ENROLLMENT.md`: organization enrollment and wallet considerations.

The current working contact is **neuralyticstech@gmail.com**, supplied by the company owner. Change all HTML occurrences after a company-domain mailbox is active. No form collects or stores visitor information.

The contact section offers a mail-app link, a Gmail compose link, and a copy-address button where the browser supports clipboard access. Gmail opens a draft; it does not send a message. Home-page company-name links explicitly return to the top, and Contact us remains visible on mobile.

The logo PNG is a web rendition generated from the owner's supplied inline image. The original upload was not available as a downloadable file in the workspace. Replace `site/assets/logo.png` with the original artwork if exact pixel fidelity is required; all logo placements reference this file.

## Publish

In the hosting repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**. Push these files to `main`, or manually run **Deploy company website** from Actions. A workflow file alone does not enable Pages. The workflow uses GitHub's official Pages actions and deploys the contents of `site/` without a framework build.

This repository is the requested staging home: `asifehmad/NeuralyticsTech`. The same files can be moved to the company account later. Relative internal URLs support both a repository Pages path and a custom domain. No `CNAME` is committed so this staging repository does not claim your company domain.

Follow [the launch guide](docs/LAUNCH.md) before attaching `neuralyticstech.com` and [the enrollment guide](docs/APPLE-ENROLLMENT.md) before applying to Apple.

## Editing

Edit HTML for copy and `site/assets/styles.css` for appearance. The public copy emphasizes capabilities and services, without location or incorporation-year references. The legal company name is retained. Company identity and team expertise are based on the owner's description; no registration number, address, product release date, partnership, or performance result has been invented.

The public site describes company capabilities without a dedicated app showcase, trading copy, or large decorative graphics. Keep service descriptions accurate. Apple organization enrollment still requires Apple's verification of the legal entity and other enrollment requirements; the website alone does not establish approval.

## Validation

Serve `site/` and check home, privacy, navigation anchors, mail links, mobile widths, and keyboard focus. Also test under a repository subpath before moving hosts. Run `git diff --check` before committing. No application dependencies or generated bundles are needed.
