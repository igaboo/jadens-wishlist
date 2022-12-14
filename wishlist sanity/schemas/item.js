export default {
  name: "item",
  title: "Item",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "attributes",
      title: "Attributes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "tag", type: "string", title: "Tag Name" },
            { name: "value", type: "string", title: "Tag Value" },
          ],
        },
      ],
    },
  ],
};
