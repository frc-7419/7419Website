﻿---
title: "History of Robotics #2 - Shakey Paves the Way"
date: "2023-01-18"
description: "Tech Support's History of Robotics, #2"
thumbnail: "/static/images/blog/jan18/Shakey-Intro.jpg"
---

Shakey the Robot will amaze you. It can autonomously move through a floor covered in obstacles, pick up and deposit objects, and even understand over 100 English commands. Shakey’s creators have created designs and algorithms that will be the foundation for robotics for the next fifty years, and it only cost $750,000! If you haven’t seen Shakey on social media or in the news, it’s because Shakey the Robot lives at the Computer History Museum in Mountain View, CA. Shakey was built over fifty years ago, and it shows that the fundamental robotics challenges have not changed. By examining Shakey, we can better understand the present and future of robotics. 

Shakey the Robot, the first mobile, semi-autonomous robot because researchers were given time and money to invent something revolutionary. Charles Rosen, Peter Hart, Nil Nilsson, and their team invented Shakey at the Stanford Research Institute from 1966-1972. DARPA (Defense Advanced Research Projects Agency), a part of the US Military, gave the researchers $750,000 (more than $5 million in today’s money) to build the robot. Robotics researchers still struggle to get funding, so they can expand technology. Still, as Shakey demonstrates, research can create trillion dollar industries. 
![](/static/images/blog/jan18/Shakey_Team.jpg)


Shakey changed how people thought of robots. Prior to Shakey, people thought of fixed industrial robotic arms, such as Unimate, or as science fiction. Shakey showed that fiction was not far from reality. First, unlike Unimate, Shakey was able to move. Second, where Unimate had to be pre-programmed to do a specific task, Shakey could perform tasks that required it to do dynamic planning, route-finding, and the rearranging of simple objects. Third, unlike Unimate that had no interaction beyond programmers, Shakey could understand about 100 words of written English. It translated these commands into code, so that non-coders could get Shakey to do some work. Shakey was so advanced that, in 1970, Life Magazine called it the “first electronic person.” Even its name had personality. Shakey the Robot got its name because it wobbled and shook when it moved and stopped. 

Even though Shakey was invented over fifty years ago, its design is still applicable today. It was a 6ft tall robot split into 3 sections. The base was a two-wheeled platform, with a motor per wheel. The platform also came with collision sensors, because they assumed there would be human and non-human obstacles. The middle section of the robot was a hardware rack that included local camera control and onboard logic. Since computers were so large at the time, however, there were not full computers on the robot. The top section of the robot was a rangefinder, TV camera, and a radio antenna. The radio antenna was used to communicate with a remote computer, so it could run its algorithms. Even today, most robots resemble Shakey. While wheels can struggle to climb rough terrain, most modern robots still use wheels instead of legs. Robots use cameras and touch sensors to detect obstacles. Finally, robots use Bluetooth, WiFi, or ethernet to communicate with powerful central computers. While it is more advanced than radio control, the architecture is the same.  


![](/static/images/blog/jan18/Shakey-Design.jpg)

Shakey introduced some of the earliest forms of Artificial Intelligence (AI) for planning and problem solving. They created STRIPS (Stanford Research Institute Problem Solver) to help the robot do everything from mapping out the best path through the obstacles to executing the end goals. The STRIPS model is characterized by two things:
1. Decomposition: Break all complex problems into smaller problems
2. State machine: Everything is treated as a set of states to transition between. STRIPS looks at the state of things and the target state. It then computes the steps necessary to make the shift.  
By evaluating everything as a series of states, the code remains simple because each step is limited. 

![](/static/images/blog/jan18/StateMachine.png)

Shakey’s creators invented the A* route finding algorithm, which is still used to find the best path through a complex field of obstacles. The algorithm, which fits with the STRIPS model:
1. Maps the optimal path between obstacles, which results in multiple path components. 
2. Computes the best overall path based which components fit best together
Since the set of paths could grow exponentially, the A* algorithm uses heuristics to simplify the computation and eliminate obvious unsuccessful paths. 

![](/static/images/blog/jan18/A-routing.png)


Shakey used the earliest approaches of computer vision to identify objects. The cameras were low-resolution, the processing power only allowed for basic edge detection, and it only did basic object identification, but it laid the foundation for modern computer vision. Shakey used the Hough transform to identify straight lines, circles, and ellipses, so it could do its analysis. It converts the data to polar coordinates, calculates multiple possible lines, and selects the ones that make the most sense from different perspectives (e.g. overlapping polar curves). The Hough transform is still a key part of computer vision today.

![](/static/images/blog/jan18/HoughTransform.png)

Shakey even established the basics of robot object manipulation. With its feelers and vision, it could sense and see objects, then pick them up. It was even able to adjust if the object was not at the expected angle or reorient itself if it dropped the object. 


Finally, Shakey introduced natural language processing from human to machine language. With basic human-readable commands such as GOTO, TILT and ROLL, even non-programmers could assign tasks to Shakey. 


Fifty years later, Shakey’s design and software are still modern. More importantly, they provide the foundation for modern robotics. We can put more compute power on our robot than Shakey’s remote computer, but modern robots often still depend on central computers and models. Shakey crudely interacted with objects, but we are still optimizing for vision, path finding, and manipulating objects. Shakey’s researchers were funded by the government, and we all still try to find grants wherever we can. As we try to build the next generation of robots, it is important to learn from the robots and engineers who started it all. Then, we need to make sure we’re helping the next generation, just like they helped us.

![](/static/images/blog/jan18/Conclusion.png)
