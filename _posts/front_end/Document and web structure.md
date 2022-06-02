## [Planning a simple website](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure#planning_a_simple_website)

Once you've planned out the structure of a simple webpage, the next logical step is to try to work out what content you want to put on a whole website, what pages you need, and how they should be arranged and link to one another for the best possible user experience. This is called [Information architecture](https://developer.mozilla.org/en-US/docs/Glossary/Information_architecture). In a large, complex website, a lot of planning can go into this process, but for a simple website of a few pages, this can be fairly simple, and fun!

1. Bear in mind that you'll have a few elements common to most (if not all) pages — such as the navigation menu, and the footer content. If your site is for a business, for example, it's a good idea to have your contact information available in the footer on each page. Note down what you want to have common to every page.![the common features of the travel site to go on every page: title and logo, contact, copyright, terms and conditions, language chooser, accessibility policy](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure/common-features.png)
2. Next, draw a rough sketch of what you might want the structure of each page to look like (it might look like our simple website above). Note what each block is going to be.![A simple diagram of a sample site structure, with a header, main content area, two optional sidebars, and footer](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure/site-structure.png)
3. Now, brainstorm all the other (not common to every page) content you want to have on your website — write a big list down.![A long list of all the features that we could put on our travel site, from searching, to special offers and country-specific info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure/feature-list.png)
4. Next, try to sort all these content items into groups, to give you an idea of what parts might live together on different pages. This is very similar to a technique called [Card sorting](https://developer.mozilla.org/en-US/docs/Glossary/Card_sorting).![The items that should appear on a holiday site sorted into 5 categories: Search, Specials, Country-specific info, Search results, and Buy things](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure/card-sorting.png)
5. Now try to sketch a rough sitemap — have a bubble for each page on your site, and draw lines to show the typical workflow between pages. The homepage will probably be in the center, and link to most if not all of the others; most of the pages in a small site should be available from the main navigation, although there are exceptions. You might also want to include notes about how things might be presented.![A map of the site showing the homepage, country page, search results, specials page, checkout, and buy page](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure/site-map.png)

- **header:** [`<header>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/heade)
- **navigation bar:** [`<nav>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav).
- main content: `<main>`, with various content subsections represented by `<article>`, `<section>`, and `<div>` elements
- sidebar: `<aside>`, nested within main content
- footer: `<footer>`

```html
<main> is for content unique to this page. Use <main> only once per page, and put it directly inside <body>. Ideally this shouldn't be nested within other elements.
    
<article> encloses a block of related content that makes sense on its own without the rest of the page (e.g., a single blog post).
    
<section> is similar to <article>, but it is more for grouping together a single part of the page that constitutes one single piece of functionality (e.g., a mini map, or a set of article headlines and summaries), or a theme. It's considered best practice to begin each section with a heading; also note that you can break <article>s up into different <section>s, or <section>s up into different <article>s, depending on the context.
    
<aside> contains content that is not directly related to the main content but can provide additional information indirectly related to it (glossary entries, author biography, related links, etc.).
    
<header> represents a group of introductory content. If it is a child of <body> it defines the global header of a webpage, but if it's a child of an <article> or <section> it defines a specific header for that section (try not to confuse this with titles and headings).
    
<nav> contains the main navigation functionality for the page. Secondary links, etc., would not go in the navigation.
    
<footer> represents a group of end content for a page.
    
```

# Non-semantic wrappers

[`<span>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) is an inline non-semantic element, which you should only use if you can't think of a better semantic text element to wrap your content, or don't want to add any specific meaning. For example:

```html
<p>The King walked drunkenly back to his room at 01:00, the beer doing nothing to aid
him as he staggered through the door <span class="editor-note">[Editor's note: At this point in the
play, the lights should be down low]</span>.</p>
```



