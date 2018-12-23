---
path: "/terraform"
title: "Terraform and Terraform accessories"
date: "2018-11-21"
featuredImage: "./terraform.png"
---

In this post, I am exploring Terraform. It is a way to define infrastructure with code and will enable you to build and track changes to hardware. Below I document my process of getting started with the tool by setting up a Nanode.

- A [Github](https://github.com/grahamplata/terraform) repo of my exercises with terraform
- Terraform Documentation [Linode Module](https://www.terraform.io/docs/providers/linode/)

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

## Building a Configuration

The current configuration stands up a Linode Nanode on us-east and adds local keys for access.

### Setting up main.tf

Below we are de

```JSON
provider "linode" {
  token = "${var.linode_token}"
}

provider "external" {
  version = "1.0.0"
}
```

### Setting up variables.tf

```JSON
variable "linode_token" {
  type        = "string"
  description = "Linode API Personal Access Token"
}

variable "region" {
  default     = "us-east"
  description = "Values: us-east"
}

variable "server_type_node" {
  default = "g6-nanode-1"
}

resource "random_string" "password" {
  length           = 16
  special          = true
  override_special = "/@\" "
}
```

### Setting up web.tf

```JSON
resource "linode_sshkey" "web" {
  label   = "key"
  ssh_key = "${chomp(file("~/.ssh/id_rsa.pub"))}"
}

resource "linode_instance" "terraform-web" {
  label           = "Terraform-Web"
  group           = "Terraform"
  tags            = ["Terraform"]
  image           = "linode/ubuntu18.04"
  region          = "${var.region}"
  type            = "${var.server_type_node}"
  authorized_keys = ["${linode_sshkey.web.ssh_key}"]
  root_pass       = "${random_string.password.result}"
  private_ip      = true
}
```

### Check your new deployment configuration for errors

> The command below will begin by prompting you for the necessary variables we defined prior. If you have any errors in your configuration they will be called out here.

```bash
terraform plan
```

### Apply the configuration:

```bash
terraform apply
```
