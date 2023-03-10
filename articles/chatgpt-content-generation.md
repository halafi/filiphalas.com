---
title: "How to take advantage of ChatGPT for content generation"
description: "GPT-3 can help you write articles and generate dynamic content from templates using spintax."
image: /static/img/posts/robots-using-computer.jpg
date: "2023-03-08"
canonical_url: https://filiphalas.com/chatgpt-content-generation
---
OpenAI's GPT-3 is here and it's already transforming the ways website content is created.

With GPT-4 around the corner let's take a look at how ChatGPT can be used on content heavy statically generated sites using modern frameworks like React or Svelte as well as how ChatGPT can be used when writing an article or a blog post.

## Google and AI generated content
According to the [update from Google Search Central (February, 2023)](https://developers.google.com/search/blog/2023/02/google-search-and-ai-content) Google is focused on rewarding high-quality content, no matter how it was generated, given that Google already had to fight mass-produced human generated content in the past it makes perfect sense.

Google sees AI generated content with the primary purpose of manipulating website ranking as spam and a violation of its policy. Although it's unclear whether Google can detect AI content automatically yet, with its infinite resources at disposal we can assume AI generated content detection is coming if not already in place (at minimum a human intervention).

Proper use of AI or automation is not against Google's rules.
With that concern aside, let's look at ChatGPT's uses.

## Copywriting and writing articles
I have looked into how ChatGPT generates articles using the following prompts and their variations:

> Generate a detailed outline for a blog post about "How to use ChatGPT for content generation".
> Then write a 500 words article using the outline.
> You don’t have to display the outline.
> Write in a conversational style.
> Break up the article into sections. Include a title as a H1, an intro, then sections as H2s. break up the article into sections and format the headers as h2 headers and the title as h1 in markdown formatting.
> Break up paragraphs into at most two sentences per paragraph.
> Give it a creative title.
> Make sure to focus on the best answer to the question.
> Make it even longer:
> the conclusion should always be at the end of the article.
> use tables and bullet points when it will help to format articles.

> Write 500 words in the style of Grant Cardone on the benefits of juggling for tech enthusiasts. The tone should be exciting and persuasive. Include two quotes in the article to back up the points. Do not use juggling more than 5 times. Mention the story about a juggler who died trying to juggle a grenade.

the problems I ran into are:

- bad understanding of the title and what the article should be about
- several nice to read sentences that don't bring any real value to the reader
- it wouldn't be easy to get into the style of the article if you decide to make it your own and edit it
- ChatGPT becomes slow working on more interesting topics but it is quite fast on trivial topics

For what I would consider an easy topic I actually got quite good content, but it seemed near impossible to try to generate content similar to the article I am writing.

### Generation of error messages for your app

Nice use case for ChatGPT is to generate error messages for your app, if you don't like thinking about a funny 404 prompt you can try the following:

<figure>
  <img src="/static/img/posts/chatgpt-404-text.png" alt="ChatGPT 404 page text">
</figure>

or if you don't want to think about how a particular HTTP status code should be handled, you can use ChatGPT to generate an error message for you as well:

<figure>
  <img src="/static/img/posts/chatgpt-503-error.png" alt="ChatGPT 503 error text">
</figure>


## Web applications serving HTML based on a template
Imagine you are working on a web app with several thousand of HTML pages dynamically generated based on templates. Often you might have static content that repeats across all HTML pages.

### Using ChatGPT to generate Spintax
Spintax (spinning syntax) is a content generation tactic using synonyms to produce variants with the same meaning.

One use case of ChatGPT is that it's able to generate spintax for you, this is extremely useful when you have a template that you use to render a large number of pages (think product details or a tourist activity).

For example, I have tried this prompt with ChatGPT:

> Give me a spintax of the following text: {Barcelona} is the best destination for your vacation. Everyone should visit once in their life.

the response I received:

> {Barcelona|The Catalan city|This Spanish gem|The cosmopolitan capital of Catalonia|The vibrant Mediterranean city} {is the ultimate|is the perfect|should be on top of your list for|should definitely be considered for} {your vacation|a memorable holiday}. {Everyone|Every traveler|All globe-trotters|Every adventurer} {should|must} {visit|experience} {at least once|at least one time|once in their lifetime}.

You are free to ask ChatGPT for a rewrite with more variations.

## Conclusion
If you are doubting whether **writing content in 2023 is still worth it** you can be assured that AI is still "pretty dumb" in terms of creating high quality content, but it can replace an inexpensive copywriter and create professional mediocre content.

In terms of generating spintax and web app messages I can see it being quite useful and I am excited about what use cases the future will bring.