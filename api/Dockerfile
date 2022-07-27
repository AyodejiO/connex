# FROM node:12.22.1

# LABEL version="1.0"
# LABEL description="This is the base docker image for the Connex API."
# LABEL maintainer = ["sam93.od@gmail.com"]

# WORKDIR /app

# COPY ["package.json", "yarn.lock", "./"]
# # COPY . .

# RUN yarn

# COPY . .

# EXPOSE 3000

# CMD ["yarn", "start"]

# FROM node:14.19.1

# WORKDIR /usr/srcapp

# COPY . .

# RUN yarn

# EXPOSE 8000

# CMD ["yarn", "start"]

FROM node:14.19.1
WORKDIR /app
COPY . .
RUN yarn
EXPOSE 3000
ENTRYPOINT ["node", "bin/www"]