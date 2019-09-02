const initialState = {
	forums: {
		threads: [
			{
				mainMessage:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				comments: [
					{
						authorUrl: '#',
						avatarUrl: '#avatarUrl',
						createdAt: new Date(),
						fullName: 'Anshul',
						text: 'Some random comment here done by me',
					},
					{
						authorUrl: '#',
						avatarUrl: '#avatarUrl',
						createdAt: new Date(),
						fullName: 'Himanshu',
						text: 'Another random comment done here',
					},
				],
				votes: 26,
			},
		],
	},
	specialization: {
		info: [
			{
				title: 'Deep learning specialization',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png',
				offeredBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png',
				offeredBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png',
				offeredBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png',
				offeredBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png',
				offeredBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://miro.medium.com/max/1388/1*EhnMqATxubL4R-FdZpE1Gg.png',
				offeredBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
		],
	},
	degrees: {
		info: [
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png',
				taughtBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png',
				taughtBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png',
				taughtBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png',
				taughtBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png',
				taughtBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
			{
				title: 'Deep learning specialization ',
				url: 'https://www.coursera.org/learn/ai/home/welcome',
				imageUrl: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2018/07/IBM.png',
				taughtBy: 'Andrew NG',
				rating: 4.7,
				overview: [
					' CS50 is a true, comprehensive introduction to computer science. The course is taught by the vivacious David Malan and hosted on edX. There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right. You intimately deal with pointers and allocating memory in pset5 and pset6. Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate. Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['/assets/cs501.jpg', '/assets/cs502.jpg'],
				topics_covered: ['React, NodeJs, Python'],
				list_of_courses: ['Convolutional neural network', 'Recurrent neural network'],
			},
		],
	},
	courses: {
		info: [
			{
				id: 'cs101',
				imageUrl:
					'https://prod-discovery.edx-cdn.org/media/course/image/da1b2400-322b-459b-97b0-0c557f05d017-869c24929ee1.small.jpg',
				title: 'An Introduction to Computer Science',
				offeredBy: 'Edx',
				rating: 4.6,
				url: 'https://www.edx.org/course/cs50s-introduction-computer-science-harvardx-cs50x',
				overview: [
					' CS50 is a true, comprehensive introduction to computer science.',
					'The course is taught by the vivacious David Malan and hosted on edX.',
					'There are 13 weeks of instruction with 8 mandatory problem sets (psets) and a final project:',
					'The CS50 staff say that the pointers section of the course is the hardest and they are right.',
					'You intimately deal with pointers and allocating memory in pset5 and pset6.',
					'Mental gymnastics are required. Finally figuring out pointers is probably the thing I am most proud of coming out of the course.',
					'The 10–20 hours for each problem set is accurate.',
					'Your code won’t work and you will get frustrated (especially because half of the course is in C), but frustration is good. Frustration conquered is learning.',
				],
				screenshots: ['https://i.imgur.com/a/k8u7OgV.png', 'https://i.imgur.com/a/cPvesQI.png'],
				topics_covered: [
					'abstraction',
					'algorithms',
					'data structures',
					'encapsulation',
					'resource management',
					'security',
					'software engineering',
					'web development',
				],
			},
			{
				id: 'cs102',
				imageUrl:
					'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/6-006f11.jpg',
				title: 'An Introduction to Algorithms',
				offeredBy: 'MIT Open Course Ware',
				rating: 4.6,
				url:
					'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/',
				overview: [
					' This course provides an introduction to mathematical modeling of computational problems.',
					' It covers the common algorithms, algorithmic paradigms, and data structures used to solve these problems.',
					' The course emphasizes the relationship between algorithms and programming, and introduces basic performance measures and analysis techniques for these problems.',
				],
				screenshots: ['/assets/cs502.png', '/assets/cs502.png'],
				topics_covered: [
					'Introduction, Sorting and Trees',
					'Hashing',
					'Numerics',
					'Graphs',
					'Shortest Paths',
					'Dynamic Programming',
				],
			},
			{
				id: 'cs103',
				imageUrl: 'https://nptel.ac.in/newstyles/images/courseimages/106_video.jpg',
				title: 'Object Oriented Analysis and Design',
				offeredBy: 'NPTEL E-learning IIT Khragpur',
				rating: 4.5,
				url: 'https://www.youtube.com/playlist?list=PL-AyYXNLDtPZ37yxlhz1CCfBmHlHOfaVb',
				overview: [
					' The complexity of software systems is ever on the rise – more complex problem domains being attempted (complex embedded systems)',
					' The ever growing man-power engaged in increasingly intricate development processes to turnaround in shorter and shorter time, possible flexibility of software being stretched to the limit with XaaS, platforms getting challenging with widely expanding distribution, cloud computation etc.',
					' Hence the analysis and design of software require well-organized and structured approaches to manage the challenges of complexity. ',
				],
				screenshots: ['https://i.imgur.com/W90Wk4W.png', 'https://i.imgur.com/qQTytT7.png'],
				topics_covered: [
					'Object-Oriented Programming Paradigm',
					'State and Behavior',
					'Fields and Methods',
					'Data Encapsulation',
					'Inheritance and Interfaces',
					'Polymorphism',
				],
			},
			{
				id: 'cs104',
				imageUrl: 'https://nptel.ac.in/newstyles/images/courseimages/106_video.jpg',
				title: 'Data Structures',
				offeredBy: 'NPTEL E-learning IIT Delhi',
				rating: 4.7,
				url: 'https://www.youtube.com/playlist?list=PLBF3763AF2E1C572F',
				overview: [
					' Introduction to object oriented programming through stacks, queues and linked lists. ',
					' Dictionaries: skip-lists, hashing, analysis of collision resolution techniques. Trees, traversals, binary search trees, optimal and average BST’s. ',
					' 2-4 trees and red-black trees. Tries and pattern matching. Priority queues and binary heaps.',
					' Sorting: merge, quick, radix, selection, heap. Graphs, Breadth first search and connected components.',
					' Depth first search in directed and undirected graphs and strongly connected components.',
					" Spanning trees: Prim's and Kruskal’s algorithm, union-find data structure. ",
					' Dijkstra’s algorithm for shortest paths, shortest path tree. Directed acyclic graphs: topological sort and longest path.',
				],
				screenshots: ['https://i.imgur.com/c3pQ6BZ.png', 'https://i.imgur.com/qfOoNEs.png'],
				topics_covered: [
					'Stacks',
					'Queues and Linked Lists',
					'Dictionaries',
					'Hashing',
					'Trees',
					'AVL Trees',
					'Red Black Trees',
					'Tries',
					'Graphs',
					'Applications of DFS and BFS in Directed Graphs',
					'Minimum Spanning Trees',
					'Correctness of Dijkstras Algorithm',
					'Single Source Shortest Paths',
				],
			},
			{
				id: 'cs105',
				imageUrl: 'https://nptel.ac.in/newstyles/images/courseimages/106_video.jpg',
				title: 'Database Design',
				offeredBy: 'NPTEL E-learning IIT Madras',
				rating: 4.5,
				url: 'https://www.youtube.com/channel/UCpgnQKuPmFsZyksHc1IMceg/videos',
				overview: [
					' Databases form the backbone of all major applications today – tightly or loosely coupled, intranet or internet based, financial, social, administrative, and so on.',
					' Structured Database Management Systems (DBMS) based on relational and other models have long formed the basis for such databases. ',
					' Consequently, Oracle, Microsoft SQL Server, Sybase etc. have emerged as leading commercial systems while MySQL, PostgreSQL etc. lead in open source and free domain. ',
					' While DBMS’s differ in details, they share a common set of models, design paradigms and a Structured Query Language (SQL). ',
					' In this background the course would examine data structures, file organizations, concepts and principles of DBMS’s, data analysis, database design, data modeling, database management, data & query optimization, and database implementation. ',
					' More specifically, the course introduces relational data models; entity-relationship modeling, SQL, data normalization, and database design. ',
					' It would also introduce query coding practices using MySQL (or any other open system) through various assignments. ',
					' Design of simple multi-tier client/server architectures based and Web-based database applications will also be introduced.',
				],
				screenshots: ['https://i.imgur.com/0hbnuNR.png', 'https://i.imgur.com/cCO8ziy.png'],
				topics_covered: [
					'Introduction to RDBMS',
					'Structured Query Language (SQL)',
					'Relational Algebra',
					'Entity-Relationship Model',
					' Relational Database Design,Application Development',
					'Storage and File Structure',
					'Indexing and Hashing',
					'Query Processing',
					'Query Optimization ',
				],
			},
			{
				id: 'cs106',
				imageUrl:
					'https://i.ytimg.com/vi/fWRzpBDxXtk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAaR6dT55D9F7v1Lc5aXDyKnc3gHQ',
				title: 'Competitive Programming In Java',
				offeredBy: 'Rachit Jain - Youtube Personality',
				rating: 4.8,
				url: 'https://www.youtube.com/playlist?list=PLfBJlB6T2eOuDDm9xscqMZR3nnLP5FiyN',
				overview: [
					' In this playlist, you will find various coding interview problems asked by companies like Google, Microsoft, Amazon and Facebook. Join me in solving these problems and learning from one other.',
					'	Are you from NON-CS background? Do you need some professional programmer to go through a list of various coding interview problems to get you started with your programming journey?  ',
					' Hit the subscribe button to get regular updates as I upload videos every Tuesday Thursday Saturday and Sunday.',
				],
				screenshots: [
					'https://i.ytimg.com/vi/IIKTGg5AKkY/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAjyjwIkQtprstX0IO-asI2A_KoDg',
					'https://i.ytimg.com/vi/jUmmr1YyAk0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCUycZXiXyLEOzH3iMnJeXsPKl8hw',
				],
				topics_covered: ['Programming", "Interview", "Coding", "Google '],
			},
		],
	},
	profileInfo: {
		info: {
			skills: ['React', 'NodeJs', 'Python'],
			accomplishments: ['First in district coding championship', 'Third rank in college'],
			projects: ['Built a question paper generator using Java', 'Built an image modifier using Javascript'],
			courses: ['An introduction to computer science', 'Data structures and alogorithms'],
		},
	},
	editorial: {
		posts: [
			{
				title: 'First post',
				description:
					"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
				keywords: ['Java', 'Object Oriented Programming', 'UML'],
				dateCreated: new Date(),
				link: 'http://www.google.com',
			},
		],
	},
	project:{
		project:{
			title:"Project-1",
			description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			deploymentUrl:"http://www.google.com",
			githubUrl:"http://www.google.com"
		},
		projectFetched:true,
		projectErrorInFetching:false,
		members:[{
			name:"Anshul",
			role:"team-lead",
			imageUrl:"data:image/jpeg;base64,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",
			info:"MERN stack developer"
		}]
	},
	projectsList: {
		projectList: [
			{
				title: 'Voyage-1',
				description:
					'Project1 Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped.',
				image_location:
					'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
			},
			{
				title: 'Voyage-2',
				description:
					'Project2 Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped.',
				image_location:
					'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
			},
			{
				title: 'Voyage-3',
				description:
					'Project3 Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped.',
				image_location:
					'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
			},
			{
				title: 'Voyage-4',
				description:
					'Project4 Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped.',
				image_location:
					'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
			},
		],
		single_voyage_fetched: false,
		fetched: false,
	}
};

export default initialState;
