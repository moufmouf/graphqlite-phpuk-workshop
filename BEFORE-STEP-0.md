
### Install Symfony

Install Symfony in the `api` directory:

```bash
composer create-project symfony/website-skeleton api
cd api
composer require symfony/apache-pack
```

At this point, you have a working environment.

Start the environment with `docker-compose`:

```bash
$ docker-compose up
```

The application should be available at http://api.localhost
PHPMyAdmin should be available at http://phpmyadmin.localhost

### Setup the data model

We will set up the security with the user class following this tutorial:

https://symfony.com/doc/current/security.html

Then create fixtures:

```bash
$ composer require orm-fixtures --dev
```


```bash
$ bin/console make:entity
```
