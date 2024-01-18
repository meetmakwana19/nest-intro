# NestJS for RESTFULL API :

- Each feature in the app will have one module. 
- `@Module` is a decorator provided by nestJS

## Controllers : 

- Controllers are important for handling incoming requests and sending back responses.
- Usually the controllers HTTP methods dont need to have req, res objects. Nest handles it for us. 
  - So we can directly return any type of response by the API.


## Services :

- This should have heavy lifting business logic stuff so that controllers can stay lean.