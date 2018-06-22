---
layout: post
title:  "So you want to build a website for free?"
date:   2017-09-20 17:48:23
categories: [data_science]
tags: [internet]
---

My website (that you're currently reading this on) is completely free. Well not *completely free*, I still have to pay for the domain name, but other than that there are no hosting fees, and it's secure (`https`).  

I thought I'd make a *quick (and lazy)* tutorial on how to get a freely hosted and secure website. This post is going to be a stub, and I'm assuming you already have a blog hosted on Github pages as a starting point. If you don't already, there are a few good tutorials to get a Github pages blog up a running. Github kindly hosts these static pages. Here are a few tutorials to get started with Github pages and Jekyll blogs:

* [https://pages.github.com/](https://pages.github.com/)
* [https://github.com/barryclark/jekyll-now](https://github.com/barryclark/jekyll-now)


_____________________________

With your live Github pages jekyll blog in hand, let's connect that to your personal domain with `https`. I'll run through the following with my own website.   

In order to have a website that is hosted for free (by Github), but is still secured (by Cloudflare), we're going to have to redirect traffic. This starts with your domain provider (I'm using gandi.net). The web traffic will be redirected as follows, starting with someone typing in your domain into their browser.  

> your_domain.com -> Your domain provider (gandi.net) -> Cloudflare (secure) -> Github (free hosting)

<!--more-->

To make this happen, follow along:  

**Step 1: Buy a Domain**  

I bought [danielraff.com](danielraff.com) through [gandi.net](gandi.net). It cost \$201.50 CAD for 10 years.  

**Step 2: Add your domain to your Github Pages repo**  

My github pages repo is at: [https://github.com/raffrica/raffrica.github.io/](https://github.com/raffrica/raffrica.github.io/settings). Navigate to the settings tab, and scroll down to the Github Pages section. Here, add your domain name to the Custom Domain section. 

* Note: Alternatively you could just add a `CNAME` file to the root of your repo with your domain name inside of it. Whatever floats your boat. 


| Add your Domain to Github Pages|
| ---- | 
| ![](/assets/images/blog/website_building/github_1.png) |
| ![](/assets/images/blog/website_building/github_2.png) |

**Step 3: Make a Cloudflare account**  

Cloudflare has a free option for personal websites/blogs. 

After you've made your account, add a site (your domain).  

Modify your DNS records to match the following (except with you domain name instead of mine). Note: The IP addresses for Github pages are (192.30.252.153 and 192.30.252.154). Your equivalent to the IP address 217.70.184.38 will be whatever your domain name provider has supplied you with (Cloudflare should autopopulate this, but if it doesn't log in to your domain name provider - in my case Gandi.net)

![](/assets/images/blog/website_building/cloud_flare_1.png)

At the bottom of that image, you can see the Cloudflare nameservers that have been automatically generated. These are important. You'll need these when we go and look at your domain name provider.   

Now, importantly for SSL (and the 'secure' https to be enabled), we need to add a page rule to your site. Navigate to 'Page Rules', and replicate the following screenshot.  

![](/assets/images/blog/website_building/cloud_flare_2.png)

I added two rules here: 

1. I enforced always using `https` with any derivation of `danielraff.com`. This asterisks are important here http://*danielraff.com/* ensure that all subdomains and pages within my website will load via `https` and not just `http`.  
2. (Optional) Cloudflare only allows a user to have a secure root domain for free, but I wanted it so that when someone enters `www.danielraff.com`,  I wanted it so that if people went to `www.danielraff.com` there wasn't an error page, so here I redirect `www.danielraff.com` to `danielraff.com`.  


**Step 4: Redirect from Domain name provider to Cloudflare**  

So far we've redirected traffic from Cloudflare to Github, and we've ensure that Github is expecting traffic from a specific domain name (CNAME). There's still a missing piece however, the redirection of traffic from the domain name to Cloudflare in the first place. 

Change your domain name provider's Nameservers to match the generated ones from Cloudflare. Check out the following screenshot for how I did that. 

![](/assets/images/blog/website_building/gandi.png) 


**DONE!**  

Your website should now work.. although it may take a bit of time for Nameserver updates to be completed (up to 48 hours).  

Please comment here if things aren't working, or message me personally on [Linkedin](https://www.linkedin.com/in/danielraff/) or through whichever channel you know me by. 

**Next Steps**  

You can read my [blog post on what website addresses](https://danielraff.com/data_science/What-is-a-website-address.html) *actually are*.

You can add gmail ability (for free) following this tutorial: [https://medium.com/@onedurr/how-to-set-up-custom-email-addresses-on-your-web-site-for-free-afd700de5e9c](https://medium.com/@onedurr/how-to-set-up-custom-email-addresses-on-your-web-site-for-free-afd700de5e9c)

