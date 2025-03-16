/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {type: 'autogenerated', dirName: '.'},
  // ],

  // But you can create a sidebar manually
  tutorialSidebar: [
    {
      type: "category",
      label: "About",
      items: [
        "about/about",
        // 'about/comparison',
        // 'about/implementation'
      ],
    },
    {
      label: "Concepts",
      id: "concepts/concepts",
      type: "doc",
    },
    {
      type: "category",
      label: "Installation",
      items: [
        "installation/prerequisites",
        {
          type: "category",
          label: "Install",
          link: {
            type: "generated-index",
            title: "Installation methods",
            description:
              "⚠️ Before installing Cyclops, make sure you have all the Prerequisites ⚠️",
            slug: "/installation/install",
          },
          items: [
            "installation/install/manifest",
            "installation/install/glasskube",
            "installation/install/cyctl",
          ],
        },
        "installation/configuration",
        {
          type: "category",
          label: "Demo",
          items: [
            "installation/demo/new_module",
            "installation/demo/module",
            "installation/demo/edit_module",
            "installation/demo/feedback",
          ],
        },
        "installation/git-write",
        "installation/namespace-scope",
      ],
    },
    {
      type: "category",
      label: "Templates",
      items: [
        "templates/templates",
        "templates/template_storage",
        "templates/validations",
        "templates/dependencies",
        "templates/private_templates",
      ],
    },
    {
      type: "category",
      label: "Backstage plugins",
      items: [
        "backstage/plugins",
        "backstage/modules-plugin",
        "backstage/catalog-plugin",
      ],
    },
    {
      label: "Cyclops CLI (cyctl)",
      type: "category",
      items: [
        "cyctl/cyctl",
        "cyctl/cyctl_create",
        "cyctl/cyctl_create_module",
        "cyctl/cyctl_create_templateauthrules",
        "cyctl/cyctl_create_templates",
        "cyctl/cyctl_delete",
        "cyctl/cyctl_delete_modules",
        "cyctl/cyctl_delete_templateauthrules",
        "cyctl/cyctl_delete_templates",
        "cyctl/cyctl_describe",
        "cyctl/cyctl_describe_modules",
        "cyctl/cyctl_describe_template",
        "cyctl/cyctl_describe_templateauthrules",
        "cyctl/cyctl_get",
        "cyctl/cyctl_get_modules",
        "cyctl/cyctl_get_templateauthrules",
        "cyctl/cyctl_get_templates",
        "cyctl/cyctl_init",
        "cyctl/cyctl_serve",
        "cyctl/cyctl_update",
        "cyctl/cyctl_update_module",
        "cyctl/cyctl_version",
      ],
    },
    {
      label: "Usage metrics",
      id: "usage_metrics/usage_metrics",
      type: "doc",
    },
  ],
};

module.exports = sidebars;
