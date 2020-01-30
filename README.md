# PHP UK Conference - GraphQLite workshop

This project contains the code to be downloaded by PHP UK Conference participants at the GraphQLite workshop.

## Project organization

In order to install the project, start by cloning it.

This repository contains many branches all named "stepXX-some-description".

Start with branch "step0":

```bash
$ git checkout step0
```

At any point in the workshop, you can fast forward by switching to the correct branch.


## Installing

The repository provides a `docker-compose.yml` to set up the environment quickly.

You will need Docker to start this project:

```bash
$ docker-compose up
```

The images might take some time to download, be patient.

When you start the containers, a number of commands will run automatically!

- `composer install` is executed
- Migrations are applied
- Data fixtures are loaded (so the data in database is reset)

Check the `docker-compose.yaml` file for more details.

If you are running Windows or MacOS, you will need to edit your `/etc/hosts` file (on Windows, the file is in `c:\Windows\System32\Drivers\etc\hosts` and you need to be Administrator to edit it).

Add those lines:

**/etc/hosts**
```
127.0.0.1 api.localhost
127.0.0.1 phpmyadmin.localhost
```

## The project so far

We will be playing with a "marketplace".

**Users** in our application belong to companies. A **company** is selling **products**. A product can have any number of **options** attached to it.


At the beginning of the workshop, the project contains 4 entities:

- `User`
- `Company`
- `Product`
- `Option`

There are 4 Doctrine repositories matching these entities.

The Symfony security has been set up correctly (the `User` implements Symfony's `UserInterface`, the `security.yaml` file has been configured).

## Step 1: Installing GraphQLite

The first step for us is to add GraphQLite to the project.

GraphQLite is framework agnostic but in the case of Symfony, it comes with a bundle to ease the installation:

```bash
$ composer require thecodingmachine/graphqlite-bundle
```

## Step 2: Writing your first query

Note: Set up your development environment

=> PHPStorm + PHP Annotations

Demo with CompanyController

## Step 3: Installing Porpaginas

Install Porpaginas

```bash
$ composer require beberlei/porpaginas
```

## Step 4: Enabling pagination

Porpaginas demo (automatic pagination)

Modify CompanyController to add pagination

Add UserController => with Pagination

## Step 5: Security

### The @Right annotation

Showcase the @Right annotation.

### Fine-tuned security

I want only the mails of the users that are in my company to be displayed!

- Create a Voter
- Add the Security annotation

## Step 6: autowiring

Sometimes, computed fields need to access data only available through services.

- Create VatService
- Use @Autowire annotation
- Best practices!!! Use a VatServiceInterface

## Step 7: Mutations

- create a ProductController

## Step 8: Validation


## Step 9: Performance issues

///////// Prefetching objects

Edit ProductRepository and Company.php
