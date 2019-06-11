FROM node:latest
# Copy app
COPY . /home/digithinkit/support-server
WORKDIR /home/digithinkit/
RUN cd support-server \
    && yarn \
    && yarn build \
    && rm -fr node_modules \
    && yarn --production=true

FROM node:slim
# Install mysql Dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Setup docker-entrypoint
COPY docker/docker-entrypoint.sh usr/local/bin/docker-entrypoint.sh
RUN ln -s usr/local/bin/docker-entrypoint.sh / # backwards compat

# Add non root user
RUN useradd -ms /bin/bash digithinkit
WORKDIR /home/digithinkit/support-server
COPY --from=0 /home/digithinkit/support-server .

RUN chown -R digithinkit:digithinkit /home/digithinkit

# set project directory
WORKDIR /home/digithinkit/support-server

# Expose port
EXPOSE 8000

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["start"]
