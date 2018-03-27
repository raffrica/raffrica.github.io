var hostname = "http://danielraff.com";
var index = lunr(function () {
    this.field('title')
    this.field('content', {boost: 10})
    this.field('category')
    this.field('tags')
    this.ref('id')
});



    index.add({
      title: "What is a Website Address?",
      category: null,
      content: "You open up your internet browser, type in a website address (URL) and within seconds, you arrive at your destination. But what goes on under the hood? How does typing in a URL load a webpage, and not just any webpage for that matter, but the unique webpage you requested?\n\nBefore we can discuss website addresses, we should ask what is a website? Take a website like reddit.com When we access Reddit and spend hours looking at pictures of cats, what we are actually doing is checking out the content on Reddit’s servers (or the content that it references on other servers).\n\nEvery server has its own unique IP Address (Internet Protocol Address). You can think about GPS Coordinates for a building address as being the real world equivalent of an IP Address. Every server has a unique IP address just like every building in the world has unique GPS Coordinates.\n\nFor example:\n\n\n  \n    \n      The ICICS Building at UBC\n      Google Maps Server\n    \n  \n  \n    \n      GPS: 49.2611454,-123.2489258\n      IP Address: 216.58.193.78\n    \n  \n\n\nnote: for a massive website like Google Maps, it’s not just one server or the website would quickly crash, instead it’s many servers. For the sake of simplicity we’ll pretend it’s only one server.\n\nLet’s conduct a little experiment:\n\n\n  Look long and hard at the GPS Coordinates above. Let’s see if you can remember those coordinates. How many of the digits can you remember when you close your eyes?\n\n  Okay. Close your eyes!\n\n\nThat was hard. It’s bulky and inconvenient to remember GPS coordinates for building addresses just like it’s challenging to remember IP addresses to access their corresponding servers.\n\n\n\nIf you’re a human like me, a website address or URL is a much simpler way to access a particular website. Think about a URL as being the Street Address for a website. URL stands for Uniform Resource Locator which is fancy speak for a placeholder that locates a unique resource1 (in our case, a website) on the internet.\n\n\n  \n    \n      ICICS Building at UBC\n      Google Maps\n    \n  \n  \n    \n      Street Address: 2366 Main Mall\n      URL: maps.google.com\n    \n  \n\n\n\n  Let’s try this again!\n\n  Look at that Street Address above. Think you can remember it?\n\n  Okay. Close your eyes!\n\n\nThat was much easier!\n\nOkay, so far we have IP Addresses that correspond to a server, which in turn has the information for a website. Additionally, we have a URL which is far easier to remember than an IP address.\n\n\n\n\nGetting from a URL to an IP Address\n\nTo get from a URL (easy for humans to remember) to an IP Address (necessary for your to load the website from the server), we use the Domain Name System (DNS).\n\nThe DNS is essentially a matching system that matches a URL to its corresponding IP Address.\n\nLet’s walk through what happens after you enter that URL:\n\n\n\nStep 1: The Easy One\n\nYour computer tries to determine if it already has the IP address corresponding to the URL you entered saved somewhere nearby. It does this by first looking in the internet browser’s cache (memory), then in the Operating System’s cache, and finally looks on the internet router’s cache.\n\nStep 2: The Big One\n\nIf it’s not found anywhere nearby, you and your computer are going to have to go on a journey to figure it out in a process called DNS Lookup.\n\nTo understand this, let’s take apart a URL and find out what’s inside:\n\n\n\n\n\nThe https:// refers to the Hypertext Transfer Protocol (Secure). This is the protocol by which your browser gets the information once it has the IP Address. We aren’t going to go into detail on how this protocol works, but if you are curious here’s a good video and if you really want to blow your mind this video.\n\n\n\nThe rest is the domain name. This is read from Right -&gt; Left.\n\nThe domain name is the meat of our URL, so we’ll think about it as the street address.\n\nWhen your browser is trying to lookup a DNS, it starts with a DNS Resolver, which is a server provided by your ISP (internet service provider) for the purposes of finding a URL. In our street address analogy, we can think about the DNS Resolver as being the car that gets us to the address we typed in. Let’s try and get to the address maps.google.com.\n\nFirst, let’s take apart the domain name even more.\n\n\n\nSee that little dot at the end of the domain name? In your regular browser that doesn’t show up, but behind the scenes it’s there and it’s important. It’s called the root. Consider it to be the highway of the DNS. When your car (DNS Resolver) begins its journey, it starts by driving along a Root Name Highway. These are the Root Name servers, which have their own IP Addresses (13 of them in the whole world)1.\n\n\n\nAs our car is driving along the highway it’s looking for the .com sign. In reality what happens is our DNS Resolver has asked the Root Name Servers for the IP Address of the .com Name Server which has the information about .com Top Level Domains. With that information in hand, we drive towards .com Street.\n\n\n\n\n\n.com is an example of a TLD (Top Level Domain). There are gTLDs (generic TLDs) such as .com which is the earliest and most widely used, dating back to 19851. There are also ccTLDs (Country Code TLDs) which are generally reserved for countries and regions. .ca was actually created at UBC Computer Science by John Demco in 19872.\n\nWhen our car (DNS Resolver) gets to .com street (or the .com Name Server), we start looking for signs to Google. Our DNS Resolver has asked the .com Name Server for the IP Address of Google. With that information in hand, we drive towards the Google Tower.\n\n\n\n\n\n\n\nMiddle-Level Domains are what makes each website unique. Compare google.ca to ubc.ca. Even though the .ca TLD is the same, the websites loaded are very different, because the Middle-Level Domains are different.\n\nOur car (DNS Resolver) has finally arrived at its destination, Google Tower (google.com).\n\n\n\nBut we actually want to get to the Maps Floor, which is the Sub-Level Domain (maps.google). To do this our DNS Resolver asks the Google Servers where to go (the Doorman at Google Towers), and we are given the final IP Address of maps.google.com.\n\n\n\n\n\nWe’ve covered a lot here. We now understand that a URL is an easy to digest way to refer to an IP Address and that an IP Address specifies a server (which in our case was hosting a website). We’ve learned about the Domain Name System (DNS) and how when given a URL, it can spit out an IP Address for our browsers.\n\nIf you want to know what happens next, how our browser is able to show us a webpage once it’s found the right IP Address check out this link: Medium Article\n\n\n\nReferences\n\n1https://webhostinggeeks.com/guides/domains/\n2https://www.ubc.ca/stories/2015-fall/100-years-of-discovery/1980-1989/#event-tl-iexzrg\n\nAfter Reading and Learning Concepts from:\n\n  http://www.podcasts.com/techstuff ; Podcast: What’s my Address\n  https://www.youtube.com/watch?v=72snZctFFtA\n  https://www.youtube.com/watch?v=7_LPdttKXPc\n  https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name\n  Medium Article by Maneesha Wijesinghe\n\n",
      tags: ["internet"],
      id: 0
    });
    

    index.add({
      title: "Your First Breath",
      category: null,
      content: "I wrote the passage below after my first experience in seeing a baby come in to this world.\n\n\n\nI’ve always felt deprived of my childhood memories. People share stories about what they felt when they were five years old, but I very rarely actually feel these memories. To me it’s more like I’m looking at a photo of the event; in fact, perhaps most of my memories are just memories of memories - memories of a photo or event as described to me by others. This is certainly the way it feels most of the time, but when I do have a memory of my childhood, a real memory, it completely envelopes me. I relive it.\n\nIt was in the Cardiology block in my 1st year of medical school. The tutor for our small group session looked around and asked if we knew what happened to the circulation system when that baby takes its first breath. This concept seemed oddly familiar. The gears in my brain slowly turned, and a vivid memory crashed into me. I must have been 5 or 6,  sitting in one of the tall chairs (not quite as tall to me anymore) that accompany the granite counter-top in our kitchen at home. My dad (who dabbles as a cardiologist) was explaining in his characteristically over-detailed manner, cardiac circulation. “See in a baby, the lungs don’t need to breathe because the baby is still inside the tummy” he explained, going on to detail how with the first breath all of a sudden the blood that previously skipped the lungs, now went there. He explained to me how there were these pathways that allowed the blood to skip the lungs and other parts of the body and how these closed when the baby took that breath.\n\nSurprised at this unlocked knowledge, I blurted it out in our small group session and managed to piece together the information: how the PDA (patent ductus arteriosus) closes, how the circulation changes cause a change in pressure making the left atrium greater than the right atrium and the closure of the foramen ovale (and admittedly didn’t touch on the bypass of the liver through the ductus venosus which also closes).\n\nPretty excited that I’d remembered something from 10 years ago, I tucked this memory away. A few weeks later, I was shadowing an anesthesiologist on a school night. It was already 12am and I had class the next morning at 8am. The resident turned to me and said that I can go home if I want to, but that if I stick around for another hour I can see a C-section. Well obviously I stayed. The whole thing was amazing.. I’ll fast forward to the moment. I’m at the foot of the bed, watching as the surgeons first pull this tan and wet blob out of her. One surgeon pushes, while the other pulls. The baby is vigorously plucked out. It’s blue, but I didn’t realize quite how blue. It’s a girl. In what seemed like an eternity, there’s no sound, and then SHE BREATHES. She cries. So quickly, she turns from her blue-ish colour to a bright pink. I saw this happen. This amazing miracle that first enticed me when I was a child, then I learned intellectually, I was unfold before my eyes. I was seeing as the resistance in her lungs decreased and blood started to flow in that direction. I was seeing as her right atrial pressure decreased and her foramen ovale was physiologically shut. I was seeing as she started to oxygenate her own blood. MIND BLOWING.\n\nThis pattern of being curious about something, then learning about it, then actually seeing it has got to be one of the most significant learning experiences of my life. I am so excited to repeat this throughout medicine.\n\nAnother thing that I’m very excited for is to have a son of my own, who I can pass this down to. Someone that I can put in that spark of curiosity and explanation that lights a fire in them the same way my dad did so for me.\n",
      tags: ["medicine"],
      id: 1
    });
    


var store = [{
    "title": "What is a Website Address?",
    "link": "/data_science/What-is-a-website-address.html",
    "image": null,
    "date": "September 19, 2017",
    "category": null,
    "excerpt": "You open up your internet browser, type in a website address (URL) and within seconds, you arrive at your destination...."
},{
    "title": "Your First Breath",
    "link": "/medicine/Your-First-Breath.html",
    "image": null,
    "date": "September 19, 2017",
    "category": null,
    "excerpt": "I wrote the passage below after my first experience in seeing a baby come in to this world. I’ve always..."
}]

$(document).ready(function() {
    $('#search-input').on('keyup', function () {
        var resultdiv = $('#results-container');
        if (!resultdiv.is(':visible'))
            resultdiv.show();
        var query = $(this).val();
        var result = index.search(query);
        resultdiv.empty();
        $('.show-results-count').text(result.length + ' Results');
        for (var item in result) {
            var ref = result[item].ref;
            var searchitem = '<li><a href="'+ hostname + store[ref].link+'">'+store[ref].title+'</a></li>';
            resultdiv.append(searchitem);
        }
    });
});