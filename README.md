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

If you are running Windows or MacOS, you may need to edit your `/etc/hosts` file (on Windows, the file is in `c:\Windows\System32\Drivers\etc\hosts` and you need to be Administrator to edit it).

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

GraphQLite has already been installed with a single command:

```bash
$ composer require thecodingmachine/graphqlite-bundle
```

## Step 1: Writing your first query

Let's write our first query: the list of companies.

In the `src/GraphqlController/CompanyController.php` file, add a `getCompanies` method:

```php
use TheCodingMachine\GraphQLite\Annotations\Query;
```

```php
    /**
     * @Query()
     */
    public function getCompanies(?string $search)
    {
        return $this->companyRepository->search($search);
    }
```

Pay attention to the `@Query` annotation and to the `use` statement.

### Annotation support in your IDE 

When working with GraphQLite, you will deal with a lot of annotations. It is therefore very important to have an IDE
that can autocomplete these annotations for you.

- PHPStorm users need to install the *PHP Annotations* extension to benefit from auto-completion
- Avoid VS Code as it does not appear to have annotations support for PHP so far
- Netbeans IDE has native support for annotations
- Eclipse PDT need the "Doctrine plugin" to get support for annotations

## Testing our query

The Symfony GraphQLite bundle comes with GraphiQL, a GraphQL web-ide.

Browse to `http://api.localhost/graphiql` 

... and you should see an error!

// TODO: screenshot

GraphQL is a strictly typed protocol.

PHP is optionally typed only. Since GraphQLite job is to map PHP types to GraphQL types, we will need to be explicit
and provide types in all annotated methods.

```php
    /**
     * @Query()
+    * @return Company[] 
     */
    public function getCompanies(?string $search)
    {
        return $this->companyRepository->search($search);
    }
```

Note: since PHP does not have "generics" support, we need to add a docblock with the `@return` annotation to specify
the type of the array. GraphQLite will read the docblocks.

So... browse again to `http://api.localhost/graphiql` 

... and you should see another error!
 
// TODO: screenshot

We told GraphQLite to expose the `Company` class, but we did not allow the `Company` class to be exposed as a GraphQL
type. We need to explicitly allow the class to be exposed, and every field in the class.

Go to `src/Entity/Company.php`. Add a `@Type` annotation in the class docblock and a `@Field` annotation
in `getId()`, `getName()` and `getWebsite()` docblock:

```php
use TheCodingMachine\GraphQLite\Annotations\Field;
use TheCodingMachine\GraphQLite\Annotations\Type;

/**
 * @Type()
 * @ORM\Entity(repositoryClass="App\Repository\CompanyRepository")
 */
class Company
{
    // ...

    /**
     * @Field()
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @Field()
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @Field()
     */
    public function getWebsite(): ?string
    {
        return $this->website;
    }

    // ...
}
```

A few things to notice:

- once more, do not forget the `use` statement for the annotation
- the `@Field` annotation is meant to be applied on **a getter** (or any method), but cannot be applied on a property.
  Unlike Doctrine (that does some black magic to access private properties of classes), GraphQLite is going through
  proper methods to access the object state.
  
Browse again to `http://api.localhost/graphiql` 

... success!

You can now type your first GraphQL query!

```graphql
{
    companies(search: "a") {
        id
        name
    }
}
```

Try to add another field and see if this works:

```graphql
{
    companies(search: "a") {
        id
        name
        website
    }
}
```

This example is a bit basic. It does not unleash the full potential of GraphQL.

Let's add a new field "products" to query the products linked to a company:

```php
    /**
     * @Field()
     * @return Product[]
     */
    public function getProducts()
    {
        return $this->products;
    }
```

Browse again to `http://api.localhost/graphiql` 

... another error!

Of course, GraphQLite does not know how to map the `Product` class.

**Exercise**:

Add `@Type` annotations on every entity and `@Field` annotations on every getters.

Play with the GraphQL queries, try to build a complex query like this:

```graphql
query companiesContainingA {
  companies(search: "a") {
    id
    name
    products {
      name
      price
      vat
      options {
        name
      }
    }
    users {
      username
    }
  }
}
```

*Note:* the example above declares an "operation name" for the query (`companiesContainingA`)

In GraphiQL IDE, you can have many operations in the same page. When you press the play button, you can select the
operation that will be executed.



TODO: continue here!!!!
TODO: give the branch to switch to.


## Step 2: Installing Porpaginas

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
