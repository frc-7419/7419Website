﻿---
title: "History of Robotics #3 - Freddy Changes the World in Unexpected Ways"
date: "2023-01-25"
description: "Tech Support's History of Robotics, #3"
thumbnail: "/static/images/blog/jan25/freddy-robot.jpg"
---


Imagine working for years to build a revolutionary new robot. You and your team solve dozens of design and implementation challenges. Along the way, you build tools and components to make it easier to construct your robot, but you never think much about them. Still, all the work is worth it when your robot achieves world fame.


Then, a decade later, nobody is talking about your robot. They've moved on. But you realize that they are talking about one of the tools you'd built while making the robot. In fact, by accident, you've revolutionized robotics. 


You have probably never heard of the "Freddy" robots of the 1960s and 1970s. On the other hand, Artificial Intelligence, Machine Learning, and computational programming builds on Freddy's "functional programming" model because it scales better than object-oriented or imperative programming. It's a part of every major language and there are well known languages that only do functional programming. Sometimes the most important advancement in robotics is a component somebody builds just to make the robot possible. 


The Freddy robots were a leap forward from Unimate for the "arm" style of robot. Freddy and Freddy II were built in the 1960s and 1970s at the University of Edinburgh in Scotland. Donald Michie led the program, Stephen Salter, Harry Barrow and Gregan Crawford built the hardware, and Rod Burstall, Robin Popplestone, and Barrow wrote the software. Their goal was to make a robot arm that would advance computer vision, object manipulation, and artificial intelligence. Therefore, they wanted to be able to put a pile of wooden parts in front of Freddy, have him use vision to identify the parts, artificial intelligence to create a plan to put them together, then object manipulation to select and connect the pieces. Unlike Unimate which was always programming to do one completely repeatable task in a static environment, Freddy would dynamically respond to different situations. 

![](/static/images/blog/jan25/FreddyRobotTeam.jpg)


Freddy I and II were built as a hybrid of Unimate and Shakey, the two prominent robots before it, with some upgrades. Like Unimate, there was a large robot arm, but it was attached to a gantry, so it could move side-to-side, whereas Unimate was attached to a fixed base. Freddy also used adaptable, rubber grippers more like Shakey, than the hard metallic grips of Unimate. 

![](/static/images/blog/jan25/freddy-robot.jpg)

Similar to Shakey, Unimate used cameras to identify objects, but it used two instead of one. A wide-angle camera surveyed the area at an angle, to find all possible parts. A narrow-angle camera then looked directly down on the parts to identify them. Finally, similar to Shakey, Freddy needed more computing power than could be attached. Therefore, remote computers did the computation for Freddy. 

![](/static/images/blog/jan25/Freddy-Camera.jpg)



The computation broke into three categories: managing objects, recognizing objects, and building the result. 


Freddy needed a way to put objects somewhere that it could remember for later. Freddy could not afford to rediscover every object when it needed another piece. Therefore, Freddy cleared and reserved an area for "identified pieces" and when it identified an object, it place it in a fixed location. 

![](/static/images/blog/jan25/FreddyRobotPlace.jpg)



Freddy needed an algorithm to identify pieces, especially since they were frequently in a heap and not always aligned perfectly. First, if Freddy could identify a piece from a heap, it would grab the piece and put it in the reserved space. Second, Freddy would try to grab an object from the heap, put it down, then try to identify it. Third, Freddy would just knock over the heap, to try to make smaller heaps. Like any algorithm, dividing and conquering the problem made it easier to solve. One of the key assumptions was that the pieces would always be light colored wood, and the underlying table would be dark, so it would be easier to identify edges for object detection. 

![](/static/images/blog/jan25/Freddy-I-Vision-Cup.jpg)



Building the object was the most difficult task. With so many pieces, the Freddy team did not want to have to program each repetitive step. They found that putting any two pieces together was 90% the same, but had different (x,y) coordinates to use. Therefore, they came up with a system that allowed them to reuse the procedure - e.g. put item X in slot Y - but with different coordinates as arguments. The system could reuse these procedures for each new assignment.


Freddy I and II were huge successes. They could build a toy wooden car or boat from random pieces. Of course, each toy required 16 hours to put together, since the software computations were so intense. Therefore, Freddy was never going to be put into production like Unimate. Still, Freddy showed that robots could do more than repeat the same task. 


Still, unless you've been to the Robot Museum at the University of Edinburgh or you are a robot enthusiast, you've probably never heard of Freddy. After all, robotics continued to advance, and bypassed Freddy. What makes Freddy so memorable, however, is that it used the world's first functional programming language. 


Robin Popplestone and Rod Burstall, two of Freddy's software engineers, created the POP-2 programming language specifically for Freddy. Some of their decisions were straightforward. They added array support, since there were so many objects to track. They added floating point support for decimals to enable more precision in construction. They built in garbage collection so that the programmers would not have to remember to free up memory manually. 

![](/static/images/blog/jan25/pop2.png)



They changed the world with POP-2, however, by making the first functional programming language. All other programming languages at the time used global shared memory. That meant that any line of code could affect anything else that was running. As a result, it was almost impossible to use more than one or two computers for a robot. Popplestone and Burstall changed the model. Every piece of code, or function, took inputs, computed only against those inputs, and then returned an output. There were no global variables or side effects. This meant that they could use multiple computers at the same time to run Freddy's calculations. Each computation was isolated and independent, so they could get more power by adding more computers. As a result, they could use the same code for basic primitives, and only change the arguments to it. We take these things for granted today, but every advancement starts somewhere. Functional programming started with Freddy. 

![](/static/images/blog/jan25/FunctionalProgramming.png)



When you are building a robot, there are no small roles. Even something that seems unimportant, such as the programming language you will use, can become an innovation that changes the world. Therefore, whether you are designing, machining, coding, testing, or supporting your robotics team, remember the story of Freddy. Freddy was a success in its time. Freddy's functional programming, once an afterthought, changed the world.

![](/static/images/blog/jan25/inspire.jpg)
