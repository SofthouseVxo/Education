### 12.HTML & CSS
#### SEO - Search engine optimization

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### SEO - the process of increasing the quality and quantity of website traffic.

* SEO is used for higher ranking on search engines like Google, Bing or Yahoo.
* SEO is a very big and wide area, there are thousands of factors deciding what rank you get.
* There are companies that only focus on SEO.
* We will only scratch the surface in this course.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

<img src="/media/html-css-images/html-css-12/google.png" alt="google search example">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Why SEO?

* Search engines is the main tool people use to navigate on the web.
* (~50) Millions of searches is done in Sweden every day.
* Advertisement using SEO is called organic (not paid advertisement).


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### What do search engines do?

1. Search engines are finding websites and building an huge **index** of all these.
1. Search engines provide users with results relevant to their search query.
1. <a href="https://www.google.com/search/howsearchworks/crawling-indexing/" target="_blank">Google explains</a>.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Indexing?

* An **index** is like a library filled with information that is then sorted in a certain order, so it's easier to find.
* Google has an **index** consisting of billions of websites and webpages.
* When you search on google, you don't search on the web, you search in Googles index of the web.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### How does Google create their index?

* They use spiders(robots or crawlers) which are automatically discovering and scanning websites.
* They follow links from one webpage to another. Googles main crawler is called Googlebot.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### How does Google find and index your site?

* Spiders move from one page to another depending on links
* Google finds you if:
  * Some other site links to your site.
  * You link to some other site.
  * You simply tell google to index your site via <a href="https://support.google.com/webmasters/answer/6065812?hl=sv" target="_blank">Google Search Console</a>.
  


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### See if your site is indexed by Google

* Search for site:yourwebsite.com on <a href="https://www.google.se" target="_blank">Google</a>


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Terms

* **Crawling**: The process of following hyperlinks on the web to discover new content.
* **Indexing**: The process of storing every web page in a vast database.
* **Web spider**: A piece of software designed to carry out the crawling process at scale.
* **Googlebot**: Googles web spider.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### When you search on google:

1. The search engine scans its gigantic index.
1. Then it provides the user with results which are relevant and useful depending on the query.
1. And ranks these depending on popularity.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### So how do you get a high ranking?
#### And end up at the top results when someone search for something related to your business?</h5>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### SEO can be devided into two areas

* On Site SEO
* Off site SEO


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### On Site SEO

* Things you control on your site
* HTML/CSS/JavaScript
* Link structure
* Domain/Urls
* Keywords
* User friendly Content
* Alt texts, titles for images
* Meta tags
* Mobile friendly


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Keywords

* Keywords are a crucial factor when it comes to SEO.
* After all, people search on keywords in search engines.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Finding the right keywords

* Keywords should be retalated to your product.
* Should have as many searches as possible.
* And as low organic competition as possible.
* <a href="https://trends.google.se/trends/?geo=SE" target="_blank">Google trends</a>


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Using the keywords

* Use them in headings.
* Use them in content.
* Use them in the urls's.
* Many say that keywords in the meta tag has no effect. And if you add them there it's easy for your competitors to check what keywords you are trying to rank high on.
* You cannot just tell Google what your keywords are, they will figure it out if you've used them correctly.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### User friendly Content - Guidelines from AdSight</h5>

* At least 1 000 – 2 500+ words desribing the subject.
* Keyword needs to be in the title.
* Site or post needs to have a click friendly titel.
* Length of title no more than 68 characters.
* Paragraphs should be no more than 4 rows.
* Split text with headings.
* Synonymes also counts.
* Use related search words in the post.
* Use at least two images(with alt text).
* Link internally and to other relevat sites or/and posts.
* Use bullet-lists.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Other tips:

* Atleast one H1 on each page.
* Write readable text, format and split in pieces.
* Since google change their algorithm continually alot of people have different understandings and opinions on what effects your ranking in different ways.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Link structure

* Since the spiders index by going through links to index your site.
* You need to have links connecting your pages inside your site.
* Otherwise google might not index the whole site.
* No-follow on links you don't want google to follow.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Sitemaps

* A sitemap is a file where you specify information about pages, videos and other files on your website.
* How they relate to each other.
* Search Robots(spiders) reads this file to search the website in a smarter way.
* The sitemap tells the robot which files are more important and other information about the files (like when they where updated).
* With sitemaps the risk is smaller that the robots might miss content and pages.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Sitemap example (XML format)

<img src="/media/html-css-images/html-css-12/sitemap.png" alt="sitemap example">
<a href="https://www.xml-sitemaps.com/" target="_blank">Sitemap generator</a>

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Robots.txt

* A text file with instructions to crawlers.
* <a href="https://www.seo-guide.se/robots-txt" target="_blank">Read more.</a>


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### URL structure

* Url should be:
  * Describing
  * Short
  * Using keywords
  * Avoid unnecessary words
  
<img src="/media/html-css-images-images/html-css-12/url.png" alt="url structure example">

&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

####  SEO and meta tags

```HTML
  <!-- Is shown on Google when you search -->
  <meta name="description" content="Växjös bästa snabbtmat, vi finns på bla bla bla....." />

  <!-- Many say that this does nothing for your SEO -->
  <meta name="keywords" content="Beställ pizza online, Beställ hamburgare online, Bästa hamburgarna i Växjö" />

  <!-- Instructs most search engines not to show the page in search results -->
  <meta name="robots" content="noindex, nofollow">

  <!-- Instructs Googles web crawlers specifically -->
  <meta name="googlebot" content="noindex" />
```
[SEO-guide](https://www.seo-guide.se/meta-element)


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### Off site SEO

* Links
* Social media marketing
* Guest blogging
* Influencer marketing


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

#### What are backlinks?

* Backlinks, also called "inbound links" or "incoming links.
* Are created when one website links to another. The link to an external website is called a backlink.
* Backlinks to your website are a signal to search engines that others vouch for your content. 
* If many sites link to the same webpage or website, search engines can infer that content is worth linking to.
* Earning backlinks has a positive effect on a site's ranking position or search visibility.