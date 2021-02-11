import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, number: "CS 121", name: "Computer Science I", description: "Introduction to object-oriented problem solving and programming. Software development process. Data and expression, conditionals and loops, arrays and lists, and classes and interfaces. Introduction to graphical user interfaces (GUIs). Guided, in-class programming activities and targeted projects to teach problem solving and software development skills. PREREQ: MATH 170."},
        { id: 3, number: "CS 221", name: "Computer Science II", description: "Object-oriented design including inheritance, polymorphism, and dynamic binding. Graphical user interfaces. Recursion. Introduction to program correctness and testing/analysis of time/space requirements. Basic data structures: lists, collections, stacks, and queues. Basic searching and sorting. PREREQ: CS 121." },
        { id: 4, number: "CS 230", name: "Ethical Issues in Computing", description: "Privacy, intellectual property rights, computer crime, codes of conduct. Risks and liabilities of computer-based systems. Electronic information and free speech. Local and global impact of computing. PREREQ: ENGL 102, CS 121, CS-HU 130, and (COMM 101 and ENGL 212) or (ED-CIFS 201 and STEM-ED 220)." },
        { id: 5, number: "CS 253", name: "Introduction to Systems Programming", description: "Structure of C programs, functions, scope, arrays, structures, pointers, and run-time memory management. Generic programming techniques. Introduction to build systems, debugging techniques, version control, shell scripting and process management. Security vulnerabilities, buffer overflow and dynamic memory analysis. Basic systems programming including topics such as streams, buffers, pipes, system calls, processes, threads and libraries for Linux and Microsoft Windows. PREREQ: CS 221. COREQ: CS-HU 250." },
        { id: 6, number: "CS 321", name: "Data Structures", description: "Sorting, searching, and order statistics. Further data structures: trees, priority queues, dictionaries, balanced search trees, B-Trees, heaps, hash tables, and graphs. PREREQ: CS 221 and MATH 189. COREQ: CS-HU 250, CS-HU 271 and CS-HU 310." },
        { id: 7, number: "CS 332", name: "Ethical Hacking", description: "Study of fundamental hacking techniques. Topics include information gathering, target enumeration, network sniffing, vulnerability assessment, remote exploitation, social engineering, and web hacking. PREREQ: CS 253 or CS 331 or ITM 455." },
        { id: 8, number: "CS 354", name: "Programming Languages", description: "Principles of programming languages: design, syntax, semantics, information binding, strings, arithmetic, input/output, recursion and extensibility. PREREQ: CS 321." },
        { id: 9, number: "CS 361", name: "Introduction to the Theory of Computation", description: "Regular languages, finite automata, context-free languages, pushdown automata, Turing machines, decidability, introduction to reducibility and computational complexity. PREREQ: CS 321." },
        { id: 10, number: "CS 401", name: "Introduction to Web Development", description: "An introduction to the technologies used for client-side and server-side web development. Learn fundamentals behind competing web technologies, best practices for design and usability, and build rich, dynamic, n-tier secure web applications. Tools used will be mainly open source such as PHP, Javascript, XML, HTML, CSS, MySQL, and the Apache web server. PREREQ: CS 321." },
        { id: 11, number: "CS 402", name: "Mobile Application Development", description: "A project-intensive course on mobile development using either iOS or Android as a platform. Overview of mobile platforms and their characteristics, mobile interface design and best practices using such technologies as GPS, camera, persistence, notifications and others. Platform will be announced before the beginning of each semester. PREREQ: CS 321." },
        { id: 12, number: "CS 410", name: "Databases", description: "Foundations of database management systems. Database models: relational, object and others. Database design: entity-relationship modeling, logical relational schema design, physical design, functional dependencies and normalization, and database tuning. Database application development using database interfaces embedded in host languages. PREREQ: CS 321." },
        { id: 13, number: "CS 421", name: "Algorithms", description: "Asymptotic analysis and recurrences. Divide-and-conquer, dynamic programming, greedy algorithms, graph algorithms, and string matching. Introduction to tractability and NP-Completeness. PREREQ: CS 321." },
        { id: 14, number: "CS 453", name: "Operating Systems", description: "Operating systems structure and design. Process management, concurrency and synchronization, inter-process communication, scheduling, device management, memory management, file systems and security. Case studies of multiple operating systems. PREREQ: CS 230, CS 253, CS 321, and ECE 330." },
        { id: 15, number: "CS 471", name: "Software Engineering", description: "A formal study of the software development process. Topics include: life cycle models, requirements definition, specification, design, implementation, validation, verification, maintenance, and reuse. Students work in small teams on significant projects. PREREQ: CS 321 and CS-HU 271." },
        { id: 16, number: "CS 481", name: "Senior Design Project", description: "Capstone experience designing, implementing, and testing an assigned software artifact. Students report progress via documentation, meetings and demos. Class concludes with a presentation and demonstration of the completed product to students, faculty and project sponsors. Topics include teamwork, communication, ethics, project management, tools, design, verification and validation. PREREQ: CS 230 and CS 471." },
        { id: 17, number: "CS 488", name: "Senior Outcome Assessment", description: "Required to graduate. In their last semester, senior students will take an outcome-assessment examination. (Pass/Fail.) PREREQ: Senior Standing." }
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
