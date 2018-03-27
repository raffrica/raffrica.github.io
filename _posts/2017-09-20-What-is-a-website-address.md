---
layout: post
title:  "What is a Website Address?"
date:   2017-09-19 17:48:23
categories: [data_science]
tags: [internet]
---

![](/assets/images/blog/website_address.png)

You open up your internet browser, type in a website address (*URL*) and within seconds, you arrive at your destination. But what goes on under the hood? How does typing in a URL load a webpage, and not just any webpage for that matter, but the unique webpage you requested?

Before we can discuss website addresses, we should ask *what is a website?* Take a website like `reddit.com` When we access Reddit and spend hours looking at [pictures of cats](https://www.reddit.com/r/aww/), what we are actually doing is checking out the content on Reddit's servers (or the content that it references on other servers).

Every server has its own unique IP Address (Internet Protocol Address). You can think about **GPS Coordinates** for a building address as being the real world equivalent of an IP Address. Every server has a unique IP address just like every building in the world has unique **GPS Coordinates**.  

For example:

| The ICICS Building at UBC | Google Maps Server|
| --- | --- |
| **GPS:** [49.2611454,-123.2489258](https://www.google.ca/maps/search/49.2611454,-123.2489258) | **IP Address:** [216.58.193.78](https://maps.google.com) |

*note: for a massive website like Google Maps, it's not just one server or the website would quickly crash, instead it's many servers. For the sake of simplicity we'll pretend it's only one server.*

<!--more-->

Let's conduct a little experiment:

> Look long and hard at the GPS Coordinates above. Let's see if you can remember those coordinates. How many of the digits can you remember when you close your eyes?
>
> Okay. Close your eyes!

That was hard. It's bulky and inconvenient to remember GPS coordinates for building addresses just like it's challenging to remember IP addresses to access their corresponding servers.


If you're a human like me, a website address or URL is a much simpler way to access a particular website. Think about a URL as being the **Street Address** for a website. URL stands for `Uniform Resource Locator` which is fancy speak for a placeholder that locates a unique resource<sup>1</sup> (in our case, a website) on the internet.

| ICICS Building at UBC | Google Maps |
| --- | --- |
| **Street Address:** [2366 Main Mall](https://www.google.ca/maps/search/2366+Main+Mall,+Vancouver,+BC+V6T+1Z4/) | **URL:** [maps.google.com](https://maps.google.com) |


> Let's try this again!
>
> Look at that Street Address above. Think you can remember it?
>
> Okay. Close your eyes!

That was much easier!

Okay, so far we have IP Addresses that correspond to a server, which in turn has the information for a website. Additionally, we have a URL which is far easier to remember than an IP address.

------
------


### Getting from a URL to an IP Address

To get from a URL (easy for humans to remember) to an IP Address (necessary for your to load the website from the server), we use the Domain Name System (DNS).

The DNS is essentially a matching system that matches a URL to its corresponding IP Address.

Let's walk through what happens after you enter that URL:

![](https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr06/8/12/anigif_original-31541-1399566411-4.gif)

##### Step 1: The Easy One

Your computer tries to determine if it already has the IP address corresponding to the URL you entered saved somewhere nearby. It does this by first looking in the internet browser's cache (memory), then in the Operating System's cache, and finally looks on the internet router's cache.

##### Step 2: The Big One

If it's not found anywhere nearby, you and your computer are going to have to go on a journey to figure it out in a process called *DNS Lookup*.

To understand this, let's take apart a URL and find out what's inside:  


**![](/assets/images/blog/anatomy_of_a_url.gif)**


![](/assets/images/blog/Anatomy_of_a_URL_https.jpg)

The https:// refers to the Hypertext Transfer Protocol (Secure). This is the protocol by which your browser gets the information once it has the IP Address. We aren't going to go into detail on how this protocol works, but if you are curious here's a good [video](https://www.youtube.com/watch?v=po3zYOe00O4) and if you really want to blow your mind this [video](https://www.youtube.com/watch?v=scWj1BMRHUA).

![](/assets/images/blog/Anatomy_of_a_URL_Domain_Name.jpg)

The rest is the domain name. This is read from Right -> Left.

The domain name is the *meat* of our URL, so we'll think about it as the street address.

When your browser is trying to lookup a DNS, it starts with a DNS Resolver, which is a server provided by your ISP (internet service provider) for the purposes of finding a URL. In our street address analogy, we can think about the DNS Resolver as being the car that gets us to the address we typed in. Let's try and get to the address `maps.google.com.`

First, let's take apart the domain name even more.

![](/assets/images/blog/Anatomy_of_a_URL_root.jpg)

See that little dot at the end of the domain name? In your regular browser that doesn't show up, but behind the scenes it's there and it's important. It's called the **root**. Consider it to be the highway of the DNS. When your car (DNS Resolver) begins its journey, it starts by driving along a **Root Name Highway**. These are the Root Name servers, which have their own IP Addresses (13 of them in the whole world)<sup>1</sup>.

![](/assets/images/blog/Path_Root.jpg)

As our car is driving along the highway it's looking for the `.com` sign. In reality what happens is our DNS Resolver has asked the Root Name Servers for the IP Address of the **.com Name Server** which has the information about `.com` Top Level Domains. With that information in hand, we drive towards **.com Street**.



------------

![](/assets/images/blog/Anatomy_of_a_URL_TLD.jpg)

`.com` is an example of a TLD (Top Level Domain). There are gTLDs (generic TLDs) such as `.com` which is the earliest and most widely used, dating back to 1985<sup>1</sup>. There are also ccTLDs (Country Code TLDs) which are generally reserved for countries and regions. `.ca` was actually created at UBC Computer Science by John Demco in 1987<sup>2</sup>.

When our car (DNS Resolver) gets to `.com` street (or the **.com Name Server**), we start looking for signs to Google. Our DNS Resolver has asked the **.com Name Server** for the IP Address of Google. With that information in hand, we drive towards the Google Tower.

![](/assets/images/blog/Path_com.jpg)

------------

![](/assets/images/blog/Anatomy_of_a_URL_Mid_and_Sub_Level_Domain.jpg)

Middle-Level Domains are what makes each website unique. Compare `google.ca` to `ubc.ca`. Even though the `.ca` TLD is the same, the websites loaded are very different, because the Middle-Level Domains are different.

Our car (DNS Resolver) has finally arrived at its destination, Google Tower (`google.com`).

![](/assets/images/blog/Path_Tower.jpg)

But we actually want to get to the Maps Floor, which is the Sub-Level Domain (`maps.google`). To do this our DNS Resolver asks the Google Servers where to go (the Doorman at Google Towers), and we are given the final IP Address of `maps.google.com`.

![](/assets/images/blog/Path_Tower_Floor.jpg)

------------

We've covered a lot here. We now understand that a URL is an easy to digest way to refer to an IP Address and that an IP Address specifies a server (which in our case was hosting a website). We've learned about the Domain Name System (DNS) and how when given a URL, it can spit out an IP Address for our browsers.

If you want to know what happens next, how our browser is able to show us a webpage once it's found the right IP Address check out this link: [Medium Article](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)




-----------
-----------
## References  

<sup>1</sup>[https://webhostinggeeks.com/guides/domains/](https://webhostinggeeks.com/guides/domains/)  
<sup>2</sup>[https://www.ubc.ca/stories/2015-fall/100-years-of-discovery/1980-1989/#event-tl-iexzrg](https://www.ubc.ca/stories/2015-fall/100-years-of-discovery/1980-1989/#event-tl-iexzrg)  

After Reading and Learning Concepts from:  
1. [http://www.podcasts.com/techstuff](http://www.podcasts.com/techstuff) ; Podcast: What's my Address  
2. [https://www.youtube.com/watch?v=72snZctFFtA](https://www.youtube.com/watch?v=72snZctFFtA)  
2. [https://www.youtube.com/watch?v=7_LPdttKXPc](https://www.youtube.com/watch?v=7_LPdttKXPc)  
3. [https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name)  
4. [Medium Article by Maneesha Wijesinghe](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)
