---
path: "/terraform"
title: "Terraform and Terraform accessories"
date: "2018-11-21"
featuredImage: "./terraform.png"
---

In this post, I am exploring Terraform. It is a way to define infrastructure with code and will enable you to build and track changes to hardware. Below I document my process of getting started with the tool.

## Getting started with Terraform

Download [Terraform](https://www.terraform.io/downloads.html) You can download a version of Terraform from the releases service.

### Installing terraform on Windows

1. Copy files from the terraform zip to `c:\terraform`
2. Make sure that the terraform binary is available on the PATH so it is accessible within the commandline.
3. Navigate to the Advanced system settings link.
4. In System Variables, find the PATH environment variable and select it. Click Edit.
5. In the Edit System Variable (or New System Variable) window, append at the end of the PATH environment variable the value of terraform path `c:\terraform;`

### Installing terraform on macOS

```bash
brew install terraform
```

Verify the install with

```bash
terraform
```

```bash
Usage: terraform [--version] [--help] <command> [args]

The available commands for execution are listed below.
The most common, useful commands are shown first, followed by
less common or more advanced commands. If you're just getting
started with Terraform, stick with the common commands. For the
other commands, please read the help and docs before usage.

Common commands:
    apply              Builds or changes infrastructure
    console            Interactive console for Terraform interpolations
    destroy            Destroy Terraform-managed infrastructure
    env                Workspace management
    fmt                Rewrites config files to canonical format
    get                Download and install modules for the configuration
    graph              Create a visual graph of Terraform resources
    import             Import existing infrastructure into Terraform
    init               Initialize a Terraform working directory
    output             Read an output from a state file
    plan               Generate and show an execution plan
    providers          Prints a tree of the providers used in the configuration
    push               Upload this Terraform module to Atlas to run
    refresh            Update local state file against real resources
    show               Inspect Terraform state or plan
    taint              Manually mark a resource for recreation
    untaint            Manually unmark a resource as tainted
    validate           Validates the Terraform files
    version            Prints the Terraform version
    workspace          Workspace management

All other commands:
    debug              Debug output management (experimental)
    force-unlock       Manually unlock the terraform state
    state              Advanced state management
```

## Setting up the main.tf

Integer placerat congue metus in semper. Mauris ipsum eros, dapibus sit amet consectetur quis, pulvinar ac ipsum. Morbi nec erat lacinia, volutpat mi mollis, tincidunt nulla. Vivamus in varius augue. Vestibulum pharetra eros quis justo ultricies facilisis. Curabitur bibendum, sapien sit amet gravida sodales, risus nunc porttitor purus, id vestibulum ex risus ut ante. Praesent eleifend eget massa quis scelerisque.
