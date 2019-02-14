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
        title: "Deep learning specialization by Andrew NG",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview:[" CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
        "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
        "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses:["Convolutional neural network","Recurrent neural network"]
      },
      {
        title: "Deep learning specialization by Andrew NG",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview:[" CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
        "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
        "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses:["Convolutional neural network","Recurrent neural network"]
      },
      {
        title: "Deep learning specialization by Andrew NG",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview:[" CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
        "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
        "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses:["Convolutional neural network","Recurrent neural network"]
      },
      {
        title: "Deep learning specialization by Andrew NG",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview:[" CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
        "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
        "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses:["Convolutional neural network","Recurrent neural network"]
      },
      {
        title: "Deep learning specialization by Andrew NG",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview:[" CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
        "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
        "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses:["Convolutional neural network","Recurrent neural network"]
      },
      {
        title: "Deep learning specialization by Andrew NG",
        url: "https://www.coursera.org/learn/ai/home/welcome",
        imageUrl:
          "https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png",
        taughtBy: "Andrew NG",
        rating: 4.7,
        overview:[" CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
        "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
        "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"],
        list_of_courses:["Convolutional neural network","Recurrent neural network"]
      }
    ]
  },
  degrees: {
    info: [
      {
        title: "Data science",
        imageUrl:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/59/4408d08be611e8ae9f27056f38fbe9/Applied_AI_with_Deep_Learning.png?auto=format%2Ccompress&dpr=2.625",
        degree_provider: "IBM"
      },
      {
        title: "Machine Learning",
        imageUrl:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/59/4408d08be611e8ae9f27056f38fbe9/Applied_AI_with_Deep_Learning.png?auto=format%2Ccompress&dpr=2.625",
        degree_provider: "IBM"
      },
      {
        title: "Full stack developer",
        imageUrl:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/59/4408d08be611e8ae9f27056f38fbe9/Applied_AI_with_Deep_Learning.png?auto=format%2Ccompress&dpr=2.625",
        degree_provider: "IBM"
      },
      {
        title: "Data science",
        imageUrl:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/59/4408d08be611e8ae9f27056f38fbe9/Applied_AI_with_Deep_Learning.png?auto=format%2Ccompress&dpr=2.625",
        degree_provider: "IBM"
      },
      {
        title: "Data science",
        imageUrl:
          "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/59/4408d08be611e8ae9f27056f38fbe9/Applied_AI_with_Deep_Learning.png?auto=format%2Ccompress&dpr=2.625",
        degree_provider: "IBM"
      }
    ]
  },
  courses: {
    info: [
      {
        id: "cs101",
        imageUrl: "/assets/cs50.jpg",
        title: "An introduction to Computer Science",
        offeredBy: "Coursera",
        rating: 4.6,
        url:
          "https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x",
        overview: [
          " CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:",
          "The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.",
          "The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning."
        ],
        screenshots: ["/assets/cs501.jpg", "/assets/cs502.jpg"],
        topics_covered: ["React, NodeJs, Python"]
      },
      {
        id: "cs102",
        imageUrl: "/assets/cs501.jpg",
        title: "An introduction to algorithms",
        offeredBy: "youtube- mit open course ware",
        rating: 4.6,
        url: "https://www.youtube.com/playlist?list=PLB2BE3D6CA77BB8F7",
        overview: [
          " This course provides an introduction to mathematical modeling of computational problems. It covers the common algorithms, algorithmic paradigms, and data structures used to solve these problems. The course emphasizes the relationship between algorithms and programming, and introduces basic performance measures and analysis techniques for these problems."
        ],
        screenshots: ["/assets/cs502.jpg", "/assets/cs502.jpg"],
        topics_covered: [
          "The course emphasizes the relationship between algorithms and programming, and introduces basic performance measures and analysis techniques for these problems."
        ]
      },
      {
        id: "cs104",
        imageUrl: "/assets/cs502.jpg",
        title: "An introduction to object oriented programming",
        offeredBy: "youtube- nptel - course-ware",
        rating: 4.5,
        url:
          "https://www.youtube.com/playlist?list=PL-AyYXNLDtPZ37yxlhz1CCfBmHlHOfaVb",
        overview: [
          " primary goal is for you to learn to appreciate and use the fundamental design principles of modularity and abstraction in a variety of contexts from electrical engineering and computer science. To achieve this goal, we will study electrical engineering (EE) and computer science (CS) largely from the perspective of how to build systems that interact with, and attempt to control, an external environment."
        ],
        screenshots: ["/assets/cs503.png", "/assets/cs503.png"],
        topics_covered: [
          "Procedural Programming Paradigm - PPP • Object-Oriented Programming Paradigm - OPP • Objects •State and Behavior • Software Objects - Fields and Methods • Data Encapsulation • Public Interface • Object-based application • Benefits of object-based application development • Classes • Definition • Blueprint of similar object • Instantiating objects from class - example • Object-Oriented Principles •Encapsulation •Inheritance and Interfaces •Polymorphism"
        ]
      },
      {
        id: "cs103",
        imageUrl: "/assets/cs501.jpg",
        title: "data-structures",
        offeredBy: "youtube- nptel - courseware",
        rating: 4.2,
        url: "https://www.youtube.com/playlist?list=PLBF3763AF2E1C572F",
        overview: [
          " An algorithm is an outline of the steps that a program or any computational procedure has to take. A program on the other hand is an implementation of an algorithm and it could be in any programming language. Data structure is the way we need to organize the data, so that it can be used effectively by the program"
        ],
        screenshots: ["/assets/cs504.png", "/assets/cs504.png"],
        topics_covered: [
          "Data Structures And Algorithms",
          "Introduction to Data Structures and Algorithms",
          "Stacks",
          "Queues and Linked Lists",
          "Dictionaries",
          "Hashing",
          "Trees",
          "Tree Walks / Traversals",
          "Ordered Dictionaries",
          "Deletion",
          "Quick Sort",
          "AVL Trees",
          "Trees",
          "Red Black Trees",
          "Insertion in Red Black Trees",
          "Disk Based Data Structures",
          "Case Study: Searching for Patterns",
          "Tries",
          "Data Compression",
          "Priority Queues",
          "Binary Heaps",
          "Why Sorting",
          "More Sorting",
          "Graphs",
          "Data Structures for Graphs",
          "Two Applications of Breadth First Search",
          "Depth First Search",
          "Applications of DFS",
          "DFS in Directed Graphs",
          "Applications of DFS in Directed Graphs",
          "Minimum Spanning Trees",
          "The Union",
          "Prims Algorithm for Minimum Spanning Trees",
          "Single Source Shortest Paths",
          "Correctness of Dijkstras Algorithm",
          "Single Source Shortest Paths"
        ]
      },
      {
        id: "cs105",
        imageUrl: "/assets/cs502.jpg",
        title: "data-bases",
        offeredBy: "youtube-dbms-nptel",
        rating: 4.5,
        overview: [
          " Databases form the backbone of all major applications today – tightly or loosely coupled, intranet or internet based, financial, social, administrative, and so on. Structured Database Management Systems (DBMS) based on relational and other models have long formed the basis for such databases. Consequently, Oracle, Microsoft SQL Server, Sybase etc. have emerged as leading commercial systems while MySQL, PostgreSQL etc. lead in open source and free domain. While DBMS’s differ in details, they share a common set of models, design paradigms and a Structured Query Language (SQL). In this background the course would examine data structures, file organizations, concepts and principles of DBMS’s, data analysis, database design, data modeling, database management, data & query optimization, and database implementation. More specifically, the course introduces relational data models; entity-relationship modeling, SQL, data normalization, and database design. It would also introduce query coding practices using MySQL (or any other open system) through various assignments. Design of simple multi-tier client/server architectures based and Web-based database applications will also be introduced."
        ],
        screenshots: ["/assets/cs506.png", "/assets/cs506.png"],
        topics_covered: [
          "Week 1 Course Overview. Introduction to RDBMS Week 2: Structured Query Language (SQL) Week 3: Relational Algebra. Entity-Relationship Model  Week 4: Relational Database Design Week 5: Application Development. Case Studies. Storage and File Structure Week 6: Indexing and Hashing. Query Processing Week 7: Query Optimization. Transactions (Serializability and Recoverability) Week 8: Concurrency Control. Recovery Systems. Course Summarization"
        ]
      },
      {
        id: "cs106",
        imageUrl: "/assets/cs501.jpg",
        title: "data-structures",
        offeredBy: "youtube-gaurav-sen",
        rating: 4.0,
        url:
          "https://www.youtube.com/playlist?list=PLMCXHnjXnTnsWU7jYp9XCKPW8ayl6D8fb",
        overview: [
          " A set of videos to help you grasp Java for competitive programming.Compettive programming is one of the key aspects in cracking coding interviews. since java is most widely used programming lanquages the, videos are made using these "
        ],
        screenshots: ["/assets/cs505.png", "/assets/cs505.png"],
        topics_covered: ["Java"]
      }
    ]
  }
};

export default initialState;
