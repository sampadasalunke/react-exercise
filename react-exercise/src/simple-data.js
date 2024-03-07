
const data = [
  {
    id: 1,
    name: "Enhancing ML Insights Functionality",
    title: "",
    percentage: "0%",
    parentId: null,
    icon: '../circle-h-solid.svg',
    expanded: true,
    employees: [
      {
        id: 2,
        name: "Enhance the product's machine learning insights for better user decision-making",
        title: "",
        percentage: "0%",
        parentId: 1,
        icon: '../circle-h-solid.svg',
        employees:[
          { 
            id: 3,
            name: "Develop and launch 5 new ML-driven insights features",
            title: "",
            percentage: "0%",
            parentId: 2,
            icon: '../circle-h-solid.svg',
          },
          { 
            id: 4,
            name: "Achieve a 25% increase in user engagement with MLInsights features",
            title: "",
            percentage: "0%",
            parentId: 2,
            icon: '../circle-h-solid.svg',
          },
          {
            id: 5,
            name: "Receive positive feedback (above 4/5) from 70% of surveyed users on the new features",
            title: "",
            percentage: "0%",
            parentId: 2,
            icon: '../circle-h-solid.svg',
          }
        ]
      },
      {
        id: 6,
        name: "Use AI-driven analytics to identify areas for product improvement",
        title: "",
        percentage: "0%",
        parentId: 1,
        icon: '../circle-h-solid.svg',
        employees:[
          {
            id: 7,
            name: "Identify and implement 5 major product improvements based on AI analytics",
            title: "",
            percentage: "0%",
            parentId: 6,
            icon: '../circle-h-solid.svg',
          },
          {
            id: 8,
            name: "Increase product functionality satisfaction by 20% as per user surveys",
            title: "",
            percentage: "0%",
            parentId: 6,
            icon: '../circle-h-solid.svg',
          },
          {
            id: 9,
            name: "Reduce feature-related user recommendations by 30%",
            title: "",
            percentage: "0%",
            parentId: 6,
            icon: '../circle-h-solid.svg',
          }
        ]
      },
      {
        id: 10,
        name: "Train the analytics system with historical data to establish a baseline for comparison and improvement",
        title: "",
        percentage: "0%",
        parentId: 1,
        icon: '../circle-h-solid.svg',
        employees:[
          {
            id: 11,
            name: "Collect and analyze user interaction data with the product using the AI analytics system",
            title: "",
            percentage: "0%",
            parentId: 10,
            icon: '../circle-h-solid.svg',
          }
        ]
      },
    ],
  },
  {
    id: 12,
    name: "Generative AI Integration",
    title: "",
    percentage: "0%",
    parentId: null,
    expanded: true,
    icon: '../circle-h-solid.svg',
    employees: [
      {
        id: 13,
        name: "Successfully integrate Generative AI capabilities into the existing product",
        title: "",
        percentage: "0%",
        parentId: 12,
        icon: '../circle-h-solid.svg',
        employees:[
          { 
            id: 14,
            name: "Complete integration of GenAl features by Q2",
            title: "",
            percentage: "0%",
            parentId: 13,
            icon: '../circle-h-solid.svg',
          },
          { 
            id: 15,
            name: "Achieve a user adoption rate of 20% for the GenAl feature within the first three months",
            title: "",
            percentage: "0%",
            parentId: 13,
            icon: '../circle-h-solid.svg',
          },
          {
            id: 16,
            name: "Receive a user satisfaction rating of 4/5 for the new GenAl feature",
            title: "",
            percentage: "0%",
            parentId: 13,
            icon: '../circle-h-solid.svg',
          }
        ]
      },
      {
        id: 17,
        name: "Utilize GenAl to create high-quality, engaging content for the platform",
        title: "",
        percentage: "0%",
        parentId: 12,
        icon: '../circle-h-solid.svg',
        employees:[
          {
            id: 18,
            name: "Produce 15% of the content using GenAl tools",
            title: "",
            percentage: "0%",
            parentId: 17,
            icon: '../circle-h-solid.svg',
          },
          {
            id: 19,
            name: "Achieve a user engagement rate that matches or exceeds manually created content",
            title: "",
            percentage: "0%",
            parentId: 17,
            icon: '../circle-h-solid.svg',
          },
          {
            id: 20,
            name: "Receive positive user feedback (4/5 or higher) for GenAl-created content",
            title: "",
            percentage: "0%",
            parentId: 17,
            icon: '../circle-h-solid.svg',
          },
        ]
      },
    ],
  },
];
export default data;