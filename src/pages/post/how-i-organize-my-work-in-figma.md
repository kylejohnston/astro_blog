---
layout: "@/layouts/BlogPost"
title: How I organize my work in Figma
pubDate: 08 FEB 2023
description: 
ogImage: /images/posts/figma-organization/how-i-figma.jpg
tags: ["figma"]
---

At work, a fellow product designer recently asked how others structure their Figma files to make it easy for others to collaborate and how we flow from roving design explorations to detailed design specifications.

Here’s a look at my approach to organizing my work in Figma and as part of a fast-paced, highly collaborative product team.

## Context setting
We work in squads, which consist of a designer, product manager (PM), engineering manager, and several engineers. Each squad is part of an initiative, or focus area.

Multiple times a week, I share ideas and designs with my PM and other product designers in my initiative. We have weekly product reviews and critiques to get detailed feedback on work-in-progress. Engineers view the files during estimation meetings and design handoffs. There are more touchpoints, but these key interactions shape how I think about organizing my work.

## How I organize my Figma files
My squad works across several pages on the website, usually developing features scoped to a page. Based on how we work, I’ve found the best approach is to organize my design explorations into page-specific files; I have a Figma file dedicated to the homepage, another to the listing page, and so on.

<img src="/images/posts/figma-organization/figma-project-cards.webp" width="100%" height="auto" alt="Example: Figma Project Cards">

**A quick aside:** when I work with other squads, I adapt my approach. For example, I worked with an App squad creating new features for iOS and Android. In that context, I found it was best to create one file per feature or experiment. That file included separate pages for explorations, iterations, and specifications. The people I was working with, scope of work, and timeline all influenced how I decided to organize things.

**Why this works:** my current squad runs a *lot* of experiments. This structure makes it easy for me to quickly find the right designs when I’m sharing work in progress or getting feedback. It also limits the number of files I need to manage.


## How I organize pages in each file
<div class="lg:grid grid-cols-3 gap-8">
<p class="col-span-2">Within each file – the homepage, for example – I create a page for each  prioritized feature or experiment. When I’m sharing work, this allows me to link to a specific page or even a specific section within a page. And until Figma introduces an official way to organize pages, I use empty pages to group different stages of work; ‘🚀’ indicates design explorations and ‘📐’ indicates designs are complete and specs are ready for engineers. For each page, emojis and descriptive names highlight what’s active, paused, or complete. For example: <code>‘🟢 [HP] New Card Design’</code> is an active design exploration and <code>‘🤔 [HP] Copy Experiment’</code> is a design in the review stage. </p>
<img class="my-6 px-12 lg:px-0 lg:relative lg:left-12" src="/images/posts/figma-organization/figma-pages.webp" width="100%" height="auto" alt="Example: Page Naming">
</div>

## How I organize design explorations
On each page in my file, a single design exploration may go through several rounds of changes and refinements – starting with a bunch of exploratory concepts all the way through the final design we’ve agreed to build. All of those designs are contained on a single page, organized using Figma’s sections feature.

Keeping everything on a single page makes it easy for me to grab elements I want to reuse and makes it convenient for others to reference earlier ideas when we’re weighing different treatments. Using sections allows me to share links to specific stages of work and tailor what I‘m sharing based on who will be looking at the work and the type of feedback I need. For me, this is also a great way to see how designs evolve based on all the thoughtful feedback people share – I can visualize how designs and ideas get sharper as they move through the process.

## Getting to ‘done’
When a design is ‘done’ and ready to hand off for development, I copy it to a dedicated design specifications file. Each feature or experiment gets its own page in that file. This makes it easy for the engineers – there’s one place to look for all of the information they need. The page names always include the ticket number from our project tracking system along with the page name and short feature description. For example: `‘AA-123 HP New card design’`. Each page includes the control state, our experiment or feature, and a detailed view of elements like type, color, spacing, states, and interactions.

## Handling iterations
Once a feature test is complete, we might decide to iterate on the design based on feedback and learnings from research or experiments. In that case, I duplicate the original page, add a version number, and get to work. This approach allows me to reference feedback and notes from the earlier version, gives me the freedom to explore different directions, and keeps my files and layers manageable.

## Quarterly cleanup
Finally, each quarter I start new files for designs and specs, even if we’re working on the same set of pages. This ensures my Figma files don’t get too large or unruly. I tweak the colors I use in my thumbnails (using colors from our design system) so I can quickly see when I started working on something. For example, my Q1 colors are lavender, Q4 covers were blue, and so on.

<img class="" src="/images/posts/figma-organization/figma-project-cards-rows.webp" width="100%" height="auto" alt="Example: Quarterly Figma Projet Cards">

And how, might you ask, did I land on this organizational approach? Some of it comes from experience, but the specifics are crystallized through friction. When I run into an issue – say, I have trouble finding a design or notice others getting lost or confused – that’s a signal to me there’s room for improvement. I apply my design process to my design process; I take time to think through what’s working and not working, iterate on the system, and observe whether or not my changes helped improve collaboration.

### Further reading  
- Figma published [this guide to project organization](https://www.figma.com/best-practices/team-file-organization/projects/) – it includes organization approaches for other types of projects. 
- Figma’s [guide to file organization](https://www.figma.com/best-practices/team-file-organization/files/) has great information about file naming, page structure, working cross-platform, and more.
