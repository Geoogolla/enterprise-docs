# Bold Reports Documentation

EJ Report documentation was built on [Gatsby](https://www.gatsbyjs.org/) application.

## Gatsby

We need to install `gatsby-cli` package with global access to build and serve the application.

```cmd
npm install gatsby-cli -g
```

## Document Structure

The Reports document should be placed inside the `docs` location. The documents should have written in `markdown(.md)` format.

Refer the below folder structure for further details.

    --> docs (1)
        --> angular (4)
            --> report-designer (6)
                --> overview.md
                --> how-to (6)
                    --> customization.md
            --> report-viewer (6)
                --> overview.md
                --> how-to (6)
                    --> customization.md
            --> index.md (5)
            --> summary.json (2b)
        --> javascript (4)
            --> report-designer (6)
                --> overview.md
                --> how-to (6)
                    --> customization.md
            --> report-viewer (6)
                --> overview.md
                --> how-to (6)
                    --> customization.md
            --> index.md (5)
            --> summary.json (2b)
        --> introduction.md (3)
        --> system-requirements.md (3)
        --> summary.json (2a)

(1). This is where all the `markdown files` should be placed.

(2). `summary.json` will hold the information about `titles` (key) and `path` (value) of the `md` file.

2 a - For common documentations like introduction, system requirements, we need to create `summary.json` file at root of the docs folder

```json

{
  "Introduction": "introduction.md",
  "System Requirements": "system-requirements.md"
}

```

2 b - For each platforms(Angular, React), we need to create separate `summary.json` at that root of platform folder.

```json
{
    "Angular": {
        "ReportDesigner": {
            "Overview": "angular/report-designer/overview.md",
            "How TO": {
               "customization": "angular/report-designer/how-to/customization.md"
            }
        },
        "ReportViewer": {
            "Overview": "angular/report-designer/overview.md",
            "How TO": {
               "customization": "angular/report-viewer/how-to/customization.md"
            }
        }
    }
}

```

(3). This is where common `md` files like introduction, system requirements should be placed.

(4). This is where platform specific `md` files should be placed.

(5). This (`index.md`) file will hold the overview about platform. Each platform should have separate `index.md` file.

(6). These are sub folders.

## Gulp Tasks

The below gulp tasks can be used to build and serve the documentation.

Run the below command to build the application

```cmd
    gulp build
```

Run the below command to serve the application. After running the command, Navigate to [localhost:8000](http://localhost:8000).

```cmd
    gulp serve
```

Run the below command to test markdown lint.

```cmd
    gulp md-lint
```

Run the below command to test typo error.

Note: This task will throw error on using custom words like `ej, localhost`. For that, we need to include these words (need to have valid reason for using these custom names) in .spelling file.

```cmd
    gulp typo
```

Run the below command to test file name validation.

Note: This task will throw error on using custom file names . For that, we need to include these names(need to have valid reason for using these custom names) in `customNames` array in `config.json` file.

```cmd
    gulp file-validation
```

Run the below command to test markdown lint, typo error and file name validation.

```cmd
    gulp test
```

## Common files

In some scenario, we need to `reuse` MD content of `other platform` in `our platform` instead of creating separate MD content in our platform. For an example, let say our current platform is `cloud`. We need a `Email settings` content from `enterprise` platform in our `cloud` platform.

To handle this scenario, We have provided a configuration file `common-files.json`. Here we can specify your common files like the below.

Note: Don't forget to add the entry in `summary.json` and don't commit the `.gitignore` file.

 ```json
{
    "enterprise-docs": [ //(1)
        {
            "src": "settings/email-settings.md", //(2)
            "frontmatter": { //(3)
                "title": "Your platform specific title",
                "description": "Your platform specific decription"
            }
        }
    ]
}

```

(1). Here `enterprise-docs` is the target platform from which we are going to utilize MD content. We need to specify the `package name` of the `target repository`.

(2). This is where we specify the `path of target platform MD file`. We need to provide the path of the MD file relative to `docs` folder.

The target platform will have this structure

```cmd
--> enterprise-docs
   --> docs
        --> settings
            --> email-settings.md

```

After running the common file gulp task, your current platform will have this structure

```cmd
--> cloud-docs
   --> docs
        --> settings
            --> email-settings.md
```

(3). To avoid `duplicate` title and description, We have provided `frontmatter` object. Here, we can add your front matters like `title, description, keywords..etc`.

Note: We can also specify `multiple MD contents and platforms` like the below.

```json
{
    "enterprise-docs": [
        {
            "src": "settings/email-settings.md",
            "frontmatter": {
                "title": "Your platform specific title",
                "description": "Your platform specific decription"
            }
        },
        {
            "src": "manage-content/reports/create-report.md",
            "frontmatter": {
                "title": "Your platform specific title",
                "description": "Your platform specific decription"
            }
        }
    ],
    "embedded-docs": [
        {
            "src": "javascript/report-viewer/ssrs-report.md",
            "frontmatter": {
                "title": "Your platform specific title",
                "description": "Your platform specific decription"
            }
        }
    ]
}

```

Note: You can specify the target branch using `branch` property in `config.json`.

### Gulp task

We have provided `gulp copy-common-files` task and triggered this task in NPM `postinstall` life cycle.

Note: whenever we make the changes in common files configuration, we need to manually call this task. so, the configured source files will be copied to destination.
