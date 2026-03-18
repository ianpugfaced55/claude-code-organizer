FROM node:20-slim
WORKDIR /app
COPY package.json ./
COPY bin/ ./bin/
COPY src/ ./src/
EXPOSE 3847
CMD ["node", "bin/cli.mjs"]
