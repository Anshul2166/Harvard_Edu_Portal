const initialState = {
  forums: {
    threads: [
      {
        mainMessage:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        comments: [
          {
            authorUrl: "#",
            avatarUrl: "#avatarUrl",
            createdAt: new Date(),
            fullName: "Anshul",
            text: "Some random comment here done by me"
          },
          {
            authorUrl: "#",
            avatarUrl: "#avatarUrl",
            createdAt: new Date(),
            fullName: "Himanshu",
            text: "Another random comment done here"
          }
        ],
        votes: 26
      }
    ]
  },
  specialization: {
    info: [
      {
        title: "Deep learning specialization",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        offeredBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        offeredBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        offeredBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        offeredBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        offeredBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        offeredBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      }
    ]
  },
  degrees: {
    info: [
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      },
      {
        title: "Deep learning specialization ",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses: [
          "Convolutional neural network",
          "Recurrent neural network"
        ]
      }
    ]
  },
  courses: {
    info: [
      {
        id: "cs101",
        imageUrl:
          "https://prod-discovery.edx-cdn.org/media/course/image/da1b2400-322b-459b-97b0-0c557f05d017-869c24929ee1.small.jpg",
        title: "An Introduction to Computer Science",
        offeredBy: "Edx",
        rating: 4.6,
        url:
          "https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x",
        overview: [
          " CS50 is a true, comprehensive introduction to computer science.",
          "The course is taught by the vivacious David Malan and hosted on edX.",
          "There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right.",
          "You intimately deal with pointers and allocating memory in pset5 and pset6.",
          "Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate.",
          "Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: [
          "https://imgur.com/a/k8u7OgV",
          "https://imgur.com/a/cPvesQI"
        ],
        topics_covered: [
          "abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, web development"
        ]
      },
      {
        id: "cs102",
        imageUrl:
          "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/6-006f11.jpg",
        title: "An Introduction to Algorithms",
        offeredBy: "MIT Open Course Ware",
        rating: 4.6,
        url:
          "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/",
        overview: [
          " This course provides an introduction to mathematical modeling of computational problems.",
          " It covers the common algorithms, algorithmic paradigms, and data structures used to solve these problems.",
          " The course emphasizes the relationship between algorithms and programming, and introduces basic performance measures and analysis techniques for these problems."
        ],
        screenshots: ["/assets/cs502.png", "/assets/cs502.png"],
        topics_covered: [
          "Introduction, Sorting and Trees, Hashing, Numerics, Graphs, Shortest Paths, Dynamic Programming"
        ]
      },
      {
        id: "cs103",
        imageUrl:
          "https://nptel.ac.in/newstyles/images/courseimages/106_video.jpg",
        title: "Object Oriented Analysis and Design",
        offeredBy: "NPTEL E-learning IIT Khragpur",
        rating: 4.5,
        url:
          "https://www.youtube.com/playlist?list=PL-AyYXNLDtPZ37yxlhz1CCfBmHlHOfaVb",
        overview: [
          " The complexity of software systems is ever on the rise – more complex problem domains being attempted (complex embedded systems)",
          " The ever growing man-power engaged in increasingly intricate development processes to turnaround in shorter and shorter time, possible flexibility of software being stretched to the limit with XaaS, platforms getting challenging with widely expanding distribution, cloud computation etc.",
          " Hence the analysis and design of software require well-organized and structured approaches to manage the challenges of complexity. "
        ],
        screenshots: [
          "https://imgur.com/a/luMoSHw",
          "https://imgur.com/a/jjpcLxm"
        ],
        topics_covered: [
          "Object-Oriented Programming Paradigm, State and Behavior, Fields and Methods, Data Encapsulation,  ,Inheritance and Interfaces, Polymorphism"
        ]
      },
      {
        id: "cs104",
        imageUrl:
          "https://nptel.ac.in/newstyles/images/courseimages/106_video.jpg",
        title: "Data Structures",
        offeredBy: "NPTEL E-learning IIT Delhi",
        rating: 4.7,
        url: "https://www.youtube.com/playlist?list=PLBF3763AF2E1C572F",
        overview: [
          " Introduction to object oriented programming through stacks, queues and linked lists. ",
          " Dictionaries: skip-lists, hashing, analysis of collision resolution techniques. Trees, traversals, binary search trees, optimal and average BST’s. ",
          " 2-4 trees and red-black trees. Tries and pattern matching. Priority queues and binary heaps.",
          " Sorting: merge, quick, radix, selection, heap. Graphs, Breadth first search and connected components.",
          " Depth first search in directed and undirected graphs and strongly connected components.",
          " Spanning trees: Prim's and Kruskal’s algorithm, union-find data structure. ",
          " Dijkstra’s algorithm for shortest paths, shortest path tree. Directed acyclic graphs: topological sort and longest path."
        ],
        screenshots: [
          "https://imgur.com/c3pQ6BZ",
          "https://imgur.com/a/nhOODQo"
        ],
        topics_covered: [
          "Stacks",
          "Queues and Linked Lists",
          "Dictionaries",
          "Hashing",
          "Trees",
          "AVL Trees",
          "Red Black Trees",
          "Tries",
          "Graphs",
          "Applications of DFS and BFS in Directed Graphs",
          "Minimum Spanning Trees",
          "Correctness of Dijkstras Algorithm",
          "Single Source Shortest Paths"
        ]
      },
      {
        id: "cs105",
        imageUrl:
          "https://nptel.ac.in/newstyles/images/courseimages/106_video.jpg",
        title: "Database Design",
        offeredBy: "NPTEL E-learning IIT Madras",
        rating: 4.5,
        url: "https://www.youtube.com/channel/UCpgnQKuPmFsZyksHc1IMceg/videos",
        overview: [
          " Databases form the backbone of all major applications today – tightly or loosely coupled, intranet or internet based, financial, social, administrative, and so on.",
          " Structured Database Management Systems (DBMS) based on relational and other models have long formed the basis for such databases. ",
          " Consequently, Oracle, Microsoft SQL Server, Sybase etc. have emerged as leading commercial systems while MySQL, PostgreSQL etc. lead in open source and free domain. ",
          " While DBMS’s differ in details, they share a common set of models, design paradigms and a Structured Query Language (SQL). ",
          " In this background the course would examine data structures, file organizations, concepts and principles of DBMS’s, data analysis, database design, data modeling, database management, data & query optimization, and database implementation. ",
          " More specifically, the course introduces relational data models; entity-relationship modeling, SQL, data normalization, and database design. ",
          " It would also introduce query coding practices using MySQL (or any other open system) through various assignments. ",
          " Design of simple multi-tier client/server architectures based and Web-based database applications will also be introduced."
        ],
        screenshots: [
          "https://imgur.com/a/sF6vqGn",
          "https://imgur.com/a/JKuAp2k"
        ],
        topics_covered: [
          "Introduction to RDBMS, Structured Query Language (SQL), Relational Algebra, Entity-Relationship Model ",
          " Relational Database Design,Application Development, Storage and File Structure, Indexing and Hashing, Query Processing , Query Optimization "
        ]
      },
      {
        id: "cs106",
        imageUrl:
          "https://i.ytimg.com/vi/fWRzpBDxXtk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAaR6dT55D9F7v1Lc5aXDyKnc3gHQ",
        title: "Competitive Programming In Java",
        offeredBy: "Rachit Jain - Youtube Personality",
        rating: 4.8,
        url:
          "https://www.youtube.com/playlist?list=PLfBJlB6T2eOuDDm9xscqMZR3nnLP5FiyN",
        overview: [
          " In this playlist, you will find various coding interview problems asked by companies like Google, Microsoft, Amazon and Facebook. Join me in solving these problems and learning from one other.",
          "	Are you from NON-CS background? Do you need some professional programmer to go through a list of various coding interview problems to get you started with your programming journey?  ",
          " Hit the subscribe button to get regular updates as I upload videos every Tuesday Thursday Saturday and Sunday."
        ],
        screenshots: [
          "https://i.ytimg.com/vi/IIKTGg5AKkY/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAjyjwIkQtprstX0IO-asI2A_KoDg",
          "https://i.ytimg.com/vi/jUmmr1YyAk0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCUycZXiXyLEOzH3iMnJeXsPKl8hw"
        ],
        topics_covered: ["Programming, Interview, Coding, Google "]
      }
    ]
  },
  profileInfo: {
    info: {
      skills: ["React", "NodeJs", "Python"],
      accomplishments: [
        "First in district coding championship",
        "Third rank in college"
      ],
      projects: [
        "Built a question paper generator using Java",
        "Built an image modifier using Javascript"
      ],
      courses: [
        "An introduction to computer science",
        "Data structures and alogorithms"
      ]
    }
  }
};

export default initialState;
