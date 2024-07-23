---
title: SSL and Encryption
excerpt: >
  We have customers that prefer do on-premises and safeguard it themselves. For those needing cloud services we offer some options.
icon: flaticon-web-development
layout: layouts/layout-security.njk
permalink: /security/ssl-and-encryption/
eleventyNavigation:
  key: SSL and Encryption
  parent: Security
  order: 5
category: "security"
---

We have customers that prefer do on-premises and safeguard it themselves. For those needing cloud services we offer the options below.

- AES 256 Bit Encryption.
- Optional Encryption key. Encrypt usernames and passwords with this key. Uploaded files will be encrypted as well using this same key. The default key will encrypt data if you do not have an optional key.
- Built-in 2 Factor Authentication
- Encryption at rest
- Our web servers are not open to the Internet. Our web servers are only accessible by the CloudFlare CDN (Content Delivery Network). You transparently connect to CloudFlare, and they present you with your data. Also, note that CloudFlare handles 10% of the world's web traffic and is very secure.
