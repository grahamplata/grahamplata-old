---
path: "/r-packages"
title: "✍🏻 Installing R Packages from GitHub"
date: "2019-08-26"
author: grahamplata
excert: "Installing R Packages from GitHub"
tags: ["git", "R"]
---

## Installing R Packages Hosted on GitHub

## Prerequisities

- R Studio
- GitHub and a Personal Access Token

## Installation

### Private Repository prerequisites

> If you wish to install from a private repo you need a token from your [GitHub Settings](https://github.com/settings/tokens/). Otherwise feel free to skip this section.

Set a `GITHUB_PAT` environement variable

> Don't commit your tokens!

```R
Sys.setenv(GITHUB_PAT="PUT_YOUR_TOKEN_HERE")
```

or in your `.Renviron`

```R
GITHUB_PAT=PUT_YOUR_TOKEN_HERE
```

> You will need to sign-in and start a new R session for the environment variable (accessed by Sys.getenv) to be visible.

---

### Required libraries

Baked into the R devtools package there lives a function to install R packages hosted on GitHub.

```R
install.packages("devtools") # Install latest devtools from CRAN
library(devtools)            # Load/Import devtools into working session
```

### Install a package

This exposes the `install_github()` function for use. Listed below are the arguments we are interested in populating.

```R
repo        # Repository address format username/package
ref         # Commit, tag, or branch name. Default value is Master
auth_token  # User personal access token
```

Our Final Command should look like this

```R
install_github(repo="username/package", auth_token=Sys.getenv("GITHUB_PAT"))
```

> Note: There are handlers for all flavors of version control.

```R
install_github() from GitHub
install_gitlab() from GitLab
install_bitbucket() from Bitbucket
install_url() from an arbitrary url
install_git() and install_svn() from an arbitrary git or SVN repository
install_local() from a local file on disk
install_version() from a specific version on CRAN
```

### Update a package

`update_packages()` updates a package to the latest version.
This works both on packages installed from CRAN as well as those installed from any of the functions listed above.

---

## Development

Add `ref` parameter to the function with the specific branch name in which you want to develop.
This can be a branch, tag, or commit.

```R
install_github(repo="username/package", ref="develop", auth_token=Sys.getenv("GITHUB_PAT"))
```

---

## Distributing a package build privately

- RStudio Shared Directory: Save the R package source code in a `/shared-folder/`.
- Users can install these packages by navigation to the toolbar menu and executing.

  - Option 1: `Tools > Install Packages > Select Build from picklist`
  - Option 2: `use the install.packages('<path>') function from the command line.`

---

### Resources

- [devtools](https://github.com/r-lib/devtools/) - Tools to make an R developer's life easier
- [github docs](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) - Creating a personal access token for the command line
