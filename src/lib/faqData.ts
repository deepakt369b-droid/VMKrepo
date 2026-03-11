export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export const FAQ_DATA: FAQItem[] = [
    {
        id: 1,
        question: "Which authorities do you handle approvals for in Dubai?",
        answer: "We manage end-to-end approvals for Dubai Municipality (DM), Dubai Civil Defense (DCD), DEWA, RTA, and free zone authorities like Trakhees, DDA, and Nakheel. Our in-house team handles all design submittals, revisions, and final No Objection Certificates (NOCs)."
    },
    {
        id: 2,
        question: "What is your typical project timeline for a commercial fit-out?",
        answer: "A standard 5,000 sqft commercial office fit-out typically takes 8 to 12 weeks from the moment approvals are granted. Complex projects requiring structural changes or specialized MEP work may take 14 to 16 weeks. We provide a detailed Gantt chart before any work commences."
    },
    {
        id: 3,
        question: "Do you offer Design & Build services, or just contracting?",
        answer: "We are a full-service Design & Build firm. This means you have a single point of responsibility from conceptual sketches through architectural engineering, authority approvals, construction, and final handover. We do also accept build-only contracts if you already have a consultant."
    },
    {
        id: 4,
        question: "Are your engineers and contractors fully licensed?",
        answer: "Yes. VMK Construction holds an Unlimited contracting license with Dubai Municipality. All our structural and MEP engineers are fully accredited by the UAE Society of Engineers and hold active cards with relevant local authorities."
    },
    {
        id: 5,
        question: "How do you ensure quality control on site?",
        answer: "We implement a rigorous 3-tier inspection protocol. Every phase of work is inspected by our site foreman, signed off by our Project Manager, and finally reviewed by our independent QC Engineer before proceeding to the next stage or requesting an Authority inspection."
    }
];
