---           
layout: post
title: McKinsey on (Manufacturing) Big Data - Part 2 - What do do with it
date: 2012-03-21 08:17:00 UTC
comments: false
categories: big-data vimana
---

We are back studying McKinsey's report on Big Data following the last post, and here lets take a closer look at what we can do with Big Data. The report identifies several "levers" where data can be used to improve manufacturing performance (see below), and of these levers, we are primarily interested in these two:
1. Implementing Lean Manufacturing (#5)
2. Using sensor data-driven operations analytics (#6)

Lets look at the first of these in this post.

Lean Manufacturing and the Digital Factory
McKinsey identifies using Big Data to "create process transparency, develop dashboards, and visualize bottlenecks". Our vimana application is one example of applying Big Data to create realtime dashboards of manufacturing equipment (to learn more about vimana, please visit www.systeminsights.com/vimana.) The idea here is to provide a shopfloor user both a high-level "macro" view of the shopfloor, as well as a low-level "micro" view of a single device.  Questions the dashboards can help answer include:
* Which devices are producing parts today?
* Which parts are being made right now?
* How many parts have I made?
* What has my device been doing today?
* What is my efficiency?
* Why have I been in a downtime?
(This is a much more interesting question to answer than just "What are my downtimes". Knowing why downtimes occur can directly help in reducing or eliminating the downtimes, and is a step beyond simply knowing{ that a has downtime occurred).

The data for vimana is streamed using the MTConnect Agent associated with each machine tool. The application itself runs in the cloud, aggregating hundreds of events every second from each machine tool. The analysis is done in realtime, and the visualizations are rendered instantly. Process transparency is achieved here because the application serves as a central repository of what is going on in the shopfloor, and multiple stakeholders (production, engineering, maintenance, management) can all use it to support decisions that come under their purview. This also takes us one step closer to the Digital Factory, where detailed operational data from the factory equipment is applied in building a complete digital model of the factory's operations, which can then be applied in optimizing its performance. 

_Macro Dashboard: Shopfloor_

_Micro Dashboard: Device _

Coming back to McKinsey, they estimate a reduction of 10 to 50% in costs from applying Big Data to implement Lean Manufacturing and the Digital Factory, accompanied by a marginal increase in revenue (2%). We have already seen vimana helping improve device utilization by over 25%, which directly leads to cost reductions. The real impact of Big Data here is not as much as in enabling us to ask new questions about a shop's productivity, but in helping us find even better answers for the same questions we have been asking for a long time and thus driving down costs. Of course, thats not to say that we cannot ask new questions based on the data –this is where data specifically from ubiquitous and low cost sensors can play a role, which we will examine in a future post.
