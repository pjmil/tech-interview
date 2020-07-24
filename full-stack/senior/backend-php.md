Below are PHP / Laravel senior level full stack developer Q&As.

-------------------------

### 1. Writing clean and testable code

*Rewrite the class below to be more testable and clean*

```php
class User
{
    public static function getUsersByAge(int $age): ?Collection
    {
        $users = DB::table('users')
            ->where('age', $age)
            ->get();

        if ($users->count() > 0) {
            return $users;
        }

        return null;
    }
}
```

```php
class User
{
    public static function getUsersByAge(int $age): ?Collection
    {
        return User::where('age', $age)->get() ?? null;
    }
}
```

-------------------------

### 2. Redis

*What are the advantages of using Redis as the cache and queue drivers over the php array driver?*

Speed and decoupling your cache/queue from the relational database. In my experience using redis vs database driver for chatbots, redis is much faster for processing concurrent queues.

-------------------------


### 3. Eloquent and the database

*Explain the differences between eager loading and lazy loading in eloquent models.*

Eager loading queries a relationship that you know you will access up front and reduces it to two queries.

e.g. 

```
$users = User::with('posts')->all();

foreach ($users as $user) {
    dump($user->posts);
}
```

The DB queries executed here would be:

```
SELECT * FROM users;
SELECT * FROM posts WHERE `posts.user_id` IN (1,2,3,4,5)
```

Lazy loading queries a relationship when it is accessed through a property and causes N+1 additional queries to the database.

e.g.

```
$users = User::all();

foreach ($users as $user) {
    dump($user->posts);
}
```

The DB queries executed here would be:

```
SELECT * FROM users;
SELECT * FROM posts WHERE `posts.user_id` = 1;
SELECT * FROM posts WHERE `posts.user_id` = 2;
SELECT * FROM posts WHERE `posts.user_id` = 3;
SELECT * FROM posts WHERE `posts.user_id` = 4;
SELECT * FROM posts WHERE `posts.user_id` = 5;
```

-------------------------

### 4. Modern PHP

*What is your favourite language feature introduced in PHP 7.4? Why do you like it? What advantages does it offer?*

NULL-coalescing operator as its probably my most frequently used addition to the language and greatly reduces code length / improves code readability / Keeps code DRY

