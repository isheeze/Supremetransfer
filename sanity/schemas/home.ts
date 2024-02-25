import { HomeIcon } from '@heroicons/react/24/outline'
import { defineField } from 'sanity';

const home = {
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  fields: [
    {
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "imageBanner",
      title: "Image Banner",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "CarsSection",
      title: "Cars Section",
      type: "object",
      description: "Settings for cars section",
      fields: [
        {
          name: "image1",
          title: "First Image",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "image2",
          title: "Second Image",
          type: "image",
          options: { hotspot: true },
        },
      ]
    },
    {
      name: "WelcomeSection",
      title: "Welcome Section",
      type: "object",
      description: "Settings for welcome section",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Supreme Transfer",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          initialValue: "Welcome to",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          row: 4,
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
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
                  name: "icon",
                  type: "iconPicker",
                  title: "Icon",
                  options: {
                    storeSvg: true
                  }
                },
                {
                  name: "title",
                  type: "string",
                  title: "title",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text"
                }
              ],
            },
          ],
        }),
      ],
      options: {
        collapsed: true,
        collapsible: true,
        columns: 2,
      }
    },
    {
      name: "FeaturesSection",
      title: "Features Section",
      type: "object",
      description: "Settings for features section",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Supreme Transfer",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
          initialValue: "Welcome to",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          row: 4,
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
                  name: "icon",
                  type: "iconPicker",
                  title: "Icon",
                  options: {
                    storeSvg: true
                  }
                },
                {
                  name: "title",
                  type: "string",
                  title: "title",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text"
                }
              ],
            },
          ],
        }),
      ],
      options: {
        collapsed: true,
        collapsible: true,
        columns: 2,
      }
    },
    {
      name: "Collage2Section",
      title: "Collage2 Section",
      type: "object",
      description: "Settings for Collage2 section",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          initialValue: "Supreme Transfer",
        },
        {
          name: "img1",
          title: "Image 1",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "img2",
          title: "Image 2",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "img3",
          title: "Image 3",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "img4",
          title: "Image 4",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "img5",
          title: "Image 5",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "img6",
          title: "Image 6",
          type: "image",
          options: { hotspot: true },
        },
        {
          name: "img7",
          title: "Image 7",
          type: "image",
          options: { hotspot: true },
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
                  name: "point",
                  type: "string",
                  title: "Point",
                }
              ],
            },
          ],
        }),
      ],
      options: {
        collapsed: true,
        collapsible: true,
        columns: 2,
      }
    },
    {
      name: "SliderSection",
      title: "Slider Section",
      type: "object",
      description: "Settings for Slider section",
      fields: [
        defineField({
          name: "slides",
          title: "Slides",
          type: "array",
          of: [
            {
              type: "object", // This specifies the type of values in the array
              fields: [
                {
                  name: "title",
                  type: "string",
                  title: "Title",
                },
                {
                  name: "description",
                  type: "text",
                  rows: 4,
                  title: "Description",
                },
                {
                  name: "bgColor",
                  type: "string",
                  title: "Background Color Code (i.e. #000000)",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                }
              ],
            },
          ],
        }),
      ],
      options: {
        collapsed: true,
        collapsible: true,
        columns: 1,
      }
    },
    {
      name: "ReviewsSection",
      title: "Reviews Section",
      type: "object",
      description: "Settings for Reviews section",
      fields: [
        defineField({
          name: "reviews",
          title: "Reviews",
          type: "array",
          of: [
            {
              type: "object", // This specifies the type of values in the array
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                },
                {
                  name: "name",
                  type: "string",
                  title: "Name",
                },
                {
                  name: "profession",
                  type: "string",
                  title: "Profession",
                },
                {
                  name: "review",
                  type: "text",
                  rows: 4,
                  title: "Review",
                }
              ],
            },
          ],
        }),
      ],
      options: {
        collapsed: true,
        collapsible: true,
        columns: 1,
      }
    }
  ]
};

export default home;