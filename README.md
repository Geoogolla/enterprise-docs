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
