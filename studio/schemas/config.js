export default {
    "type": "document",
    "name": "config",
    "title": "Global Site Config",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseurl",
            "title": "Base URL",
            "description": "Serve the website from the given base URL",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "permalink",
            "title": "Permalink",
            "description": "The output path for your pages, posts, or collections.",
            "hidden": false,
            "initialValue": "/posts/:slug:output_ext",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "/posts/:slug:output_ext"
                ]
            }
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Color Palette",
            "description": "The color palette of the theme.",
            "initialValue": "blue",
            "validation": null,
            "options": {
                "list": [
                    "blue",
                    "purple",
                    "green",
                    "orange"
                ]
            }
        },
        {
            "type": "object",
            "name": "header",
            "title": "Header Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "string",
                    "name": "title",
                    "title": "Header Title",
                    "description": "The title displayed in the header if no logo image added.",
                    "validation": null
                },
                {
                    "type": "image",
                    "name": "logo_img",
                    "title": "Logo",
                    "description": "The logo image displayed in the header.",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "has_nav",
                    "title": "Enable Navigation Menu",
                    "description": "Display the navigation menu bar in the header.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "object",
                    "name": "menu",
                    "title": "Menu Action Buttons",
                    "validation": null,
                    "fields": [
                        {
                            "type": "array",
                            "name": "actions",
                            "title": "Action Buttons",
                            "description": "The action buttons displayed in the menu.",
                            "validation": null,
                            "of": [
                                {
                                    "type": "action"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "object",
            "name": "footer",
            "title": "Footer Configuration",
            "validation": null,
            "fields": [
                {
                    "type": "image",
                    "name": "logo_img",
                    "title": "Logo",
                    "description": "The logo image displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "tagline",
                    "title": "Footer Tagline",
                    "description": "The tagline displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "has_nav",
                    "title": "Enable Navigation Menu",
                    "description": "Display the secondary navigation menu in the footer.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "nav_title",
                    "title": "Menu Title",
                    "description": "The title of the secondary menu displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "has_social",
                    "title": "Enable Social Links",
                    "description": "Display social links in the footer.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "social_title",
                    "title": "Social Links Title",
                    "description": "The title of the social links list displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "boolean",
                    "name": "has_subscribe",
                    "title": "Enable Subscribe",
                    "description": "Display the newsletter subscription form in the footer.",
                    "initialValue": true,
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "subscribe_title",
                    "title": "Subscribe Title",
                    "description": "The title of the subscribe block displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "subscribe_content",
                    "title": "Subscribe Content",
                    "description": "The text content in the subscribe block displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "string",
                    "name": "content",
                    "title": "Footer Content",
                    "description": "The copyright text displayed in the footer.",
                    "validation": null
                },
                {
                    "type": "array",
                    "name": "links",
                    "title": "Links",
                    "description": "A list of links displayed in the footer.",
                    "validation": null,
                    "of": [
                        {
                            "type": "object",
                            "fields": [
                                {
                                    "type": "string",
                                    "name": "text",
                                    "title": "Link text",
                                    "validation": null
                                },
                                {
                                    "type": "string",
                                    "name": "url",
                                    "title": "URL",
                                    "validation": null
                                },
                                {
                                    "type": "boolean",
                                    "name": "new_window",
                                    "title": "Open in new window",
                                    "initialValue": true,
                                    "validation": null
                                }
                            ],
                            "preview": {
                                "select": {
                                    "title": "text"
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            "type": "object",
            "name": "sass",
            "title": "Sass",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "number",
                    "name": "indentWidth",
                    "title": "Indent Width",
                    "description": "Used to determine the number of spaces or tabs to be used for indentation.",
                    "initialValue": 4,
                    "validation": Rule => Rule.integer()
                },
                {
                    "type": "string",
                    "name": "style",
                    "title": "Output Style",
                    "description": "Determines the output format of the final CSS style.",
                    "initialValue": "nested",
                    "validation": null,
                    "options": {
                        "list": [
                            "nested",
                            "expanded",
                            "compact",
                            "compressed"
                        ]
                    }
                },
                {
                    "type": "number",
                    "name": "precision",
                    "title": "Precision",
                    "description": "Used to determine how many digits after the decimal will be allowed.",
                    "initialValue": 10,
                    "validation": Rule => Rule.integer()
                }
            ]
        },
        {
            "type": "array",
            "name": "plugins",
            "title": "Plugins",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "array",
            "name": "exclude",
            "title": "Exclude",
            "description": "Exclude directories and/or files from the conversion.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "_config.yml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true
}