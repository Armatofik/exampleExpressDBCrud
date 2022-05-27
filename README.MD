# Express database crud app example
### Before build or start:
- Configure config-files in ./config
- Run `npm i`
- Run command `sequelize-auto -h <host> -d <database> -u <user> -x <password> -p <port>  --dialect postgres -o "./models"`
- Run app with `npm run production/develop` or with docker (below)

##Docker run example:
- Build:`docker build . -t <username>/<name>`
- Run: `docker run -p 5000:5000 -d <username>/<name>:latest`
