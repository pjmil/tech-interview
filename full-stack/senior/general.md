Below are *general* senior level full stack developer Q&As.

-------------------------

### 1. GraphQL vs RESTful

*List some issues within RESTful APIs that GraphQL attempts to solve.*

GraphQL reduces unnecessary requests to a server and enables the developer to be more explicit in the data that they are requesting about a particular entity.


-------------------------

### 2. Dont't Repeat Yourself. 

*Write a snippet of code violating the Don't Repeat Yourself (DRY) principle. Then, fix it. Use any language.*

```scss

/* non-DRY */
.container {
    width: 1192px;
}

.header {
    width: 1192px;
}

.footer {
    width: 1192px;
}

/* DRY */
$width: 1192px;

.container,
.header,
.footer {
    width: $width;
}

```

-------------------------

### 3. Inheritance vs Composition.

*Many state that, in Object-Oriented Programming, composition is often a better option than inheritance. What's you opinion?*

I agree. By writing a base class and then providing a set of interfaces to modify the implementation without changing the expected functionality you greatly improve flexibility/testability.

e.g.

Say you have the class Search

You can write interfaces for Algolia, ElasticSearch, etc. and swap the interface depending on the app needs.

Your app configuration can contain credentials for all of these services and you can freely switch between any of these implementations where required, whilst utilising the same test suite for shared functionality.


-------------------------

### 4. Test Driven Development

*How do tests and TDD influence code design?*

TDD ensures that your code will compute expected outputs given a set of inputs. As a developer this gives you confidence that changes you make to a codebase have not affected other areas of the codebase in ways that you did not intend.

-------------------------

### 5. Statelessness

*Why is developing a backend service (e.g. a Laravel API) as a stateless servie so important? What's the advantages of stateless code?*

It's important for services to be stateless so that requests can be made in isolation and the server does not need to store information about any particular requests. 

Stateless code can also improve performance by allowing better caching of requests