# Publishing and company-domain setup

## 1. Verify the public content

- Match **Neuralytics Tech (Private) Limited** exactly to the SECP certificate. The website retains the legal company name but omits location and incorporation-year references from its public copy. Keep accurate legal details in Apple enrollment and other required business records.
- Verify delivery to **neuralyticstech@gmail.com**. It is the currently supplied contact. Activate a domain mailbox such as `contact@neuralyticstech.com`, test sending and receiving, then replace the address in all three HTML files.
- Review the website privacy notice against actual correspondence retention and hosting practices. This is a draft for company review, not a substitute for product-specific privacy/legal work.
- The public site is a company overview. Bittensor appears as a focus within decentralized AI and blockchain development; there is no dedicated app showcase or trading description.

## 2. Publish in the staging repository

The requested repository is `asifehmad/NeuralyticsTech`. Keep your source files at its root and the public files inside `site/`.

1. Place the finished files on the repository's `main` branch.
2. Open **Settings → Pages** and select **GitHub Actions** as the source. Pages availability depends on the repository visibility and GitHub plan.
3. Run **Actions → Deploy company website → Run workflow** on `main`, or push a change to `main` after enabling Pages.
4. Wait for the deployment job to succeed. Use the deployment URL reported by GitHub; do not assume a successful source push means the site is live.
5. Check home, privacy, all navigation links, and the mail links at the deployed address.

The workflow uploads only `site/`. Documentation and repository metadata are not part of the website artifact. Do not select branch publishing of the root: that would publish the wrong directory.

## 3. Move to the company GitHub account

You can transfer the repository if appropriate, or copy the files into a repository owned by the company. If the exact account/organization handle is `NeuralyticsTech`, a repository named `NeuralyticsTech.github.io` can serve as its account site. A differently named repository also works with a custom domain.

Enable GitHub Actions as the Pages source in the destination repository and run the same workflow. Paths are relative, so no code rewrite is required for a repository path or domain root. Moving files does not move Pages settings or enable Actions in the new repository automatically.

Attach the company domain to the final destination only. If it was previously attached elsewhere, remove the old Pages custom-domain setting before configuring the destination. After the final site works, disable the staging Pages deployment if it is no longer needed to avoid two public company sites.

## 4. Connect neuralyticstech.com

Use the current [GitHub Pages custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) when making DNS changes.

1. Verify domain ownership in the company account/organization's Pages settings using GitHub's supplied TXT record. Keep the verification record in DNS.
2. Set `neuralyticstech.com` as the custom domain in the destination repository's Pages settings.
3. Configure apex records using GitHub's current published Pages IP addresses, or an ALIAS/ANAME if the DNS provider supports that configuration. Use the official documentation for the values rather than copying stale IPs.
4. Set the `www` CNAME to the actual company account's `<handle>.github.io` hostname, without a repository path. GitHub documents how the apex and `www` variants redirect.
5. Wait for DNS validation and certificate provisioning, then enable **Enforce HTTPS**.
6. Check the apex, `www`, privacy page, internal links, and HTTPS redirects. Check for restrictive CAA records if certificate issuance fails.

The Actions workflow does not require a `CNAME` source file; configure the custom domain in Pages settings. Avoid wildcard DNS records for Pages. Preserve existing MX, SPF, DKIM, DMARC, and unrelated TXT records when changing website DNS.

## 5. Set up company email

GitHub Pages hosts the website, not email. Use a separate email provider for `neuralyticstech.com`. Configure its MX records and recommended SPF, DKIM, and DMARC records. A mailbox or tested alias can serve `contact@`, `info@`, and later `support@`; confirm outbound replies also use your company domain.

Once operational, replace `neuralyticstech@gmail.com` across `site/` and redeploy. Keep a working address throughout the transition. Use a company-domain work email during Apple organization enrollment.

## 6. Ongoing ownership

Keep the domain, GitHub organization, email administration, and developer memberships under company-controlled accounts with two-factor authentication and recovery arrangements. Grant collaborators appropriate access without sharing an Apple Account. Agree ownership or assignment of code, artwork, and other project IP when bringing work under the company.
