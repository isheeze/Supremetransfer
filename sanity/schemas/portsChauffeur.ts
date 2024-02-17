import { defineField } from "sanity";
import { QueueListIcon } from '@heroicons/react/24/outline'

const portsChauffeur = {
  name: "portsChauffeur",
  title: "Ports Chauffeur",
  type: "document",
  icon: QueueListIcon,
  fields: [
    {
        name: "heading",
        type: "string",
        title: "Heading",
    },
    {
        name: "subheading",
        type: "string",
        title: "Subeading",
    },
    {
      name: "images",
      title: "Images",
      type: "object",
      fields: [
        {
            name: "image1",
            title: "Image 1",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "image2",
            title: "Image 2",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "image3",
            title: "Image 3",
            type: "image",
            options: { hotspot: true },
        },
        {
            name: "image4",
            title: "Image 4",
            type: "image",
            options: { hotspot: true },
        }
      ],
      options: {
        collapsed: false,
        collapsible: true,
        columns: 2,
      },
    },
    defineField({
        name: "points",
        title: "Points",
        type: "array",
        of: [
            {
                type: "object", // This specifies the type of values in the array
                fields: [
                    {
                        name: "description",
                        type: 'text', 
                        rows: 4,
                        title: "Description",
                    }
                ],
            },
        ],
    }),
    defineField({
        name: "sections",
        title: "Sections",
        type: "array",
        of: [
            {
                type: "object", // This specifies the type of values in the array
                fields: [
                    {
                        name: "heading",
                        type: "string",
                        title: "Heading",
                    },
                    {
                        name: "subheading",
                        type: "string",
                        title: "Subeading",
                    },
                    defineField({
                        name: "descriptions",
                        title: "Descripton's paragraphs",
                        type: "array",
                        of: [
                            {
                                type: "object", // This specifies the type of values in the array
                                fields: [
                                    {
                                        name: "description",
                                        type: 'text', 
                                        rows: 4,
                                        title: "Description",
                                    }
                                ],
                            },
                        ],
                    }),
                    {
                        name: "image",
                        title: "Image",
                        type: "image",
                        options: { hotspot: true },
                    },
                    {
                        name: "leftimage",
                        type: "boolean",
                        title: "Image on left side",
                    },
                    {
                        name: "gap",
                        type: "number",
                        title: "Gap Between points",
                    },
                    defineField({
                        name: "blocks",
                        title: "Text blocks",
                        type: "array",
                        of: [
                            {
                                type: "object", // This specifies the type of values in the array
                                fields: [
                                    {
                                        name: "heading",
                                        type: "string",
                                        title: "Heading",
                                    },
                                    defineField({
                                        name: "descriptions",
                                        title: "Descripton's paragraphs",
                                        type: "array",
                                        of: [
                                            {
                                                type: "object", // This specifies the type of values in the array
                                                fields: [
                                                    {
                                                        name: "description",
                                                        type: 'text', 
                                                        rows: 4,
                                                        title: "Description",
                                                    }
                                                ],
                                            },
                                        ],
                                    }),
                                ],
                            },
                        ],
                    }),
                    defineField({
                        name: "points",
                        title: "Points",
                        type: "array",
                        of: [
                            {
                                type: "object", // This specifies the type of values in the array
                                fields: [
                                    {
                                        name: "icon",
                                        type: "iconPicker",
                                        title: "Icon",
                                        options: {
                                        storeSvg: true
                                        }
                                    },
                                    {
                                        name: "heading",
                                        type: "string",
                                        title: "Heading",
                                    },
                                    defineField({
                                        name: "descriptions",
                                        title: "Descripton's paragraphs",
                                        type: "array",
                                        of: [
                                            {
                                                type: "object", // This specifies the type of values in the array
                                                fields: [
                                                    {
                                                        name: "description",
                                                        type: 'text', 
                                                        rows: 4,
                                                        title: "Description",
                                                    }
                                                ],
                                            },
                                        ],
                                    }),
                                ],
                            },
                        ],
                    })
                ],
            },
        ],
    })
  ]
};

export default portsChauffeur;