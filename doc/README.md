README.md


npm install --save @nestjs/typeorm typeorm mysql

```sh
$ npm install --save @nestjs/typeorm typeorm mysql
+ typeorm@0.2.18
+ mysql@2.17.1
+ @nestjs/typeorm@6.1.2
added 50 packages from 346 contributors and audited 864207 packages in 33.435s
found 0 vulnerabilities
```

```
$ vi ormconfig.json
```

```
{
  "type": "mysql",
  "host": "192.168.10.10",
  "port": 3306,
  "username": "homestead",
  "password": "secret",
  "database": "testdb",
  "entities": ["src/**/*.entity{.ts,.js}"],
  "synchronize": true
}
```


$ nest generate module modules/todo 
CREATE /src/modules/todo/todo.module.ts (81 bytes)
UPDATE /src/app.module.ts (554 bytes)

$ nest generate service modules/todo
CREATE /src/modules/todo/todo.service.spec.ts (446 bytes)
CREATE /src/modules/todo/todo.service.ts (88 bytes)
UPDATE /src/modules/todo/todo.module.ts (155 bytes)

nest generate controller modules/todo      
CREATE /src/modules/todo/todo.controller.spec.ts (479 bytes)
CREATE /src/modules/todo/todo.controller.ts (97 bytes)
UPDATE /src/modules/todo/todo.module.ts (240 bytes)

