---
path: "/prometheus-and-bob"
title: "📈 Monitoring with Prometheus and Bob"
date: "2019-05-07"
author: grahamplata
excert: "Monitoring system & time series database a brief exploration"
tags: ["post", "prometheus", "monitoring"]
---

**_...for some context_**

> **_[Prometheus](https://prometheus.io/docs/introduction/overview/)_** is an open-source systems monitoring and alerting toolkit originally built at SoundCloud. Since its inception in 2012, many companies and organizations have adopted Prometheus, and the project has a very active developer and user community. It is now a standalone open source project and maintained independently of any company. To emphasize this, and to clarify the project's governance structure, Prometheus joined the Cloud Native Computing Foundation in 2016 as the second hosted project, after Kubernetes.

In the subsequent post I detail my thoughts and findings while exploring [Prometheus](https://prometheus.io/docs/introduction/overview/) and [Grafana](https://grafana.com/) as an effort to better understand monitoring in a container based world.

## My Objectives

- Learn something! ~ Exercising my brain on something new!
- Get a better grasp of monitoring in a containerized world.
- Create an extendable playground to practice on.

**_Note:_** you can find the codebase for this blog post in this [Github repo](https://github.com/grahamplata/PrometheusSandbox).

## The Sandbox

A docker Environment to experiment with Prometheus and Grafana

### Get the project

```bash
#Clone the Repo
git clone https://github.com/grahamplata/PrometheusSandbox.git
cd PrometheusSandbox
#Start the demo cluster:
./bin/start
#Stop the demo cluster
./bin/stop
```

### Project Structure

```bash
.
├── README.md
├── bin
│   ├── start
│   └── stop
├── containers
│   ├── app_one
│   ├── app_two
│   ├── grafana
│   └── prometheus
└── docker-compose.yml
```

## Accessing Exposed Services

- Grafana http://localhost:3000
- Prometheus http://localhost:9090
- Node Exporter http://localhost:9100
- Dummy Application Metrics http://localhost:8000

## Defaults

- Grafana credentials: admin:admin
